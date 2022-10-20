import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Divider, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import ItemCount from "../ItemCount"
import React, { useState } from 'react';
import {useItemContext} from "../../CartContext"
import Swal from 'sweetalert2'




const ItemDetail = ({data}) => {
  

    const [ setPurchase] = useState(false)
    //console.log("esta es la compra",purchase);
    const {AddItem} = useItemContext()

    const onCart = (quantity) => {    
      Swal.fire({
        title: `Agregaste ${quantity} del modelo ${data.name}`,
        text: `Seguro que querés ${quantity} en tu carrito?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lo quiero!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Agregado!',
            'Ya puedes verlo en tu carrito de compra',
            'success'
          )
          AddItem(data ,quantity)
          setPurchase(true);
        }
      })
    };

    // MUI
    const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

    
    return(
      // data ? 
<div className="contenedor-individual">
   <div className = "individual" id= {data.id}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} alt='Producto' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						${data.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.description}
					</Typography>
          <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Elige tu talle
        </Typography>
        {/* <Stack direction="row" spacing={1}>
          <Chip label="X Small" />
          <Chip color="primary" label="Small" />
          <Chip label="Medium" />
          <Chip label="Large" />
          <Chip label="XLarge" />
          <Chip label="XXLarge" />
        </Stack> */}
       
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Talle</InputLabel>
      <div className= "opciones-talles">
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Talle"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>US size</em>
          </MenuItem>
          <MenuItem value={8}>US 8</MenuItem>
          <MenuItem value={8.5}>US 8.5</MenuItem>
          <MenuItem value={9}>US 9</MenuItem>
          <MenuItem value={9.5}>US 9.5</MenuItem>
          <MenuItem value={10}>US 10</MenuItem>
          <MenuItem value={10.5}>US 10.5</MenuItem>
          <MenuItem value={11}>US 11</MenuItem>
          <MenuItem value={11.5}>US 11.5</MenuItem>
          <MenuItem value={12}>US 12</MenuItem>
        </Select>
      </div>
      </FormControl>
        
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
      </Box>
          <ItemCount stock={data.stock} setPurchase={true} name={data.name} id={data.id} img={data.image} initial={0} onCart={onCart} />
      </Box>
				</CardContent>
			</CardActionArea>
	</div>

</div>
  // : null
)
}

export default ItemDetail
