const EVENTS = "EVENTS";
const ACTIV_EVENT = "ACTIV_EVENT";
const GET_EVENT = "GET_EVENT";

const initialState = {
  events: [],
  isOpenEvent: false,
  informationEvent: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS:
      return {
        ...state,
        events: action.payload.events,
      };
    case ACTIV_EVENT:
      return {
        ...state,
        isOpenEvent: !state.isOpenEvent,
      };
    case GET_EVENT:
      return {
        ...state,
        informationEvent: action.payload.informationEvent
    };
    default:
      return { ...state };
  }
};
