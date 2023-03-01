const dealyActionMiddleWeare =(store)=>(next)=>(action)=>{
  if(action.type==='todos/todoLoaded'){
    console.log("i am delying ")
    setTimeout(()=>{
      next(action)
    },2000)

    return;
    
  }

  return next(action)
}

module.exports ={
  dealyActionMiddleWeare
}
