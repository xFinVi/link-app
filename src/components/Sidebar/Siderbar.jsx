import React from 'react'
import { Avatar } from '@mui/material'
import './sidebar.css';
import { selectUser } from '../redux/userRedurer/userSlice';
import { useSelector } from 'react-redux';
function Siderbar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => 
       ( <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>);
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={"https://th.bing.com/th/id/R.a58886dab7b4c063d5d12b1321e3f7e9?rik=mTlJ0ov%2fWNGpGQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fTi6qoP7.jpg&ehk=53zRdpp8Z4s01ge8Whtn%2bN6m7PSo1Yppv10spzalFZg%3d&risl=&pid=ImgRaw&r=0"} alt="" />
            <Avatar className='sidebar__avatar' src={user.photoUrl? (user.photoUrl) : ("") }> {user.email[0].toUpperCase()}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2424</p>
            </div>
            <div className="sidebar__stat">
    <p>Views on post</p>
    <p className='sidebar__statNumber'>2323</p>
            </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
            {recentItem('ReactJS')}
            {recentItem('HTML')}
            {recentItem('CSS')}
            {recentItem('WEBDEV')}
            {recentItem('SOFTWARE')}
            {recentItem('VIDEO EDITTING')}
            {recentItem('POST-PRODUCTION')}
        </div>
    </div>
  )
}

export default Siderbar