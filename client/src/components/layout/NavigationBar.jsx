/* 
    File name: NavigationBar.jsx
    Author: Daniel Auguto Ramirez Duenas
    Student ID: 301352357
 */
import MenuIcon from "@mui/icons-material/Menu";
import {
    Box,
    Button,
    Drawer,
    Grid2,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useColorScheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";
import { DRSVG } from "../../assets/svg/DR";

const drawerWidth = 240;
const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Services" },
    { id: 5, name: "Contact" },
];

const NavigationBar = ({ window, theme }) => {
    const navigate = useNavigate();
    const { mode, setMode, systemMode } = useColorScheme();

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (mode === "system") {
            if (systemMode === "light") setMode("light");
            if (systemMode === "dark") setMode("dark");
        }
    }, [mode, setMode, systemMode]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                marginTop: 33,
                textAlign: "center",
                color: theme.palette.primary,
            }}
        >
            <DRSVG size={80} color={theme.palette.primary.main}></DRSVG>

            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={() => handleClick(item)}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemButton
                        sx={{ ml: 9.5 }}
                        onClick={() => {
                            if (mode === "light") setMode("dark");
                            if (mode === "dark") setMode("light");
                        }}
                    >
                        <ListItemIcon>
                            <DarkMode color="primary" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const handleClick = (item) => {
        switch (item.name) {
            case "About":
                navigate("/about");
                break;
            case "Projects":
                navigate("/projects");
                break;
            case "Services":
                navigate("/services");
                break;
            case "Contact":
                navigate("/contact");
                break;
            default:
                navigate("/home");
                break;
        }
    };

    return (
        <>
            <Grid2 container pt={3}>
                <Grid2 size="auto" offset={{ xs: 1, md: 1.5, lg: 2 }}>
                    <Grid2 size={12} mt={1}>
                        <DRSVG
                            size={60}
                            color={theme.palette.primary.main}
                        ></DRSVG>
                    </Grid2>
                </Grid2>
                <Grid2
                    size="auto"
                    offset={{ sm: 0.5, md: 1, lg: 1.5 }}
                    display={{ xs: "none", sm: "block" }}
                >
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Grid2 container>
                            {navItems.map((item) => (
                                <Grid2 size="auto" padding={2.5}>
                                    <Button
                                        color="primary"
                                        key={item.id}
                                        sx={{
                                            textTransform: "none",
                                            transition:
                                                theme.transitions.create(
                                                    ["transform"],
                                                    {
                                                        duration:
                                                            theme.transitions
                                                                .duration
                                                                .standard,
                                                    },
                                                ),
                                            "&:hover": {
                                                transform: "scale(1.3)",
                                            },
                                        }}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item.name}
                                    </Button>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Box>
                </Grid2>
                <Grid2
                    size="auto"
                    offset={{ md: 0.5, lg: 2 }}
                    padding={2}
                    display={{ xs: "none", sm: "block" }}
                >
                    <IconButton
                        sx={{
                            transition: theme.transitions.create(
                                ["transform"],
                                {
                                    duration:
                                        theme.transitions.duration.standard,
                                },
                            ),
                            "&:hover": {
                                transform: "scale(1.3)",
                            },
                        }}
                        onClick={() => {
                            if (mode === "light") setMode("dark");
                            if (mode === "dark") setMode("light");
                        }}
                    >
                        <DarkMode color="primary" />
                    </IconButton>
                </Grid2>
                <Grid2
                    size="auto"
                    offset={{ xs: 7 }}
                    padding={2}
                    display={{ sm: "none" }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: "none" } }}
                    >
                        <MenuIcon color="primary" />
                    </IconButton>
                </Grid2>
            </Grid2>
            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default NavigationBar;
