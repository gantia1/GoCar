import {ReactComponent as Checkbox} from "../../assets/images/svg/checkbox.svg";
import car from "../../assets/images/png/car.png";
import {ReactComponent as Road} from "../../assets/images/svg/road.svg";
import {ReactComponent as CenterCircle} from "../../assets/images/svg/center-circle.svg";
import center_green from "../../assets/images/png/center-green-circle.png";
import {ReactComponent as TopYellow} from "../../assets/images/svg/top-yellow.svg";
import right_green from "../../assets/images/png/right-green.png";
import {ReactComponent as RightCircle} from "../../assets/images/svg/right-circle.svg";


function Index() {
    return (
        <div className="top-page-banner">

            <div className="top-title-checkbox">
                <div className="top-page-title">
                    <Checkbox/>
                    <p>აირჩიე მანქანა და იმგზავრე</p>
                    <p>შენი პირობებით</p>
                </div>
            </div>

            <div className="top-page-banner-images">
                <img className="car" src={car} alt="car"/>
                <Road className="road"/>
                <CenterCircle className="center-circle"/>
                <img className="center-green-circle" src={center_green} alt="green-circle"/>
                <TopYellow className="top-yellow"/>
            </div>
            <img className="right-green" src={right_green} alt="right-green"/>
            <RightCircle className="right-circle"/>
        </div>
    );
}

export default Index;