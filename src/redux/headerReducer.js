const LOGIN = "LOGIN";
const AUTHENTICATION = "AUTHENTICATION";

const initialState = {
  isLogin: true,
  title: "Домашняя",
  name: "Киреев Иван Евгеньевич",
  btn: "Войти",
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let data = action.data[0];
      return {
        ...state,
        isLogin: true,
        name: `${data.surname} ${data.name} ${data.MiddleName}`,
        btn: "Выйти",
      };
    case AUTHENTICATION:
      return { ...state, isLogin: false, name: "ФИО" };
    default:
      return { ...state };
  }
};

window.state = initialState;

export function authentication() {
  return { type: AUTHENTICATION };
}
