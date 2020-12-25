import { GET_ITEMS_SUCCESS, GET_ITEMS, GET_ITEMS_FAIL } from "../Actions/Type";

const initialState = {
  data: [],
  loading: false,
};

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
