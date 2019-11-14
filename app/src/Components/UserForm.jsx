import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function UserForm(props) {

  return (
    <div>
      <Form>
        <label>
          Name
          <Field name="name" type="text" placeholder="Input your name" />
        </label>
        <ErrorMessage name="name">{msg => <div>{msg}</div>}</ErrorMessage>

        <label>
          Email
          <Field name="email" type="email" placeholder="Pick an email" />
        </label>
        <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>

        <label>
          Password
          <Field
            name="password"
            type="password"
            placeholder="Input your password"
          />
        </label>
        <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>

        <label>
          Terms of Service
          <Field name="tos" type="checkbox" placeholder="Agree with us?" />
        </label>
        <ErrorMessage name="tos">{msg => <div>{msg}</div>}</ErrorMessage>

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
			tos: false
		}
	},

	validationSchema: Yup.object().shape({
		name: Yup.string()
			.min(2, 'Is that even a name')
			.required("Name can not be blank"),
		email: Yup.string()
			.email('Valid email or nothing')
			.required("How do we send you goodies without an address?"),
		password: Yup.string()
			.min(5, 'Hackers are not playing. So should you!')
			.required("Safeguard your account like you mean business"),
		tos: Yup
			.boolean()
			.required("We can't roll if you don't agree to our terms")
	}),

	handleSubmit(values, tools) {
		return null
	}, 

})(UserForm);

export default FormWithFormik;
