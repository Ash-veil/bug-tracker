import "dotenv/config";

//app_init
import express from "express";
const app = express();

app.use(express.urlencoded({ extended: false }));

//db_configs
import { sequelize, User, Project } from "./configs/database.js";
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected.");

    await sequelize.sync({ alter: true, force: false });
    console.log("✅ Models synced.");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  }
})();

//logger_setup
import loggerMiddleware from "./middleware/logger.js";
app.use(loggerMiddleware);

//test_route
app.get("/", (req, res) => {
  res.send("server is live!");
});

//api_routes
import authRoutes from "./route/authentication.js"
app.use(authRoutes)

//server_start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running at port: ", PORT);
});

export default app;
