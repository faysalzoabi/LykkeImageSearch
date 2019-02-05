import axios from 'axios';

export const ADD_IMAGE = 'addImages'
export const CLEAR_IMAGES = 'clearImages'

// Adding images to store
export const addImages = (imageslist) =>{
    return{
        type:ADD_IMAGE,
        payload:imageslist
    }
}

//Removing images from the store
export const clearImages = () =>{
    return{
        type: CLEAR_IMAGES,
        payload:[]
    }
}


export const fetchData = (searchImage) => (dispatch, getState) => {
    const state = getState()
    axios.get(`${state.apiUrl}/?key=${process.env.REACT_APP_MM_KEY}&q=${searchImage}&image_type=photo&per_page=${state.amount}&safesearch=true`)
         .then((res)=>dispatch(addImages(res.data.hits)))
         .catch(err=>console.log(err))
}