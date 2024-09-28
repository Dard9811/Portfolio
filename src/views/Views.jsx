import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "../components/layout/NavigationBar";
import Home from "./Home/Home";
import { Box } from "@mui/material";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { useTheme } from "@emotion/react";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Footer from "../components/layout/Footer";

const Views = () => {
    const theme = useTheme();
    return (
        <>
            <NavigationBar theme={theme}></NavigationBar>
            <Box mt={2}>
                <Routes>
                    <Route path="home" element={<Home theme={theme} />} />
                    <Route path="about" element={<About theme={theme} />} />
                    <Route path="projects" element={<Projects />} />
                    <Route
                        path="services"
                        element={<Services theme={theme} />}
                    />
                    <Route path="contact" element={<Contact theme={theme} />} />
                    <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
            </Box>
            <Footer theme={theme}></Footer>
        </>
    );
};

export default Views;
