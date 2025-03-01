import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";

interface Promps {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: Promps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" ml="20px" mt="10px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
