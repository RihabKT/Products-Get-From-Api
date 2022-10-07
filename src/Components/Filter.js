import React from "react";



function Filter(props){


    return(
        <>
     <form className="flex">
            <input className="search"  type="text" placeholder='SEARCH BY PRODUCT NAME...' onChange={(e)=>props.setFilterByName(e.target.value)}/>
            
           
        </form>
        
     
    
    </>
    )
}

export default Filter;