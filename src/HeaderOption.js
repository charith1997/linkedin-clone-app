import React from 'react'
import './HeaderOption.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && <AccountCircleIcon className='headerOption_icon'/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
