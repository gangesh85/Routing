import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.Login(user)
        navigate('/')
    }
  return (
    <div>
        <label>
            Username: { ' '}
            <input type='text' onChange={(event) => setUser(event.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
