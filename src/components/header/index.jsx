import {Link, useLocation} from "react-router-dom";
import {ReactComponent as HeaderLogo} from "../../assets/images/svg/gocar-logo.svg";
import {ReactComponent as Plus} from "../../assets/images/svg/plus.svg";
import {ReactComponent as User} from "../../assets/images/svg/user.svg";
import {ReactComponent as Georgia} from "../../assets/images/svg/GE.svg";
import Banner from "../banner"
import Filter from "../filter";

function Index() {
    const location = useLocation();

    return (
        <>
            <div className="header-container">
                <div className="header">
                    <Link to="/"><HeaderLogo/></Link>
                    <div className="header-nav-item">

                        <div className="header-nav-list">
                            <span><Link to="#"><Plus/>დაამატე ავტომობილი</Link></span>
                            <span><Link to="#"><User/>ავტორიზაცია</Link></span>
                        </div>

                        <div className="header-language-switch">
                            <div className="geo"><Link to="#"><Georgia/>GE</Link></div>
                            <div className="en"><Link to="#"><Georgia/>EN</Link></div>
                        </div>

                    </div>
                </div>
            </div>
            {location.pathname === "/" ?
                (
                    <>
                        <Banner/>
                        <Filter/>
                    </>
                )

                : null}
        </>
    );
}

export default Index;