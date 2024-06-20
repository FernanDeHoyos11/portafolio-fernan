import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Skills from './Skills';
import { Divider, Typography, IconButton } from '@mui/material';
import { darkTheme, lightTheme } from './Theme';
import { Certifications } from './Certifications';
import { About } from './About';
import { ContactForm } from './ContactForm';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { featuredPosts } from '../data/proyects';

const sections = [
  { title: 'Sobre mi', url: 'sobre-mi' },
  { title: 'Proyectos', url: 'proyectos' },
  { title: 'Certificados', url: 'certificados' },
  { title: 'Habilidades', url: 'habilidades' },
  { title: 'Contacto', url: 'contacto' },
];

const mainFeaturedPost = {
  title: 'Fernan D. De Hoyos',
  description: "Software Developer",
  image: './perfil.png',
  imageText: 'main image description',
  linkText: 'View my projects…',
};

export default function Blog() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header title="Fernan de Hoyos" sections={sections} />
      <Container maxWidth="lg" sx={{ overflowX: 'hidden' }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
         
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            style={{ 
              fontSize: '30px',
              position: 'absolute',
              left: 230,
              top: 11}}
               // Ajusta el tamaño del botón
          >
            {currentTheme === darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Grid>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 3, width: '100%' }}>
            <Divider />
            <Typography variant="h4" gutterBottom color={currentTheme.typography}>
              Sobre mí
            </Typography>
          </Grid>
          <Divider />
          <About id='sobre-mi' />
          <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 3, width: '100%' }}>
            <Typography variant="h4" gutterBottom color={currentTheme.typography}>
              Proyectos destacados
            </Typography>
          </Grid>
          <Divider />
          <Grid id='proyectos' container sx={{ mt: 0.5 }} spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 3, width: '100%' }}>
            <Divider />
            <Typography variant="h4" gutterBottom color={currentTheme.typography}>
              Certificaciones
            </Typography>
          </Grid>
          <Divider />
          <Certifications id='certificados' />
          <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 3, width: '100%' }}>
            <Divider />
            <Typography variant="h4" gutterBottom color={currentTheme.typography}>
              Habilidades
            </Typography>
          </Grid>
          <Divider />
          <Skills id='habilidades' />
          <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 3, width: '100%' }}>
            <Divider />
            <Typography variant="h4" gutterBottom color={currentTheme.typography}>
              Contacto
            </Typography>
          </Grid>
          <Divider />
          <ContactForm
            id='contacto'
            contactInfo={{
              email: 'fernandehoyos93@gmail.com',
              phone: '+57 3136601690',
              address: 'La pradera, Monteria - Cordoba'
            }}
          />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Thank you for visiting my portfolio!"
      />
    </ThemeProvider>
  );
}
