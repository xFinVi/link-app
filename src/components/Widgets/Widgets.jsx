import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }
  return (
    <div className='widgets'>
        <div className="widgets__header">
               <h2>Linked in News</h2> 
               <InfoIcon/>
        </div>
        {newsArticle("Tech Giant Launches New Product","Tech Giant Launches New Product")}
        {newsArticle("New Breakthrough in Medical Research", "Scientists make significant progress in curing a rare disease.")}
{newsArticle("Space Exploration Milestone", "Astronauts complete a successful mission to explore distant planets.")}
{newsArticle("Global Environmental Initiatives", "Countries unite to combat climate change and protect the environment.")}
{newsArticle("Exciting Advances in AI Technology", "Artificial Intelligence continues to revolutionize various industries.")}
{newsArticle("Upcoming Film Release", "Highly anticipated movie set to hit theaters next month.")}
{newsArticle("Healthy Lifestyle Trends", "Discover the latest trends in fitness and nutrition for a healthier life.")}

    </div>
  )
}
 
export default Widgets