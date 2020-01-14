const initialState = {
    data:{}
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "SEARCH":
            return {
                data:action.payload
            }
        default:return state
    }
}

export default reducer