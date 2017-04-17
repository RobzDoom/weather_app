import { FETCH_WEATHER } from '../actions/types'

export default function (state = [], action){
    switch(action.type){
        case FETCH_WEATHER: 
            //return state.concat([ action.payload.data ])
            //We need to return a new array NOT mutate the state.
            //Concat doesnt change exisiting array creates new array that has OLD and NEW stuff. 
            return [action.payload.data, ...state ]
    }
    return state;

}
