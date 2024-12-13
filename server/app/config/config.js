import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const PORT = process.env.PORT||4000;

export const DATABASE = process.env.DATABASE || 'mongodb://localhost:27017';

export const JWT_KEY = process.env.JWT_KEY || 'ABC12341241234';
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME || '24h';

export const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT, 10) || 465;
export const EMAIL_SECURITY = process.env.EMAIL_SECURITY === 'true'; // Ensure boolean parsing
export const EMAIL_USER = process.env.EMAIL_USER || 'chakmacodes24@gmail.com';
export const EMAIL_PASS = process.env.EMAIL_PASS || 'bqmporsyrodbtxem';
export const EMAIL_UN_AUTH = process.env.EMAIL_UN_AUTH === 'true'; // Ensure boolean parsing

export const WEB_CACHE = process.env.WEB_CACHE === 'true'; // Ensure boolean parsing
export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE || '10MB';
export const URL_ENCODE = process.env.URL_ENCODE === 'true'; // Ensure boolean parsing

export const REQUEST_TIME = parseInt(process.env.REQUEST_TIME, 10) || 20 * 60 * 1000;
export const REQUEST_NUMBER = parseInt(process.env.REQUEST_NUMBER, 10) || 2000;
export const FRONTEND_URL=process.env.FRONTEND_URL;
