import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Item = ({ data }) => {
	return (
		data ? 
	<div className = "cards-individual" id= {data.id}>
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} alt='Producto' />
				<CardContent>
					<div className = "model">
					<Typography variant='body2' color='text.secondary'>
						{data.model}
					</Typography>
					</div>
					<div className= "name">
					<Typography variant='body2' color='text.secondary'>
						{data.name} 
					</Typography>
					</div>
					<div className= "name">
					<Typography variant='body2' color='text.secondary'>
					     {data.genre}
					</Typography>
					</div>
					<div className = "style">
					<Typography variant='body2' color='text.secondary'>
						Estilo: {data.style}
					</Typography>
					</div>
					<Typography gutterBottom variant='h5' component='div'>
						${data.price}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	</div> : null
	);
};

export default Item;