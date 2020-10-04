// action type
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// action create function
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});
export const increaseBy = (diff:number) => ({
    type: INCREASE_BY,
    payload: diff,
});

// action object type
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// Type and InitState
type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

// Reducer
function counter(state: CounterState = initialState, action: CounterAction) : CounterState{
    switch (action.type) {
        case INCREASE :
            return { count: state.count + 1 };
        case DECREASE :
            return { count: state.count - 1 };
        case INCREASE_BY :
            return { count: state.count + action.payload }
        default:
            return state;
    }
}

export default counter;