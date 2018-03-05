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
    this.refs.username        // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus() 
  }

  render() {
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
        <form>
          <Field 
            name="사용자명"
            hintText="사용자명"
            floatingLabelText="사용자명"
            component={TextField}
            fullWidth={true}
            floatingLabelFixed={true}
            ref='username' withRef />
          <br />
          <Field
            name="지역"
            label="지역"
            floatingLabelText="지역 선택"
            component={SelectField}
            fullWidth={true}
            floatingLabelFixed={true}>
              <MenuItem value={null} primaryText="" />
              <MenuItem value="SG" primaryText="동남아시아" />
              <MenuItem value="EA" primaryText="동아시아" />
              <MenuItem value="NA" primaryText="북아메리카" />
              <MenuItem value="SA" primaryText="남아메리카" />
              <MenuItem value="EU" primaryText="유럽" />
              <MenuItem value="CN" primaryText="중국" />
          </Field>
          <br />
          <br />
          <RaisedButton label="찾아보기" primary={true} style={buttonStyle} />
        </form>
      </Card>
    );
  }
}

function validate(values) { 
  const errors = {};

  if (!values.name) {
    errors.name = "Enter a title!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PlayerSearchForm'
})(
  connect(null, { fetchPlayer })(PlayerSearch)
);