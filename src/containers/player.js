import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions';

import Header from '../components/common/header';
import BasicInfo from '../components/player/basic_info';
import MatchesInfo from '../components/player/matches_info';

class Player extends Component {
  componentDidMount() {
    //const { region, userName } = this.props.match.params;
    const { fetchPlayer, match: { params } } = this.props;
    fetchPlayer(params, () => {
      
    });
  }

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
   
    const { region, userName } = this.props.match.params;

    return (
      <div>
        <Header />
        <div className="container-fluid" style={style}>
          <div className="row">
            <div className="col-xs-3">
              <BasicInfo />
            </div>
            <div className="col-xs-9">
              <MatchesInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Player;
export default connect(null, { fetchPlayer })(Player);