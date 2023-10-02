import { configureStore } from "@reduxjs/toolkit";
import OmdbReducer from "./Features/Slice/Omdb";

const store=configureStore({
    reducer:{
        Omdb:OmdbReducer,
    }
})
export default store