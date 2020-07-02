const RECEPTIONS = "RECEPTIONS";
const LOGIN = "LOGIN";
const FILTER_NAME = "FILTER_NAME";
const FILTER_DATE = "FILTER_DATE";


export function receptionss() {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/receptions");
    const json = await response.json();
    dispatch({ type: RECEPTIONS, payload: json });
  };
}

export function filterName(letters) {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/receptions");
    const json = await response.json();
    dispatch({ type: FILTER_NAME, payload: { letters, json } });
  };
}

export function filterDate(date) {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/receptions");
    const json = await response.json();
    dispatch({ type: FILTER_DATE, payload: { date, json } });
  };
}

export function receptionsMi(name) {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:3001/receptions?receiving=${name}`
    );
    const json = await response.json();
    dispatch({ type: RECEPTIONS, payload: json });
  };
}

export function loginAC(login, password) {
  return async (dispatch) => {
    fetch(`http://localhost:3001/clients?login=${login}&password=${password}`)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length !== 0) dispatch({ type: LOGIN, data: data });
      });
  };
}
