import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class MatchInfo extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={
            <div>
              <span>솔로랭크</span><span> 두시간 전</span>
            </div>
          }
          subtitle="패배 (12분 34초)"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <div className="col-xs-3">
                <CardMedia>
                  <img src="../../../res/images/hero/alpha.png" alt="" style={style.media}/>
                </CardMedia>
                
              </div>
              <div className="col-xs-3">
                <h4 style={style.centerText}>3 / 6 / 1</h4>
                <p style={style.centerText}>
                  2.33:1 평점
                </p>
              </div>
              <div className="col-xs-3">
                <p style={style.centerText}>
                  레벨 12
                </p>
                <p style={style.centerText}>
                  131 CS
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
                <p><img style={{height: '20px', width: '20px'}} src="../../../res/images/hero/alpha.png" alt=""/> park hyun</p>
                <p><img style={{height: '20px', width: '20px'}} src="../../../res/images/hero/alpha.png" alt=""/> park  soo</p>
                <p><img style={{height: '20px', width: '20px'}} src="../../../res/images/hero/alpha.png" alt=""/> park hyun</p>
              </div>
              <div className="col-xs-6">
                <p><img style={{height: '20px', width: '20px'}} src="../../../res/images/hero/alpha.png" alt=""/> park hyun</p>
                <p><img style={{height: '20px', width: '20px'}} src="../../../res/images/hero/alpha.png" alt=""/> park hyun</p>
                <p><img style={{height: '20px', width: '20px'}} src="../../../res/images/hero/alpha.png" alt=""/> park hyun</p>
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