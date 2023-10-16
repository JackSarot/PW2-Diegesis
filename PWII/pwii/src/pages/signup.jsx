import backgroundImg from '../assets/stars.jpg'
import { SignUpCard } from '../components/SignUpCard'

function SignUp() {
    return (
        <h1 className="w-screen h-screen">
            <img className="w-full h-full" src={backgroundImg} alt="" />
            <SignUpCard />
        </h1>
    )
}

export default SignUp
