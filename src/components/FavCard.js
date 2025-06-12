import {Card, Spinner} from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';
import {useState} from 'react';

const FavCard = ({singleFav, setFavorites}) =>{
    const [loading, setLoading] = useState(false);

    const unlike = async () => {
        setLoading(true);
        console.log("unlik")
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/favourites/${singleFav.id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
                
            });
            // const data = await response.json();
            if(response.ok){
                setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== singleFav.id));
            } else {
                console.error('Failed to unlike. Status:', response.status);
            }
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
        
        
    

    
    return(
        <Card className='fav_card'>
            {loading && 
                <div className="overlay">
                    <Spinner />
                </div>
            }
            <Card.Img alt={singleFav.image_id} variant="top" className="img_prop" src={singleFav.image.url} />
            <HeartFill color="red" size={25} className='fav_heart' onClick={unlike} style={{ cursor: 'pointer' }} /> 
            
        </Card>
    )
}
export default FavCard;