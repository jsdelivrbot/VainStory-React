import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { herosInfo } from '../common/constants';

const imageHerosPath = '../../../res/images/hero';
const imageInventoryPath = '../../../res/images/hero';

const gameModeDict = {
  'ranked': '3vs3 랭크',
  '5v5_pvp_ranked': '5vs5 랭크',
  '5v5_pvp_casual': '일반전',
  'casual': '일반전',
  'blitz_pvp_ranked': '총력전',
  'private_party_blitz_match': '총력전',
  'casual_aral': '배틀로얄'
}

const style = {
  media: {
    borderRadius: '50%',
    padding: '12px',
  },
  centerText: {
    textAlign: 'center'
  }
}

class MatchInfo extends Component {
  constructor(props) {
    super(props);
  }

  loadPlayerList(participants) {
    return participants.map((participant) => {
      const { actor } = participant.character;
      const { name } = participant.player.attributes;

      return (
        <p>
          <img style={{height: '20px', width: '20px'}} src={`${imageHerosPath}/${herosInfo[actor].image}`} alt=""/> {name}
        </p>
      )
    });
  }

  getSearchedPlayer(redMembers, blueMembers) {
    const redPlayer = _.find(redMembers, (participant) => { return participant.player.id === this.props.matchData.id; });
    const bluePlayer = _.find(blueMembers, (participant) => { return participant.player.id === this.props.matchData.id; });

    if (redPlayer) {
      return { isRed: true, player: redPlayer };
    } else if (bluePlayer) {
      return { isRed: false, player: bluePlayer };
    } else {
      return {};
    }
  }

  render() {
    const { attributes: { createdAt, duration, gameMode }, rosters: { red, blue }, id } = this.props.matchData;

    const redMemberList = this.loadPlayerList(red.participants);
    const blueMemberList = this.loadPlayerList(blue.participants);
    const searchedPlayer = this.getSearchedPlayer(red.participants, blue.participants);

    const { character: { actor, stats: { winner, kills, assists, deaths, farm, items } } } = searchedPlayer.player;
    console.log(items);

    return (
      <Card>
        <CardHeader
          title={
            <div>
              <span>{gameModeDict[gameMode]},</span>
              <span> 두시간 전</span>
              <span> | { winner ? '승리':'패배'} </span>
              <span>({Math.floor(duration / 60)}분 {duration % 60}초)</span>
            </div>
          }
          actAsExpander={true}
          showExpandableButton={true} />
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <div className="col-xs-3">
                <CardMedia>
                  <img src={`${imageHerosPath}/${herosInfo[actor].image}`} alt="" style={style.media}/>
                </CardMedia>
                <p style={style.centerText}>{herosInfo[actor].name}</p>
              </div>
              <div className="col-xs-3">
                <h4 style={style.centerText}>{`${kills} / ${assists} / ${deaths}`}</h4>
                <p style={style.centerText}>
                  {((kills + assists) / deaths).toFixed(2)} : 1 평점
                </p>
              </div>
              <div className="col-xs-3">
                <p style={style.centerText}>
                  레벨 12
                </p>
                <p style={style.centerText}>
                  {farm} CS
                </p>
                <p style={style.centerText}>
                  킬 관여 56%
                </p>
              </div>
              <div className="col-xs-3">
                <div className="col-xs-4">
                  <Avatar src="../../../res/images/hero/alpha.png" />
                  <Avatar src="../../../res/images/hero/alpha.png" />
                </div>
                <div className="col-xs-4">
                  <Avatar src="../../../res/images/hero/alpha.png" />
                  <Avatar src="../../../res/images/hero/alpha.png" />
                </div>
                <div className="col-xs-4">
                  <Avatar src="../../../res/images/hero/alpha.png" />
                  <Avatar src="../../../res/images/hero/alpha.png" />
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="col-xs-6">
                {redMemberList}
              </div>
              <div className="col-xs-6">
                {blueMemberList}
              </div>
            </div>
          </div>
        </div>
        
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

export default MatchInfo;