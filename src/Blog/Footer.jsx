import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import IconButton from '@mui/material/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://example.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#072E33',
        color: '#fff',
        py: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
     
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: 4,
          px: 2,
        }}
      >
        <Typography variant="body2" color="inherit">
          Developed by{' '}
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/fernan-de-hoyos-290072197/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#0F969C', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Fernan
          </Link>
        </Typography>
        <Box>
          <IconButton
            component="a"
            href="https://github.com/FernanDeHoyos11/portafolio-fernan/fork"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <ForkRightIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/FernanDeHoyos11/portafolio-fernan/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <StarBorderIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
