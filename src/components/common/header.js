import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {
  render() {
    const barStyle = {
      background: '#434345'
    };

    const styles = {
      title: { cursor: 'pointer' }
    };

    const buttonStyle = {
      color: '#EEEEEE'
    };

    return (
      <div>
        <AppBar
          style={barStyle}
          title={<span style={styles.title}>VainStory</span>}
          onTitleClick={this.onTitleClick}
          iconElementLeft={<IconButton></IconButton>}
          iconElementRight={
            <div>
              <FlatButton style={buttonStyle} label="챔피언 분석" />
              <FlatButton style={buttonStyle} label="통계" />
              <FlatButton style={buttonStyle} label="랭킹" />
              <FlatButton style={buttonStyle} label="기타" />
            </div> 
          }
        />
      </div>
    );
  }
}

export default Header;