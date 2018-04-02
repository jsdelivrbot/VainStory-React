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

const unitOffset = 0;

class MatchesOverall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      offset: 0
    };
  }

  componentDidMount() {
    const { fetchMatches, params } = this.props;
    fetchMatches({ ...params, mode: '', offset: this.state.offset });
    this.setState({ ...this.state, offset: this.state.offset + unitOffset});
  }

  handleTabChange(mode) {
    const { fetchMatches, params } = this.props;
    fetchMatches({ ...params, mode: mode, offset: this.state.offset });
    this.setState({ ...this.state, mode: mode });
  }

  onMoreButtonClicked() {
    const { fetchMatches, params } = this.props;
  }

  render() {
    const gameModes = [
      { value: '', title: '전체' },
      { value: 'ranked', title: '3 v 3 랭크' },
      { value: '5v5_pvp_ranked', title: '5 v 5 랭크' },
      { value: 'casual', title: '3 v 3 일반전' },
      { value: '5v5_pvp_casual', title: '5 v 5 일반전' },
      { value: 'blitz_pvp_ranked', title: '총력전' },
      { value: 'casual_aral', title: '배틀로얄' }
    ];

    const { matches, details, id } = this.props;

    if (matches && details && id) {
      console.log(id);

      const assets = _.mapKeys(details.filter((value, index) => {
        return value.type === 'asset';
      }), (value, key) => {
        return value.id;
      });

      const participants = _.mapKeys(details.filter((value, index) => {
        return value.type === 'participant';
      }), (value, key) => {
        return value.id;
      });

      const players = _.mapKeys(details.filter((value, index) => {
        return value.type === 'player';
      }), (value, key) => {
        return value.id;
      });

      const rosters = _.mapKeys(details.filter((value, index) => {
        return value.type === 'roster';
      }), (value, key) => {
        return value.id;
      });

      // const test = matches.map((value, index) => {
      //   const matchRosters = {
      //     red: {},
      //     blue: {}
      //   };

      //   value.relationships.rosters.forEach((element) => {
      //     if (element.attributes.stats.side === 'right/red') {
      //       matchRosters.red = rosters[element.data.id].attributes.stats;
      //     } else {
      //       matchRosters.blue = rosters[element.data.id].attributes.stats;
      //     }
      //   });

      //   return {
      //     asset: assets[value.relationships.assets.data[0].id].attributes,
      //     roster: value.relationships.rosters.data.map((element) => {
      //       return rosters[element.id];
      //     }),
        
      //   }
      // });
      
      const mark = matches.map((value, index) => {
        return value.relationships.rosters.data.map((data) => {
          return rosters[data.id];
        });
      });
      console.log(rosters);
      console.log(matches);
      console.log(details);

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
              onChange={this.handleTabChange.bind(this)}> 
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
