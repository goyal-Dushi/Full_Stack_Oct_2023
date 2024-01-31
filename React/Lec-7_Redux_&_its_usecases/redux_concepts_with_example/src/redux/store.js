import { configureStore } from '@reduxjs/toolkit'; 
import CounterReducer  from './slice/CounterSlice';
export const store = configureStore(
    {
        reducer: {
            counter: CounterReducer
        }

    }
)