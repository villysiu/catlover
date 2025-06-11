import FavCard from './FavCard'
import { Row, Col } from 'react-bootstrap';
import {useState} from 'react';

const Favorites = ({favorites, setFavorites}) => {
    
    return(

    <Row>
         {favorites.map(singleFav =>{
            return (
                <Col key={singleFav.id} xs={12} md={4} className="mb-3">
                    <FavCard singleFav={singleFav}  setFavorites={setFavorites} />
                </Col>
            )
        })}
    </Row>
    )
}
export default Favorites