const {Client} = require("pg")

const SQL = `
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        description TEXT,
        release_date DATE,
        gender VARCHAR(5),
        primary_color VARCHAR(10),
        secondary_color VARCHAR(10),
        price NUMERIC(10,2),
        image_url TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS jerseys(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        product_id INTEGER NOT NULL,
        size VARCHAR(5),
        league VARCHAR(10),
        player VARCHAR(25),
        team   VARCHAR(25),
        jersey_type VARCHAR(25),

        CONSTRAINT jersey_fk_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS shorts(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        product_id INTEGER NOT NULL,
        size VARCHAR(5),
        league VARCHAR(10),
        player VARCHAR(25),
        team   VARCHAR(25),

        CONSTRAINT shorts_fk_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE
    );
    

    CREATE TABLE IF NOT EXISTS shirts(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        product_id INTEGER NOT NULL,
        size VARCHAR(5),
        league VARCHAR(10),
        player VARCHAR(25),
        team   VARCHAR(25),

        CONSTRAINT shirts_fk_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE
    );
    
    CREATE TABLE IF NOT EXISTS headwear(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        product_id INTEGER NOT NULL,

        size VARCHAR(5),
        league VARCHAR(10),
        player VARCHAR(25),
        team   VARCHAR(25),
        headwear_type VARCHAR(25),

        CONSTRAINT headwear_fk_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        reward_points INT NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS addresses(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INT NOT NULL,
        street VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(50) NOT NULL,
        zip_code VARCHAR(20) NOT NULL,


        CONSTRAINT fk_user
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
    );
    
    CREATE TABLE IF NOT EXISTS cart(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),

        CONSTRAINT fk_user
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,
        
        CONSTRAINT fk_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE,

        CONSTRAINT unique_cart_item UNIQUE (user_id,product_id)
    );
    
    CREATE TABLE IF NOT EXISTS purchased_orders(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),

        CONSTRAINT fk_user
            FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE,
        
        CONSTRAINT fk_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE,

        CONSTRAINT unique_purchased_item UNIQUE (user_id,product_id)
    );
`

async function main(){
    console.log("seeding")
    const client = new Client({connectionString:"postgresql://postgres:Green1234%3F@localhost:5431/postgres"});
    await client.connect();
    await client.query(SQL)
    await client.end()
    console.log("done");
}

main();