// logger.js
import morgan from "morgan";
import fs from "fs";
import * as rfs from "rotating-file-stream";
import * as path from "path";

const logDirectory = path.join(process.cwd(), "log");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
const generator = (time, index) => {
  if (!time) return "access.log";
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");
  return `access-${year}-${month}-${day}.log`;
};
const accessLogStream = rfs.createStream(generator, {
  interval: "1d", // rotate daily
  path: logDirectory,
});
morgan.token("body", (req, res) => {
  return res.locals.body ? JSON.stringify(res.locals.body) : "-";
});
const captureResponseBody = (req, res, next) => {
  const oldJson = res.json;
  res.json = function (data) {
    res.locals.body = data;
    return oldJson.call(this, data);
  };
  next();
};

// combine both middlewares in one exportable array
const loggerMiddleware = [
  captureResponseBody,
  morgan(
    ":date[iso] :method :url :status :response-time ms - :res[content-length] :body",
    { stream: accessLogStream }
  ),
];

export default loggerMiddleware;
