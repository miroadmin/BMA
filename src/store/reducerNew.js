const inititalState = { 
    age1:59,
    history:[]};
const reducerNew = (state=inititalState,action) => {
    const newState = {...state};
    switch  (action.type) {
        case 'AGE_UP': {
            return {
                ...state,
                history:state.history.concat({id:Math.random() ,age:state.age }),
                age:state.age + action.value
            }
            break;
        }
        case 'AGE_DOWN': {
            return {
                ...state,
                history:state.history.concat({id:Math.random(), age:state.age}),
                age:state.age - action.value
            }
            break;
        }
    }
    return newState;
}

export default reducerNew;



