import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions';

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class PlayerSearch extends Component {
  renderTextField(field) {
    const { input, label, meta: { touched, error }, ...custom } = field;
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
    );
  }

  renderSelectField(field) {
    const { input, label, meta: { touched, error }, children, ...custom } = field;
    return (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
      />
    );
  }

  render() {
    return (
      <form>
        <div>
          <Field name="player" component={this.renderTextField} label="플레이어 명" />
          <Field
            name="favoriteColor"
            component={this.renderSelectField}
            label="Favorite Color">
            <MenuItem value="ff0000" primaryText="Red" />
            <MenuItem value="00ff00" primaryText="Green" />
            <MenuItem value="0000ff" primaryText="Blue" />
          </Field>
        </div>
      </form>
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