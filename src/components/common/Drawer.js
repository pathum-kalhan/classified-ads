import React from 'react';
import { Drawer } from '@material-ui/core';

import { useSelector } from 'react-redux';

import NewClassified from '../NewClassified';

export default function DrawerC() {
  const open = useSelector((state) => state.overall.open);

  return (
    <div>
      {/* <Button onClick={onToggle}>drawer</Button> */}
      <Drawer anchor='right' open={open} variant='temporary'>
        <NewClassified />
      </Drawer>
    </div>
  );
}
