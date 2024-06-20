import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { articlesAndCertifications } from '../data/certifications';

export const Certifications = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 1 }} id="certificados">
      {/* Iterar sobre los artículos y certificaciones */}
      {articlesAndCertifications.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            elevation={15}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Ajusta la dirección según el tamaño de pantalla
              mb: 2,
              position: 'relative',
              background: 'linear-gradient(45deg, #121212 50%, #010101 90%)',
              color: '#fff',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out', // Añade transición
              '&:hover': {
                transform: 'scale(1.01)', // Añade transform al hacer hover
                border: '1px solid #03DAC6',
              },
            }}
          >
            <CardActionArea
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ width: { xs: '100%', sm: '40%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <CardMedia
                component="img"
                sx={{ width: '100%', height: 'auto' }}
                image={item.image}
                alt={`${item.title} Image`}
              />
            </CardActionArea>
            <CardContent sx={{ flex: 1, padding: '8px' }}>
              <Typography component="h3" variant="h6" sx={{ fontSize: '1.2rem' }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color={'white'} sx={{ fontSize: '1rem' }}>
                {item.description}
              </Typography>
              <Typography variant="subtitle2" color={'white'} sx={{ fontSize: '0.8rem' }}>
                {item.date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
