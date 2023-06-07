import React from 'react';
import { useAuth } from '../context/Auth';

function SideBar() {

    const [categorys, setCategorys] = React.useState([
        {id:1, name:'Romans'},{id:2, name:"Science-fiction"},{id:3, name:"Histoire"},{id:4,name:"Loisirs"}
    ])

    return (
        <nav className="bg-white w-60 h-full border-t border-t-gray-700' border-r border-gray-400 border-black">
            {categorys.map((category) => 
                <div className='w-full border-b border-gray-700' style={{backgroundColor:'#D9D9D9'}} key={category.id}>
                    <h3 className='text-3xl text-center p-4 cursor-pointer hover:font-medium hover:text-sky-400'>{category.name}</h3>
                </div>
            )}
        </nav>      
    );
  }
  
  export default SideBar;