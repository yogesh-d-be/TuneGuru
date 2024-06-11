// export const API_URL = "http://localhost:3420" 
// export const API_URL = "https://backend-kg0v.onrender.com"

export const API_URL = process.env.NODE_ENV === 'development'? "http://localhost:3420" : "https://backend-kg0v.onrender.com"