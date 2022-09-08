import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export const SET_TRAVELER = 'SET_TRAVELER'
export const NEW_TRACK = 'NEW_TRACK'

const initialState = {
  travelerTracker: {
    traveler: null,
    trace: [],
  },
}

export const travelerReducer = (state = { traveler: null, trace: [] }, action) => {
  switch (action.type) {
    case SET_TRAVELER:
      return { ...state, traveler: action.traveler }
    case NEW_TRACK:
      return {
        ...state,
        trace: action.trace,
      }
    default:
      return { ...state }
  }
}

export const setTraveler = (traveler: Traveler) => (dispatch) => dispatch({
  type: SET_TRAVELER,
  traveler,
})

export const newTrack = (track: TravelerTrackEvent) => (dispatch, getState) => {
  const t : Array<TravelerTrackEvent> = Object.assign([], getState().travelerTracker.trace)
  t.push(track)
  return dispatch({
    type: NEW_TRACK,
    trace: t,
  })
}


const reducers = combineReducers({
  travelerTracker: travelerReducer,
})

export default () => createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
)
