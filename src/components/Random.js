import ImgCard from './ImgCard'
import { Row, Col } from 'react-bootstrap';

const Random = ({images, favorites, setFavorites}) => {

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