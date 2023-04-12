import React from "react";
import { useParams } from 'react-router-dom';
import SearchNavbar from "./SearchNavbar";

const Search=()=>{

    const {searchQuery}=useParams();


    return  <div>
              <SearchNavbar />
              <div className="search_heading">Search Result</div>

           </div>
}

export default Search;