import _ from 'lodash';
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import { herosInfo } from '../common/constants';

const imageHerosPath = '../../../res/images/hero';

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
  },
  listItem: {
    paddingTop: '8px',
    paddingBottom: '8px'
  }
};

class MatchSummary extends Component {
  constructor(props) {
    super(props);
  }

  generateHeroListItem(played) {
    return played.slice(0, 3).map((value) => {
      const { hero: { played, wins, kills, assists, deaths }, key } = value
      const heroInfo = herosInfo[value.key];
      const heroKDA = (kills + assists) / deaths;
      const losses = played - wins;
    
      if (heroInfo) {
        return (
          <ListItem
            innerDivStyle={style.listItem}
            key={value.key}
            leftAvatar={<Avatar src={`${imageHerosPath}/${heroInfo.image}`} />}
            primaryText={heroInfo.name}
            secondaryText={
              <div>
                <span style={{color: darkBlack, fontSize: '15px'}}>{`${Math.round(wins / played * 100)}%`}</span>{` (${wins}승 ${losses}패)`}
                <p>{`${heroKDA.toFixed(2)}`} 평점</p>
              </div>
            }
            secondaryTextLines={2}/>
        );
      } else {
        return (
          <ListItem
            key={value.key}
            leftAvatar={<Avatar src={`${imageHerosPath}/placeholder.jpg`} />}
            primaryText="히어로 정보가 없습니다."/>
        );
      }
    });
  }

  render() {
    const { playedTime, summaryData } = this.props;
    let playedHeros = {};

    summaryData.forEach(data => {
      const { stats: { winner, assists, deaths, kills, farm }, actor } = data.attributes;
      var playedHero = playedHeros[actor];
      
      if (!playedHero) {
        playedHero = { played: 0, wins: 0, kills: 0, assists: 0, deaths: 0, farm: 0 }
      } 

      playedHeros = { 
        ...playedHeros, 
        [actor]: {
          played: playedHero.played + 1,
          wins: playedHero.wins + (winner ? 1 : 0),
          kills: playedHero.kills + kills,
          assists: playedHero.assists + assists,
          deaths: playedHero.deaths + deaths,
          farm: playedHero.farm + farm
        }
      }
    });

    if (_.isEmpty(playedHeros)) return (<div className="container-fluid"></div>);

    const { played, wins, kills, assists, deaths, farm } = _.reduce(playedHeros, (prev, cur) => {
      return {
        played: prev.played + cur.played,
        wins:  prev.wins + cur.wins,
        kills:  prev.kills + cur.kills,
        assists:  prev.assists + cur.assists,
        deaths:  prev.deaths + cur.deaths, 
        farm: prev.farm + cur.farm
      }
    }, { played: 0, wins: 0, kills: 0, assists: 0, deaths: 0, farm: 0 });

    const averageKills = (kills / played).toFixed(1);
    const averageAssists = (assists / played).toFixed(1);
    const averageDeaths = (deaths / played).toFixed(1);
    const kda = ((kills + assists) / deaths).toFixed(2);

    var playedHero = _.map(playedHeros, (hero, key) => {
      return { key: key, hero: hero };
    })
    
    playedHero.sort((lhs, rhs) => {
      return lhs.hero.played >= rhs.hero.played ? -1 : 1;
    });

    const playedHeroItems = this.generateHeroListItem(playedHero);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-5">
            <div className="col-xs-6">
              <p style={style.statsRecord}>{`${played}전 ${wins}승 ${played - wins}패`}</p>
              <h4 style={style.statsPercentage}>{`${Math.round(wins / played * 100)}%`}</h4>
              <CircularProgress
                color="red"
                style={style.backCircular}
                mode="determinate"
                value={played}
                max={played}
                size={120}
                thickness={14} />
              <CircularProgress
                style={style.frontCircular}
                mode="determinate"
                value={wins}
                max={played}
                size={120}
                thickness={14} />
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
          <div className="col-xs-3">
            <List>
              {playedHeroItems}
            </List>
          </div>
          <div className="col-xs-4">
            <List>
              <ListItem
                innerDivStyle={style.listItem}
                primaryText={`총 플레이 시간: ${(playedTime / 3600).toFixed(1)} 시간`}/>
              <ListItem
                innerDivStyle={style.listItem}
                primaryText={`평균 CS: ${(farm / played).toFixed(1)}`}
                secondaryText={`총 ${farm}의 미니언`}/>
              <ListItem
                innerDivStyle={style.listItem}
                primaryText={`킬수 합계: ${kills}`}
                secondaryText={`분당 ${(kills / (playedTime / 60)).toFixed(3)} 킬`}/>
              <ListItem
                innerDivStyle={style.listItem}
                primaryText={`데스 합계: ${deaths}`}
                secondaryText={`분당 ${(deaths / (playedTime / 60)).toFixed(3)} 데스`}/>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSummary;