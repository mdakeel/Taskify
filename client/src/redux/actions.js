
// ACTION TO LOGIN

export const loginUser=async()=>async dispatch =>{
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
  }

  // REGISTER USER
  const userRegister=async() => async dispatch=>{
    const resp=await fetch("http://localhost:8081/user/signup",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userLogin)
    })
    if(resp.status==200){
      console.log("register Success")
    }else{
      console.log("Error while register")
    }
  }