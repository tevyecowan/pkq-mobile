import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return <Button onClick={() => alert('You pressed a button.')} variant="outlined">Material UI Button</Button>;
}
