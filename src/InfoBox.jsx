import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"


    let COLD_URL = "https://media.istockphoto.com/id/627473816/photo/woman-in-a-stylish-knitted-cape-on-a-winter-road.webp?b=1&s=170667a&w=0&k=20&c=OGrUig7bwr3Ll9uyvlP1lz17QQop7Q6W2Rx67k75G_Y="
    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let RAIN_URL = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?b=1&s=170667a&w=0&k=20&c=lXXWPQuhXI4xZRrr8d1uZGjQasuR-oRS1_GraXO9Fd0="
    return (
        <div className='infoBox'>
            <div className="cardContaner">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                                info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20? <WbSunnyIcon/> : AcUnitIcon 
                            }
                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temprature = {info.temp}&deg;C</div>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min temp = {info.tempMin}&deg;C</p>
                            <p>Max temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be discribed as <i>{info.weather}</i> and feels like = {info.feelsLIke}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}