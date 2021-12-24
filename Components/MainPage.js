import { useMoralis } from "react-moralis";

function MainPage() {
    const { logout } = useMoralis();
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default MainPage
