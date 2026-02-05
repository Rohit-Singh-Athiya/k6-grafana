import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL } from '../../config/dev.env.js';

export const options = {
    vus: 1,
    duration: '10s'
}

export default function() {
    const response  = http.get(`${BASE_URL}/public/crocodiles/`);
    check(response, {
        'status is 200' : (resp) => response.status === 200,
        'response time < 500 ms' : (time) => response.timings.duration < 500
    });
}
