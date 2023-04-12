
import { useEffect, useState } from 'react';
import './app.scss';
import Navbar from './components/Navbar';
import { AiOutlineSearch,AiOutlineClose } from 'react-icons/ai';
import { faker } from '@faker-js/faker';
import { Link, redirect ,useNavigate} from 'react-router-dom'; 

function App() {

  const [isSuggest,setIsSuggest]=useState("")
  const [searchedText,setSearchedText]=useState("")
  const [suggestedData,setSuggestedData]=useState([]) 
  const navigate = useNavigate();
  const createData = () => {
    return {
      name: faker.commerce.productName(),
      image:faker.image.fashion() 

    };
  };
  const createUsersData = (numUsers = 5) => {
    return Array.from({length: numUsers}, createData);
  };
  
  useEffect(()=>{
    let fakeUsersData = createUsersData(5);
    setSuggestedData((pre)=>{
      return [...fakeUsersData]
    })
  },[])
  
   const popularSearches=[
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid tshirts",
   ]

    const handleSearch=()=>{
      navigate(`/search/${searchedText}`)
    }

   
   
  return (
    <div className="app"  >
         <Navbar />
         {/* Search Bar */}
         <div className='search_bar_container'>
              <div className='input_container'>
                <input 
                className='search_input' value={searchedText} 
                placeholder='Search' 
                onChange={(e)=>setSearchedText(e.target.value)} 
                onFocus={()=> setIsSuggest(true)} 
                onKeyPress = {
                  (e) => e.key === 'Enter' && handleSearch() 
                }
                
                />
                <div> <AiOutlineSearch  style={{fontSize:'1.8rem'}}/> </div>
              </div>
         </div> 

         {/* suggestions container */}
         {
          (isSuggest || searchedText!=="") &&
         
         <div className='suggestions_container'>
            
              <div className='suggestions_box'>
                   <div className='cancelButton' onClick={()=>setIsSuggest(false)}><AiOutlineClose /></div>
                   <p>Latest Trends</p>

                   <div className='small_cards_container'>
                    {
                      suggestedData.map((data,index)=>{
                        return   <div className='small_card' key={index+100}>
                                    <img src={data.image} alt='product ' />
                                    <p className='product_name'>{data.name}</p>
                                </div>
                           
                      })
                    }
                   </div>

                   <p>Popular suggestions</p>

                   <div className='popular_text_container'>
                    {
                      popularSearches.map((text,index)=>{
                          
                        return <Link to={`/search/${text}`}className='link_class'><div className='popular_text' key={index+200}>
                          {text}
                          </div></Link>
                      })
                    }
                   </div>
              </div>
         </div>

          }
    </div>
  );
}

export default App;
