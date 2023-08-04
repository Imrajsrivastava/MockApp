const initial = {
    products:[]
}

const productReducer = (state=initial,action)=>{

    if(action.type == "ADDDATA_SUCCESS"){
        return{
            ...state,
            products:action.payload
        }

    }else if(action.type=="NEWDATA_SUCCESS"){
        return{
            ...state,
            products:[...state.products,action.payload]
        }
    }

    return state;


}

export default productReducer