import { createModel } from "@rematch/core";
import { RootState } from "..";

const DEFAULT_FILTER_STATE = {
  hasMessage: false,
  title: "",
};

type Modify<T, R> = Omit<T, keyof R> & R;

type MyType = Modify<
  typeof DEFAULT_FILTER_STATE,
  {
    hasMessage: Boolean;
    title: string;
  }
>;

const defaultStateWithType: MyType = DEFAULT_FILTER_STATE;

const headerModel = createModel<RootState>()({
  effects: {}, // initial state
  reducers: {
    hasMessage(state, status) {
      return { ...state, hasMessage: status };
    },
    setTitle(state, title) {
      return { ...state, title };
    },
  },
  state: defaultStateWithType,
});

export default headerModel;
