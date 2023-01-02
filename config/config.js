if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: "./.env.development" });
} else if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: "./.env.production" });
}
