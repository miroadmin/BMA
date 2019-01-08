const inititalState = { age:30 }

const reducerS = (state=inititalState,action) => {
    const newState = {...state};
    switch  (action.type) {
        case 'AGE_UP_ASYNC': 
            console.log('up');
            newState.age += action.value;
            break;
        case 'AGE_DOWN': 
            newState.age -= action.value;
            break;
    }
    return newState;
}

export default reducerS;



