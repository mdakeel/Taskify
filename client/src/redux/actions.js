
// ACTION TO LOGIN

export const loginUser=(userLogin)=>async (dispatch) =>{
    try {
        const resp=await fetch("http://localhost:8081/user/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userLogin)
    })
    if(resp.status==200){
      console.log("Login Success")
    }else{
      console.log("Error while login")
    }
    } catch (error) {
        console.log("show error",error.message)
        
    }
  }

  // REGISTER USER
  export function userRegister (userLogin){
    return async function(dispatch){
   try {
    const resp=await fetch("http://localhost:8081/user/signup",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(userLogin)
      })
      if(resp.status==200){
        console.log("register Success")
        dispatch({type:"anything",payload:"doesnt matter"})
      }else{
        console.log("Error while register")
      }
    
   } catch (error) {
        console.log("erro")
        dispatch({type:"anything",payload:"doesnt matter"})
   }

  }}