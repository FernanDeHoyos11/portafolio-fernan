import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import GetAppIcon from '@mui/icons-material/GetApp';

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  elevation: '30px',
  color: theme.palette.common.white,
  background: 'linear-gradient(45deg, #010101 50%, #121212 90%)',
  borderRadius: 2,
  padding: theme.spacing(3),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  '&:hover': {
    border: '1px solid #03DAC6',
    transform: 'scale(1.01)',
  },
}));

const StyledWindowControls = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
}));

const StyledWindowButton = styled('div')(({ theme, type }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: type === 'close' ? '#E76F51' : (type === 'minimize' ? '#F4A261' : '#2A9D8F'),
  '&:hover': {
    backgroundColor: theme.palette.grey[800],
    cursor: 'pointer',
  },
}));

const CodeTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: '14px',
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap',
  marginTop: theme.spacing(1), // Ajuste para el margen superior
}));

const PointItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  '&::before': {
    content: '"•"',
    marginRight: theme.spacing(1),
    fontSize: '18px',
  },
}));

const PointJava = styled(PointItem)(({ theme }) => ({
  color: '#2A9D8F', // Color para Java
}));

const PointReact = styled(PointItem)(({ theme }) => ({
  color: '#2A9D8F', // Color para React
}));

const PointMySQL = styled(PointItem)(({ theme }) => ({
  color: '#2A9D8F', // Color para MySQL
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E76F51',
  color: theme.palette.common.white,
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#d15847',
    transform: 'scale(1.01)', // Add transform on hover
    border: '1px solid #03DAC6', // Change border color here
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #072E33 50%, #0F969C 90%)',
  color: theme.palette.common.white,
  margin: 5,
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#e3934e',
    transform: 'scale(1.01)', // Add transform on hover
    border: '1px solid #03DAC6', // Change border color here
  },
}));

const DeveloperName = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#0F969C', // Color dorado para el nombre
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const DeveloperRole = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#00CED1', // Color azul claro para el rol de desarrollador
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

export const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <StyledBox>
          <StyledWindowControls>
            <StyledWindowButton type="close" />
            <StyledWindowButton type="minimize" />
            <StyledWindowButton type="resize" />
          </StyledWindowControls>
          <Typography variant="h4" gutterBottom>
            Perfil Profesional
          </Typography>
          <Typography variant="body1" paragraph>
            Soy un desarrollador de software con una sólida 
            formación en Ingeniería de Sistemas y experiencia 
            especializada en el desarrollo web. Poseo conocimientos
            profundos y experiencia práctica en tecnologías clave
            como Java, React y MySQL. Mi trayectoria incluye habilidades
            avanzadas en análisis, evaluación y desarrollo de proyectos,
            centrándome en la creación de soluciones innovadoras que mejoran
            la experiencia del usuario y satisfacen las necesidades del cliente.
          </Typography>
          <CodeTypography>
            <PointJava>Desarrollo avanzado con Java</PointJava>
            <PointReact>Desarrollo con React</PointReact>
            <PointMySQL>Gestión eficiente de bases de datos con MySQL</PointMySQL>
            <PointReact>Desarrollo de aplicaciones web escalables y robustas</PointReact>
            <PointJava>Análisis y optimización de procesos</PointJava>
            <PointReact>Implementación de prácticas de desarrollo ágil</PointReact>
          </CodeTypography>
        </StyledBox>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: { xs: 'center', sm: 'left' } }}>
          <DeveloperName variant="h4" gutterBottom>
            ¡Hola! Soy Fernan de hoyos
          </DeveloperName>
          <DeveloperRole variant="body1" paragraph>
            Desarrollador de Software
          </DeveloperRole>
          <Typography variant="body1" paragraph>
            Estoy emocionado de compartir mi perfil profesional
            contigo. Si tienes alguna pregunta o deseas colaborar
            en un proyecto, no dudes en contactarme.
          </Typography>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <ContactButton variant="contained" size="large" href="#contacto" startIcon={<MailIcon />}>
                Contacto
              </ContactButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DownloadButton 
                variant="contained" 
                size="large" 
                href="https://drive.google.com/file/d/1bDehSVOyzLcTniOP37OpN5NtQe8DTArI/view?usp=sharing"
                startIcon={<GetAppIcon />}
                target="_blank">
                Descargar CV
              </DownloadButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
