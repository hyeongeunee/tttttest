import PropTypes from "prop-types";
// @mui
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";


// components


// ----------------------------------------------------------------------



const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
// ----------------------------------------------------------------------

TourCard.propTypes = {
  tourArray: PropTypes.object,
};

export default function TourCard({ tourArray }) {
  const { name, cover, eName} = tourArray;

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          {eName}
        </Link>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
