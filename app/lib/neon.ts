import { neon } from "@neondatabase/serverless";

export function getDb() {
  return neon(process.env.PIBUGOM_DATABASE_URL!);
}
