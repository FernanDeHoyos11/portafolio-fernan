import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
    elevation={15} 
    sx={{
      position: 'relative',
      background: '#121213',
      color: '#fff',
      mb: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        border: '1px solid #03DAC6',
        transform: 'scale(1.01)', 
      },
    }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5} sx={{paddingRight:10,}}>
          <Box
            sx={{
              position: 'relative',
              height: '100%', // No height to Box, height is controlled by padding
              pt: '50%', // 1:1 Aspect Ratio
              width: '100%',
              maxWidth: '300px',
              backgroundSize: '150%', // Increase this value to "zoom" in the image
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${post.image})`,
              borderRadius: '50%', // Hacer la imagen redonda
              ml: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
