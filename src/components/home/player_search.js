import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions';

import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { SelectField, TextField } from 'redux-form-material-ui'

class PlayerSearch extends Component {
  componentDidMount() {
    this.refs.userName        // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus() 
  }

  onSubmit(values) {
    this.props.fetchPlayer(values, (error) => {
      if(!error) {
        this.props.history.push(``);
      } 
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const containerStyle = {
      width: '360px',
      margin: 'auto',
      textAlignment: 'left'
    };

    const buttonStyle = {
      width: '360px',
      margin: 'auto',
      marginBottom: '16px'
    };

    return (
      <Card id="search_area" containerStyle={containerStyle}>
        <br />
        <div>
          베인글로리 플레이어
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="userName"
            hintText="사용자명"
            floatingLabelText="사용자명"
            component={TextField}
            fullWidth={true}
            floatingLabelFixed={true}
            errorText={(self) => {self.touched && self.error}}
            ref='userName' withRef />
          <br />
          <Field
            name="region"
            label="지역"
            floatingLabelText="지역 선택"
            component={SelectField}
            fullWidth={true}
            floatingLabelFixed={true}
            errorText={(self) => {self.touched && self.error ? self.error : ''}}
            ref='region' withRef >
              <MenuItem value={null} primaryText="지역 선택" />
              <MenuItem value="sg" primaryText="동남아시아" />
              <MenuItem value="ea" primaryText="동아시아" />
              <MenuItem value="na" primaryText="북아메리카" />
              <MenuItem value="sa" primaryText="남아메리카" />
              <MenuItem value="eu" primaryText="유럽" />
              <MenuItem value="cn" primaryText="중국" />
          </Field>
          <br />
          <br />
          <RaisedButton type="submit" label="찾아보기" primary={true} style={buttonStyle} />
        </form>
      </Card>
    );
  }
}

function validate(values) { 
  const errors = {};

  if (!values.userName) {
    errors.userName = "No UserName!";
  }

  if (!values.region) {
    errors.region = "No Region Selected";
  }

  return errors;
}

export default reduxForm({
  form: 'PlayerSearchForm',
  validate
})(
  connect(null, { fetchPlayer })(PlayerSearch)
);