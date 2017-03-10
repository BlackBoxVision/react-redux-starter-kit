export default class Response  {
    static send(response, { headers, status, data }) {
        if (headers && typeof headers === 'string') {
            response.header(headers);
        } else if (headers && typeof headers === 'array') {
            headers.forEach(header => response.header(header));
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