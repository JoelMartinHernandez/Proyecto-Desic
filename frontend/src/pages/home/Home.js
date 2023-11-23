import'./Home.css'
import'../../components/registerForm/RegisterForm'
import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();


    return(
        <>
            <p>Home</p>
            <button onClick={()=>navigate("/Line")}></button>
        </>
    );
}

export default Home