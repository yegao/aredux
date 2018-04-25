import {createStore} from 'redux'

const counter = function(state,action){
  switch(action.type){
    case 'ADD':return state+1;
    case 'RMV':return state-1;
    default: return state;
  }
}

export default {
  counter:createStore(counter,1)
}
