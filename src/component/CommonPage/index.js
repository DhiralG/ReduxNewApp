import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  
}));


const MainLayout = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  
 

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
      <List>
        {['Home', 'AboutUs', 'Career', 'ContactUs','User'].map((text, index) => (
          <ListItem button key={text}>
           
            <Link to={text}>
            
            <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

 

    
    
    

    return (

      <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MY APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
      <div>

      <Grid container>
            <Grid container item xs={4}>
                {drawer}
            </Grid>
            <Grid container item xs={8}>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children}
            </main>
            </Grid>
      </Grid>

         </div>
      </div>
     
    );
}



export default MainLayout;
