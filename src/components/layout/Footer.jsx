import { Grid2, Typography } from "@mui/material";

const Footer = ({ theme }) => {
    return (
        <Grid2 container mt={5}>
            <Grid2 size={12}>
                <Grid2 container alignItems="center" justifyContent={"center"}>
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
