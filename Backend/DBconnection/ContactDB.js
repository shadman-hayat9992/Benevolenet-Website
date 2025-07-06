import pkg from 'pg';
const { Client } = pkg;

// Connect to default postgres DB to create database
const defaultClient = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "12345", 
  database: "postgres"        
});

const connectDB = async () => {
  try {
    await defaultClient.connect();
    console.log("🔌 Connected to default 'postgres' database");

    // Create database if it doesn't exist
    const dbName = "contactinfo";
    await defaultClient.query(`CREATE DATABASE "${dbName}"`);
    console.log(`✅ Database '${dbName}' created`);
  } catch (err) {
    if (err.code === '42P04') {
      console.log("ℹ️ Database 'contactinfo' already exists");
    } else {
      console.error("❌ Failed to create database:", err.message);
    }
  } finally {
    await defaultClient.end();
  }

  //Now connect to your actual DB
  const db = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "12345", 
    database: "contactinfo"
  });

  try {
    await db.connect();
    console.log("✅ Connected to 'contactinfo' database");

    //Create Contact table if not exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS "Contact" (
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(100) NOT NULL,
        lastName VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL,
        phone VARCHAR(20),
        company VARCHAR(100),
        service VARCHAR(100),
        budget VARCHAR(50),
        message TEXT,
        newsletter BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await db.query(createTableQuery);
    console.log("✅ 'Contact' table ensured");

    // Export this db connection
    return db;
  } catch (error) {
    console.error("❌ Error connecting to 'contactinfo':", error.message);
    process.exit(1);
  }
};

let db;

const initDB = async () => {
  db = await connectDB();
};

export { initDB, db };
