import {configureStore} from "@reduxjs/toolkit"
import currentLocationReducer from "./reducers/currentLocation"

export const store = configureStore({
    reducer : {
        currentLocation : currentLocationReducer,
    }
})