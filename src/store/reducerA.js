const inititalState = { a:1};
const reducerA = (state=inititalState,action) => {
    const newState = {...state};
    if  (action.type==='UPDATE_A') {
            return {
                ...state,
                a:state.a + action.b
            }
    }
    return newState;
}

export default reducerA;



