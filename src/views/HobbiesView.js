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
import note1 from "../assets/svg/icons/note_1.svg";
import note2 from "../assets/svg/icons/note_2.svg";
import ukulele from "../assets/svg/icons/ukulele.svg";
import book from "../assets/svg/icons/book.svg";
import plant from "../assets/svg/icons/plant.svg"
import bike from "../assets/svg/icons/bike.svg"

function HobbiesView() {
    return (<PageLayout
        title={""}
        customHeaderContent={<h2 className={"flex justify-between"}>
            <img src={starIcon} alt="Star" className={"inline h-5"}/>
            <span>My other hobbies</span>
            <img src={starIcon} alt="Star" className={"inline h-5"}/>
        </h2>}
    >
        <main className={"grid gap-10"}>
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

            <div>
                <h3 className={"flex justify-between text-[var(--primary-darker-red)]"}>
                    <img src={note1} alt="Music note" className={"h-5"}/>
                    <span>Playing on ukulele</span>
                    <img src={note2} alt="Music note" className={"h-5"}/>
                </h3>
                <div>
                    I am into playing on ukulele.
                    <img src={ukulele} alt="ukulele" className={"scale-125 min-w-0"}/>
                </div>
            </div>

            <div>
                <h3 className={"flex gap-2 text-[var(--primary-violet)]"}>
                    <img src={book} alt="Book" className={"h-6"}/>
                    <span>Reading books</span>
                </h3>
                <div>
                    I love read books. They always has something unique and interested history to tell. My favorite
                    authors are:
                    <ul className={"list-disc ml-10"}>
                        <li className={"text-[var(--primary-green)]"}>George Orwell</li>
                        <li className={"text-[var(--primary-yellow)]"}>Neil Gaiman</li>
                        <li className={"text-[var(--primary-red)]"}>Andrzej Sapkowski</li>
                        <li className={"text-[var(--primary-blue)]"}>J.R.R. Tolkien</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className={"flex justify-between gap-2 text-[var(--primary-green)]"}>
                    <img src={plant} alt=""/>
                    <span>Outdoor activities</span>
                    <img src={bike} alt=""/>
                </h3>
                <div>
                    I am fond of bike routes, exploring something new and break own previous record in time and length
                    of routes. Otherwise I I really like to play tennis.
                </div>
            </div>
        </main>
    </PageLayout>)
}

export default HobbiesView;