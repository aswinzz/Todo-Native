const INIT_STATE={
    task:'',
    duedate:'',
    status:false
};

export default (state = INIT_STATE,action)=>{
    switch(action.type){
        case 'TODO_UPDATE':
            return {...state,[action.payload.prop]:action.payload.value};
        case 'TODO_CREATE':
            return INIT_STATE;
        case 'TODO_SAVE':
            return INIT_STATE;
        case 'TODO_RESET':
            return INIT_STATE;
        default: return state;
    }
}