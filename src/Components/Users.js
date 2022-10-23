import { useSearchParams } from "react-router-dom"

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
    <>
    <div>
        <h1>Users</h1>
    </div>
    <div>
        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={() =>setSearchParams({})}>Reset Filter</button>
    </div>
    {
        showActiveUsers ? 'Showing active users' : 'Showing all users'
    }
    </>
  )
}
