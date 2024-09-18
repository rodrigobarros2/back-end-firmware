import pinoHttp from "pino-http";

const loggerHttp = pinoHttp({
  transport: {
    target: "pino-http-print",
    options: {
      colorize: true,
      all: false,
      relativeUrl: true,
      lax: false,
      translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
    },
  },
});

export { loggerHttp };
