import React, { Component } from 'react';
import PlayerSearch from '../components/home/player_search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Home extends Component {
  
  
  onTitleClick() {
    console.log('AppBar Title Clicked');
  }

  render() {
    const styles = {
      title: { cursor: 'pointer' }
    };

    return (
      <MuiThemeProvider>
        <AppBar
          title={<span style={styles.title}>Title</span>}
          onTitleClick={this.onTitleClick}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
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