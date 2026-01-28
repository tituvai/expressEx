
function authMiddleware(req, res, next) {
   if(req.session.isAuth){
    next()
   } 
  return res.status(400).json({message:"you are not access"})
}

module.exports=authMiddleware