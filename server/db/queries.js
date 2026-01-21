const pool = require("./pool")

async function getNewReleases(){
    sql = `
            SELECT 
                p.description,
                p.gender,
                p.primary_color,
                p.secondary_color,
                p.price,
                p.image_url,
                j.league,
                j.team,
                j.player,
                j.jersey_type,
            FROM products p
            JOIN jerseys j ON j.product_id = p.id

            
          `
    const {rows} = await pool.query
}