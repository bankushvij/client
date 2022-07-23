import { GET_IMAGES } from "./Images.type";

const initialState={
    image:[]
}

const ImageReducer=(state=initialState,action)=>
{
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                image :action.payload,
            };

        default:
            return {
                ...state,
            };
    }
}

export default ImageReducer;