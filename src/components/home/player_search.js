import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { renderTextField, renderSelectField } from '../common/renderers';

import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class PlayerSearch extends Component {
  onSubmit(values) {
    const { region, userName } = values;
    this.props.history.push(`/player/${region}/${userName}`);
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
            label="사용자명"
            component={renderTextField}
            fullWidth={true}
            floatingLabelFixed={true} />
          <br />
          <Field
            name="region"
            label="지역"
            component={renderSelectField}
            fullWidth={true}
            floatingLabelFixed={true}>
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
  withRouter((PlayerSearch))
);