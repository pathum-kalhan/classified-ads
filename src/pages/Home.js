import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useStyles } from '../styles/main';

//custom hook
import useZoom from '../components/useZoom';

import CardC from '../components/CardC';
export default function Home() {
  const { zoomMode, setZoomMode, selectedItem, setItem } = useZoom();
  const classes = useStyles();
  const items = useSelector((state) => {
    if (
      state.classified.selectedCategory &&
      state.classified.selectedCategory !== 'All'
    ) {
      return state.classified.items.filter(
        (item) =>
          item.category.toLowerCase() ===
          state.classified.selectedCategory.toLowerCase()
      );
    } else {
      return state.classified.items;
    }
  });
  const handleMode = (id) => {
    const item = items.find((e) => e.id === id);
    setItem(item);
    setZoomMode((prev) => !prev);
  };
  // console.log('items', items);
  return (
    <Grid container spacing={2} className={classes.margin}>
      {!zoomMode &&
        items.map((item) => (
          <Grid item md={4} key={item.id}>
            <CardC
              image={item.image}
              title={item.title}
              categoryName={item.category}
              id={item.id}
              description={item.description}
              isFavorite={item.isFavorite}
              toggleMode={handleMode}
            />
          </Grid>
        ))}
      {zoomMode && (
        <Grid item container justify='center'>
          <Grid item md={8}>
            <CardC
              image={selectedItem.image}
              title={selectedItem.title}
              categoryName={selectedItem.category}
              id={selectedItem.id}
              description={selectedItem.description}
              isFavorite={selectedItem.isFavorite}
              mode='zoom'
              toggleMode={handleMode}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
