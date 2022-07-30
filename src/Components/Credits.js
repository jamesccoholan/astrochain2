import "./Credits.css";
import { Stack } from "@mui/material";

function Credits() {
  return (
    <div class="credits">
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={{ xs: 0, sm: 2, md: 4, lg: 10 }}
        alignItems="center"
        width="100%"
        height="auto"
        object-fit="cover"
        overflow="auto"
        style={{ justifyContent: "center", padding: "20px 0 40px 0" }}
      >
        <div class="credits-text">
          A list for all animators and team members in pop out window
        </div>
        <div class="credits-text">
          A list for all animators and team members in pop out window
        </div>
        <div class="credits-text">
          A list for all animators and team members in pop out window
        </div>
      </Stack>
    </div>
  );
}

export default Credits;
