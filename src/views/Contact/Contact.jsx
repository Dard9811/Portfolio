/* 
    File name: Contact.jsx
    Author: Daniel Auguto Ramirez Duenas
    Student ID: 301352357
 */
import { Send } from "@mui/icons-material";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

const Contact = ({ theme }) => {
    return (
        <>
            <Grid2
                container
                mb={2}
                alignItems="center"
                justifyContent={"center"}
            >
                {/* This is for computer view */}
                <Box display={{ xs: "none", sm: "block" }}>
                    <Grid2 size={12}>
                        <Typography color="primary" variant="h3">
                            I'd love to hear from you!
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography color="primary" variant="body2">
                            If you have any questions or would just like to say
                            hello, feel free to send me an email.
                        </Typography>
                    </Grid2>
                </Box>
                {/* This is for mobile view */}
                <Box display={{ xs: "block", sm: "none" }}>
                    <Grid2
                        container
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <Grid2 size={12}>
                            <Box display={"block"}>
                                <Grid2
                                    container
                                    alignItems="center"
                                    justifyContent={"center"}
                                >
                                    <Grid2 size={11}>
                                        <Typography
                                            color="primary"
                                            variant="h4"
                                        >
                                            I'd love to hear from you!
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9}>
                                        <Typography
                                            color="primary"
                                            variant="body2"
                                        >
                                            If you have any questions or would
                                            just like to say hello, feel free to
                                            send me an email.
                                        </Typography>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
            </Grid2>
            <Grid2
                container
                alignItems="center"
                justifyContent={"center"}
                mt={5}
            >
                <Grid2 size={{ xs: 7, sm: 4 }}>
                    <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                        <Grid2 container rowSpacing={4} columnSpacing={4}>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField label="First Name" fullWidth />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField label="Last Name" fullWidth />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField label="Contact Number" fullWidth />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField label="Email Address" fullWidth />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField
                                    multiline
                                    rows={4}
                                    label="Message"
                                    fullWidth
                                />
                            </Grid2>
                            <Grid2 size={12}>
                                <Button
                                    fullWidth
                                    color="info"
                                    variant="contained"
                                    type="button"
                                    sx={{
                                        textTransform: "none",
                                        transition: theme.transitions.create(
                                            ["transform"],
                                            {
                                                duration:
                                                    theme.transitions.duration
                                                        .standard,
                                            },
                                        ),
                                        "&:hover": {
                                            transform: "scale(1.1)",
                                            backgroundColor:
                                                theme.palette.info.main,
                                        },
                                    }}
                                    endIcon={<Send />}
                                >
                                    Send Email
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
            </Grid2>
        </>
    );
};
export default Contact;
