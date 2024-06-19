import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Skills from './Skills';
import {  Divider, Typography } from '@mui/material';
import { globalStyles, theme } from './Theme';
import { Certifications } from './Certifications';
import { About } from './About';
import { ContactForm } from './ContactForm';

const sections = [
  { title: 'Sobre mi', url: 'sibre-mi' },
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

const featuredPosts = [
  {
    title: 'Calendar App',
    description: 'Description of the first project.',
    link: 'https://calender-app-phi.vercel.app/',
    image: './calendar.png',
    imageLabel: './calendar.png',
  },
  {
    title: 'Journal App',
    description: 'Description of the second project.',
    link: 'https://journal-app-sepia.vercel.app/',
    image: './journal.png',
    imageLabel: 'Project Two Image',
  },
  {
    title: 'Giph App',
    description: 'Description of the second project.',
    link: 'https://gig-app.vercel.app/',
    image: './giph.png',
    imageLabel: 'Project Two Image',
  },
];

const sidebar = {
  archives: [
    { title: 'March 2023', url: '#' },
    { title: 'February 2023', url: '#' },
    { title: 'January 2023', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};



export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Container maxWidth="lg" 
       >
        <Header title="Fernan de Hoyos" sections={sections} />
        <main>

          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid item  sx={{ display: 'flex', justifyContent: 'center', mt: 3,}}>
          <Divider />
          <Typography variant="h4" gutterBottom color={'white'}>
          Sobre mí
          </Typography>
          </Grid>
          <Divider />
          <About id='sobre-mi'/>
          <Grid item  sx={{ display: 'flex', justifyContent: 'center', mt: 3,}}>
          <Divider />
          <Typography variant="h4" gutterBottom color={'white'}>
          Proyectos destacados
          </Typography>
          </Grid>
          <Divider />
          <Grid id='proyectos' container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <Grid item  sx={{ display: 'flex', justifyContent: 'center', mt: 3,}}>
          <Divider />
          <Typography variant="h4" gutterBottom color={'white'}>
          Certificaciones
          </Typography>
            
          </Grid>
          <Divider />
          <Grid container spacing={3} sx={{ mt: 1 }}>
      <Certifications id='certificados'/>
    </Grid>
        <Skills id='habilidades' />
          
        <Grid item  sx={{ display: 'flex', justifyContent: 'center', mt: 3,}}>
          <Divider />
          <Typography variant="h4" gutterBottom color={'white'}>
          Contacto
          </Typography>
          </Grid>
          
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
