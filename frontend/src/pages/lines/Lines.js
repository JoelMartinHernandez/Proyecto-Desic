import './Lines.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddLine from '../../components/addLine/AddLine';
import LineList from '../../components/listLine/ListLine';
import UpdateLine from '../../components/updateLine/UpdateLine';

function Lines(){

    return(
        <div className='menuBody'>
        <Header/>
        <LineList/>
        <Footer/>
        </div>
    );
}

export default Lines