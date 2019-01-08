const inititalState = { b:10};
const reducerB = (state=inititalState,action) => {
    const newState = {...state};
    if  (action.type==='UPDATE_B') {
            return {
                ...state,
                b:action.a + state.b
            }
    }
    return newState;
}

export default reducerB;



