import { Container, Card, Grid, Typography, Link, Avatar, Divider, Box, Button, Chip } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import LanguageIcon from '@mui/icons-material/Language';

function App() {
  const skills = ["React", "JavaScript", "C++", "Python", "Git", "SQL", "HTML/CSS"];
  const languages = ["Chinese", "Malay", "English"];
  const projects = [
    {
      title: "Item Management System",
      description: "Developed a full-stack system with React frontend and Node.js backend to manage school inventory.",
      link: "https://github.com/jasonywx283/inventory-system"
    }
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start',  // 让内容靠上但居中水平
        backgroundColor: '#f5f5f5', 
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ p: 4, boxShadow: 8, borderRadius: 3, backgroundColor: '#fff', mx: "auto" }}>
          
          {/* 顶部布局 */}
          <Grid container spacing={2} alignItems="center">
            {/* Avatar */}
            <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
              <Avatar 
                src="/selfie.jpeg" 
                alt="Jason Yong Wei Xia"
                sx={{ width: 100, height: 100, mx: "auto", border: '2px solid #1976d2' }}
              />
            </Grid>

            {/* 姓名 + 简介 */}
            <Grid item xs={12} md={5}>
              <Typography variant="h4" fontWeight="bold">Jason Yong Wei Xia</Typography>
              <Typography variant="subtitle1">Third Year Software Engineering Student</Typography>
            </Grid>

            {/* Contact + Download */}
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WhatsAppIcon color="success" fontSize="small" />
                    <Link href="https://wa.me/60178585910" target="_blank" rel="noopener">
                      +60 178585910
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon color="primary" fontSize="small" />
                    <Link href="mailto:jasonywx283@gmail.com" underline="hover">
                      jasonywx283@gmail.com
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GitHubIcon fontSize="small" />
                    <Link href="https://github.com/jasonywx283" target="_blank" rel="noopener" underline="hover">
                      jasonywx283
                    </Link>
                  </Box>

                  {/* Download Resume */}
                  <Button 
                    variant="outlined" 
                    sx={{ mt: 1 }}
                    component="a"
                    href="/Jason_Yong_Resume.pdf" // 放在 public 文件夹里
                    download
                  >
                    Download Resume
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Skills */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <WorkIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h5">Skills</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {skills.map((skill, idx) => (
              <Chip key={idx} label={skill} color="primary" />
            ))}
          </Box>

          {/* Languages Spoken */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LanguageIcon color="secondary" sx={{ mr: 1 }} />
            <Typography variant="h5">Languages Spoken</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {languages.map((lang, idx) => (
              <Chip key={idx} label={lang} color="secondary" />
            ))}
          </Box>

          {/* Education */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <SchoolIcon color="action" sx={{ mr: 1 }} />
            <Typography variant="h5">Education</Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3 }}>
            University Malaysia Sarawak — Bachelor's Degree in Software Engineering, CGPA 3.81
          </Typography>

          {/* Experience */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <WorkIcon color="action" sx={{ mr: 1 }} />
            <Typography variant="h5">Experience</Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Part-time Tutor — Taught mathematics to primary school students.
          </Typography>

          {/* Achievements */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <StarIcon color="warning" sx={{ mr: 1 }} />
            <Typography variant="h5">Achievements</Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3 }}>
            UNIMAS Dean’s List (5 times)
          </Typography>

          {/* Projects */}
          <Typography variant="h5" gutterBottom>Projects</Typography>
          <Grid container spacing={3}>
            {projects.map((proj, index) => (
              <Grid item xs={12} md={12} key={index}>
                <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', border: '1px solid #ccc' }}>
                  <Typography variant="h6" gutterBottom>{proj.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>{proj.description}</Typography>
                  <Button variant="contained" size="small" href={proj.link} target="_blank" rel="noopener">
                    View Project
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

export default App;