import { Drawer, List, ListItem, ListItemIcon, ListItemText,  AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ListAltIcon from '@mui/icons-material/ListAlt';
import styled from '@emotion/styled';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = '240px';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    padding: theme.spacing(3),
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const ToolBarSpacing = styled('div')(({ theme }) => theme.mixins.toolbar)


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const styles = {
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
  }
}



const Layout = (props) => {
  const [open,setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleHandler = (e) => {
    e.preventDefault();
    setOpen((prevState) => !prevState)
  }
  return (
    <Box sx={{display: 'flex'}}>
      <HideOnScroll {...props}>
        <AppBar sx={{background: '#0c0c0c'}} >
          <Toolbar>
            <IconButton onClick={toggleHandler} >
              <MenuIcon fontSize="medium" sx={{color: '#fff',}}  />
            </IconButton>
            <Typography variant='h6' color="info">Mark's Simple TodoList</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer anchor='left' variant="persistent" open={open} sx={{ width: drawerWidth}} PaperProps={{ sx: { width: drawerWidth , backgroundColor: '#101010', color: '#fff'}}}>
        <ToolBarSpacing/>
  
        <List>
          <ListItem button onClick={() => navigate('/')} sx={location.pathname === '/' ? {...styles.active} : null}>
            <ListItemIcon><ListAltIcon color="primary" fontSize='small' /></ListItemIcon>
            <ListItemText primary={"Todo List"}></ListItemText>
          </ListItem>
          <ListItem button onClick={() => navigate('/new')} sx={location.pathname === '/new' ? {...styles.active} : null}>
            <ListItemIcon><AddIcon color="primary" fontSize='small' /></ListItemIcon>
            <ListItemText primary={"Create Todo"}></ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <ToolBarSpacing/>
        {props.children}
      </Main>
    </Box>
  )
}

export default Layout