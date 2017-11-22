import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
const url = '<aws Lambda endpoints>';

export function fetchPosts(){
    const request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

export function fetchPost(id){
    const request = axios.get(`${url}/${id}`);
    return {
        type: FETCH_POST,
        payload: request,
    };
}
