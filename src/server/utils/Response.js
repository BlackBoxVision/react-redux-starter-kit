export default class Response  {
    static send(response, { headers, status, data, redirect }) {
        if (headers && typeof headers === 'object') {
            Object.keys(headers).forEach(key => response.append(key, headers[key]));
        }

        if (status && typeof status === 'number') {
            response.status(status);
        }

        if (redirect && typeof redirect === 'string' && status && typeof status === 'number') {
            response.redirect(status, redirect);
        }

        if (data && typeof data === 'object' || typeof data === 'array' || typeof data === 'string') {
            response.send(data);
        }

        response.end();
    };
}