

const intialState={auth:false}

const Reducer=(state=intialState,action)=>{
        switch (action.type) {
            case "bookdata":
                return {}
                break;
           
            default:
                return state
                
        }
}

export default Reducer