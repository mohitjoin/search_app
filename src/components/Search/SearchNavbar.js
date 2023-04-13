import React,{useState} from 'react'
import './search_navbar.scss'
import Logo from '../../assets/zevilogo.png'
import { AiOutlineSearch } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'; 


const SearchNavbar=()=>{
    const navigate = useNavigate();
    const [searchedText,setSearchedText]=useState("")

    const handleSearch=()=>{
        if(searchedText!=="")
        navigate(`/search/${searchedText}`)
      }

    return (
        <div className='navbar_container' >
            <div className='input_container_search'>
                <input 
                className='search_input' 
                value={searchedText} 
                placeholder='Search' 
                onChange={(e)=>{
                      setSearchedText(e.target.value)
                }} 
                onKeyPress = {
                  (e) => e.key === 'Enter' && handleSearch() 
                }
                />
                <div> <AiOutlineSearch  style={{fontSize:'1.8rem'}}/> </div>
              </div>

            <div className='logo_container'>
                <img src={Logo} alt='Zevi Logo' />
            </div>

        </div>
    )
}
export default SearchNavbar;