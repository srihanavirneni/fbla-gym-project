import { Link } from 'react-router-dom';

import hslogo from '../../assets/images/hslogo.png';
import './Brand.css';

const Brand = (props: any) => {
    return (
        <div className={`brand ${props.mobile && 'brand-mobile'}`}>
            <img className="logo" src={hslogo} alt="Logo" />
            <h2>
                <Link to="/">
                    <ul>
                        <li className="brand__sub-title medium">
                            {import.meta.env.VITE_SCHOOL_NAME}
                        </li>
                        <li className="brand__main-title bold">Gymnasium</li>
                    </ul>
                </Link>
            </h2>
        </div>
    );
};

export default Brand;
