import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  styled,
  Grid,
  Select,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const BannerWrapper = styled("div")({
  backgroundImage: "url('/images/banner-bg.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition:'bottom',
  padding: "30px 0px",
  textAlign: "center",
  "& input::placeholder": {
    color: "#767676",
    opacity: "1",
    fontSize: "15px",
  },

  ".heading": {
    "& h2": {
      color: "#fff",
      textShadow: "1px 1px 1px #333",
    },
    "& h4": {
      textShadow: "1px 1px 1px #555",
      margin: "20px 0px",
    },
  },
  ".contact-details-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8.5px 14px",
    borderRadius: "5px",
    color: "#767676",
    background: "rgb(255, 255, 255)",
    fontSize: "15px",
    "& p": {
      fontSize: "15px",
    },
  },
  ".contact-details-inner-box": {
    zIndex: "99",
    padding: "8.5px 14px",
    borderRadius: "0px 0px 5px 5px",
    background: "rgb(255, 255, 255)",
    position: "absolute",
    top: "35px",
  },
  ".service-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    margin: "20px 0px",
    ".service-inner-box": {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    "& p": {
      fontWeight: "600",
      color: "#fff",
    },
    ".dot-box": {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#b4d56c",
    },
  },
});

function Bannerpage() {
  const [show, setShow] = useState(false);
  const [showBuilding, setShowBuilding] = useState(false);
  const [kitchen, setKitchen] = React.useState(false);
  const [toilet, setToilet] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [select,setSelect]= useState('Name')


  const hanldeCheck = (e) => {
    setKitchen(e.target.checked);
  };
  const hanldeChecktoilet = (e) => {
    setToilet(e.target.checked);
  };
  const hanldeCheckspace = (e) => {
    setCommercial(e.target.checked);
  };
  return (
    <BannerWrapper>
      <Container>
        <Box className="heading">
          <Typography variant="h2">
            Get a quick instant office & commercial cleaning quote estimate in
            minutes
          </Typography>
          <Typography variant="h4">
            Find out how much you can save & claim 1 week free trial
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box sx={{ position: "relative" }}>
              <Box
                className="contact-details-wrapper"
                onClick={() => setShow(!show)}
              >
                <Typography variant="body1">Contact Details</Typography>
                <IoIosArrowDown />
              </Box>
              <Box
                className="contact-details-inner-box"
                sx={{ display: show ? "block" : "none" }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Contact Details *"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Business Address *"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Telephone *"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Email *"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select variant="outlined" fullWidth size="small" defaultValue="Building Type">
              <MenuItem value="Showrooms">Showrooms</MenuItem>
              <MenuItem value="Building Type">Building Type</MenuItem>
              <MenuItem value="Standard office">Standard office</MenuItem>
              <MenuItem value="Public house">Public house</MenuItem>
              <MenuItem value="Medical center">Medical center</MenuItem>
              <MenuItem value="Dance school">Dance school</MenuItem>
              <MenuItem value="Nursery">Nursery</MenuItem>
              <MenuItem value="Loboratory">Loboratory</MenuItem>
              <MenuItem value="warehouse">warehouse</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box sx={{ position: "relative" }}>
              <Box
                className="contact-details-wrapper"
                onClick={() => setShowBuilding(!showBuilding)}
              >
                <Typography variant="body1">Building requirement</Typography>
                <IoIosArrowDown />
              </Box>
              <Box
                className="contact-details-inner-box"
                sx={{ display: showBuilding ? "block" : "none" }}
              >
                <Box>
                  <FormControlLabel
                    sx={{ width: "100%" }}
                    control={
                      <Checkbox checked={kitchen} onChange={hanldeCheck} />
                    }
                    label="Kitchen"
                  ></FormControlLabel>
                  {kitchen && (
                    <Box>
                      <Select variant="outlined" fullWidth size="small" defaultValue="Do you require dishes to be cleaned?">
                        <MenuItem value="Do you require dishes to be cleaned?">
                          Do you require dishes to be cleaned?
                        </MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                      <Select variant="outlined" fullWidth size="small" defaultValue="Do you have a dishwasher?">
                        <MenuItem value="Do you have a dishwasher?">
                          Do you have a dishwasher?
                        </MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                      <Select variant="outlined" fullWidth size="small" defaultValue="Do you have a fridge?">
                        <MenuItem value="Do you have a fridge?">
                          Do you have a fridge?
                        </MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </Box>
                  )}
                </Box>
                <Box>
                  <FormControlLabel
                    sx={{ width: "100%" }}
                    control={
                      <Checkbox checked={toilet} onChange={hanldeChecktoilet} />
                    }
                    label="Toilet"
                  />
                  {toilet && (
                    <Box>
                      <Select variant="outlined" fullWidth size="small" defaultValue="How many toilets?">
                        <MenuItem value=" How many toilets?">
                          How many toilets?
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                      <Select variant="outlined" fullWidth size="small" defaultValue="How many toilet sinks?">
                        <MenuItem value="  How many toilet sinks?">
                          How many toilet sinks?
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                      <Select variant="outlined" fullWidth size="small" defaultValue="How many toilet stalls?">
                        <MenuItem value=" How many toilet stalls?">
                          How many toilet stalls?
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                    </Box>
                  )}
                </Box>
                <Box>
                  <FormControlLabel
                    sx={{ width: "100%" }}
                    control={
                      <Checkbox
                        checked={commercial}
                        onChange={hanldeCheckspace}
                      />
                    }
                    label="Commercial Space"
                  />
                  {commercial && (
                    <Box>
                      <Select variant="outlined" fullWidth size="small" defaultValue="How many rooms to clean?">
                        <MenuItem value="How many rooms to clean?">
                          How many rooms to clean?
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                      <Select variant="outlined" fullWidth size="small" defaultValue="How many floors to clean?">
                        <MenuItem value=" How many floors to clean?">
                          How many floors to clean?
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TextField
              variant="outlined"
              type="number"
              size="small"
              fullWidth
              placeholder="Numbers of Cleaners"
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TextField
              variant="outlined"
              type="number"
              size="small"
              fullWidth
              placeholder="Houses per clean"
            />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select variant="outlined" fullWidth size="small" defaultValue="Day per week">
              <MenuItem value="Day per week">Day per week</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select variant="outlined" fullWidth size="small" defaultValue="Cleaning supplies">
              <MenuItem value="Cleaning supplies">Cleaning supplies</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <TextField
              variant="outlined"
              multiline
              maxRows={4}
              size="small"
              placeholder="Message"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Service Section */}
        <Box className="service-box">
          <Box className="service-inner-box">
            <Box className="dot-box"></Box>
            <Typography variant="body1">Time saving service</Typography>
          </Box>
          <Box className="service-inner-box">
            <Box className="dot-box"></Box>
            <Typography variant="body1">
              {" "}
              No obligation instant quote estimate{" "}
            </Typography>
          </Box>
          <Box className="service-inner-box">
            <Box className="dot-box"></Box>
            <Typography variant="body1">
              {" "}
              Short term agreements - cancel anytime
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary">
          Get My Instant Quote
        </Button>
      </Container>
    </BannerWrapper>
  );
}
export default Bannerpage;
