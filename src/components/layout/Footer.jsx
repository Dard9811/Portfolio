/* 
    File name: Footer.jsx
    Author: Daniel Auguto Ramirez Duenas
    Student ID: 301352357
 */
import { Grid2, Typography } from "@mui/material";

const Footer = ({ theme }) => {
    return (
        <Grid2
            container
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Grid2 size={12}>
                <Grid2
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Grid2 size={12}>
                        <Grid2 container>
                            <Grid2 size={6}>
                                <Typography color="primary">
                                    Copyright &copy;{" "}
                                    {`${new Date().getFullYear()}`}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default Footer;
