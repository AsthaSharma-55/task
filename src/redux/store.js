import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/studentSlice";
// import { persistStore,persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export default configureStore({
    reducer:{
        student:StudentReducer,
    }
})