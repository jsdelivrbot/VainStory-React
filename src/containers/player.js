import React, { Component } from 'react';

import Header from '../components/common/header';
import BasicInfo from '../components/player/basic_info';
import MatchesInfo from '../components/player/matches_info';

class Player extends Component {
  render() {
    const style = {
      margin: 'auto',
      marginTop: '12px',
      width: '1120px'
    }

    const tabStyle = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };
   
    return (
      <div>
        <Header />
        <div className="container-fluid" style={style}>
          <div className="row">
            <div className="col-xs-3">
              <BasicInfo params={this.props.match.params}/>
            </div>
            <div className="col-xs-9">
              <MatchesInfo params={this.props.match.params}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;