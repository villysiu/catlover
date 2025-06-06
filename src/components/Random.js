import ImgCard from './imgCard'
const Random = () => {
    console.log(choice);
    const [images, setImages] = useState([]);

    async function getImages()
    {
        setImages([]);
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3&has_breeds=1', {
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': process.env.CAT_API_KEY,
                }
            });
            const data = await response.json();
            setImages(data);

        }
    }
    return(

    <Row>
        {images.map(img =>{
            return (
                <Col>
                    <ImgCard img={img}/>
                </Col>
            )
        })}
        
    </Row>
    )
}
export default Random