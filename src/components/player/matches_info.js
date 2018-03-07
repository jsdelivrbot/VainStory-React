import _ from 'lodash';
import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

import MatchSummary from './match_summary';

class MatchesInfo extends Component {
  render() {    
    const gameModes = _.map(['전체', '랭크', '일반(5 vs 5)', '일반(3 vs 3)', '총력전', '배틀로얄'], mode => {
      return (
        <Tab label={mode}  key={mode} >
          <div>
            <MatchSummary />
          </div>
        </Tab>
      );
    });

    return (
      <div>
        <Card>
          <Tabs> 
            {gameModes}
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

export default MatchesInfo;
