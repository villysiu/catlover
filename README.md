# Cat Lovers

https://github.com/villysiu/catlover.git

## About the Project

This project fetches images from [TheCatApi](https://thecatapi.com/). Users can click the heart icon to favorite cat images.  
We are displaying results from two API endpoints:

- `https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1`  
  Fetches 12 cat images that include breed information.

- `https://api.thecatapi.com/v1/favourites`  
  Retrieves all cat images favorited by the user.


## Prerequisites

- Ensure **Git** is installed on your machine.  
- Ensure **Visual Studio Code (VS Code)** is installed.



## Installation

1. Copy the Git repository URL:  
   `https://github.com/villysiu/catlover.git`

2. In VS Code:
   - Click the **Source Control** icon <img src="https://raw.githubusercontent.com/villysiu/catlover/926bfee8ce1b7b55e4f003f01c950dee0f55c43c/public/images/source-control-svgrepo-com.svg" height="15" width="15"> in the sidebar.
   - Click ![Clone Icon](https://github.com/villysiu/catlover/blob/main/public/images/clone-repository-blue.png?raw=true)
   - Paste the repository URL:  
     `https://github.com/villysiu/catlover.git`  
     ![Paste URL](https://github.com/villysiu/catlover/blob/main/public/images/clone-gray.png?raw=true)
   - Click **Clone from URL**.
   - Choose a local folder where the repository will be cloned.
   - When prompted, open the cloned repository:
     - Go to **File > Open Folder...** and select the cloned folder.



## Obtain an API Key

This project requires your personal **Cat API** key.

1. Sign up at [https://thecatapi.com/signup](https://thecatapi.com/signup).
2. Enter your email address to get free or premium access.
3. Check your inbox for an email with the subject line:  
   **🐈 Welcome to The Cat API!**  
   *(Check your spam folder if you don’t see it.)*
4. Your API key should look like this:  
   `live_T941odOy4hS460HfhmmTsDmaZPsmN9fwsI...`



## Store and Use the API Key

1. In the **root directory** of the project (same level as `package.json`), create a file named:

```

.env

```

2. Add your API key to the `.env` file using the following format:

```

REACT_APP_CAT_API_KEY=live_T941o...

````

> **Important:** The key must start with `REACT_APP_` prefix for React App to access it.

3. To keep your API key secure and private, ensure `.env` is listed in your `.gitignore` file.

## Install bootstrap, react-bootstrap and react bootstrap icon
In the terminal, run:
```bash
npm install 
````

## Run the Project


In the terminal, run:

```bash
npm start
````

This will start the development server and open the project at:
[http://localhost:3000](http://localhost:3000)


