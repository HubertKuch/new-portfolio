import PageLayout from "../layouts/PageLayout";

import starIcon from "../assets/svg/icons/star.svg";
import camera from "../assets/svg/icons/Camera.svg";
import cat from "../assets/images/cat.jpg";
import starTrails from "../assets/images/star_trails_.jpg";
import starTrails2 from "../assets/images/star_trails_2.jpg";
import tree from "../assets/images/tree.jpg";
import moon from "../assets/images/moon.jpg";
import snowedPlant from "../assets/images/snowed_plant.jpg";
import sunset from "../assets/images/sunset.jpg";

function HobbiesView() {
    return (<PageLayout
        title={""}
        customHeaderContent={<h2 className={"flex justify-between"}>
            <img src={starIcon} alt="Star" className={"inline h-5"}/>
            <span>My other hobbies</span>
            <img src={starIcon} alt="Star" className={"inline h-5"}/>
        </h2>}
    >
        <div className={"photography-container"}>
            <h3 className={"flex text-[var(--primary-skin)] gap-2"}>
                <img src={camera} alt="camera"/>
                Photography
            </h3>
            <div className={"gallery mt-5"}>
                <img src={tree} alt=""/>
                <img src={moon} alt=""/>
                <img src={snowedPlant} alt=""/>

                <img src={sunset} alt=""/>
                <img src={starTrails} alt=""/>
                <img src={cat} alt=""/>

                <img src={starTrails2} alt=""/>
            </div>
        </div>
    </PageLayout>)
}

export default HobbiesView;