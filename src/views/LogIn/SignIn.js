import * as React from 'react';
import {Box, TextField, Button} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const signIn = () => {
  return (
    <div className= "login">
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Nombre" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Mail" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" type= "password" />
      </Box>
      <Button variant="contained" color="warning">
        Login
      </Button>
    </Box>
    </div>
  );
}

export default signIn