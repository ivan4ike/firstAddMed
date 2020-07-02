import star from "../images/star.png";
import priem from "../images/priem.png";
import opovehenia from "../images/opovehenia.png";
import message from "../images/message.png";
import famile from "../images/famile.png";
import doctor from "../images/doctor.png";

const initialState = {
  sections: [
    { img: priem, sectionsName: "Приёмы", url: 'receptions' },
    { img: star, sectionsName: "События", url: 'events' },
    { img: opovehenia, sectionsName: "Оповещения", url: 'notification' },
    { img: message, sectionsName: "Сообщения", url: 'messages' },
    { img: famile, sectionsName: "Клиенты", url: 'clients' },
    { img: doctor, sectionsName: "Сотрудники", url: 'employees' },
  ],
};

export const sectionsReducer = (state = initialState, action) => {
  return state;
};
