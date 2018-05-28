const INIT_STATE={email:'',password:'',user:null,error:'',loading:false};

export default (state=INIT_STATE,action) => {
    switch(action.type){
        case 'email_changed':
            return {...state,email:action.payload};
        case 'password_changed':
            return {...state,password:action.payload};
        case 'LOGIN_USER':
            return {...state,loading:true,error:''};
        case 'LOGIN_USER_SUCCESS':
            return {...state,user:action.payload,error:'',loading:false,email:'',password:''};
        case 'LOGIN_USER_FAIL':
            return {...state,error:'Authentication Failed',loading:false};
        default:return state;
    }
}