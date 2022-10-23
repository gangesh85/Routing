import { useNavigate } from "react-router-dom"

export const OrderSummery = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Order Confirmed !</div>
    <button onClick={() => navigate('/')}>Go Back</button>
    </>
  )
}
