import React from "react";
import { Container,Box,Typography,styled,Grid } from "@mui/material";

const Wrapper= styled('div')({
    ".reasons-to-choose":{
        textAlign:'center',
        position:'relative',
        margin:'10px 0px',
        "&::before":{
            position:'absolute',
            content:"''",
            left:'0px',
            top:'13px',
            background:"url('/images/image-links-title.png')",
            zIndex:'-1',
            width:'100%',
            height:'1px',
        },
        "& span":{
            fontWeight:'600'
        },
        "& h6":{
            color:'#000',
            fontWeight:400
        }
    },
    ".estimate-outer":{
        display:'flex',
        alignItems:'center',
        gap:'20px',
    }
})

function Reasons_to_Choose(){
    return(
        <Wrapper>
            <Container>
                <Box className="reasons-to-choose">
                    <Typography variant="h6">REASONS TO CHOOSE <span> OUT OF HOUR</span></Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Box className="estimate-outer">
                            <Box>
                                <img src="/images/icon1.jpg" alt="quote" />
                            </Box>
                            <Typography variant="body1">Instant quote cost estimate</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Box className="estimate-outer">
                            <Box>
                                <img src="/images/icon2.jpg" alt="quote" />
                            </Box>
                            <Typography variant="body1">Free Ipad communication management tool</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Box className="estimate-outer">
                            <Box>
                                <img src="/images/icon3.jpg" alt="quote" />
                            </Box>
                            <Typography variant="body1">Quick, simple and hassle-free online service</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}
export default Reasons_to_Choose;