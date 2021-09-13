import { useEffect, useState } from 'react'
import {Spinner} from 'react-bootstrap'
import Axios from 'axios'
import './StockDetails.css'

function StockDetails(props) {
    //const [selectedStock, setSelectedStock] = useState()
    const [stockDetail, setStockDetail] = useState()
    const [stockDetailsLoaded,setStockDetailsLoaded] = useState(false)
    useEffect(() => {
        setStockDetailsLoaded(false)
        Axios.get(`http://localhost:3001/stocks/${props.stock}`)
        .then((response) => {
          setStockDetail(response.data)
          console.log("Child Data",response.data)  
          setStockDetailsLoaded(true)
        })
        .catch((error) => {
        console.log("Something goes wrong")
      })
      
    },[props.stock])
    
    //console.log("datas",items)
    if (stockDetailsLoaded)
    {
        return (
            <div className="stock-box">
                <span className="stock-hdr">{stockDetail[0].Name}</span>
                <div className="stock-details">
                    <span className="item-a"><p className="dt-key">Market Cap</p><b><p className="dt-result">&#x20B9;{stockDetail[0].MarketCap}</p></b></span>
                    <span className="item-b"><p className="dt-key">Divident Yield</p><b><p className="dt-result">{stockDetail[0].Yield}%</p></b></span>
                    <span className="item-c"><p className="dt-key">Debt Equality</p><b><p className="dt-result">{stockDetail[0].Equity}%</p></b></span>

                    <span className="item-d"><p className="dt-key">Current Price</p><b><p className="dt-result">&#x20B9;{stockDetail[0].Price}</p></b></span>
                    <span className="item-e"><p className="dt-key">ROCE</p><b><p className="dt-result">{stockDetail[0].ROCE}%</p></b></span>
                    <span className="item-f"><p className="dt-key">Eps</p><b><p className="dt-result">&#x20B9;{stockDetail[0].EPS}</p></b></span>

                    <span className="item-g"><p className="dt-key">Stock P/E</p><b><p className="dt-result">{stockDetail[0].Stock}%</p></b></span>
                    <span className="item-h"><p className="dt-key">ROE</p><b><p className="dt-result">{stockDetail[0].ROE_PY}%</p></b></span>
                    <span className="item-i"><p className="dt-key">Reserves</p><b><p className="dt-result">&#x20B9;{stockDetail[0].Reserves}</p></b></span>

                    <span className="item-j"><p className="dt-key">Debt</p><b><p className="dt-result">&#x20B9;{stockDetail[0].Debt}</p></b></span>

                </div>
            </div>
      )
    }
    return <div className="spin"><Spinner animation="border" role="status"></Spinner></div>
  }
  
  export default StockDetails;
  