import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ItemCount from "../../components/ItemCount"



const ItemDetail = () => {
const [item, setItem] = useState([]);
let {id} = useParams();

useEffect(() => {    
  setTimeout(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
    .then(data => setItem(data))
    .catch(err => console.error(err));  
  }, 2000);
      },[id]);

return(
  item ? 
  <div className="contenedor-individual">
   <div className = "individual" id= {item.id}>
			<CardActionArea>
				<CardMedia component='img' image={item.image} alt='Producto' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						${item.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{item.description}
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
          <ItemCount />
      </Box>
      </Box>
				</CardContent>
			</CardActionArea>
	</div>

  </div>
  : null
)
}

export default ItemDetail