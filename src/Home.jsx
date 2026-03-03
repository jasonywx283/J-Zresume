import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
  sx={(theme) => ({
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 3,
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(135deg, #e0f7fa, #fce4ec)"
        : "linear-gradient(135deg, #1e1e1e, #121212)",
  })}
>

      <Box sx={{ maxWidth: 1000, width: "100%" }}>
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          sx={{mb: 6 }}
        >
          Welcome to Jason Yong & Zi Yu Resume Portfolio
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Resume 1 Card */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                boxShadow: 6,
                borderRadius: 3,
                background: "linear-gradient(135deg, #81d4fa, #4fc3f7)",
                color: "#fff",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 12,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Lau Zi Yu's Resume
                </Typography>
                <Typography variant="body1" mb={3}>
                  Multimedia Computing Student <br />
                  CGPA: 3.49
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/resume")}
                  sx={{ fontWeight: "bold" }}
                >
                  View Resume
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Resume 2 Card */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                boxShadow: 6,
                borderRadius: 3,
                background: "linear-gradient(135deg, #ffcc80, #ffb74d)",
                color: "#333",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 12,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Jason Yong's Resume
                </Typography>
                <Typography variant="body1" mb={3}>
                  Software Engineering Student <br />
                  CGPA: 3.81
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => navigate("/resume2")}
                  sx={{ fontWeight: "bold" }}
                >
                  View Resume
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;