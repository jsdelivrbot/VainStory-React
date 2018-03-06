import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions';

import Header from '../components/common/header';
import BasicInfo from '../components/player/basic_info';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Player extends Component {
  componentDidMount() {
    //const { region, userName } = this.props.match.params;
    const { fetchPlayer, match: { params } } = this.props;
    fetchPlayer(params, () => {
      
    });
  }

  render() {
    const style = {
      margin: 'auto',
      marginTop: '12px',
      width: '1120px'
    }

    return (
      <div>
        <Header />
        <div className="container-fluid" style={style}>
          <div className="row">
            <div className="col-xs-3">
              <BasicInfo />
            </div>
            <div className="col-xs-9">
            <Card>
              <CardTitle title="codeDestroyer" subtitle="Vainglorious Gold" />
              


                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Player;
export default connect(null, { fetchPlayer })(Player);