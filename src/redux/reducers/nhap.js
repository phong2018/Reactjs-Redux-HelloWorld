import { NHAP} from "../actionTypes";

const initialState = {
  name:""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NHAP: {
      console.log("2.Redux/reducers/hello.js.HELLO:",action.payload);

      const { name } = action.payload;
      return {
        ...state,
        name: name
      };
    }
    default:
      //console.log("luu add hello");
      return state;
  }
}
