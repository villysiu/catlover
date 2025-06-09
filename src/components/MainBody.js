import {favData} from './data';
import {useState, useEffect} from 'react';
import Random from './Random'

const MainBody = ({choice}) =>{

    const [favs, setFavs] = useState([]);

    useEffect(()=>{
        async function getFavorites(){
            setFavs([]);
            // try {
            //     const response = await fetch('', {
            //         headers: {
            //             'content-type': 'application/json',
            //             'x-api-key': process.env.REACT_APP_CAT_API_KEY,
            //         }
            //     });
            //     const data = await response.json();
            //     setImages(data);

            // } catch(error){
            //     console.log(error);
            // }
            setFavs(favData);
        }
        getFavorites();
    }, [])
    return(
        <Random favs={favs} setFavs={setFavs} />
    )
}
export default MainBody