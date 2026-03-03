import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import profilePhoto from "./assets/profile.jpg";
import selfie from "./assets/selfie.jpeg";

function Resume() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 5, minHeight: "100vh", minWidth: "100vw" }}>
      <Container maxWidth="md">
        <Paper elevation={6} sx={{ borderRadius: 3, p: { xs: 3, md: 5 } }}>
          {/* Header */}
          <Grid container spacing={35} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Jason Yong
              </Typography>
              <List dense>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href="mailto:jasonywx283@gmail.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        jasonywx283@gmail.com
                      </a>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="0178585910" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href="https://github.com/jasonywx283"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        jasonywx283
                      </a>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Avatar
                alt="Jason Yong Wei Xia"
                src= {selfie}
                sx={{ width: 140, height: 140, border: "4px solid #1976d2" }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "#1976d2", borderWidth: 2, my: 3 }} />

          {/* Summary */}
          <Box mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#1976d2", mb: 1, fontWeight: "bold" }}
            >
              Summary
            </Typography>
            <Typography>
              A 3rd-year student from University Malaysia Sarawak. Skilled in
              Adobe Photoshop for image editing, along with basic proficiency
              in HTML, CSS, and JavaScript for web development. Experienced in
              music and audio production using Ableton Live 11 Lite. Quick
              learner with strong attention to detail and a commitment to
              continuous skill development.
            </Typography>
          </Box>

          {/* Skills */}
          <Box mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#1976d2", mb: 1, fontWeight: "bold" }}
            >
              Skills
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Programming: C, C++, Python, Java, Kotlin, JavaScript, HTML, CSS" />
              </ListItem>
              <ListItem>
                <ListItemText primary="UI/UX Design" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prototype Creation" />
              </ListItem>
            </List>
          </Box>

          {/* Education */}
          <Box mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#1976d2", mb: 1, fontWeight: "bold" }}
            >
              Education
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="2021 - 2023: Form 6 STPM (SMK Meradong)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2023 - 2027: Bachelor of Computer Science (Software Engineering) - University Malaysia Sarawak"
                />
              </ListItem>
            </List>
          </Box>

          {/* Projects */}
          <Box mb={4}>
            <Typography
              variant="h5"
              sx={{ color: "#1976d2", mb: 1, fontWeight: "bold" }}
            >
              Projects
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="item  management system" />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Resume;