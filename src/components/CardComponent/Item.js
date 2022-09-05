import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Item = ({ data }) => {
	return (
	<div className = "cards-individual" id= {data.id}>
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} alt='Producto' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						${data.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.category}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	</div>
	);
};

export default Item;