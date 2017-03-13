const IP_ADDRESS = '127.0.0.1';
const PORT = 8080;

const isProd = () => process.env.NODE_ENV === 'production';

export default {
	IP_ADDRESS,
	PORT,
    isProd
};