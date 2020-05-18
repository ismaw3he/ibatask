const initialState={
    data: [],
    filters: null,
    favorites: []
};

const reducer = (state = initialState, action)=>{
    if(action.type === "LOAD"){
        return{
            data: action.payload}
    }
    return state;
};


export default reducer;
