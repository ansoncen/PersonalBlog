import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            const newState = { post: action.payload.data }
            return newState;
        case FETCH_POSTS:
            return action.payload.data;
        default:
            return state;
    }
}
