import React from "react";
import { Box, Button, Typography,styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageHelmet from "./PageHelmet";
import Header from "../HomeLayout/Header";
import Footer from "../HomeLayout/Footer";

const NotfoudWrapper = styled('div')({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    "& img":{
        width:'50%'
    }
})

const ErrorPage = () => {
  const navigat = useNavigate();
  return (
    <>
      <PageHelmet title="Page not found - Out Of Hour">
        <Header/>
        <NotfoudWrapper>
          <Box align="center" pt={2} pb={2}>
            <img src="/images/page-not-found.avif" alt="404" />
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigat("/")}
              >
                Go To Home
              </Button>
            </Box>
          </Box>
        </NotfoudWrapper>
        <Footer/>
      </PageHelmet>
    </>
  );
};
export default ErrorPage;
