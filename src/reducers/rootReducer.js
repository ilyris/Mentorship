let token = localStorage.getItem('auth-token');


export const initialState = {
    loggedInUser: {},
    isLoggedIn: token ? true : false,
    newSignedUpUser: {
        email: '',
        username: '',
        interests: [],
    },
    isLoading: false,
    socket: null,
};


export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LOGGEDIN_USER':
            return  {...state, loggedInUser : action.payload};
        case 'IS_LOGGED_IN':
            return {...state, isLoggedIn : true};
        case 'SANITIZE_USER':
            return {...state, loggedInUser: {}, isLoggedIn : false, 
            newSignedUpUser: { 
                email: '', 
                username: '', 
                interests: []
            } 
        };
        case 'SET_NEW_USER_ALIAS':
            console.log(action);
            return {
            ...state, 
            newSignedUpUser: {
                ...state.newSignedUpUser, email: action.payload.email, username: action.payload.username
            }};
        case 'SET_NEW_USER_INTERESTS':
            if(state.newSignedUpUser.interests.length === 0 || state.newSignedUpUser.interests.length === undefined) {
            return {
                ...state, 
                newSignedUpUser: {
                    ...state.newSignedUpUser, interests: [action.payload],
                }}; 
            } else {
            return {
                ...state, 
                newSignedUpUser: {
                    ...state.newSignedUpUser, interests: [...state.newSignedUpUser.interests, action.payload],
                }};
            }
        case 'REMOVE_NEW_USER_INTERESTS':
            return {
            ...state, 
            newSignedUpUser: {
                ...state.newSignedUpUser, interests:  state.newSignedUpUser.interests.filter( deselectedInterest  => deselectedInterest !== action.payload)
            }};
        case 'SET_ISLOADING':
            return {...state, isLoading: true};
        case 'REMOVE_ISLOADING':
            return {...state, isLoading: false};  
        case 'SET_USER_SOCKET':
            console.log(action)
            return  {...state, socket : action.payload};     
        default:
            return state;
    }
};