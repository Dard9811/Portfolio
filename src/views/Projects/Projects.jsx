import { Box, Chip, Grid2, Grow, Typography } from "@mui/material";
import SYSplusCloudProject from "../../images/SYSplusCloudProject.png";

const Projects = ({ theme }) => {
    const imageWidth = 400;
    return (
        <Box display={"flex"}>
            <Grid2 container pt={5}>
                <div>
                    <Grow in={true} timeout={1000}>
                        <Grid2 container>
                            <Grid2 size="auto" offset={{ sm: 5 }}>
                                <img
                                    width={imageWidth}
                                    src={SYSplusCloudProject}
                                    alt="sysplus-project"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center center",
                                    }}
                                ></img>
                            </Grid2>
                            <Grid2 size={6} offset={{ sm: 5 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="primary"
                                    pt={1}
                                >
                                    SYSplus Cloud
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </Grid2>
                            <Grid2 size={6} offset={{ sm: 5 }} my={2}>
                                <Chip color="info" label="React"></Chip>
                                <Chip
                                    color="info"
                                    label="Typescript"
                                    sx={{ mx: 1 }}
                                ></Chip>
                                <Chip
                                    color="info"
                                    label="Axios"
                                    sx={{ mx: 1 }}
                                ></Chip>
                                <Chip
                                    color="info"
                                    label="Nodejs"
                                    sx={{ mx: 1 }}
                                ></Chip>
                                <Chip
                                    color="info"
                                    label="Express"
                                    sx={{ my: 2 }}
                                ></Chip>
                            </Grid2>
                        </Grid2>
                    </Grow>
                </div>
            </Grid2>
            <Grid2 container pt={5}>
                <div>
                    <Grow in={true} timeout={2000}>
                        <Grid2 container>
                            <Grid2 size="auto" offset={{ sm: 1 }}>
                                <img
                                    width={imageWidth}
                                    src={SYSplusCloudProject}
                                    alt="sysplus-project"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center center",
                                    }}
                                ></img>
                            </Grid2>
                            <Grid2 size={6} offset={{ sm: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="primary"
                                    pt={1}
                                >
                                    SYSplus Cloud
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </Grid2>
                            <Grid2 size={6} offset={{ sm: 1 }} my={2}>
                                <Chip color="info" label="React"></Chip>
                                <Chip
                                    color="info"
                                    label="Typescript"
                                    sx={{ mx: 1 }}
                                ></Chip>
                                <Chip
                                    color="info"
                                    label="Axios"
                                    sx={{ mx: 1 }}
                                ></Chip>
                                <Chip
                                    color="info"
                                    label="Nodejs"
                                    sx={{ mx: 1 }}
                                ></Chip>
                                <Chip
                                    color="info"
                                    label="Express"
                                    sx={{ my: 2 }}
                                ></Chip>
                            </Grid2>
                        </Grid2>
                    </Grow>
                </div>
            </Grid2>
        </Box>
    );
};

export default Projects;
