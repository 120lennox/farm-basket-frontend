import icons from 'react-icons'

const searchingBar=()=>{
    return(
    <div className="rounded-3xl space-y-5">
        
              
        <div className="flex row">
        <div className='flex row flex-container box-border h-13 w-50 p-4  bg-slate-300 border-6 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <label>All</label>


              <select>
              
            </select>
            </div>
            <div className='flex row flex-container box-border h-15 w-50 p-4  bg-slate-300 border-4 rounded-2xl'>   
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <label>All</label>

           <select name="category"
            id="names">
               
            </select>
            </div>
            <div className='flex row flex-container box-border h-15 w-50 p-4  bg-slate-300 border-4 rounded-2xl'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <label>All</label>
        <div className="hoverflex rounded-full bg-slate-300 placeholder-green-600 ">
         <select name="category"
            id="names">
                 <option></option> 
               <option>Farm machinery</option>              
               <option>Herbicides</option> 
               <option>Pestcides</option> 
            </select>
            </div>
         
        </div> 
        <div className='flex-container box-border h-15 w-50 p-4  bg-slate-300 border-4 rounded-2xl text-end'>
            <input type="text" placeholder='Searching...' />
        </div>
       <div className='bg-black'>
       </div>
       </div>
       <div className='p-4'>
        <hr className='border-t-4 border-black my-4'/>
       </div>
       <div className="space-y-7">    
  <div className="relative  left-0 ...">
   <b><p>Products for you</p></b> 
  </div>

          <div className="flex row space-x-10">
           
            <div className="">
                <img src="https://th.bing.com/th/id/OIF.alB7X63AUscjqk2QJEX5tA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="granadiller" width="7px" height="8px"/>
             </div>
             <div className="flex-container box-border h-80 w-80 p-4 - bg-slate-300 border-4 ..">
            </div>
            <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
             </div>
             <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
             </div>
             <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
             </div>
         </div>
         <div className="flex row space-x-10">
           
            <div className="">
           </div>
            <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
            <img src="https://th.bing.com/th/id/OIF.alB7X63AUscjqk2QJEX5tA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="granadiller" width="7px" height="8px"/>
             </div>
             <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
             </div>
             <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
             </div>
             <div className="flex-container box-border h-80 w-80 p-4  bg-slate-300 border-4 ..">
             </div>
        </div>             
        
       </div>
    </div>

    );
}
export default searchingBar;