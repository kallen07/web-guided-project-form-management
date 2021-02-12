import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import axios from '../axios'

const initialForm = {
  username: "",
  email: "",
  role: ""
}

export default function App() {
  const [friends, setFriends] = useState([]) // careful what you initialize your state to
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setFriends(res.data))
  }, [])

  const submit = () => {
    setFriends([...friends, form])
    setForm(initialForm)
  }

  const update = (name, value) => {
    setForm({...form, [name]: value})
  }

  return (
    <div className='container'>
      <h1>Form App</h1>

      <FriendForm form={form} update={update} submit={submit} />

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
