

const intialState={auth:false}

const storeReducer=(state=intialState,action)=>{
        switch (action.type) {
            case "bookdata":
                return {}
                break;
           
            default:
                return state
                
        }
}

export default storeReducer