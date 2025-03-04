import { storeVariant } from "@/lib/appStorage";
import { Variant } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AbTestsState {
    weatherCardVariant: Variant
}

const initialState: AbTestsState = {
    weatherCardVariant: "A"
}

const abTestsSlice = createSlice({
    name: 'abTests',
    initialState,
    reducers: {
        setAbTest: (state, action: PayloadAction<Variant>) => {
            state.weatherCardVariant = action.payload
            storeVariant(action.payload)
        }
    }
})

export const { setAbTest } = abTestsSlice.actions;
export default abTestsSlice.reducer;