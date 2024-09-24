import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Views from "./views/Views";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                mode: "light",
                primary: {
                    main: "#505668", // Light Blue
                },
                secondary: {
                    main: "#3A353F", // Dark
                },
                error: {
                    main: "#C05850", // Red
                },
                background: {
                    default: "#F1ECE1", // White
                    paper: "#F1ECE1",
                },
                info: {
                    main: "#E2AB7F", // Beige
                },
            },
        },
        dark: {
            palette: {
                mode: "dark",
                primary: {
                    main: "#F1ECE1", // White
                },
                secondary: {
                    main: "#3A353F", // Dark
                },
                error: {
                    main: "#C05850", // Red
                },
                background: {
                    default: "#505668", // Light Blue
                    paper: "#505668",
                },
                info: {
                    main: "#E2AB7F", // Beige
                },
            },
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                {/* This code enable the background color change */}
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Views></Views>}></Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
