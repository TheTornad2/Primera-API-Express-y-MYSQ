import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "@Berserker0201654",
  port: 3306,
  database: "companydb",
});
