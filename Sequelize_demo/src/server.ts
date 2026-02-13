import sequelize from "./config/database";
import app from "./app";
import "./models/associations";

const PORT = 5000;

sequelize.authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error:", err);
  });