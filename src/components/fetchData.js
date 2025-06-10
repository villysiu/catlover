export async function getFavorites(){
            // setFavorites([]);
            try {
                const response = await fetch('https://api.thecatapi.com/v1/favourites', {
                    headers: {
                        'content-type': 'application/json',
                        'x-api-key': process.env.REACT_APP_CAT_API_KEY,
                    }
                });
                const data = await response.json();
                setFavorites(data);

            } catch(error){
                console.log(error);
            }
            // setFavorites(favData);
        }