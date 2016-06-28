import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const SELECT_USER = 'SELECT_USER';

const ROOT_URL ='http://jsonplaceholder.typicode.com/users'

export function fetchUsers() {
    const request = axios.get(ROOT_URL)
    return {
        type: FETCH_USERS,
        payload: request
    };
}

export function createUsers(props) {
    const request = axios.post(ROOT_URL, props)
    return {
        type: CREATE_USER,
        payload: request
    };
}

export function selectUser(user) {
    return {
        type: SELECT_USER,
        payload: user
    };
}


