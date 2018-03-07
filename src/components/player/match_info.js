import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class MatchInfo extends Component {
  render() {
    return (
      <Card>

        <div className="row">
            <div className="col-xs-1">
              <BasicInfo />
            </div>
            <div className="col-xs-9">
              <Card>
                <Tabs>
                  <Tab label="전체" >
                    <div>

                    </div>
                  </Tab>
                  <Tab label="랭크" >
                    <div>

                    </div>
                  </Tab>
                  <Tab label="5vs5 일반">
                    <div>

                    </div>
                  </Tab>
                  <Tab label="3vs3 일반">
                    <div>

                    </div>
                  </Tab>
                  <Tab label="총력전">
                    <div>

                    </div>
                  </Tab>
                  <Tab label="배틀로얄">
                    <div>

                    </div>
                  </Tab>
                </Tabs>
              </Card>
            </div>
          </div>


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

export default MatchInfo;