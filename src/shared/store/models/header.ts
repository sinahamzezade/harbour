import { createModel } from "@rematch/core";
import { RootState } from "..";

const DEFAULT_FILTER_STATE = {
  showStickybar: false,
  title: "",
};

type Modify<T, R> = Omit<T, keyof R> & R;

type MyType = Modify<
  typeof DEFAULT_FILTER_STATE,
  {
    showStickybar: Boolean;
    title: string;
  }
>;

const defaultStateWithType: MyType = DEFAULT_FILTER_STATE;

const headerModel = createModel<RootState>()({
  effects: {}, // initial state
  reducers: {
    toggleSticky(state, status: Boolean) {
      return { ...state, showStickybar: status };
    },
    setTitle(state, title) {
      return { ...state, title };
    },
  },
  state: defaultStateWithType,
});

export default headerModel;
