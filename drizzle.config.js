
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./src/utlis/Schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://neonDB_owner:c2LEm5TwiIHV@ep-wild-sky-a1yk3qv4.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require",
    }
  };