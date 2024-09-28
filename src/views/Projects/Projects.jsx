import { Box, Chip, Grid2, Grow, Typography } from "@mui/material";
import SYSplusCloudProject from "../../images/SYSplusCloudProject.png";
import CRMProject from "../../images/CRMProject.png";

const Projects = () => {
    const imageWidth = 400;
    return (
        <>
            <Grid2
                container
                mb={2}
                alignItems="center"
                justifyContent={"center"}
            >
                <Box display={"block"}>
                    <Grid2 size={12}>
                        <Typography color="primary" variant="h3">
                            What I've been up to!
                        </Typography>
                    </Grid2>
                </Box>
            </Grid2>

            <Grid2 container pt={2}>
                <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                    <Grid2
                        size={{ xs: 12, sm: 12, md: 4 }}
                        offset={{ xs: 0.5, md: 2 }}
                    >
                        <Grow in={true} timeout={1000}>
                            <Grid2
                                container
                                alignItems="center"
                                justifyContent={"center"}
                            >
                                <Grid2 size={{ xs: 12, lg: "auto" }}>
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
                                <Grid2 size={{ xs: 12, lg: 9.5 }}>
                                    <Grid2 container>
                                        <Grid2 size={12}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                color="primary"
                                                pt={1}
                                            >
                                                SYSplus Cloud
                                            </Typography>
                                        </Grid2>
                                        <Grid2 size={{ xs: 11, md: 12 }}>
                                            <Typography
                                                variant="body2"
                                                color="primary"
                                            >
                                                App where you can control your
                                                inventory across multiple
                                                locations, purchase the right
                                                quantities at the right time,
                                                take orders from mobile apps for
                                                your customers or vendors, or at
                                                your store counter, track the
                                                delivery of your orders, and
                                                have complete control of your
                                                business with SYSplus Cloud.
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                    <Grid2 size={12} my={2}>
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
                            </Grid2>
                        </Grow>
                    </Grid2>
                    <Grid2
                        size={{ xs: 12, sm: 12, md: 3.5 }}
                        offset={{ xs: 0.5 }}
                    >
                        <Grow in={true} timeout={2000}>
                            <Grid2
                                container
                                alignItems="center"
                                justifyContent={"center"}
                            >
                                <Grid2 size={{ xs: 12, lg: "auto" }}>
                                    <img
                                        width={imageWidth}
                                        src={CRMProject}
                                        alt="crm-project"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center center",
                                        }}
                                    ></img>
                                </Grid2>
                                <Grid2 size={{ xs: 12, lg: 10.5 }}>
                                    <Grid2 container>
                                        <Grid2 size={12}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                color="primary"
                                                pt={1}
                                            >
                                                Custom CRM
                                            </Typography>
                                        </Grid2>
                                        <Grid2 size={{ xs: 11, md: 12 }}>
                                            <Typography
                                                variant="body2"
                                                color="primary"
                                            >
                                                This app provides a
                                                comprehensive solution for
                                                managing client information,
                                                telemarketing teams, and overall
                                                customer interactions. It
                                                streamlines communication,
                                                tracks interactions, and
                                                optimizes engagement, ensuring
                                                every touchpoint between your
                                                company and its clients is
                                                well-managed, enhancing the
                                                overall customer experience
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                    <Grid2 size={12} my={2}>
                                        <Chip color="info" label="React"></Chip>
                                        <Chip
                                            color="info"
                                            label="Typescript"
                                            sx={{ mx: 1 }}
                                        ></Chip>
                                        <Chip
                                            color="info"
                                            label="MUI"
                                            sx={{ mx: 1 }}
                                        ></Chip>
                                        <Chip
                                            color="info"
                                            label="Nodejs"
                                            sx={{ mx: 1 }}
                                        ></Chip>
                                        <Chip
                                            color="info"
                                            label="Nestjs"
                                            sx={{ my: 2 }}
                                        ></Chip>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grow>
                    </Grid2>
                </Box>
            </Grid2>
        </>
    );
};

export default Projects;
