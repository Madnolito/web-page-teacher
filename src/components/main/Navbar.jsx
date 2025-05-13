import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
const drawerWidth = 200;

const navItems = [
  { label: 'Inicio', path: '/Home' },
  { label: 'Galería', path: '/AboutMe' },
  { label: 'Contacto', path: '/Contact' },
];


function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const MotionAppBar = motion(AppBar);
  const [selectedTab, setSelectedTab] = React.useState(navItems[0]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

const drawer = (
  <motion.div
    initial={{ x: '-100%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: '-100%', opacity: 0 }}
    transition={{ type: 'spring', stiffness: 150, damping: 13 }}
  >
    <Box sx={{ textAlign: 'center', p: 2 }}>
      {/* Botón de cierre */}
        <IconButton onClick={handleDrawerToggle} sx={{ width: '150px'}}>
          <CloseIcon />
        </IconButton>
      <List>
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleDrawerToggle}
          >
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  textAlign: 'center',
                  py: 1.5,
                  borderRadius: 2,
                  mx: 2,
                  my: 1,
                }}
              >
              <ListItemText
                primary={
                  <>
                  <Typography sx={{ fontWeight: 600, color: 'black', textTransform: 'uppercase'}}>
                    {item.label}
                  </Typography>
                  <Divider />
                  </>
                }
              />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  </motion.div>
);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MotionAppBar
        className='motion-app-bar'
        component="nav"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        sx={{ boxShadow: 'none', backgroundColor: 'transparent', pt: { xs: 0, sm: 0, md: "80px" }, position: 'absolute' }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon  />
          </IconButton>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '100%', textAlign: 'center' }}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ display: 'inline-block', margin: '0 10px', position: 'relative' }}
              onClick={() => setSelectedTab(item)}
            >
              <Button
                component={Link}
                to={item.path}
                sx={{
                  color: selectedTab.path === item.path ? 'black' : 'rgb(65, 62, 58)',
                  fontSize: '21px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>

              {selectedTab.path === item.path && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: 3,
                    backgroundColor: 'black',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 2,
                  }}
                />
              )}
            </motion.div>
          ))}
        </Box>
        </Toolbar>
      </MotionAppBar>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100%',
              width: drawerWidth,
              zIndex: 1200,
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            {drawer}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default DrawerAppBar;