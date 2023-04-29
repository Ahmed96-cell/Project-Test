import { ALLDATA } from "../types/types";

const intial = {};
export const appReducer = (state = intial, action) => {
  switch (action.type) {
    case ALLDATA:
      return { name: action.name, age: action.age };

    default:
  }
};
