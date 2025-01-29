import mongoose from "mongoose";
import config from "./config";
import app from "./app";
import { Server } from "http";
import DBSeeder from "./seeder";

let server: Server;

async function main() {
  try {
    console.log("connectinh to mongo Db....");
    await mongoose.connect(config.mongoose_uri);
    await DBSeeder.adminSeeder();
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    throw Error("something went wrong in server or mongoose connection");
  }
}
main();

// Global unhandled promise rejection handler
process.on("unhandledRejection", async (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Gracefully shutting down the server
  if (server) {
    try {
      server.close(() => {
        console.log(
          "Server and MongoDB connection closed due to unhandled rejection."
        );
        process.exit(1); // Exit the process with an error code
      });
    } catch (err) {
      console.error("Error during shutdown:", err);
      process.exit(1); // Exit with error code if shutting down fails
    }
  } else {
    process.exit(1);
  }
});

// Global uncaught exception handler
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  // Gracefully shutting down the server
  if (server) {
    try {
      server.close(() => {
        console.log(
          "Server and MongoDB connection closed due to uncaught exception."
        );
        process.exit(1); // Exit the process with an error code
      });
    } catch (err) {
      console.error("Error during shutdown:", err);
      process.exit(1); // Exit with error code if shutting down fails
    }
  } else {
    process.exit(1);
  }
});
