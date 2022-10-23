import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogOut = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <>
    <div>Welcome {auth.user} </div>
    <button onClick={handleLogOut}>Logout</button>
    </>
  )
}
