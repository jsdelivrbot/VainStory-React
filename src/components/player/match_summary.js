import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

class MatchSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }
  
  render() {
    const style= {
      background: '#121212'
    }

    const backStyle = {
      position: 'absolute',
      zIndex: '1'
    }

    const frontStyle = {
      zIndex: '2'
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-5">
              <div className="col-xs-6">
                <p>20전 7승 12패</p>
                <CircularProgress
                  color="red"
                  style={backStyle}
                  mode="determinate"
                  value={100}
                  size={120}
                  thickness={7}
                />
                <CircularProgress
                  style={frontStyle}
                  mode="determinate"
                  value={this.state.completed}
                  size={120}
                  thickness={7}
                />
              </div>
              <div className="col-xs-6">
                <p>7.7 / 5.1 / 6.4</p>
                <h4>2.76:1 (56%)</h4>
              </div>
          </div>
          <div className="col-xs-4">
            <List>
              <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
              <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
              <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>
          </div>
          <div className="col-xs-3">
            <p>선호 포지션</p>
            <List>
              <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>
            <List>
              <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>
            <List>
              <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSummary;