import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import img from "../../img/airJordan.svg"



const Item = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.avatar_url} alt='Avatar' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.login}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.html_url}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Item;