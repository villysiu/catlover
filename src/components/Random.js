import ImgCard from './ImgCard'
import { Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import './imgCard.css'
import {randomData} from './data.js'
const Random = () => {
    console.log("random")
    const [images, setImages] = useState([]);
    useEffect(() => {
        // async function getImages()
        // {
        //     setImages([]);
        //     try {
        //         const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1', {
        //             headers: {
        //                 'content-type': 'application/json',
        //                 'x-api-key': process.env.REACT_APP_CAT_API_KEY,
        //             }
        //         });
        //         const data = await response.json();
        //         setImages(data);

        //     } catch(error){
        //         console.log(error);
        //     }
        // }

        // getImages(); 
        setImages(randomData);
    }, []); 
    return(
        <>

            <Row>

                {images.map(cat =>{
                    return (
                        <Col key={cat.id} xs={12} md={4} className="mb-3">
                            <ImgCard cat={cat}/>
                        </Col>
                    )
                })}
                
            </Row>
        </>
    )
}
export default Random