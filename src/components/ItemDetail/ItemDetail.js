import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ItemCount from "../ItemCount"
import React, { useState } from 'react';



const ItemDetail = ({data}) => {

    const [purchase, setPurchase] = useState(true)
    console.log("esta es la compra",purchase);
    
    
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
        <Stack direction="row" spacing={1}>
          <Chip label="X Small" />
          <Chip color="primary" label="Small" />
          <Chip label="Medium" />
          <Chip label="Large" />
          <Chip label="XLarge" />
          <Chip label="XXLarge" />
        </Stack>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
      </Box>
          <ItemCount stock={4} setPurchase={true} name={data.title} id={data.id} img={data.image} />
      </Box>
				</CardContent>
			</CardActionArea>
	</div>

</div>
  // : null
)
}

export default ItemDetail
