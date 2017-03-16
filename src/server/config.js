const IP_ADDRESS = '127.0.0.1';
const PORT = 8080;

const BASE_URL = `${IP_ADDRESS}:${PORT}`;

const isProd = () => process.env.NODE_ENV === 'production';

export default {
	BASE_URL,
	IP_ADDRESS,
	PORT,
    isProd
};