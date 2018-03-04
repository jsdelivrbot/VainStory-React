import React, { Component } from 'react';
import PlayerSearch from '../components/home/player_search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container text-xs-center">
          <h1 className="jumbotron-heading">Vain Story</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <PlayerSearch />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;