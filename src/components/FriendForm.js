import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { form, update, submit } = props

  const handleSubmit = event => {
    event.preventDefault()
    submit()
  }

  const handleChange = event => {
    const {name, value} = event.target;
    update(name, value);
  }

  return (
    <form className="form container" onSubmit={handleSubmit}>
    <div className="form-group inputs">
      <label>
        Username
        <input 
          type="text"
          name="username"
          placeholder="type a username..."
          value={form.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input 
          type="email"
          name="email"
          placeholder="type an email.."
          value={form.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Role
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">-- Select a Role --</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Alumni">Alumni</option>
        </select>
      </label>
    </div>

    <div className="submit">
      <button>Submit</button>
    </div>
  </form>
  )
}
