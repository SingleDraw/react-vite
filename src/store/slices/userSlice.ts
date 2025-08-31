import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface User {
  id: number
  name: string
  email: string
}

interface UserState {
  data: User | null
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: UserState = {
  data: null,
  status: "idle",
  error: null,
}

// ✅ Async thunk
export const fetchUser = createAsyncThunk<User, number, { state: RootState }>(
  "user/fetchUser",
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if (!response.ok) throw new Error("Failed to fetch user")
      return await response.json()
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })
  },
})

export default userSlice.reducer
