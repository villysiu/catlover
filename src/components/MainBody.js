import {useState, useEffect} from 'react';
import Random from './Random'
import Favorites from './Favorites'
import Spinner from 'react-bootstrap/Spinner';


const MainBody = ({choice}) =>{

    const [status, setStatus] = useState('idle');
    const [favorites, setFavorites] = useState([]);
    const [randoms, setRandoms] = useState([]);

    useEffect(()=>{
        
        const fetchData = async () => {
            setStatus('loading');
 
            try {
                const [favoritesResponse, randomResponse] = await Promise.all([
                    fetch('https://api.thecatapi.com/v1/favourites', {
                        headers: {
                            'content-type': 'application/json',
                            'x-api-key': process.env.REACT_APP_CAT_API_KEY,
                        },
                    }),
                    fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1', {
                        headers: {
                            'content-type': 'application/json',
                            'x-api-key': process.env.REACT_APP_CAT_API_KEY,
                        },
                    }),
                ]);

                const [favData, randomData] = await Promise.all([
                    favoritesResponse.json(),
                    randomResponse.json(),
                ]);
            

                setFavorites(favData);
                setRandoms(randomData);
                
                setStatus('succeeded')

            } catch(error){
                console.log(error);
                setStatus('failed');
            }
            
        }
        
        if(status === 'idle'){
            console.log(status);

            fetchData();
        }
    }, [status])

    if(status === 'idle' || status === 'loading'){
        return <Spinner />
    }
    if(status === 'failed'){
        return <div>Failed to fetch data</div>
    }
    return(
        <>
        {/* <Random images={randoms} favorites={favorites} setFavorites={setFavorites} /> */}
         {
            choice === 0 ? 
            <Random images={randoms} favorites={favorites} setFavorites={setFavorites} />
            : 
            <Favorites favorites={favorites} setFavorites={setFavorites} />
        }
        </>
    ) 
}
export default MainBody