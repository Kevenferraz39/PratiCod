import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from './page.module.css';
import NavBar from '../../../NavBar';
import Footer from '../../../Footer';
import htmlTags from'./htmlTags.json'
const Pagehtml = () => {

    return ( 
        <>
            <Helmet>
                <title>Page || HTML5</title>
            </Helmet>
            <NavBar />
           
        </>
    )
}

export default Pagehtml