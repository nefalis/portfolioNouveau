import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardProject = ({data}) =>{
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.pictures[0]}
                    alt="photo du site"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                        {data.stack}
                    </Typography>


                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default CardProject;