import React from 'react'
import './SitePage.css'
import SitePageLeft from './SitePageLeft';
import SitePageRight from './SitePageRight';
const SitePage = () => {
    return (
        <div className='wrapper'>
            <SitePageLeft></SitePageLeft>
            <SitePageRight></SitePageRight>
        </div>
    )
}
export default SitePage;