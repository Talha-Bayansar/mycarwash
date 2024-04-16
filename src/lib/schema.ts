import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

import { db } from "./db";

export const userTable = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  username: text("username").notNull(),
  hashed_password: text("hashed_password").notNull(),
});

export type User = typeof userTable.$inferSelect; // return type when queried
export type InsertUser = typeof userTable.$inferInsert; // insert type

export const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer("expires_at").notNull(),
});

export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);
