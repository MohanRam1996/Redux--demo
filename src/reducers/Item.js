// importing action type
import { ITEMVALUE } from "../action/action";

export default function Item(state = {}, action) {
  switch (action.type) {
    case ITEMVALUE:
      return {
        value: action.data,
      };
    default:
      return state;
  }
}
