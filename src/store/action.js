
export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const ageUpAsnc = (val) => {
    return { type:'AGE_UP',value:val};
};

export const ageUp = val => {
    return dispach => {
        dispach(loading());
        setTimeout(() => {
// change action +2 and wait 2sec
            val++;
            dispach(ageUpAsnc(val));
        },2000)
    }
}

export const ageDown = (val) => {
    return { type:'AGE_DOWN',value:val};
};