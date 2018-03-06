import React, { Component } from 'react';
import PlayerSearch from '../components/home/player_search';
import Header from '../components/common/header';

import FlatButton from 'material-ui/FlatButton';

class Home extends Component {
  onTitleClick() {
    console.log('AppBar Title Clicked');
  }

  render() {
    const styles = {
      margin: 'auto',
    };

    return (
      <div>
        <Header />
        <div className="jumbotron jumbotron-fluid" id="home">
          <h1 className="jumbotron-heading" id="title-white">플레이어 전적을 찾아보세요</h1>
          <p className="lead text-muted" id="title-gray">적어도 2018년 2월 20일 이후로 한 게임 이상 진행하여야 합니다.</p>
          <br />
          <PlayerSearch />
        </div>
      </div>
    );
  }
}

export default Home;