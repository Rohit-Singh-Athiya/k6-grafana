import { check } from 'k6';
import { BASE_URL } from '../../config/dev.env.js';
import { getApi } from '../../utils/httpClient.js';

export const options = {
    vus: 1,
    duration: '10s'
}

export default function() {
    const response  = getApi(`${BASE_URL}/public/crocodiles/`);
    check(response, {
        'status is 200' : (resp) => response.status === 200,
        'response time < 500 ms' : (time) => response.timings.duration < 500
    });
}
