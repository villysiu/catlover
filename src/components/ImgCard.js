import Card from 'react-bootstrap/Card';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';

const ImgCard = ({singleImg, favorites, setFavorites}) =>{


    console.log(singleImg.breeds[0].name);
    console.log(singleImg.id);
    const [favItem, setFavItem] = useState(favorites.find(f=>f.image_id === singleImg.id));

    async function toggleFav(){

            try {
                if(!favItem){
                    const response = await fetch('https://api.thecatapi.com/v1/favourites', {
                        method: 'POST',
                        headers: {
                            
                            'content-type': 'application/json',
                            'x-api-key': process.env.REACT_APP_CAT_API_KEY,
                            
                        },
                        body: JSON.stringify({ "image_id": singleImg.id})
                        
                    });
                    const data = await response.json();
                    console.log(data);
                    
                    const newFav = {
                        "id": data.id,
                        "image_id": singleImg.id,
                        "image": {
                            "id": singleImg.id,
                            "url": singleImg.url
                        }
                    }
                    setFavorites(prevFavorites => [...prevFavorites, newFav]);
                    setFavItem(newFav);
                }
                else{
                    const response = await fetch(`https://api.thecatapi.com/v1/favourites/${favItem.id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                            'x-api-key': process.env.REACT_APP_CAT_API_KEY
                        }
                        
                    });
                    // const data = await response.json();
                    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== favItem.id));
                    setFavItem(null);
                }
                
            } catch(error){
                console.log(error);
            }
        }

 
    
    return(
        <Card>
            <Card.Img variant="top" className="img_prop" src={singleImg.url} alt={singleImg.id}/>
            <Card.Body>
                <div className='title_wrapper'>
                    <Card.Title >{singleImg.breeds[0].name}</Card.Title>
                    {favItem ? 
                        <HeartFill color="red" size={25} onClick={toggleFav}/> 
                        : 
                        <Heart color="red" size={25} onClick={toggleFav}/>}
                </div>
                    
                <Card.Text>
                    {singleImg.breeds[0].description}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}
export default ImgCard;