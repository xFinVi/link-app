/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from '../Post/Post';
import { db } from '../../Utils/Firebase/firebase';
import firebase from 'firebase/compat/app';
import './feed.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userRedurer/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    return () => {
      unsubscribe(); // Cleanup the listener when the component is unmounted
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handlePost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || null, // Use null for missing photo URL
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={handlePost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions"> {/* Fix class name inconsistency */}
          <InputOption title='Photo' Icon={ImageIcon} color="#70b5f8" />
          <InputOption title='Video' Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title='Event' Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption title='Write Article' Icon={CalendarViewDayIcon} color="#7FC15E" />
        </div>
        <FlipMove>
          {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
