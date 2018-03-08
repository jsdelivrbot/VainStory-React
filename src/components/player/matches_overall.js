import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../../actions';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

import MatchSummary from './match_summary';

class MatchesOverall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    const { fetchMatches, params } = this.props;
    fetchMatches(params);
  }

  handleTapChange(value) {
    this.setState({
      value: value,
    });

    
  }

  render() {
    const gameModes = [
      { value: '', title: '전체' },
      { value: 'ranked', title: '랭크' },
      { value: 'casual', title: '일반전' },
      { value: 'blitz_pvp_ranked', title: '총력전' },
      { value: 'casual_aral', title: '배틀로얄' }
    ];

    const tabs = _.map(gameModes, mode => {
      return (
        <Tab label={mode.title} key={mode.value} value={mode.value} >
          <div>
            <MatchSummary />
          </div>
        </Tab>
      );
    });

    return (
      <div>
        <Card>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            > 
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
      </div>
    );
  }
}

function mapStateToProps() {
  //return 
}

export default connect(null, {fetchMatches})(MatchesOverall);
