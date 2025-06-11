import Card from 'react-bootstrap/Card';
import { HeartFill } from 'react-bootstrap-icons';

const FavCard = ({singleFav, setFavorites}) =>{

    const unlike = () => {

    
        async function toggleFav(){

            try {
                const response = await fetch(`https://api.thecatapi.com/v1/favourites/${singleFav.id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        'x-api-key': process.env.REACT_APP_CAT_API_KEY
                    }
                    
                });
                // const data = await response.json();
                setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== singleFav.id));
            } catch(error){
                console.log(error);
            }
        }
        toggleFav();
    }

    
    return(
        <Card className='fav_card'>
            <Card.Img alt={singleFav.image_id} variant="top" className="img_prop" src={singleFav.image.url} />
            <HeartFill color="red" size={25} className='fav_heart' onClick={unlike}/> 
            
        </Card>
    )
}
export default FavCard;