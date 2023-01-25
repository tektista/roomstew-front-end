import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Formik } from "formik";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});

/* Description: this component is so we do not need to repeat Formik syntax everytime we
we want to use a form. We can just wrap the form fields in this component and pass in the
initialValues, onSubmit, and validationSchema props. This component is a wrapper for Formik
*/
