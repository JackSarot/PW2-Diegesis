import backgroundImg from '../assets/stars.jpg'
import { LoginCard } from '../components/LoginCard'

function Login() {
    return (
        <h1 className="w-screen h-screen">
            <img className="w-full h-full" src={backgroundImg} alt="" />
            <LoginCard />
        </h1>
    )
}

export default Login
