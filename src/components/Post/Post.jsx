/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import './Post.css'
import InputOption from '../InputOption/InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post= forwardRef(({ name,description,message,photoUrl}, ref)  => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]} </Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltIcon} title='Like' color="3c55e7" />
            <InputOption Icon={ChatIcon} title='Comment' color="3c55e7" />
            <InputOption Icon={ShareIcon} title='Share' color="3c55e7" />
            <InputOption Icon={SendIcon} title='Send' color="3c55e7" />
        </div>
    </div>
  );
})

export default Post