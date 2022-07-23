import { GET_REVIEW} from "./Reviews.type";

const initialState = {
  reviews: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    
    default: {
      return {
        ...state,
      };
    }
  }
};

export default restaurantReducer;