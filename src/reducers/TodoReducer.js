const INIT_STATE={};

export default (state=INIT_STATE,action) =>{
    switch(action.type){
        case 'TODO_FETCH_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}