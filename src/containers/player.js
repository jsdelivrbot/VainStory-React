import React, { Component } from 'react';
import Header from '../components/common/header';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions';

class Player extends Component {
  componentDidMount() {
    //const { region, userName } = this.props.match.params;
    const { fetchPlayer, match: { params } } = this.props;
    fetchPlayer(params, () => {
      
    });
  }

  render() {
    return (
      <div>
        <Header />
        베인글로리
      </div>
    );
  }
}

// export default Player;
export default connect(null, { fetchPlayer })(Player);