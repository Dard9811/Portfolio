/* 
    File name: Home.jsx
    Author: Daniel Auguto Ramirez Duenas
    Student ID: 301352357
 */
import { Grid2, Typography, Zoom } from "@mui/material";

const Home = ({ theme }) => {
    return (
        <Zoom in={true} timeout={1000}>
            <Grid2 container display="flex">
                {/* This is for computer view */}
                <Grid2
                    size="auto"
                    offset={{ sm: 2, md: 3, lg: 3.5 }}
                    display={{ xs: "none", sm: "block" }}
                    sx={{
                        my: 20,
                    }}
                >
                    <Typography color="primary" variant="h1" component="h1">
                        Daniel Ramirez
                    </Typography>
                    <Typography color="error" variant="h3" display="inline">
                        Full-stack
                    </Typography>{" "}
                    <Typography color="primary" variant="h3" display="inline">
                        Developer
                    </Typography>
                </Grid2>
                {/* This is for mobile view */}
                <Grid2
                    size="auto"
                    offset={{ xs: 1.6 }}
                    display={{ sm: "none" }}
                    sx={{ mt: 35 }}
                >
                    <Typography
                        color="primary"
                        variant="h3"
                        component="h3"
                        display={{ sm: "none" }}
                    >
                        Daniel Ramirez
                    </Typography>
                    <Typography color="error" variant="h5" display="inline">
                        Full-stack
                    </Typography>{" "}
                    <Typography color="primary" variant="h5" display="inline">
                        Developer
                    </Typography>
                </Grid2>
            </Grid2>
        </Zoom>
    );
};

export default Home;
