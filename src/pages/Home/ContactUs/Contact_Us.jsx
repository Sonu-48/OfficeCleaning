import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Link,
  TextField,
  styled,
  FormHelperText,
} from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PageHelmet from "../../../Components/PageHelmet";

const ContactWrapper = styled("div")({
  ".contact-address": {
    "& h2": {
      color: "#2175a9",
      fontSize: "32px",
      padding: "10px 0px",
    },
    "& a": {
      color: "#2175a9",
      fontWeight: "600",
    },
  },
  ".contact-form": {
    border: "1px solid silver",
    padding: "1rem",
    borderRadius: "0.5rem",
    ".text-field": {
      marginBottom: "15px",
    },
  },
});

const ContactSchema = Yup.object().shape({
    Name: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .matches(/^[a-zA-Z]+$/, "Invalid name. Only letters are allowed.")
      .required("Name is required."),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required."),
    Telephone: Yup.string()
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid telephone number")
      .required("Telephone number is required."),
    message: Yup.string()
      .min(20, "Too Short!")
      .max(100, "Too Long!")
      .required("Message is required."),
  });
  

function Contact_Us() {
  const handleSubmit = () => {};
  return (
    <>
      <PageHelmet title="Contact Us - Out Of Hour">
      <Header />
      <ContactWrapper>
        <Container>
          <Box>
            <img src="/images/contact-us-banner.jpg" alt="ContactUs Banner" width="100%"/>
          </Box>
          <Grid container spacing={3} pt={3} pb={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className="contact-address">
                <Typography variant="h2">Contact Us</Typography>
                <Box pt={2} pb={2}>
                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    Address
                  </Typography>
                  <Typography variant="body1">
                    Out of Hour Cleaning Services
                  </Typography>
                </Box>
                <Typography variant="body1" pt={1} pb={1}>
                  152 – 160 City Road,
                </Typography>
                <Typography variant="body1" pt={1} pb={1}>
                  London
                </Typography>
                <Typography variant="body1" pt={1} pb={1}>
                  EC1V 2NX
                </Typography>
                <Box pt={2} pb={2}>
                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    Phone Number
                  </Typography>
                  <Typography variant="body1">0203 815 7968</Typography>
                </Box>
                <Box pt={2} pb={2}>
                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    Email
                  </Typography>
                  <Link href="mailto:info@outofhour.co.uk">
                    info@outofhour.co.uk
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Formik
                initialValues={{
                  Name: "",
                  email: "",
                  Telephone:"",
                  message:"",
                
                }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleChange, handleBlur, values }) => (
                  <Form>
                    <Box className="contact-form">
                      <Box className="text-field">
                        <TextField
                          variant="outlined"
                          placeholder="Name"
                          fullWidth
                          size="small"
                          name="Name"
                          value={values.Name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.Name && errors.Name)}
                        />
                        <FormHelperText error>
                          {touched.Name && errors.Name}
                        </FormHelperText>
                      </Box>
                      <Box className="text-field">
                        <TextField
                          variant="outlined"
                          placeholder="Email"
                          fullWidth
                          size="small"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.email && errors.email)}
                        />
                        <FormHelperText error>
                          {touched.email && errors.email}
                        </FormHelperText>
                      </Box>
                      <Box className="text-field">
                        <TextField
                          variant="outlined"
                          placeholder="Telephone"
                          fullWidth
                          size="small"
                          name="Telephone"
                          value={values.Telephone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.Telephone && errors.Telephone)}
                        />
                        <FormHelperText error>
                          {touched.Telephone && errors.Telephone}
                        </FormHelperText>
                      </Box>
                      <Box className="text-field">
                        <TextField
                          variant="outlined"
                          placeholder="Message"
                          rows={4}
                          multiline
                          fullWidth
                          size="small"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.message && errors.message)}
                        />
                        <FormHelperText error>
                          {touched.message && errors.message}
                        </FormHelperText>
                      </Box>
                      <Box align="center" pt={2} pb={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Submit Your Enquiry
                        </Button>
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </ContactWrapper>
      <Footer />
      </PageHelmet>
    </>
  );
}
export default Contact_Us;
