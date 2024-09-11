import { csrfFetch } from './csrf';

// constant to avoid debugging typos
const ADD_REVIEW = 'review/add_review';

//regular action creator
const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    review
  };
};

// thunk action creator
export const createReview = (spotId, newReview) => async (dispatch) => {
  const { review, stars } = newReview;
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    body: JSON.stringify({ review, stars })
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch(addReview(data));
    return data;
  }
}

//reducer
const initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newReview = action.review;
      const newState = { ...state, ...newReview };
      return newState;
    }
    default:
      return state;
  }
}

export default reviewReducer;
