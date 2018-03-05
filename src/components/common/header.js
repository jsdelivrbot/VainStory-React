import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {
  render() {
    const styles = {
      title: { cursor: 'pointer' }
    };

    return (
      <div>
        <AppBar
          title={<span style={styles.title}>VainStory</span>}
          onTitleClick={this.onTitleClick}
          iconElementLeft={<IconButton></IconButton>}
          iconElementRight={
            <div>
              <FlatButton label="챔피언 분석" />
              <FlatButton label="통계" />
              <FlatButton label="랭킹" />
              <FlatButton label="기타" />
            </div> 
          }
        />
      </div>
    );
  }
}

export default Header;