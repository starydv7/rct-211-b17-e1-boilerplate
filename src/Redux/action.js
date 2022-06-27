//Create ActionCreator functions here
import * as types from "./actionTypes";

 const getShoesRequest = () => {
    return {
        type: types.GET_SHOES_REQUEST
    };
}
  const getShoesSuccess = () => {
    return {
        type: types.GET_SHOES_SUCCESS
    };
}
 const getShoesFailure = () => {
    return {
        type: types.GET_SHOES_FAILURE
    };
}
export {
    getShoesFailure,
    getShoesSuccess,
    getShoesRequest
}