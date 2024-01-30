import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import PageHelmet from "../../../Components/PageHelmet";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Wrapper = styled("div")({
  "& h2": {
    color: "#2175a9",
    padding: "10px 0px",
  },
  ".form-wrapper": {
    border: "1px solid silver",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    "& h3": {
      color: "#2175a9",
      padding: "20px 0px",
    },
    "& p": {
      fontWeight: "600",
      fontSize: "14px",
      paddingBottom: "10px",
    },
  },
  ".form-field": {
    marginTop: "5px",
  },
  ".radio-box": {
    margin: "0px 0px 20px",
    borderRadius: "5px",
    padding: "2px 14px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
  },
});

const ContactSchema = Yup.object().shape({
    Name: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .matches(/^[a-zA-Z]+$/, "Invalid name. Only letters are allowed.")
      .required("Name is required."),
      address: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("address is required."),
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
      buildingtype: Yup.string()
      .required("building type is required."),
      cleaners: Yup.string()
      .required("this field is required."),
      houseperclean: Yup.string()
      .required("this field is required."),
      dayperweek: Yup.string()
      .required("this field is required."),
      cleaningsupplies: Yup.string()
      .required("this field is required."),
  });

function Get_Your_Quote() {
  const [radiovalue, setRadiovalue] = useState("");

  const handleRadio = (e) => {
    setRadiovalue(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <>
      <PageHelmet title="Free Quote Request Form- Out Of Hour">
        <Header />
        <Wrapper>
          <Container>
            <Box pt={2} pb={2}>
              <Typography variant="h2">
                Free Quick Instant Quote Estimate
              </Typography>
            </Box>
            <Formik
                initialValues={{
                  Name: "",
                  email: "",
                  Telephone:"",
                  address:"",
                  buildingtype:"",
                  cleaners:"",
                  houseperclean:"",
                  dayperweek:"",
                  cleaningsupplies:"",
                  message:"",
                
                }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleChange, handleBlur, values }) => (
                  <Form>
            <Grid container spacing={5} pb={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontSize: "13px" }}>
                  BUSINESS AND CONTACT DETAILS
                </Typography>
                <Box className="form-wrapper">
                  <Typography variant="h3">
                    We will call you back by telephone to verify your details.
                  </Typography>
                  <Typography variant="body1">
                    Our online cost estimator can provide an initial monthly
                    estimate based on your cleaning requirements and input.
                  </Typography>
                  <Typography variant="body1">
                    Please complete the form where possible. Questions? Contact
                    us now, we’re always here to help & promise to answer any
                    queries as soon as possible.
                  </Typography>
                  <Box className="form-field">
                    <TextField
                      variant="outlined"
                      placeholder="Name *"
                      size="small"
                      fullWidth
                      name="Name"
                      value={values.Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.Name && errors.Name)}
                    />
                    <FormHelperText error>{touched.Name && errors.Name}</FormHelperText>
                  </Box>
                  <Box className="form-field">
                    <TextField
                      variant="outlined"
                      placeholder="Business Address *"
                      size="small"
                      fullWidth
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.address && errors.address)}
                    />
                     <FormHelperText error>{touched.address && errors.address}</FormHelperText>
                  </Box>
                  <Box className="form-field">
                    <TextField
                      variant="outlined"
                      placeholder="Telephone *"
                      size="small"
                      fullWidth
                      name="Telephone"
                      value={values.Telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.Telephone && errors.Telephone)}
                    />
                     <FormHelperText error>{touched.Telephone && errors.Telephone}</FormHelperText>
                  </Box>
                  <Box className="form-field">
                    <TextField
                      variant="outlined"
                      placeholder="Email *"
                      size="small"
                      fullWidth
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                    />
                     <FormHelperText error>{touched.email && errors.email}</FormHelperText>
                  </Box>
                  <Box pt={2}>
                    <img
                      src="/images/quote-page.jpg"
                      alt="Quote"
                      width="100%"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1" sx={{ fontSize: "13px" }}>
                  BUSINESS AND CONTACT DETAILS
                </Typography>
                <Box className="form-wrapper">
                  <Box>
                    <Typography
                      variant="body1"
                      pt={2}
                      sx={{
                        fontWeight: "300!important",
                        paddingBottom: "0px!important",
                      }}
                    >
                      Do you require a commercial cleaning?
                    </Typography>
                    <Box className="radio-box">
                      <FormControlLabel
                        value="commercial"
                        control={<Radio onChange={handleRadio} />}
                        label="Commercial cleaning quote"
                      />
                    </Box>
                    {radiovalue !== "" && (
                      <Grid container spacing={2}>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              paddingBottom: "5px!important",
                              fontWeight: "300!important",
                            }}
                          >
                            Building type
                          </Typography>
                          <Select
                            variant="outlined"
                            fullWidth
                            size="small"
                            defaultValue="Restaurant"
                            name="buildingtype"
                            value={values.buildingtype}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.buildingtype && errors.buildingtype)}
                          >
                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                            <MenuItem value="Medical center">
                              Medical center
                            </MenuItem>
                            <MenuItem value="Standard office">
                              Standard office
                            </MenuItem>
                            <MenuItem value="Public house">
                              Public house
                            </MenuItem>
                            <MenuItem value="Medical center">
                              Medical center
                            </MenuItem>
                            <MenuItem value="Dance school">
                              Dance school
                            </MenuItem>
                            <MenuItem value="Nursery">Nursery</MenuItem>
                            <MenuItem value="Loboratory">Loboratory</MenuItem>
                            <MenuItem value="warehouse">warehouse</MenuItem>
                            <MenuItem value="other">other</MenuItem>
                           
                          </Select>
                          <FormHelperText error>{touched.buildingtype && errors.buildingtype}</FormHelperText>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              paddingBottom: "5px!important",
                              fontWeight: "300!important",
                            }}
                          >
                            Select a date to clean
                          </Typography>
                          <FormControl
                            fullWidth
                            size="small"
                            sx={{ background: "rgba(0, 0, 0, 0.06)" }}
                          >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                // value={datevalue}
                                // onChange={(date) => setDatevalue(date)}
                                format="DD-MM-YYYY"
                                disablePast={true}
                                className="data-picker"
                              />
                            </LocalizationProvider>
                          </FormControl>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              paddingBottom: "5px!important",
                              fontWeight: "300!important",
                            }}
                          >
                            Number of cleaners
                          </Typography>
                          <TextField
                            variant="outlined"
                            type="number"
                            size="small"
                            inputProps={{ min: 1 }} // Set minimum value
                            fullWidth
                             name="cleaners"
                            value={values.cleaners}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.cleaners && errors.cleaners)}
                          />
                          <FormHelperText error>{touched.cleaners && errors.cleaners}</FormHelperText>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              paddingBottom: "5px!important",
                              fontWeight: "300!important",
                            }}
                          >
                            Hours per clean
                          </Typography>
                          <TextField
                            variant="outlined"
                            type="number"
                            size="small"
                            fullWidth
                            inputProps={{ min: 1 }} // Set minimum value
                            placeholder="Houses per clean"
                            name="houseperclean"
                            value={values.houseperclean}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.houseperclean && errors.houseperclean)}
                          />
                           <FormHelperText error>{touched.houseperclean && errors.houseperclean}</FormHelperText>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              paddingBottom: "5px!important",
                              fontWeight: "300!important",
                            }}
                          >
                            Day per week
                          </Typography>
                          <Select
                            variant="outlined"
                            fullWidth
                            size="small"
                            defaultValue="Day per week"
                            name="dayperweek"
                            value={values.dayperweek}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.dayperweek && errors.dayperweek)}
                          >
                            <MenuItem value="Day per week">
                              Day per week
                            </MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                          </Select>
                          <FormHelperText error>{touched.dayperweek && errors.dayperweek}</FormHelperText>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              paddingBottom: "5px!important",
                              fontWeight: "300!important",
                            }}
                          >
                            Cleaning supplies
                          </Typography>
                          <Select
                            variant="outlined"
                            fullWidth
                            size="small"
                            defaultValue="Cleaning supplies"
                            name="cleaningsupplies"
                            value={values.cleaningsupplies}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.cleaningsupplies && errors.cleaningsupplies)}
                          >
                            <MenuItem value="Cleaning supplies">
                              Cleaning supplies
                            </MenuItem>
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                          </Select>
                          <FormHelperText error>{touched.cleaningsupplies && errors.cleaningsupplies}</FormHelperText>
                        </Grid>
                      </Grid>
                    )}
                  </Box>
                  <Box mt={2}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "300!important",
                        paddingBottom: "0px!important",
                      }}
                    >
                      Message / cleaning requirements
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Message"
                      rows={5}
                      multiline
                      fullWidth
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.message && errors.message)}
                    />
                    <FormHelperText error>{touched.message && errors.message}</FormHelperText>
                  </Box>
                  <Box pt={2}>
                    <Button variant="contained" color="primary" type="submit">
                      Send My Instant Quote
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            </Form>
                )}
              </Formik>
          </Container>
        </Wrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Get_Your_Quote;
