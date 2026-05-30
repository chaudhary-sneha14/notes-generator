import { createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
name:'user',
initialState:{
  userData:null
},
reducers:{ //function defining at what action/event what will perform
  setUserData:(state,action)=>{ //setUserData,updateCredits->action
    state.userData=action.payload
  },
  updateCredits:(state,action)=>{
    if(state.userData){
      state.userData.user.credits=action.payload
    } 
  }
}
})

export const {setUserData,updateCredits} =userSlice.actions

export default userSlice.reducer;