import {
   INCREMENT
} from '../constants'

const stateDefault= 0;

const increment = (state = stateDefault, action) =>{
    const {type} = action
    switch (type){
        case INCREMENT: return state + 1
        default: return stateDefault
    }

}
export default increment