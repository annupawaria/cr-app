import React from 'react'
import {Button,Menu,Avatar,Typography} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,Bulboutlined,FundOutlned,} from 'antd'
import icon from '../images/cryptocurrency.png';
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
<Avatar src={icon} size="large"/>
<Typography.Title leel={2} className='logo'>
  <Link to='/'>Crytoverse</Link>
</Typography.Title>
      </div>
    </div>
  )
}

export default Navbar