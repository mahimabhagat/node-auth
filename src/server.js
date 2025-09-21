import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");

    await sequelize.sync(); 
    console.log("Tables synced...");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to DB:", error);
  }
})();
