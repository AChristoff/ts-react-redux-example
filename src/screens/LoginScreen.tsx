import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState, onLogin } from '../redux'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { user, error } = useSelector((state: ApplicationState) => state.UserReducer )
  const { token } = user;
  console.log(token);
  

  const submitHandler = (e: any) => {
    e.preventDefault()

    dispatch(onLogin(email, password))
  }

  return (
    <div>
      <p>Login Screen</p>
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='john@example.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='text'
            name='password'
            placeholder='Min 6 chars'
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginScreen
