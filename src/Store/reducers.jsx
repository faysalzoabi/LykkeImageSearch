import {ADD_IMAGE, CLEAR_IMAGES} from './actions';

const initState = {
    apiUrl:'https://pixabay.com/api',
    images:[],
    amount:48 // number of pictures to fetch
}

const reducer = (state=initState, action) =>{
    switch (action.type) {
        case ADD_IMAGE:
            return{
                ...state,
                images:[...action.payload]
            }
        case CLEAR_IMAGES:
            return{
                ...state,
                images:[]
            }
    
        default:
            return state;
    }
}

export default reducer;