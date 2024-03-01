export const FetchNews = async (topic)=>{
    const response = await fetch( `https://newsapi.org/v2/everything?q=${topic}&from=2024-02-01&sortBy=publishedAt&apiKey=0d4c0934755f4eada1d79a7e3d3d16a9
    `);
    const data = await response.json()
    return data.articles
} 
