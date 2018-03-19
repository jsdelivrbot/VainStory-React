import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../../actions';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';

import MatchSummary from './match_summary';

const unitOffset = 20;

class MatchesOverall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      offset: 0
    };
  }

  componentDidMount() {
    const { fetchMatches, params } = this.props;
    fetchMatches({ ...params, offset: this.state.offset });
    this.setState({ ...this.state, offset: this.state.offset + unitOffset});
  }

  handleTapChange(value) {
    this.setState({ ...this.state, value: value });
  }

  onMoreButtonClicked() {
    const { fetchMatches, params } = this.props;
  }

  render() {
    const gameModes = [
      { value: '', title: '전체' },
      { value: 'ranked', title: '랭크' },
      { value: 'casual', title: '일반전' },
      { value: 'blitz_pvp_ranked', title: '총력전' },
      { value: 'casual_aral', title: '배틀로얄' }
    ];

    const { matches, details, id } = this.props;

    if (matches && details && id) {
      const playedData = details.filter((value, index) => {
        if (value.type !== 'participant') return false;
        return value.relationships.player.data.id === id;
      });

      const playedTime = matches.reduce((prev, cur) => {
        return prev + cur.attributes.duration;
      }, 0);

      const tabs = _.map(gameModes, mode => {
        return (
          <Tab label={mode.title} key={mode.value} value={mode.value}>
            <div>
              <MatchSummary playedData={playedData} playedTime={playedTime} />
            </div>
          </Tab>
        );
      });
  
      const style = {
        media: {
          borderRadius: '50%',
          padding: '12px',
        },
        centerText: {
          textAlign: 'center'
        }
      }

      return (
        <div>
          <Card>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}> 
              {tabs}
            </Tabs>
          </Card>
          <br />
          <Card>
            <CardHeader
              title={
                <div>
                  <span>솔로랭크</span><span> 두시간 전</span><span> | 패배 </span><span>(12분 44초)</span>
                </div>
              }
              
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
                    <p style={style.centerText}>알파</p>
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
                    <p style={style.centerText}>알파</p>
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
          <br />
          <Card>
            <CardActions>
              <FlatButton label="더 보기" fullWidth={true} onClick={this.onMoreButtonClicked.bind(this)} />
            </CardActions>
          </Card>
        </div>
      );
    } else {
      return (
        <Card>
          <CircularProgress size={60} thickness={7} />
        </Card>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { data, [ownProps.params.userName]: player } = state.player;
  
  if (data && player) {
    return { matches: data.data, details: data.included, id: player.id };
  }
  return state;
}

export default connect(mapStateToProps, { fetchMatches })(MatchesOverall);
