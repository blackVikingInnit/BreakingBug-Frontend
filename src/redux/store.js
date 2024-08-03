import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    /**must be declared as a key value pair and not initialised using the assignment operator */
    reducer:{
        user: userReducer,
    }
});

export default store;