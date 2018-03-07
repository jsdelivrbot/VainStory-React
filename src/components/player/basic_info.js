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

class BasicInfo extends Component {
  componentWillMount() {
    const { fetchPlayer, userInfo } = this.props;
    fetchPlayer(userInfo, () => {
      
    });
  }

  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Vainglorious Gold" subtitle="랭크 점수: 2948" />}>
          <img src="../../res/images/tier/30.png" alt="" />
        </CardMedia>
        <CardTitle title="codeDestroyer" subtitle="래더 랭킹: 240 (상위 1.4%)" />
        <List>
            <ListItem primaryText="30 레벨" leftIcon={<ContentInbox />} disabled={true}/>
            <ListItem primaryText="PAN 소속" leftIcon={<ActionGrade />} disabled={true}/>
            <ListItem primaryText="카르마 좋음" leftIcon={<ContentSend />} disabled={true}/>
        </List>
        <CardText>최근 업데이트: 35분 전</CardText>
        <CardActions>
          <RaisedButton label="전적 갱신" primary={true}  fullWidth={true} />
        </CardActions>
      </Card>
    );
  }
}

export default connect(null, { fetchPlayer })(BasicInfo);
