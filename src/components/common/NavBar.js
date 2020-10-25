import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

// redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCat } from '../../store/actions/classifiedActions';
import { toggleDrawer } from '../../store/actions/overall';

import { useHistory, NavLink } from 'react-router-dom';

export default function NavBar() {
  let history = useHistory();

  const [category, setCategory] = React.useState('');
  const categories = useSelector((state) => state.classified.categories);

  let dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory(event.target.value);
    dispatch(setSelectedCat(event.target.value));
  };

  const openDrawer = () => {
    dispatch(toggleDrawer());
  };

  const onNavigate = () => {
    history.push('/');
  };

  const links = [
    { name: 'home', path: '/' },
    { name: 'favorites', path: '/favorites' },
  ];

  // styles
  const appBarStyles = { backgroundColor: 'white', color: 'black' };
  const brandStyles = { marginRight: 'auto', cursor: 'pointer' };
  const navLinkStyles = {
    textDecoration: 'none',
    marginLeft: '1rem',
    color: 'black',
  };
  const activeStyles = {
    color: '#9c27b0',
    borderBottom: '5px solid #9c27b0',
    padding: '1rem',
  };
  const formControl = {
    minWidth: 120,
  };
  const navBarItems = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
    marginBottom: '3rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  };

  return (
    <div>
      <AppBar position='fixed' style={appBarStyles}>
        <Toolbar>
          <Typography
            variant='h6'
            style={brandStyles}
            onClick={() => onNavigate()}
          >
            Classified Ads
          </Typography>

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={navLinkStyles}
              activeStyle={activeStyles}
              exact={true}
            >
              {link.name.toUpperCase()}
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
      <div style={navBarItems}>
        <FormControl style={formControl}>
          <InputLabel id='demo-simple-select-label'>Categories</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={category}
            onChange={handleChange}
          >
            <MenuItem value={'All'}>All</MenuItem>
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant='contained'
          color='primary'
          onClick={() => openDrawer()}
          style={{ borderRadius: '2rem' }}
        >
          new classified
        </Button>
      </div>
    </div>
  );
}
