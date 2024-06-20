import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from '@mui/material';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item spacing={2} xs={12} md={4} id='proyectos'  >
      <Card 
      elevation={15}
        sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        background: '#121212',
        borderRadius: 2,
        color: 'white',
        '&:hover': {
          border: '1px solid #03DAC6', // Change border color here
        }, }}>
        <CardActionArea 
          component="a" 
          href={post.link} 
          target="_blank"
          rel="noopener noreferrer">
          <CardMedia
            component="img"
            sx={{ width: '100%', display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </CardActionArea>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.description}
          </Typography>
          <Link href={post.link} sx={{display: 'flex', flexDirection: 'row', gap: 1}} target="_blank" rel="noopener noreferrer" underline="hover">
            <Typography variant="subtitle1" color="primary">
              {post.link}
            </Typography>
            <OpenInNewIcon color='black'/>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired, // Added link prop
  }).isRequired,
};

export default FeaturedPost;
