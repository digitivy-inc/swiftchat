import React from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core';

const styles = {
  paper: {
    height: '25em',
    margin: '5em',
  }
};

export default () => {
  return (
    <Paper style={styles.paper}>
      <Typography variant="h3" component="div">
        Welcome to Swift Chat!
      </Typography>
    </Paper>
  );
};
