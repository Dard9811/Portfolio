import { Fade, Grid2, Typography } from "@mui/material";
import ProfileImage from "../../images/Profile.jpg";

const About = ({ theme }) => {
    const imageWidth = 250;
    return (
        <>
            {/* This is for computer view */}
            <Grid2
                container
                display={{ xs: "none", sm: "flex" }}
                marginTop={13}
                alignItems="center"
            >
                <Fade in={true} timeout={1000}>
                    <Grid2 size="auto" offset={{ sm: 3 }}>
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
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Grid2>
            </Grid2>
            {/* This is for mobile view */}
            <Grid2 container display={{ sm: "none" }}>
                <Grid2 size={2} offset={{ xs: 2.5 }} marginTop={13}>
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
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Grid2>
            </Grid2>
        </>
    );
};

export default About;
