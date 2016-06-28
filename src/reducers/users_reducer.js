import { FETCH_USERS, CREATE_USER, SELECT_USER } from '../actions/index'

const INITIAL_STATE = { all: [], currentUser: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, all: action.payload.data };
        case CREATE_USER:
            return { ...state, all: action.payload.data };
        case SELECT_USER:
            return { ...state, currentUser: action.payload };
    default:
    return state;
    }
}
