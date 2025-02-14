import { configureStore, createSlice } from '@reduxjs/toolkit'

  const authSlice = createSlice({
    name:"auth",
    initialState:{user:"",isLoggedIn:false},
    reducers: {
      login(state){
        state.isLoggedIn=true
      },
      logOut(state){
        state.isLoggedIn=false
      },
    },
  })

export const authAction=authSlice.actions;

export const store = configureStore({
  reducer:authSlice.reducer,
});