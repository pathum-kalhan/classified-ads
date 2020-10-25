import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/classifiedActions';

export default function CardC(props) {
 

  let dispatch = useDispatch();

  const favBtn = {
    backgroundColor: 'white',
    marginTop: '0.7rem',
    marginRight: '0.7rem',
  };

  const toggleMode = (id) => {
    props.toggleMode(id);
  };

  const mediaStyles = (mode) => {
    let multiplier = 1;
    if (mode === 'zoom') multiplier = 2;
    return {
      height: 250 * multiplier,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      textAlign: 'right',
    };
  };

  const onToggleFavorite = (id) => dispatch(toggleFavorite(id));
  return (
    <div style={{ display: 'flex' }}>
      {props.mode === 'zoom' && (
        <div style={{ alignSelf: 'flex-start' }}>
          <IconButton onClick={() => toggleMode(props.id)}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      )}
      <Card style={{ width: '100%' }}>
        <CardMedia
          src={props.image}
          image={props.image}
          component='div'
          style={mediaStyles(props.mode)}
        >
          <IconButton onClick={() => onToggleFavorite(props.id)} style={favBtn}>
            {props.isFavorite ? (
              <FavoriteIcon color='primary' />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
        </CardMedia>
        <CardContent onClick={() => toggleMode(props.id)}>
          <Typography variant='h6'>
            {props.categoryName.toUpperCase()}
          </Typography>
          <Typography variant='h5'>{props.title}</Typography>
          <Typography variant='body2'>{props.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
