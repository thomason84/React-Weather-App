import { FETCH_WEATHER } from '../actions/index';

//initialized state as an array because we want
//multiple cities worth of data
export default function(state = [], action){

  switch (action.type){
    case FETCH_WEATHER:
      //concat does not mutate state where as state.push would so
      //this would work
      // return state.concat([ action.payload.data ]);

      // nearly the same as above and returns [city, city, city]
      // not [city, [city, city]]
      return [ action.payload.data, ...state ];
  }
  return state;
}
