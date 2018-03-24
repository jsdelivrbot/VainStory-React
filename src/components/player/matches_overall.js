import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../../actions';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';

import MatchSummary from './match_summary';
import MatchInfo from './match_info';

const unitOffset = 20;

class MatchesOverall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      offset: 0
    };
  }

  componentDidMount() {
    const { fetchMatches, params } = this.props;
    fetchMatches({ ...params, offset: this.state.offset });
    this.setState({ ...this.state, offset: this.state.offset + unitOffset});
  }

  handleTapChange(value) {
    this.setState({ ...this.state, value: value });
  }

  onMoreButtonClicked() {
    const { fetchMatches, params } = this.props;
  }

  render() {
    const gameModes = [
      { value: '', title: '전체' },
      { value: 'ranked', title: '3vs3 랭크' },
      { value: '5v5_pvp_ranked', title: '5vs5 랭크' },
      { value: 'casual', title: '일반전' },
      { value: 'blitz_pvp_ranked', title: '총력전' },
      { value: 'casual_aral', title: '배틀로얄' }
    ];

    const { matches, details, id } = this.props;

    if (matches && details && id) {
      const playedData = details.reduce((prev, cur, index) => {
        if (cur.type === 'participant') {
          if (cur.relationships.player.data.id === id) {
            const { attributes: { createdAt, duration, gameMode } } = matches[prev.length];
            prev.push({
              ...cur,
              createdAt: createdAt,
              duration: duration,
              gameMode: gameMode
            });
          }
        }
        return prev;
      }, new Array());

      console.log(details);
      
      const playedTime = matches.reduce((prev, cur) => {
        return prev + cur.attributes.duration;
      }, 0);

      const tabs = _.map(gameModes, mode => {
        return (
          <Tab label={mode.title} key={mode.value} value={mode.value}>
            <div>
              <MatchSummary playedData={playedData} playedTime={playedTime} />
            </div>
          </Tab>
        );
      });

      const matchInfoList = playedData.map((data) => {
        return (
          <div key={data.createdAt}>
            <MatchInfo playerData={data}/>
            <br />
          </div>
        )
      });

      return (
        <div>
          <Card>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}> 
              {tabs}
            </Tabs>
          </Card>
          <br />
          {matchInfoList}
        
          <Card>
            <CardActions>
              <FlatButton label="더 보기" fullWidth={true} onClick={this.onMoreButtonClicked.bind(this)} />
            </CardActions>
          </Card>
        </div>
      );
    } else {
      return (
        <Card>
          <CircularProgress size={60} thickness={7} />
        </Card>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { data, [ownProps.params.userName]: player } = state.player;
  
  if (data && player) {
    return { matches: data.data, details: data.included, id: player.id };
  }
  return state;
}

export default connect(mapStateToProps, { fetchMatches })(MatchesOverall);
