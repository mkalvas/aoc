import crypto from 'crypto';

export const md5 = (s) => crypto.createHash('md5').update(s).digest('hex');
