import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton } from '@mui/material';

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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: '#888', // Color del label cuando no está enfocado
  },
  '& label.Mui-focused': {
    color: '#00CED1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00CED1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#888',
    },
    '&:hover fieldset': {
      borderColor: '#00CED1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00CED1',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white', // Cambiar color del texto ingresado a blanco
  },
}));

const ContactPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  background: '#121212',
  color: '#fff',
  mb: 4,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '1px solid #0F969C',
  borderRadius: 5,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  '&:hover': {
    border: '1px solid #03DAC6',
    transform: 'scale(1.01)',
  },
  '&::before': {
    content: '"Contactame"', // El texto que quieres mostrar en el borde
    position: 'absolute',
    top: '-10px', // Ajusta la posición vertical del texto
    left: '10px', // Ajusta la posición horizontal del texto
    backgroundColor: '#121212', // Fondo del texto para que no se mezcle con el borde
    padding: '0 5px', // Ajusta el padding del texto
    color: '#00CED1', // Color del texto
    borderRadius: '20px',
    fontSize: '20px', // Tamaño del texto
  },
}));

export const ContactForm = ({ contactInfo }) => {
  const form = useRef();
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true); // Deshabilita el botón al iniciar el envío

    emailjs.sendForm('service_ozvyflc', 'template_oxdi2fi', form.current, 'GeiOVGmx2f_jM86nq')
      .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado correctamente');
        form.current.reset(); // Reinicia el formulario después del envío
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje, inténtalo nuevamente');
      })
      .finally(() => {
        setDisable(false); // Habilita el botón después de completar el envío
      });
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: 5 }} id="contacto">
      <Grid item xs={12} md={6}>
        <ContactPaper>
          <StyledWindowControls>
            <StyledWindowButton type="close" />
            <StyledWindowButton type="minimize" />
            <StyledWindowButton type="resize" />
          </StyledWindowControls>

          <form ref={form} onSubmit={handleSubmit} style={{ width: '100%' }}>
            <StyledTextField
              id="name"
              name="name"
              label="Nombre"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <StyledTextField
              id="email"
              name="email"
              label="Correo Electrónico"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
            />
            <StyledTextField
              id="coment"
              name="coment"
              label="Mensaje"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button 
              type="submit" 
              disabled={disable} // Deshabilita el botón mientras se envía el correo
              variant="contained" 
              size="large" 
              sx={{ 
                mt: 2, 
                background: 'linear-gradient(45deg, #072E33 50%, #0F969C 90%)', 
                '&:hover': { backgroundColor: '#00CED1' } 
              }}
            >
              Enviar Mensaje
            </Button>
          </form>
        </ContactPaper>
      </Grid>
      <Grid item xs={12} md={6} sx={{ color: '#00CED1' }}>
        <Typography variant="subtitle1" color="inherit" paragraph>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={contactInfo.email} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={contactInfo.phone} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={contactInfo.address} />
            </ListItem>
          </List>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              border: '2px solid transparent',
              transition: 'border-color 0.3s, transform 0.3s',
              '&:hover': {
                borderColor: '#00CED1',
                transform: 'scale(1.1)',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#fff',
              border: '2px solid transparent',
              transition: 'border-color 0.3s, transform 0.3s',
              '&:hover': {
                borderColor: '#00CED1',
                transform: 'scale(1.1)',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

ContactForm.propTypes = {
  contactInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactForm;
