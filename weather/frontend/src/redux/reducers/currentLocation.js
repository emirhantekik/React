import {createSlice} from "@reduxjs/toolkit"

/* Sayfa ilk açıldığında dünyanın en iyi şehri İstanbulun hava bilgilerinin gelmesi için İstanbulun lat ve lon değerleri verildi */
const initialState = {
    location : {
        lat : 41.01,
        lon : 28.97
    }
}

export const currentLocationSlice= createSlice({
    name : "currentLocation",
    initialState,
    reducers : {
        setLocation : (state,action) => {
            state.location.lat = action.payload.lat;
            state.location.lon = action.payload.lon;
        }
    }
})

export const {setLocation} = currentLocationSlice.actions;
export default currentLocationSlice.reducer