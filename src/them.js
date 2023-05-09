import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CDCDCD",
    },
    secondary: {
      main: "#F9DE9C",
    },
    dark: {
      main: "#30302C",
    },
  },
  breakpoints: {
    xxl: 1600,
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    color: "#CDCDCD",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: "12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          color: "#CDCDCD",
        },
        outlined: {
          borderImageSlice: 1,
          borderWidth: 1,
          borderImageSource: "linear-gradient(to left, #224A60, #F9DE9C)",
          transition: "0.3s",
          background: "#111110",
          "&:hover": {
            borderImageSource: "linear-gradient(to right, #224A60, #F9DE9C)",
            borderImageSlice: 1,
            borderWidth: 1,
            backgroundColor: "#111110",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            justifyContent: "center",
            [theme.breakpoints.up('lg')]: {
              paddingLeft: '120px',
              paddingRight: '120px',
            },
            [theme.breakpoints.between('md', 'lg')]: {
              paddingLeft: '60px',
              paddingRight: '60px',
            },
            [theme.breakpoints.down('sm')]: {
              paddingLeft: '24px',
              paddingRight: '24px',
            }
          }
        },
        maxWidthXxl: {
          maxWidth: 1200,
        }
      },
    },
    MuiGrid: {
      container: {
        justifyContent: "center",
      },
    },
  },
});
