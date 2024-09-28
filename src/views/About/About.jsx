import { Box, Chip, Fade, Grid2, Typography } from "@mui/material";
import ProfileImage from "../../images/Profile.jpg";

const About = ({ theme }) => {
    const imageWidth = 250;
    return (
        <>
            <Grid2 container alignItems="center" justifyContent={"center"}>
                <Box display={"block"}>
                    <Grid2 size={12} mb={3}>
                        <Typography color="primary" variant="h3">
                            A little about me!
                        </Typography>
                    </Grid2>
                </Box>
            </Grid2>
            {/* This is for computer view */}
            <Grid2
                container
                display={{ xs: "none", sm: "flex" }}
                my={5}
                alignItems="center"
            >
                <Fade in={true} timeout={1000}>
                    <Grid2 size="auto" offset={{ sm: 2, lg: 3 }}>
                        <div
                            alt="profile-image"
                            style={{
                                width: imageWidth,
                                height: imageWidth + 50,
                                borderRadius: "20%",
                                backgroundImage: `url(${ProfileImage})`,
                                backgroundSize: 400,
                                backgroundPosition: "30% 40%",
                            }}
                        ></div>
                    </Grid2>
                </Fade>
                <Grid2 size={4} textAlign={"center"} offset={{ sm: 1 }}>
                    <Typography color="primary" variant="body1" mb={2}>
                        Hi, my name is Daniel Ramirez. I am passionate about
                        technology and a web development enthusiast. I've used
                        it in my React, Node.js, Express projects and more.
                        Currently I'm studying an advanced diploma at Centennial
                        College in Software Technology Engineering - AI
                        practicing my AI knowledge and looking for new
                        opportunities. Take a deep look on my resume down below.
                    </Typography>
                    <Chip
                        color="info"
                        label="Check out my Resume!"
                        clickable
                        sx={{
                            transition: theme.transitions.create(
                                ["transform"],
                                {
                                    duration:
                                        theme.transitions.duration.standard,
                                },
                            ),
                            "&:hover": {
                                transform: "scale(1.1)",
                                backgroundColor: theme.palette.info.main,
                            },
                        }}
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1EOjC4WZigikNDvxV_pXrcYx5ImqMZg-F/view?usp=sharing",
                                "_blank",
                            )
                        }
                    ></Chip>
                </Grid2>
            </Grid2>
            {/* This is for mobile view */}
            <Grid2 container display={{ sm: "none" }} mt={10}>
                <Grid2 size={12} offset={{ xs: 3.1, md: 6, lg: 5 }} mb={5}>
                    <Typography color="primary" variant="h3">
                        About me
                    </Typography>
                </Grid2>
                <Grid2 size={2} offset={{ xs: 2.5 }}>
                    <div
                        style={{
                            width: imageWidth,
                            height: imageWidth + 50,
                            borderRadius: "20%",
                            backgroundImage: `url(${ProfileImage})`,
                            backgroundSize: 400,
                            backgroundPosition: "30% 40%",
                        }}
                    ></div>
                </Grid2>
                <Grid2 size={10} offset={{ xs: 1 }} mt={5} textAlign={"center"}>
                    <Typography color="primary" variant="body1" mb={2}>
                        Hi, my name is Daniel Ramirez. I am passionate about
                        technology and a web development enthusiast. I've used
                        it in my React, Node.js, Express projects and more.
                        Currently I'm studying an advanced diploma at Centennial
                        College in Software Technology Engineering - AI
                        practicing my AI knowledge and looking for new
                        opportunities. Take a deep look on my resume down below.
                    </Typography>
                    <Chip
                        color="info"
                        label="Resume"
                        clickable
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1EOjC4WZigikNDvxV_pXrcYx5ImqMZg-F/view?usp=sharing",
                                "_blank",
                            )
                        }
                    ></Chip>
                </Grid2>
            </Grid2>
        </>
    );
};

export default About;
