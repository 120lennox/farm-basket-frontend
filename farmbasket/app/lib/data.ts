


// all data fetches here

// fetching shop card data
export const fetchShopCardData = async () => {
    try{
        console.log("fetching started ...")

        // fetching API
        const result = await fetch("https://farm-basket3.onrender.com/shop/all")
        const data = await result.json()

        console.log("API data", data)

        return data
        
    } catch(error){
        console.error('server error:', error)
        throw new Error('Failed to fetch shop card data')
    }
}
//fetching shop products
export const fetchShopProducts = async (shopid:number)=>{
    try {
        const result = await fetch(`https://farm-basket3.onrender.com/${shopid}/products`)
        const data = await result.json()

        return data
    }catch(error){
        throw new Error('failed to fetch shop products')
    }
}

// fetch all users 
export const fetchUsers = async()=> {
    try{
        console.log("fetching users...")

        const result = await fetch('https://farm-basket3.onrender.com/users/all')
        const data = await result.json()

        console.log("Users: ", data)

        return data
    } catch(error){
        console.error('server error: ', error)
        throw new Error('failed to fetch users')
    }
}

// fetch user by id 
export const fetchUserById = async (id) => {
    try{
        console.log("fetching user by id...")
        const result = await fetch(`https://farm-basket3.onrender.com/users/${id}`)
        const data = await result.json()

        console.log("User: ", data)

        return data
    
    } catch(error){
        console.error('server error: ', error)
        throw new Error('failed to fetch user by id')
    }
}

export const fetchShopid = async(id)=>{
    try{
        console.log(id)
        const result = await fetch(`https://farm-basket3.onrender.com/shop/${id}`)
        const data = await result.json()

        console.log("New data", data)

        return data
    } catch(error){
        console.error('server error:', error)
        throw new Error('Failed to fetch shop')
    }
}

export const fetchProduct = async () =>{
    try{
        console .log("fetching started...")
        const result = await fetch ('https://farm-basket3.onrender.com/products')
        const data = await result.json()

        console.log("API data", data)

        return data
    } catch(error){
        console.error('server error:', error)
        throw new Error('Failed to fetch products')
    }
}

export const fetchNotification = async () =>{
    try{
        console .log("fetching started...")
        const result = await fetch ('https://farm-basket3.onrender.com/notification')
        const data = await result.json()

        console.log("API data", data)

        return data
    } catch(error){
        console.error('server error:', error)
        throw new Error('Failed to fetch notification')
    }
}

export const fetchProductid = async(id)=>{
    try{
        console.log(id)
        const result = await fetch(`https://farm-basket3.onrender.com/Product/${id}`)
        const data = await result.json()

        console.log("New data", data)

        return data
    } catch(error){
        console.error('server error:', error)
        throw new Error('Failed to fetch product')
    }
}

