 const DB_USER= process.env.DB_USER || process.env.DB_USER_LOCAL
 const DB_PASSWORD= process.env.DB_PASSWORD || process.env.DB_PASSWORD_LOCAL
 const DB_HOST= process.env.DB_HOST || process.env.DB_HOST_LOCAL
 const DB_PORT= process.env.DB_PORT || process.env.DB_PORT_LOCAL
 const YOUR_API_KEY= process.env.YOUR_API_KEY || process.env.YOUR_API_KEY_LOCAL

 const PORT = process.env.PORT || 3001


module.exports = {
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    YOUR_API_KEY,
    PORT
 }