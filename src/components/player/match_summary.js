import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';

const style = {
  statsRecord: {
    textAlign: 'center',
    marginTop: '22px'
  },
  statsPercentage: {
    position: 'absolute',
    zIndex: '1',
    marginTop: '48px',
    marginLeft: '58px',
    textAlign: 'center',
  },
  backCircular: {
    position: 'absolute',
    zIndex: '2',
    marginLeft: '18px'
  },
  frontCircular: {
    zIndex: '3',
    marginLeft: '18px'
  },
  kdaAverage: {
    textAlign: 'center',
    marginTop: '88px'
  },
  kdaPercentage: {
    textAlign: 'center',
  }
};

class MatchSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      wins: 0,
      losses: 0,
      assists: 0,
      deaths: 0,
      kills: 0
    };
  }

  componentDidMount() {
    const { playedData } = this.props;
    
    this.setState({...playedData.reduce((prev, cur) => {
      const { winner, assists, deaths, kills } = cur.attributes.stats;
  
      return { 
        total: prev.total + 1,
        wins: prev.wins + (winner ? 1 : 0),
        losses: prev.losses + (winner ? 0 : 1),
        kills: prev.kills + kills,
        assists: prev.assists + assists,
        deaths: prev.deaths + deaths
      };
    }, this.state)});
  }

  render() {
    const { total, wins, losses, kills, assists, deaths } = this.state;

    const averageKills = (kills / total).toFixed(1);
    const averageAssists = (assists / total).toFixed(1);
    const averageDeaths = (deaths / total).toFixed(1);
    const kda = ((kills + assists) / deaths).toFixed(2);
    //const percentageKDA = (de)

    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-5">
              <div className="col-xs-6">
                <p style={style.statsRecord}>{`${total}전 ${wins}승 ${losses}패`}</p>
                <h4 style={style.statsPercentage}>{`${Math.round(wins / total * 100)}%`}</h4>
                <CircularProgress
                  color="red"
                  style={style.backCircular}
                  mode="determinate"
                  value={total}
                  max={total}
                  size={120}
                  thickness={12}
                />
                <CircularProgress
                  style={style.frontCircular}
                  mode="determinate"
                  value={wins}
                  max={total}
                  size={120}
                  thickness={12}
                />
              </div>
              <div className="col-xs-6">
                <p style={style.kdaAverage}>
                  <span>{`${averageKills}`} / </span>
                  <span>{`${averageDeaths}`}</span>
                  <span> / {`${averageAssists}`}</span>
                </p>
                <h4 style={style.kdaPercentage}>{`${kda} : 1`} KDA</h4>
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
                primaryText="정글"
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