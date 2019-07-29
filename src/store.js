import { createStore } from 'redux'

const initalState = {
    name: '',
    category: '',
    firstName: '',
    lastName: ''

}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'


//Now that our initial state is set up, let's build a basic reducer. 
//The reducer is a function that takes in two things: state and an action. 
//Let's use our initialState as the default value for our state parameter.
function reducer(state = initalState, action){
    //The switch should test the type property of the action obj.
    //it should return state unaltered as the default.
    //I am also going to destructure the action object for easy access to its properties.
    const { type, payload } = action;
    switch(type){
        case UPDATE_NAME:
            //here I am creating a copy of state and assigning the name key in that state to whatever action.payload is.
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, category: payload}
        case FIRST_NAME:
            return {...state, firstName: payload}
        case LAST_NAME:
            return {...state, lastName: payload}
        default:
            return state
    }
}


//EXPORTING STORE
export default createStore(reducer)
