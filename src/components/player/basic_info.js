import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import CircularProgress from 'material-ui/CircularProgress';

class BasicInfo extends Component {

  componentWillMount() {
    const { fetchPlayer, params } = this.props;
    fetchPlayer(params);
  }

  getSkillTier(score) {
    const tiers = [
      {score: 0, title: 'Unranked'},
      {score: 1, title: 'Just Beginning Bronze'},
      {score: 109, title: 'Just Beginning Silver'},
      {score: 218, title: 'Just Beginning Gold'},
      {score: 327, title: 'Getting There Bronze'},
      {score: 436, title: 'Getting There Silver'},
      {score: 545, title: 'Getting There Gold'},
      {score: 654, title: 'Rock Solid Bronze'},
      {score: 763, title: 'Rock Solid Silver'},
      {score: 872, title: 'Rock Solid Gold'},
      {score: 981, title: 'Worthy Foe Bronze'},
      {score: 1090, title: 'Worthy Foe Silver'},
      {score: 1200, title: 'Worthy Foe Gold'},
      {score: 1250, title: 'Got Swagger Bronze'},
      {score: 1300, title: 'Got Swagger Silver'},
      {score: 1350, title: 'Got Swagger Gold'},
      {score: 1400, title: 'Credible Threat Bronze'},
      {score: 1467, title: 'Credible Threat Silver'},
      {score: 1533, title: 'Credible Threat Gold'},
      {score: 1600, title: 'The Hotness Bronze'},
      {score: 1667, title: 'The Hotness Silver'},
      {score: 1733, title: 'The Hotness Gold'},
      {score: 1800, title: 'Simply Amazing Bronze'},
      {score: 1867, title: 'Simply Amazing Silver'},
      {score: 1933, title: 'Simply Amazing Gold'},
      {score: 2000, title: 'Pinnacle of Awesome Bronze'},
      {score: 2134, title: 'Pinnacle of Awesome Silver'},
      {score: 2267, title: 'Pinnacle of Awesome Gold'},
      {score: 2400, title: 'Vainglorious Bronze'},
      {score: 2600, title: 'Vainglorious Silver'},
      {score: 2800, title: 'Vainglorious Gold'}
    ];

    var result = {};
    for (const [i, element] of tiers.entries()) {
      if (score < element.score) {
        break;
      } else {
        result = {
          index: i,
          info: element
        };
      }
    }

    return result;
  }

  getKarma(level) {
    switch(level) {
      case -2: return '아주 나쁨';
      case -1: return '나쁨';
      case 0: return '보통';
      case 1: return '좋음';
      case 2: return '아주 좋음';
    }
  }

  render() {
    const { params, userInfo } = this.props;
    console.log(userInfo);

    if (userInfo) {
      const { rankPoints: { blitz, ranked }, level, guildTag, karmaLevel } = userInfo.stats;
      const skillTier = this.getSkillTier(ranked);
      const karma = this.getKarma(karmaLevel)

      return (
        <Card>
          <CardMedia
            overlay={<CardTitle title={skillTier.info.title} subtitle={`랭크 점수: ${Math.floor(ranked)}`} />}>
            <img src={`../../res/images/tier/${skillTier.index}.png`} alt="" />
          </CardMedia>
          <CardTitle title={userInfo.name} subtitle="래더 랭킹: 240 (상위 1.4%)" />
          <List>
              <ListItem primaryText={`${level} 레벨`} leftIcon={<ContentInbox />} disabled={true}/>
              <ListItem primaryText={`${guildTag} 소속`} leftIcon={<ActionGrade />} disabled={true}/>
              <ListItem primaryText={`카르마 ${karma}`} leftIcon={<ContentSend />} disabled={true}/>
          </List>
          <CardText>최근 업데이트: 35분 전</CardText>
          <CardActions>
            <RaisedButton label="전적 갱신" primary={true} fullWidth={true} />
          </CardActions>
        </Card>
      );
    } else {
      return (
        <Card>
          <CircularProgress size={72} thickness={9} />
        </Card>
      );
    } 
  }
}

function mapStateToProps(attributes, ownProps) {
  return { userInfo: attributes.player[ownProps.params.userName] };
}

export default connect(mapStateToProps, { fetchPlayer })(BasicInfo);
