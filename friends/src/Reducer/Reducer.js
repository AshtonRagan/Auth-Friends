


export const initValue ={
creds: {username : "",password :""},
token:"",
friends: []
}


export const reducer = (state = initValue, action) => {


switch (action.type) {
    case "ON_CHANGE":
        return {...state, creds:{...state.creds, [action.name]:action.value} }
        case "CLEAR":
        return {...state, creds:{username:"",password:""}}
        case "SUCCESS":
        return {...state, friends:action.payload};
     default:
        return state;
 }
}