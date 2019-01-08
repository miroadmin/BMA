const inititalState = { age:20 }

const reducerM = (state=inititalState,action) => {
    const newState = {...state};
    switch  (action.type) {
        case 'AGE_UP': 
                newState.age += action.value;
                newState.loading=false;
            break;
        case 'AGE_DOWN': 
                newState.age -= action.value;
            break;
        case 'LOADING': {
                newState.loading=true;
        }
    }
    return newState;
}

export default reducerM;



