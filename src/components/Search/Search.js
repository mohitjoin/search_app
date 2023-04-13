import React ,{useEffect,useState}from "react";
import { useParams } from 'react-router-dom';
import SearchNavbar from "./SearchNavbar";
import './search.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { faker } from '@faker-js/faker';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const Search=()=>{

    const {searchQuery}=useParams();
    const [suggestedData,setSuggestedData]=useState([]) 
    const [isHovering, setIsHovering] = useState(false);
    
    const createData = () => {
        return {
        name: faker.commerce.productName(),
        image:faker.image.fashion(640,480,true) 

        };
    };
    const createUsersData = (numUsers = 5) => {
        return Array.from({length: numUsers}, createData);
    };
    
    useEffect(()=>{
        let fakeUsersData = createUsersData(22);
        setSuggestedData((pre)=>{
        return [...fakeUsersData]
        })
    },[])

    

    const handleMouseOver = (text) => {
      setIsHovering(text);
    };
  
    const handleMouseOut = (text) => {
      setIsHovering("");
    };
   

    return  <div className="search_page_container">
              <SearchNavbar />
              <div className="search_heading">Search Result</div>
              <div className="product_container"> 

                 <div className="product_filters">
                 <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>BRAND</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="Mango" />
                        </div>    
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="H&M" />
                        </div>        
                     </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>PRICE RANGE</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="Under 500" />
                        </div>    
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="1000 to 3000" />
                        </div>        
                     </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>RATINGS</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="⭐ ⭐ ⭐ ⭐ ⭐" />
                        </div>    
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="⭐ ⭐ ⭐ ⭐ " />
                        </div>  
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="⭐ ⭐ ⭐ " />
                        </div> 
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="⭐ ⭐ " />
                        </div> 
                        <div>                       
                            <FormControlLabel control={<Checkbox   />} label="⭐ " />
                        </div>       
                     </Typography>
                    </AccordionDetails>
                </Accordion>
              
                 </div>
                 <div className="products_listing">
                    
                    <div className='search_cards_container'>
                        {
                        suggestedData.map((data,index)=>{
                            return   <div 
                                        className='search_card' 
                                        key={index+100} 
                                        onMouseOver={()=> handleMouseOver(data.name)}
                                        onMouseOut={()=>  handleMouseOut(data.name)}
                                        >
                                        <img src={data.image} alt='product ' />
                                         
                                         <div className="wish_list_icon">
                                            <div className="wishlist_icon"> 
                                            <Checkbox {...label} sx={{
                                                color: pink[800],
                                                '&.Mui-checked': { color: '#D32424' },
                                                '& .MuiSvgIcon-root': { fontSize: 28 }}
                                                } icon={<FavoriteBorder   />} checkedIcon={<Favorite  />} /> </div>
                                         </div>

                                         {isHovering===data.name && <div className="view_product_icon">
                                            View Product
                                         </div>}
                                         
                                        <p className='product_name_search'>{data.name}</p>
                                        <div className='product_name_price '>
                                            <div className="cutted_text">Rs 600</div>
                                            <div className="final_price ">Rs 400</div>
                                        </div>
                                        <div>
                                          ⭐⭐⭐⭐⭐ (20)
                                        </div>
                                    </div>
                            
                        })
                        }
                    </div>
                 </div>

              </div>

           </div>
}

export default Search;