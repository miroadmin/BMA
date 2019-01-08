const inititalState = { 
    age:59,
    moje:100,
    id:'',
    history:[]};
const reducer = (state=inititalState,action) => {
    const newState = {...state};
    switch  (action.type) {
        case 'AGE_UP': {
            //newState.age +=action.value;
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
        case 'DEL_ITEM': {
            return {
                ...state,
                history:state.history.filter(hoc => hoc.id!== action.key)
            }
            break;
        }
        case 'MOJE': {
            return {
            ...state,
            moje:state.moje +=100
            }
            break;       
        }
    }
    return newState;
}

export default reducer;



