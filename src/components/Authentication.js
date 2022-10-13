import React, { useState } from 'react'
import {Box, TextField, Button} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import { useFirebaseapp } from "reactfire"


const Authentication = () => {
   const [name, setName] = useState("")
   const [mail, setMail] = useState("")

//const firebase = useFirebaseapp()

   const submit = () => {
     console.log(name, mail);
   }
  return (
    <div className= "login">
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Nombre" variant="standard" name= "name" onChange = {(e) => setName(e.target.value)} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Mail" variant="standard" name= "mail" onChange = {(e) => setMail(e.target.value)}/>
      </Box>
      <Button variant="contained" color="warning" onClick = {submit}>
        Login
      </Button>
    </Box>
    </div>
  )
}

export default Authentication
