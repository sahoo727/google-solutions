import React from 'react';
import {Avatar,IconButton} from '@mui/material';
import './Live_count.css'

function Live_count() {
  return (
    <div className='live_count'>
        <div><Avatar className='avatar'/><p className='avatar_text'>10000</p><p className='avatar_text'>something</p></div>
        <div><Avatar className='avatar'/><p className='avatar_text'>10000</p><p className='avatar_text'>something</p></div>
        <div><Avatar className='avatar'/><p className='avatar_text'>10000</p><p className='avatar_text'>something</p></div>
        <div><Avatar className='avatar'/><p className='avatar_text'>10000</p><p className='avatar_text'>something</p></div>
        <div><Avatar className='avatar'/><p className='avatar_text'>10000</p><p className='avatar_text'>something</p></div>
    </div>
  )
}

export default Live_count