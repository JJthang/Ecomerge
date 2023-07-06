import { Box, Typography } from "@mui/material";
type Props = {
  title : string,
  subtitle : string
}

const Header = ({title, subtitle}: Props) => {
  return <>
  <Box sx={{ mb : 2 }} >
    <Typography variant='h3'fontWeight="bold" sx={{ color: "white" }} >
      {title}
    </Typography>
    <Typography variant='h6' sx={{ color: "white" }}  >
      {subtitle}
    </Typography>
  </Box>
  </>
}
export default Header