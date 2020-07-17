import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({input, label, meta}) {
    console.log(meta);

    return <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
      return <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput}  label="Description"  />

        <button className="ui button primary">Submit</button>
      </form>
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) { errors.title = 'Title required'; }
  if (!formValues.description) { errors.description = 'Description required'; }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
