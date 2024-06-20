import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Link, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {
  const { sections, title } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <div
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton onClick={toggleDrawer(false)} sx={{ m: 1 }}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <List>
        {sections.map((section) => (
          <ListItem button key={section.title} component="a" href={`#${section.url}`}>
            <ListItemText primary={section.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between' }}>
          <Typography
            component="h2"
            variant="h4"
            color="#0F969C"
            noWrap
            sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}
          >
            {title}
          </Typography>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto', display: { xs: 'none', md: 'flex' } }}
          >
            {sections.map((section) => (
              <Link
                color="#00CED1"
                noWrap
                key={section.title}
                variant="body2"
                href={`#${section.url}`}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
