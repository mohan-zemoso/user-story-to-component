// When using TypeScript 4.x and above
import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTimeline: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  },
});
