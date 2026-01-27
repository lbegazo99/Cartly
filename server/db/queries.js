const pool = require("./pool")

async function getProducts({category,sort,order,sub,league}){
   if(category == "none" && sub == "new"){
       sql = `
       SELECT *
       FROM (
           SELECT
               p.id, p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url,
               'jersey' AS item_type,j.league,j.team,j.player,j.jersey_type
           FROM products p
           JOIN jerseys j ON j.product_id = p.id
       
           UNION ALL
       
           SELECT
               p.id,p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url,
               'shorts' AS item_type,s.league,s.team,s.player,
               NULL::varchar AS jersey_type
           FROM products p
           JOIN shorts s ON s.product_id = p.id
       
           UNION ALL
       
           SELECT
               p.id,p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url,
              'shirt' AS item_type,sh.league,sh.team,sh.player,
               NULL::varchar AS jersey_type
           FROM products p
           JOIN shirts sh ON sh.product_id = p.id
       ) all_items
        WHERE release_date >= CURRENT_DATE - INTERVAL '30 days'
        ORDER BY release_date DESC;
       `
   }else if(sub == "new"){
       sql = `
       SELECT
            p.id, p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url,
            cat.league,cat.team,cat.player,cat.jersey_type
       FROM products p
       JOIN ${category} cat ON cat.product_id = p.id
       WHERE release_date >= CURRENT_DATE - INTERVAL '30 days'
       ORDER BY release_date DESC;
       `
   }
   else if(league == "none"){
        sql = `
        SELECT
            p.id, p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url,
            cat.league,cat.team,cat.player,cat.jersey_type
        FROM products p
        JOIN ${category} cat ON cat.product_id = p.id
        WHERE cat.jersey_type = '${sub}'
        ORDER BY ${sort} ${order};
        `
   }else{
        sql = `
        SELECT
            p.id, p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url,
            cat.league,cat.team,cat.player,cat.jersey_type
        FROM products p
        JOIN ${category} cat ON cat.product_id = p.id
        WHERE cat.jersey_type = '${sub}' and cat.league = '${league}'
        ORDER BY ${sort} ${order};
        `
   }

   const result = await pool.query(sql)
   return result
}

async function getProduct(id){
    sql = `
        SELECT p.id,p.description,p.release_date,p.gender,p.primary_color,p.secondary_color,p.price,p.image_url
        From products p
        WHERE p.id = $1
    `

    const result = await pool.query(sql,[id])
    return result.rows[0];
}

module.exports = {
    getProducts,
    getProduct
}