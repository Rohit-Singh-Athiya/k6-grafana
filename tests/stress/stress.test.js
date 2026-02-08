import { getApi } from "../../utils/httpClient.js";
import {check } from 'k6';
import { BASE_URL } from "../../config/dev.env.js";


export const options = {
    stages: [
        { duration: '5s', target: 200 },
    ]
}

export default function() {
    const response  = getApi(`${BASE_URL}/public/crocodiles/`);
    check(response, {
        'status is 200' : (resp) => response.status === 200,
        'response time < 500 ms' : (time) => response.timings.duration < 500
    });
}