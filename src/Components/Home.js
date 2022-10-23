import { useNavigate } from "react-router-dom"
export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
    <div>Home</div>
    <button onClick={() => navigate('order-summery')}>Place order</button>
    </div>
  )
}
