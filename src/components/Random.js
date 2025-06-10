import ImgCard from './ImgCard'
import { Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import './imgCard.css'
// import {randomData} from './data.js'

const Random = ({favorites, setFavorites}) => {

    console.log("random");

    const [images, setImages] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        async function getImages()
        {
            try {

                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1', {
                    headers: {
                        'content-type': 'application/json',
                        'x-api-key': process.env.REACT_APP_CAT_API_KEY,
                    }
                });
                const data = await response.json();
                console.log(data);
                console.log(data.length);
                setImages(data);
                console.log("fetching done")
                setFetched(true);

            } catch(error){
                console.log(error);
            }
        }

        if(fetched) return;
        getImages(); 
        // setImages(randomData);
    }, [fetched]); 
    return(
        <>
            hello break line
            <Row>

                {images.map(catImg =>{
                    return (
                        <Col key={catImg.id} xs={12} md={4} className="mb-3">
                            
                            <ImgCard catImg={catImg} favorites={favorites} setFavorites={setFavorites} />
                        </Col>
                    )
                })}
                
            </Row>
        </>
    )
}
export default Random