import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Heart, HeartFill } from 'react-bootstrap-icons';
const ImgCard = ({cat}) =>{
console.log(cat)
    return(
        <Card>
            <Card.Img variant="top" className="img_prop" src={cat.url} />
            <Card.Body>
                <div className='title_wrapper'>
                    <Card.Title >{cat.breeds[0].name}</Card.Title>
                    <Heart color="red" size={25} />
                </div>
                    
                <Card.Text>
                    {cat.breeds[0].description}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}
export default ImgCard;