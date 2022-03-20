import React from 'react'
import { useEffect, useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolio-list/portfolioList'
import { websitePortfolio, webAppPortfolio } from '../../portfolios'

export default function Portfolio() {

  const [selected, setSelected] = useState("site-dev");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "site-dev",
      title: "Website Development"
    },
    {
      id: "app-dev",
      title: "Web App Development"
    }
  ];

  useEffect(()=>{

    switch(selected){
      case 'site-dev':
        setData(websitePortfolio);
        break;

      case 'app-dev':
        setData(webAppPortfolio);
        break;

      default:
        setData(websitePortfolio);
        break;
    }

  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
          {list.map(item=>(
            <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id ={item.id}
            />
          ))}
      </ul>
      <div className="container">
            {data.map((d) => (
              <div className="item">
                <img src={d.img} alt='portfolio screenshot'/>
                <h3>{d.title}</h3>
              </div>
            ))}
      </div>
    </div>
  )
}
