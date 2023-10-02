import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Key from "../../API/Key"
import Omdb from "../../API/URL"

export const fetchMovie = createAsyncThunk("Movie/fetchMovie", async (n) => {
    try {
        const resp = await Omdb.get(`?apiKey=${Key}&type=${"movie"}&s=${n}`).catch((e) => { throw new e })
        

        return resp.data;
    }
    catch (e) {
        throw e;
    }
}
)

export const fetchShow = createAsyncThunk("Show/fetchShow", async (n) => {
    return (
        Omdb.get(`?apiKey=${Key}&type=${"series"}&s=${n}`)
            .then((res) => res.data)
            .catch((e) => {
                throw e;
            })
    )
})

export const fetchDetails = createAsyncThunk("Show/fetchDetails", async (id) => {
    try {
        const resp = await Omdb.get(`?apiKey=${Key}&i=${id}`).catch((e) => { throw e })
        return resp.data;
    }
    catch (e) {
        throw e;
    }
}
)

const omdb = createSlice({
    name: "Omdb",
    initialState: {
        status: {
            loading: false,
            issue: "",
            error: false,
        },
        watchList: [],
        movieData: null,
        showData: null,
        showDetail: null,
    },
    reducers: {
        add: (state, action) => {
            state.watchList.push(action.payload);
        },
        remove: (state, action) => {
            state.watchList = state.watchList.filter((val) => val.id != action.payload)
        }


    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            state.status.loading = true;
        })
        builder.addCase(fetchMovie.rejected, (state, action) => {
            state.status.error = false
            state.status.issue = action.error.message;
        })
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.status.loading = false;
            console.log(action.payload)
            state.movieData = action.payload;
        })

        builder.addCase(fetchShow.fulfilled, (state, action) => {
            state.status.loading = false;
            state.showData = action.payload;
        })
        builder.addCase(fetchDetails.pending, (state, action) => {
            state.status.loading = true;
        })
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.status.loading = false;
            state.showDetail = action.payload;
        })
    }

})
export default omdb.reducer;
export { omdb };
export const { add, remove } = omdb.actions;