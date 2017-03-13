const IP_ADDRESS = '10.0.0.187';
const PORT = 8080;

const isProd = () => process.env.NODE_ENV === 'production';

export default {
	IP_ADDRESS,
	PORT,
    isProd
};