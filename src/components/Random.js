import ImgCard from './ImgCard'
import { Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import './imgCard.css'
// import {randomData} from './data.js'

const Random = ({images, favorites, setFavorites}) => {

    console.log("random");

    
    return(
        <>
            
            <Row>
                {images.map(singleImg =>{
                    return (
                        <Col key={singleImg.id} xs={12} md={4} className="mb-3">
                            <ImgCard singleImg={singleImg} favorites={favorites} setFavorites={setFavorites} />
                        </Col>
                    )
                })}
                
            </Row>
        </>
    )
}
export default Random