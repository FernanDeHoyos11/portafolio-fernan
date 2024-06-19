import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

export const Certifications = () => {
  // Objeto que contiene los datos de los artículos y las certificaciones
  const articlesAndCertifications = [
    {
      type: 'Certificacion',
      title: 'React: de cero a experto (MERN y Hooks)',
      date: 'Noviembre 03, 2023',
      description: 'Curso completo de React con Hooks y pruebas unitarias',
      image: './udemy-react.jpg',
      link: 'https://www.udemy.com/certificate/UC-6390500a-94a9-4cb2-a5e7-cc3200909130/'
    },
    {
      type: 'Certificacion',
      title: 'Spring framework y spring boot',
      date: 'Noviembre 25, 2022',
      description: 'Curso completo de Spring Framework y Java desde cero con Spring Boot.',
      image: './spring.jpg',
      link: 'https://www.udemy.com/certificate/UC-d482024b-6ed7-4ad8-a5f5-71cee304f2a6/'
    },
    {
      type: 'Certificacion',
      title: 'Creacion de API REST con NodeJs y SQL server',
      date: 'Mayo 22, 2022',
      description: 'Creacion de api rest con nodeJs y sql-server',
      image: './node.jpg',
      link: 'https://www.udemy.com/certificate/UC-fce14b24-db99-434b-896e-afdd53cc7213/'
    },
    {
      type: 'certification',
      title: 'Desarrollo Nodejs, Aplicacion y testing',
      date: 'Septiembre 1, 2023',
      description: 'Desarrollo Nodejs, Aplicacion, testing y principios de seguridad',
      image: 'node_2.jpg',
      link: 'https://www.udemy.com/certificate/UC-0865872f-8be9-46bf-b63f-00fda00f503d/'
    },
    {
      type: 'certification',
      title: 'Desarrollo web basico html y css',
      date: 'Abril 10, 2023',
      description: 'Desarrollo de templates usando principios basicos y avanzados de html y css',
      image: 'web_basic.png',
      link: 'https://www.coderhouse.com/co/certificados/64424cc580dff3000239d574?lang=es'
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mt: 1 }} id='certificados'>
      {/* Iterar sobre los artículos y certificaciones */}
      {articlesAndCertifications.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card 
            elevation={15}
            sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              mb: 2,
              position: 'relative',
              background: 'linear-gradient(45deg, #121212 50%, #010101 90%)',
              color: '#fff',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out', // Add transition
              '&:hover': {
                transform: 'scale(1.01)', // Add transform on hover
                border: '1px solid #03DAC6',
              },
            }}
          >
            <CardActionArea
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
