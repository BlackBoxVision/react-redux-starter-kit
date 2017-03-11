export default class Response  {
    static send(response, { headers, status, data }) {
        if (headers && typeof headers === 'object') {
            Object.keys(headers).forEach(key => response.append(key, headers[key]));
        }

        if (status && typeof status === 'number') {
            response.status(status);
        }

        if (data && typeof data === 'object' || typeof data === 'array' || typeof data === 'string') {
            response.send(data);
        }

        response.end();
    };
}