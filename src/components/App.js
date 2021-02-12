import React, { useState, useEffect } from 'react'
import Friend from './Friend'
// import FriendForm from './FriendForm'
import axios from '../axios'

export default function App() {
  const [friends, setFriends] = useState([]) // careful what you initialize your state to

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setFriends(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
