import React from "react";
import { withFormik, Form, Field } from "formik";

function UserForm(props) {

  return (
    <div>
      <Form>
        <label>
          Name
          <Field name="name" type="text" placeholder="Input your name" />
        </label>
        <label>
          Email
          <Field name="email" type="email" placeholder="Pick an email" />
        </label>
        <label>
          Password
          <Field
            name="password"
            type="password"
            placeholder="Input your password"
          />
        </label>
        <label>
          Terms of Service
          <Field name="tos" type="checkbox" placeholder="Agree with us?" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

const FormWithFormik = withFormik({
	mapPropsToValues() {
		return {
			name: "",
			email: "",
			password: "",
			tos: 'checked'
		}
	},

	handleSubmit(values, tools) {
		return null
	}

})(UserForm);

export default FormWithFormik;
