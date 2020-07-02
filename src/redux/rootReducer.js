import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { sectionsReducer } from "./sectionsReducer";
import { receptionsReducer } from "./receptionsReducer";
import { eventsReducer } from "./eventsReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  sections: sectionsReducer,
  receptions: receptionsReducer,
  events: eventsReducer,
});
