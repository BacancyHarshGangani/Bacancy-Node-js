import sequelize from "./config/database";

sequelize.authenticate()
  .then(() => console.log("Supabase Connected ✅"))
  .catch((err) => console.error("Connection Error ❌", err));
