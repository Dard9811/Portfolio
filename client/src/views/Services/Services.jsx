/* 
    File name: Services.jsx
    Author: Daniel Auguto Ramirez Duenas
    Student ID: 301352357
 */
import { Box, Chip, Divider, Grid2, Typography } from "@mui/material";
import { DiMysql } from "react-icons/di";
import { FaAngular, FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMicrosoftazure, SiMongodb } from "react-icons/si";

const Services = ({ theme }) => {
    return (
        <>
            <Grid2
                container
                mb={4}
                alignItems="center"
                justifyContent={"center"}
            >
                {/* This is for computer view */}
                <Box display={{ xs: "none", sm: "block" }}>
                    <Grid2 size={{ xs: 11, sm: 12 }} offset={{ xs: 0.6 }}>
                        <Typography color="primary" variant="h3">
                            My areas of expertise!
                        </Typography>
                    </Grid2>
                </Box>
                {/* This is for mobile view */}
                <Box display={{ xs: "block", sm: "none" }}>
                    <Grid2 size={{ xs: 12, sm: 12 }}>
                        <Typography color="primary" variant="h4">
                            My areas of expertise!
                        </Typography>
                    </Grid2>
                </Box>
            </Grid2>
            <Grid2
                container
                pt={2}
                alignItems="center"
                justifyContent={"center"}
                mb={5}
            >
                <Box sx={{ display: "flex" }}>
                    <Grid2 size={5.5} offset={{ xs: 0.5 }}>
                        <Grid2 container>
                            <Box sx={{ display: "block" }}>
                                <Grid2 size={12}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="primary"
                                    >
                                        Web Development
                                    </Typography>
                                    <Chip
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <FaReact /> React
                                            </Typography>
                                        }
                                    ></Chip>
                                    <Chip
                                        sx={{ my: 1 }}
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <FaAngular /> Angular
                                            </Typography>
                                        }
                                    ></Chip>
                                </Grid2>
                                <Grid2 size={12} mt={25}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="primary"
                                    >
                                        DevOps and Deployment
                                    </Typography>
                                    <Chip
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <FaAws /> AWS
                                            </Typography>
                                        }
                                    ></Chip>
                                    <Chip
                                        sx={{ my: 1 }}
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <SiMicrosoftazure /> Azure
                                            </Typography>
                                        }
                                    ></Chip>
                                    <Chip
                                        sx={{ my: 1 }}
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <IoLogoFirebase /> Firebase
                                            </Typography>
                                        }
                                    ></Chip>
                                    <Chip
                                        sx={{ my: 1 }}
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <FaDocker /> Docker
                                            </Typography>
                                        }
                                    ></Chip>
                                </Grid2>
                            </Box>
                        </Grid2>
                    </Grid2>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            mx: 5,
                            borderWidth: 1,
                            borderColor: theme.palette.primary.main,
                        }}
                    ></Divider>
                    <Grid2 size={6}>
                        <Grid2 container mt={15}>
                            <Box sx={{ display: "block" }}>
                                <Grid2 size={12}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="primary"
                                        pt={1}
                                    >
                                        API Development and Integration
                                    </Typography>
                                    <Chip
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <FaNodeJs /> Node Js
                                            </Typography>
                                        }
                                    ></Chip>
                                    <Chip
                                        sx={{ my: 1 }}
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <SiExpress /> Express
                                            </Typography>
                                        }
                                    ></Chip>
                                </Grid2>
                                <Grid2 size={12} mt={25}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="primary"
                                        pt={1}
                                    >
                                        Database Design and Management
                                    </Typography>
                                    <Chip
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <SiMongodb /> Mongo DB
                                            </Typography>
                                        }
                                    ></Chip>
                                    <Chip
                                        sx={{ my: 1 }}
                                        color="info"
                                        label={
                                            <Typography variant="body1">
                                                <DiMysql /> MySQL
                                            </Typography>
                                        }
                                    ></Chip>
                                </Grid2>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
            </Grid2>
        </>
    );
};

export default Services;
