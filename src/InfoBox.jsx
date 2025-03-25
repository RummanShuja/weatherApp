import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const hot_url = "https://images.news18.com/ibnlive/uploads/2025/02/mumbai-heatwave-27502036-16x9_0-1-2025-02-681464a7a07b9821ce2b0036d67bc5fe-16x9.webp?impolicy=website&width=640&height=360";
    const cold_url = "https://d2zp5xs5cp8zlg.cloudfront.net/image-33349-800.jpg";
    const rainy_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q1mMLjgijhxITUKVdkkr5OEjs5U5JcOY9Q&s";
    
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345, width:"100%"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rainy_url : info.temp>15 ? hot_url : cold_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" display='inline'>
                        {info.city} <span>{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <LightModeIcon/> : <AcUnitIcon/>}</span>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Feels Like: {info.feels_like}&deg;C</p>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Min Temp: {info.tempMin}&deg;C</p>
                            <p>Max Temp: {info.tempMax}&deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Weather: {info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}