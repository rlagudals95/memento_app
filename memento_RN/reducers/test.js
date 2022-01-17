import { createAction, handleActions } from "redux-actions";

// 액션 타입을 정의해줍니다.
const GET_FEEDS = "steem/getFeeds";

// 액션 생성 함수를 만듭니다.
export const getFeeds = createAction(GET_FEEDS);

// 초기 State를 정의합니다.
const initialState = {
  feeds: [],
};

// 리듀서 함수를 정의합니다.
export default handleActions(
  {
    [GET_FEEDS]: (state, action) => {
      state = {
        ...state,
        feeds: [...state.feeds, ...action.payload],
      };
      return state;
    },
  },
  initialState
);
