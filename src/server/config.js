const {NODE_ENV } = process.env;
const IP_ADDRESS = "127.0.0.1";
const PORT = 8080;

const isProd = () => NODE_ENV === 'production';

export default {
	IP_ADDRESS,
	PORT,
    isProd
};