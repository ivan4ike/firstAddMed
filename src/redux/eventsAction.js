const EVENTS = "EVENTS";
const GET_EVENT = "GET_EVENT";
const ACTIV_EVENT = "ACTIV_EVENT";

export function getEvents() {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/events");
    const events = await response.json();
    dispatch({ type: EVENTS, payload: { events } });
  };
}

export function getOpenEvent(id) {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/informationEvent/${id}`);
    const informationEvent = await response.json();
    dispatch({ type: GET_EVENT, payload: { informationEvent } });
  };
}