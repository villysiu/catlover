import Card from 'react-bootstrap/Card';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import {useState, useEffect} from 'react';

const ImgCard = ({catImg, favs, setFavs}) =>{


    console.log(catImg.breeds[0].name);
    console.log(catImg.id);


    const [fav, setFav] = useState(favs.find(fav=>fav.image_id === catImg.id));
   
    async function toggleFav(){

            try {
                if(!fav){
                    const response = await fetch('https://api.thecatapi.com/v1/favourites', {
                        method: 'POST',
                        headers: {
                            
                            'content-type': 'application/json',
                            'x-api-key': process.env.REACT_APP_CAT_API_KEY,
                            
                        },
                        body: JSON.stringify({ "image_id": catImg.id})
                        
                    });
                    const data = await response.json();
                    console.log(data);
                    
                    const favData = {
                        "id": data.id,
                        "image_id": catImg.id,
                        "image": {
                            "id": catImg.id,
                            "url": catImg.url
                        }
                    }
                    setFavs([...favs, favData]);
                    favs.push(favData);
                }
                else{
                    const response = await fetch(`https://api.thecatapi.com/v1/favourites/${fav.id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                            'x-api-key': process.env.REACT_APP_CAT_API_KEY
                        }
                        
                    });
                    // const data = await response.json();
                    setFavs(favs.filter(fav=> fav.image_id !== catImg.id));
                    setFav(null);

                }
                
            } catch(error){
                console.log(error);
            }
        }

    useEffect(() => {
        const found = favs.find(f => f.image_id === catImg.id);
        setFav(found || null);
    }, [favs, catImg.id]);
    
    return(
        <Card>
            <Card.Img variant="top" className="img_prop" src={catImg.url} />
            <Card.Body>
                <div className='title_wrapper'>
                    <Card.Title >{catImg.breeds[0].name}</Card.Title>
                    {fav ? 
                        <HeartFill color="red" size={25} onClick={toggleFav}/> 
                        : 
                        <Heart color="red" size={25} onClick={toggleFav}/>}
                </div>
                    
                <Card.Text>
                    {catImg.breeds[0].description}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}
export default ImgCard;