


// all data fetches here

// fetching shop card data
export const fetchShopCardData = async () => {
    try{
        console.log("fetching started ...")

        // fetching API
        const result = await fetch("https://farm-basket3.onrender.com/shop/all")
        const data = await result.json()

        console.log("fetching done")

        return data
        
    } catch(error){
        console.error('server error:', error)
        throw new Error('Failed to fetch shop card data')
    }
}
