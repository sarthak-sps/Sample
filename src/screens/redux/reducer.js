import { resetCache } from '../../../metro.config';
import { ADD_TO_CART } from './constant'
const initialState = {
    data: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
export default cartReducer