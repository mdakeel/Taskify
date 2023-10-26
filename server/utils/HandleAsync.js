const HandleAsync=async(req,res,cb)=>{
        try {
             cb()
        } catch (error) {
            res.status(501).send({msg:error.message})
        }
}


module.exports = HandleAsync