import React, { Component } from 'react';
import Header from '../components/common/header';

class Player extends Component {
  componentDidMount() {
    const { region, userName } = this.props.match.params;
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

export default Player;