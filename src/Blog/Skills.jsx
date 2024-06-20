import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Actualiza el array de habilidades para usar imágenes SVG
const skills = [
  { name: 'JavaScript', icon: './javascript.svg' },
  { name: 'React', icon: './react.png' }, 
  { name: 'React Native', icon: './react-native.svg' },   
  { name: 'HTML', icon: './html.svg' }, 
  { name: 'CSS', icon: './css.svg' }, 
  { name: 'Node.js', icon: './node.svg' },   
  { name: 'MongoDB', icon: './mongo-db.png' },  
  { name: 'Java', icon: './java.svg' },   
  { name: 'Spring Boot', icon: './spring-boot.svg' },  
  { name: 'MySQL', icon: './mysql.svg' },   
  { name: 'Git', icon: './git.svg' },  
];

const settings = {
  dots: false, // Oculta los puntos de navegación
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true, // Activa el auto-play
  autoplaySpeed: 1000, // Velocidad del auto-play en milisegundos
  cssEase: 'linear', // Suaviza la transición
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    }
  ]
};

export default function Skills() {
  return (
    <Box id={'habilidades'} sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <Box key={index} sx={{ padding: 1 }}>
              <Card sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                paddingTop: 5,
                width: 130, 
                height: 130,
                mx: 'auto',
                background: 'linear-gradient(45deg, #072E33 50%, #05161A 90%)',
                border: '2px solid #0F969C',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out', // Add transition
                '&:hover': {
                  transform: 'scale(1.05)', // Add transform on hover
                  border: '1px solid #0F169C', // Change border color here
                },
              }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ mb: 1, width: '60px', height: '60px' }}>
                    <img src={skill.icon} alt={`${skill.name} icon`} style={{ width: '100%', height: '100%' }} />
                  </Box>
                  <CardContent sx={{ padding: '0' }}>
                    <Typography variant="body2" align="center" color={'white'}>
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
