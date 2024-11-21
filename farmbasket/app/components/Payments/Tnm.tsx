
const searchingBar=()=>{
    return(
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <div className=" flex-auto text-right rounded-full text-black ">
                             
        <input type="text" name="address" placeholder="Seaching..." />
        
        </div>
        <div className=" text-up"></div>
        <div>
            <label>All</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
            </svg>


            <select name="category"
            id="names">
                <option value ="Farm_products" ></option>
                <option value ="Farm_machinery" >Farm_machinery</option>
                <option value ="Chemicals" >Chemicals</option>
                <option value ="Fertilizers" >Fertilizers</option>
               <option value ="Pestcides" >Pestcides</option>
               <option value ="Herbcides" >Herbcides</option>
            </select>
            <label>All</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
            </svg>


            <select name="category"
            id="names">
               <option value ="Farm_products" ></option>
                <option value ="Farm_machinery" >Farm_machinery</option>
                <option value ="Chemicals" >Chemicals</option>
                <option value ="Fertilizers" >Fertilizers</option>
               <option value ="Pestcides" >Pestcides</option>
               <option value ="Herbcides" >Herbcides</option>
            </select>
            <label>All</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
            </svg>


            <select name="category"
            id="names">
                <option value ="Farm_products" ></option>
                <option value ="Farm_machinery" >Farm_machinery</option>
                <option value ="Chemicals" >Chemicals</option>
                <option value ="Fertilizers" >Fertilizers</option>
               <option value ="Pestcides" >Pestcides</option>
               <option value ="Herbcides" >Herbcides</option>
            </select>
         
        

        
        
        </div>
        <div>
            <label>Tranding</label>
            <img src="desktop/test/1706732184007.jpg" alt="Jose" className= "align-left medium"/> 
            <img src="desktop/test/1706732184007.jpg" alt="Rasta" className= "align-right medium" /> 
            <img src="desktop/test/1706732184007.jpg" alt="Rasta" className= "align-left medium"/> 
            <img src="desktop/test/1706732184007.jpg" alt="Rasta" className= "align-left medium"/> 
            <img src="desktop/test/1706732184007.jpg" alt="Rasta" className= "align-left medium"/> 
            <img src="desktop/test/1706732184007.jpg" alt="Rasta" className= "align-left medium"/> 
            <img src="desktop/test/1706732184007.jpg" alt="Rasta" className= "align-left medium"/> 
            </div>
        </div>

    );
}
export default searchingBar;