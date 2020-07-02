const RECEPTIONS = "RECEPTIONS";
const FEILTER_CLIENT = "FEILTER_CLIENT";
const FILTER_NAME = "FILTER_NAME";
const FILTER_DATE = "FILTER_DATE";

const initialState = {
  receptions: [],
};

export const receptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEPTIONS:
      return { ...state, receptions: action.payload };
    case FILTER_NAME:
      action.payload.letters = action.payload.letters.split(" ").join("-");
      state.receptions = action.payload.json.filter((item) => {
        item.client = item.client.split(" ").join("-");
        if (item.client.indexOf(action.payload.letters) != -1) {
          item.client = item.client.split("-").join(" ");
          return item;
        }
      });
      return { ...state };
    case FILTER_DATE:
      state.receptions = state.receptions.filter((item) => {
        let startDate = +action.payload.date.startDate.split("-").join("");
        let lastDate = +action.payload.date.lastDate.split("-").join("");
        let date = +item.date.split(".").reverse().join("")
        if (date => startDate && date <= lastDate) {
          return item;
        }
      });
      return { ...state };
    default:
      return state;
  }
};
