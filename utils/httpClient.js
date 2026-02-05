import http from 'k6/http';

export function getApi(url, params = {}){
    return http.get(url, params);
}