import axios from 'axios';
// import { CookieOptions } from 'express';

const CommonConfs = {
  corsOption: {
    origin: ['*'] as Array<string>,
  },
  app: {
    port: process.env.PORT || 8080,
    logger_format: process.env.LOG_MODE || 'dev',
  },
  //   cookieOptions: <CookieOptions>{
  //     maxAge: 1000 * 60 * 72,
  //   },
  MediaConfig: {
    FILES: (() => {
      const files = new Map<string, number>();
      const mb = 1024 * 1024;

      files.set('image/png', mb * 12);
      files.set('image/jpeg', mb * 12);
      files.set('image/webp', mb * 12);
      return files;
    })(),
  },
};

const devConfig = { ...CommonConfs, info: { name: 'development' } };

const testConfig = { ...CommonConfs, info: { name: 'testing' } };

const proConfig = {
  ...CommonConfs,
  info: { name: 'production' },
  //   cookieOptions: <CookieOptions>{
  //     maxAge: 1000 * 60 * +process.env.COOKIE_EXPIRES_DATE,
  //     sameSite: 'strict',
  //     secure: true,
  //     httpOnly: true,
  //     path: '/',
  //   },
  //   corsOption: <CorsOptions>{
  //     origin: ['http://localhost:3000/'] as Array<string>,
  //   },
};

const configs = [devConfig, testConfig, proConfig];

const appConfig = async (mode = 'development') => {
  const conf = configs.find((conf) => conf.info.name === mode);
  const data = await axios.get('https://reqres.in/api/users');

  return { ...conf, data: data.data.data };
};

export default appConfig;
