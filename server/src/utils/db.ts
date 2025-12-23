import mongoose from "mongoose";

export class Database {
  private static instance: Database;
  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect() {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    if (!conn) {
      throw new Error("Failed to connect to the database");
    }
    return conn;
  }
}
