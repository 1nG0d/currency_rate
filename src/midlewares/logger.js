export default store  =>  next => action =>{
    console.log("before ac:",store.getState())
    console.log("dispatch action:", action.type)
    next(action)
    console.log("after ac:",store.getState())
}
