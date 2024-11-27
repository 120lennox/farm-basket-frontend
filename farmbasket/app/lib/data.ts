// all data fetches here

// Define interfaces for your data types
  
  interface User {
    id: string; 
  }
  
  interface Product {
    id: string;
    
  }

  
  // fetching shop card data
 // In your data.ts file
export interface Shop {
  shopid: string;
  image: string;
  name: string;
  description: string;
}

export const fetchShopCardData = async (): Promise<Shop[]> => {
  try {
    console.log("fetching started ...");
    
    // fetching API
    const response = await fetch("https://farm-basket3.onrender.com/shop/all");
    
    // Check if the response is ok
    if (!response.ok) {
      console.error('Response not OK:', {
        status: response.status,
        statusText: response.statusText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Try to parse the JSON
    const data = await response.json();
    
    console.log('Raw response data:', data);
    console.log('Type of data:', typeof data);
    
    // Validate that data is an array
    if (!Array.isArray(data)) {
      console.error('Received data is not an array:', data);
      throw new Error('Received data is not an array');
    }
    
    // Validate array items match Shop interface
    const validatedData: Shop[] = data.map(item => {
      if (!item.shopid || !item.image || !item.name || !item.description) {
        console.warn('Invalid shop item:', item);
      }
      return item as Shop;
    });
    
    console.log("Validated shop data:", validatedData);
    return validatedData;
  } catch (error) {
    console.error('Server error:', error);
    throw new Error('Failed to fetch shop card data..');
  }
}

export const fetchShopProducts = async(shopid: number)=>{
  try {
    const result = await fetch(`https://farm-basket3.onrender.com/products/${shopid}/products`)
    const data = await result.json()

    console.log("product", data)
    return data
  }catch(error){
    console.error('Server error:', error);
    throw new Error('Failed to fetch shop products..')
  }
}
  
  // fetch all users
  export const fetchUsers = async (): Promise<User[]> => {
    try {
      console.log("fetching users...");
      
      const result = await fetch('https://farm-basket3.onrender.com/users/all');
      const data: User[] = await result.json();
      
      console.log("Users: ", data);
      return data;
    } catch (error) {
      console.error('server error: ', error);
      throw new Error('failed to fetch users');
    }
  }
  
  // fetch user by id
  export const fetchUserById = async (id: string): Promise<User> => {
    try {
      console.log("fetching user by id...");
      
      const result = await fetch(`https://farm-basket3.onrender.com/users/${id}`);
      const data: User = await result.json();
      
      console.log("User: ", data);
      return data;
    } catch (error) {
      console.error('server error: ', error);
      throw new Error('failed to fetch user by id');
    }
}

  
  export const fetchShopid = async (id: string): Promise<Shop> => {
    try {
      console.log(id);
      
      const result = await fetch(`https://farm-basket3.onrender.com/shop/${id}`);
      const data: Shop = await result.json();
      
      console.log("New data", data);
      return data;
    } catch (error) {
      console.error('server error:', error);
      throw new Error('Failed to fetch shop');
    }
}
  
  export const fetchProduct = async (): Promise<Product[]> => {
    try {
      console.log("fetching started...");
      
      const result = await fetch('https://farm-basket3.onrender.com/products');
      const data: Product[] = await result.json();
      
      console.log("API data", data);
      return data;
    } catch (error) {
      console.error('server error:', error);
      throw new Error('Failed to fetch products');
    }
}


  export const fetchProductid = async (id: string): Promise<Product> => {
    try {
      console.log(id);
      
      const result = await fetch(`https://farm-basket3.onrender.com/Product/${id}`);
      const data: Product = await result.json();
      
      console.log("New data", data);
      return data;
    } catch (error) {
      console.error('server error:', error);
      throw new Error('Failed to fetch product');
    }
}


  