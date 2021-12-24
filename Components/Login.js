import { useMoralis } from "react-moralis"

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div>
            <p>Hi, this is my login page</p>
            <button onClick={authenticate}>Login</button>
        </div>
    )
}

export default Login
