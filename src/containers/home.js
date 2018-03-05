import React, { Component } from 'react';
import PlayerSearch from '../components/home/player_search';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import Header from '../components/common/header';

class Home extends Component {
  onTitleClick() {
    console.log('AppBar Title Clicked');
  }

  render() {
    

    return (
        <div>
          <Header />
          <div className="jumbotron jumbotron-fluid text-xs-center">
            <h1 className="jumbotron-heading">Vain Story</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <PlayerSearch />
          </div>
        </div>
    );
  }
}

export default Home;