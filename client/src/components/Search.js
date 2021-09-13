import { useEffect, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Axios from 'axios'
import StockDetails from './StockDetails';
import './Search.css';

function Search() {
    const [isloaded,setIsLoaded] = useState(false)
    const [selectedStock, setSelectedStock] = useState()
    const [items, setItems] = useState()
    const [stockLoaded,setStockLoaded] = useState(false)
    useEffect(() => {
         Axios.get(`http://localhost:3001/liststocks`)
        .then((response) => {
          setItems(response.data)
          setStockLoaded(true)
        })
        .catch((error) => {
        console.log("Something goes wrong")
      })
      
    },[])
  
    const handleOnSelect = (item) => {
      console.log("Selection on")
      // the item selected
      setIsLoaded(true)
      setSelectedStock(item)
      //console.log(item)
    }
  
    //console.log("datas",items)
    if (stockLoaded)
    {
    return (
      <div className="Main">
        <header>
            <span className="header-text">Stocks</span>
        </header>
        <div className="stock-text">
            <h2 className="first-text">The Easiest way to buy and Sell Stocks.</h2>
        </div>
        <div className="stock-subtext">
            <h6 className="sub-text">Stock analysis and screening tool for investors in india.</h6>
        </div>
        <div className="search-box">
            <ReactSearchAutocomplete
              items={items}
              
              onSelect={handleOnSelect}
              
              autoFocus
              fuseOptions={{ minMatchCharLength: 2 }}
              showClear={false}
              
              styling={{borderRadius: "5px",color: "#8f0d0d",}}
            />
        </div>
        <div>
          
        {
            isloaded && <StockDetails stock={selectedStock.name}/>
           
        }
        {
            //!isloaded && <>Loading</>
            
        }
        </div>
      </div>
      )
    }
    return <div className="loader">Loading...</div>
}
  
export default Search