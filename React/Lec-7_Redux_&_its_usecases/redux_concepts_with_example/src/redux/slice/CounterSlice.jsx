import { createSlice } from '@reduxjs/toolkit';
const CounterSlice = createSlice({

    // intial state

    initialState: {
        count: 0,
    },

    reducers: {
        increment: (state) =>{
            state.count+=1;
        },

        decrement: (state) => {
            state.count-=1;
        }
    }
});

export default CounterSlice;

export const counterAction = CounterSlice.actions;