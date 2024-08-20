export const getproductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type : PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`${BASE_URL}/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}