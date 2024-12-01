import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"; // Import Formik and components
import * as Yup from "yup"; // Import Yup for validation
import styles from "./LoginForm.module.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <Formik
      initialValues={{ email: "", password: "" }} // Initial form values
      validationSchema={validationSchema} // Apply Yup validation schema
      onSubmit={(values, { setSubmitting, setErrors }) => {
        console.log("Form submitted with values:", values);
        
        // Simulate authentication logic (this is just an example)
        if (values.email !== "heshant3@gmail.com" || values.password !== "Tharindu1356@") {
          setErrors({ email: "Invalid email or password" }); // Set custom error message
          setSubmitting(false); // Stop the submitting state
        } else {
          // After successful login, navigate to the home page
          navigate("/"); // Adjust the path based on your routing setup
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className={styles.loginForm}>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>Welcome back!</h1>
            <p className={styles.subtitle}>Please enter your details</p>
          </div>

          {/* Email Field */}
          <div className={styles.inputGroup}>
            <Field
              type="email"
              id="email"
              name="email"
              className={styles.input}
              aria-label="Email input"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error} // Error message styling
            />
          </div>

          {/* Password Field */}
          <div className={styles.inputGroup}>
            <Field
              type="password"
              id="password"
              name="password"
              className={styles.input}
              aria-label="Password input"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error} // Error message styling
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className={styles.options}>
            <label className={styles.remember}>
              <Field type="checkbox" name="remember" className={styles.checkbox} />
              <span>Remember for 30 days</span>
            </label>
            <button className={styles.forgotPassword} type="button">
              Forget password
            </button>
          </div>

          {/* Submit Button */}
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Log in
          </Button>

          <Button variant="secondary" className={styles.googleButton}>
            <span>Log in with Google</span>
          </Button>

          <div className={styles.footer}>
            <span>Don't have an account?</span>
            <button className={styles.signUp} type="button">
              Sign up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
