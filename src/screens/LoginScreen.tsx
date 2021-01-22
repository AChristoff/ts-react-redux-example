import { useState, useEffect, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/actions/userActions'
import { ApplicationState } from '../redux/reducers/rootReducer'

const LoginScreen = () => {

  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('1234567')

  const dispatch = useDispatch()

  const { loading, error, user } = useSelector((state: ApplicationState) => state.userLogin )

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    
    dispatch(login(email, password))
  }

  useEffect(() => {
      // TODO: Redirect 
  },[user])

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
      {loading && <h3>LOADING...</h3>}
      {user.firstName && <h3>{`Welcome ${user.firstName}`}</h3>}
      {error && <h3>LOGIN FAILED!</h3>}
    </div>
  )
}

export default LoginScreen
