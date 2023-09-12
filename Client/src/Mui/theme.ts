import {  createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette : {
    primary : {
      main : "#141B2D",
    },
    secondary : {
      main : "#F5F5F5",
    },
  },
  components : {
    MuiLink : {
      styleOverrides : {
        root : {
          textDecoration : "none",
          color : grey[800]
        }
      }
    },
    MuiButton : {
      styleOverrides : {
        root : {
          ":focus" : {
            outline: "none !important"
          }
        }
      }
    },
    MuiDrawer : {
      styleOverrides : {
        root : {
          // .css-1hsz34s-MuiDrawer-docked .MuiDrawer-paper

          "& .css-3senr0-MuiDrawer-docked .MuiDrawer-paper" : {
            backgroundColor : "red"
          }
        }
      }
    },
    MuiTextField : {
      styleOverrides : {
        root : {
          backgroundColor : "#293040",
          ":focus" : {
            color : "white"
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
          root: {
              color: "red"
          }
      }
  },
    MuiInputBase : {
      styleOverrides : {
        root : {
          color : "white"
        }
      }
    },
    MuiInputLabel : {
      styleOverrides : {
        root : {
          color : "white"
        }
      }
    }
  }
});
export default theme;
