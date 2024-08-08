import React, { useEffect, useState } from "react";
// import { BiCategory } from "react-icons/bi";
// import bannerImg from "/images/home/banner.png";
import Cards from "../../Components/Cards";
import { FaFilter } from 'react-icons/fa'

const  Menu = () => {

     const[menu,setMenu]=useState([]);
     const[filteredItems,setFilteredItems]=useState([]);
     const[selectedCategory,setSelectedCategory]=useState("all");
     const[sortOption,setSortOption]=useState("default");


    //  loading data using useeffect
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch("/menu.json");
                const data=await response.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);
            }
            catch(error){
                console.log("Error fetching data",error);
            }
        }
        fetchData();
    },[]);

    // filtering data based on the category
    const filteredItem=(category)=>{
        const filtered=
        category==="all"
        ?menu:menu.filter((item)=>item.category===category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    };

    // show data function
    const showAll = () => {
     
        setSelectedCategory("all");
      
      };
    
      const handleSortChange = (option) => {
        setSortOption(option);
    
       
        // Logic for sorting based on the selected option
     
        const handleSortChange=(option)=>{
            setSortOption(option);
            let sortedItems = [...filteredItems];
        
    

        switch (option) {
          case "A-Z":
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "Z-A":
            sortedItems.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case "low-to-high":
            sortedItems.sort((a, b) => a.price - b.price);
            break;
          case "high-to-low":
            sortedItems.sort((a, b) => b.price - a.price);
            break;
          default:
            // Do nothing for the "default" case
            break;
        }

        setFilteredItems(sortedItems);
    
    }
      };
     

    
  return (
  
    <div>
        {/* menu banner */}
    <div className="section-container bg-gradient-to-r from-white via-white to-indigo-500">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
      

        {/* texts */}
        <div className="px-40 text-center px-4 space-y-8">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>

   {/* menu shop section  */}
   <div className="section-container">

    {/* filtering section */}
      <div>
        {/* buttons for all categories */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap "> 
            <button onClick={showAll} className={selectedCategory==="all"?"active":""}> All</button>
            <button onClick={()=>filteredItem("salad")} className={selectedCategory==="salad"?"active":""}>Salad</button>
            <button  onClick={()=>filteredItem("pizza")} className={selectedCategory==="pizza"?"active":""}>Pizza</button>
            <button  onClick={()=>filteredItem("soup")} className={selectedCategory==="soup"?"active":""}> Soups</button>
            <button  onClick={()=>filteredItem("dessert")} className={selectedCategory==="dessert"?"active":""}>Deserts</button>
            <button  onClick={()=>filteredItem("drinks")} className={selectedCategory==="drinks"?"active":""}>Drinks</button>
            <button  onClick={()=>filteredItem("offered")} className={selectedCategory==="offered"?"active":""}>Offered</button>
            <button  onClick={()=>filteredItem("popular")} className={selectedCategory==="popular"?"active":""}>Popular</button>
        </div>

        {/* sorting.... */}
        <div className="flex justify-end mb-4 rounded-sm">
         <div className="bg-black p-2">
            <FaFilter className="h-4 w-4 text-white"/>
         </div>
         <select name="sort" id="sort" onChange={(e)=>handleSortChange(e.target.value)}>value={sortOption}
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Low-high">low to high</option>
            <option value="High-low">high to low</option>
         </select>
        </div>
    



   {/* products card */}
   <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
    {
        filteredItems.map((item)=>(
            <Cards key={item._id} item={item}/>
        ))
    }
   </div>

    </div>
    </div>
    </div>
  );
};

export default Menu;