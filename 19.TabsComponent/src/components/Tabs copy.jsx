import { useState } from "react";
import '../css/tabs.css'

function Tabs() {
    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        setToggleState(index);
    }
    return <div className="c-tabs">
        <div className="tabs">

        </div>
        <div className="tabs__head">
            <span className={toggleState === 1 ? "tabs__toggle is_active" : " tabs__toggle"} onClick={() => ToggleTab(1)}>Tab 1</span>
            <span className={toggleState === 2 ? "tabs__toggle is_active" : " tabs__toggle"} onClick={() => ToggleTab(2)}>Tab 2</span>
            <span className={toggleState === 3 ? "tabs__toggle is_active" : " tabs__toggle"} onClick={() => ToggleTab(3)}>Tab 3</span>
            <span className={toggleState === 4 ? "tabs__toggle is_active" : " tabs__toggle"} onClick={() => ToggleTab(4)}>Tab 4</span>
        </div>
        <div classNameName="tabs__body">
            <div className={toggleState === 1 ? "tabs__content is_active" : " tabs__content"}>
                <h2 className="tabs_title">1st Tab Title</h2>
                <p className="tabs__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae expedita mollitia eveniet velit t.</p>
            </div>
            <div className={toggleState === 2 ? "tabs__content is_active" : " tabs__content"}>
                <h2 className="tabs_title">2nd Tab Title</h2>
                <p className="tabs__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae expedita mollitia eveniet velit at et voluptas consequuntur ab, distinctio rerum neque reiciendis hic sapiente. Hic, exercitationem quibusdam. Minus, placeat.</p>
            </div>
            <div className={toggleState === 3 ? "tabs__content is_active" : " tabs__content"}>
                <h2 className="tabs_title">3rd Tab Title</h2>
                <p className="tabs__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae expedita mollitia eveniet velit at et voluptas consequuntur ab, distinctio rerum neque reiciendis hic sapiente. Hic, exercitationem quibusdam. Minus, placeat.</p>
            </div>
            <div className={toggleState === 4 ? "tabs__content is_active" : " tabs__content"}>
                <h2 className="tabs_title">4th Tab Title</h2>
                <p className="tabs__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae expedita mollitia eveniet velit at et voluptas consequuntur ab, distinctio rerum neque reiciendis hic sapiente. Hic, exercitationem quibusdam. Minus, placeat.</p>
            </div>
        </div>
    </div >




}


export default Tabs;