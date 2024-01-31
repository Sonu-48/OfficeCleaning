import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  typography,
  palette: {
    primary: {
      main: "#ffff",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
      errors: "#ef5350",
    },
    // secondary: purple,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#2175a9",
              color: "#fff",
              borderRadius: "0.5rem",
              fontWeight: 400,
              fontSize: "18px",
              padding: "10px 25px",
              textTransform: "capitalize",
              fontFamily:"'Lato', sans-serif",
              borderBottom:'3px solid #1a2a6b',
              "&:hover": {
                backgroundColor: "#b4d56c",
                color: "#fff",
                borderColor:'#a0c841'
              },
            }),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1080px!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          color:'#000',
          background:'rgb(255, 255, 255)',
          // border:'1px solid #fff',
          // paddingRight:'5px',
          "&$focused": {
            border: "1px solid black",
          },

          "& .MuiInputBase-input": {},
          "& $notchedOutline": {
            border: "1px solid black",
          },
          // "&:hover $notchedOutline": {
          //   borderColor: "green"
          // },
          "&$focused $notchedOutline": {
            borderColor: "green",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: "#143e6b",
          color: "#fff",
          "&:hover": {
            background: "#143e6b!important",
            color: "#fff!important",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "4px 15px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // width:'1200px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "850px",
          width: "100%",
          borderRadius: "8px",
          // padding:'20px 0px',
          margin:'10px',
          boxShadow:
            "0 3.3px 39.5px -27px rgba(255,255,255,.04), 0 4px 65.1px -27px rgba(255,255,255,.08400000000000001), 0 5.1px 113.7px -27px rgba(255,255,255,.083), 0 8px 246px -27px rgba(255,255,255,.079)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#787878",
          fontWeight: 600,
          fontSize: "18px",
          textTransform: "capitalize",
          "&.Mui-selected": {
            color: "#4878bf",
            // borderBottom: "2px solid #4878bf",
            // background:'4878bf',
            // color:'#ffff'
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "#4878bf",
          height: "1px",
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {},
        "&.header": {
          background: "rgba(0, 0, 0, 0.87)!important",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "12px!important",
        },
      },
    },
    MuiBadge:{
      styleOverrides:{
        badge:{
          background:'#f23b3b',
          top:'-5px',
          right:'5px'
        }
      }
    },
    MuiCheckbox:{
      styleOverrides:{
        root:{
          "&.Mui-checked":{
           color:' #1496bb',
          }
        }
      }
    },
    MuiSelect:{
      styleOverrides:{
        root:{
          color:'#767676',
          fontSize:'15px',
          textAlign:'start',
        }
      }
    },
    MuiRadio:{
      styleOverrides:{
        root:{
        padding:'5px',
          "&.Mui-checked":{
            color:'#2175a9',
          }
        }
      }
    }
  },
  
});
export default theme;
