import { createStore } from 'redux'

const initalState = {
    name: '',
    category: '',
    firstName: '',
    lastName: '',
    ingredients: [],
    instructions: [],
    recipes: []

}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'


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
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTION:
            const newInstruction = [...state.instructions, payload]
            return {...state, instructions: newInstruction}
        case ADD_RECIPE:
                const {
                    name,
                    category,
                    firstName,
                    lastName,
                    ingredients,
                    instructions
                  } = state;
                const recipe = {
                    name,
                    category,
                    firstName,
                    lastName,
                    ingredients,
                    instructions
                }
                const newRecipes = [...state.recipes, recipe]
                return {...state, recipes: newRecipes}
        default:
            return state
    }
}


//EXPORTING STORE
export default createStore(reducer)
