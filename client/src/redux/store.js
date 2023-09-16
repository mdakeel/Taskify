import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import adminSlice from './adminSlice';
import teacherSlice from './teacherSlice';
import studentSlice from './studentSlice';
const store = configureStore({
    reducer: {
        user:userSlice,
        admin:adminSlice,
        teacher:teacherSlice,
        student:studentSlice
    
    },
});

export default store;