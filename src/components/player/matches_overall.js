import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../../actions';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

import MatchSummary from './match_summary';

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
      { value: 'ranked', title: '랭크' },
      { value: 'casual', title: '일반전' },
      { value: 'blitz_pvp_ranked', title: '총력전' },
      { value: 'casual_aral', title: '배틀로얄' }
    ];

    const { matches, details, id } = this.props;

    if (matches && details && id) {
      const playedData = details.filter((value, index) => {
        if (value.type !== 'participant') return false;
        return value.relationships.player.data.id === id;
      });

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
          <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <br />
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
