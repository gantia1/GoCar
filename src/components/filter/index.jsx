import {useEffect, useRef, useState} from "react";

function Index() {
    const [show, setShow] = useState(false);
    const options = ["თბილისი", "ბათუმი", "ქუთაისი", "თელავი"];
    const [selected, setSelected] = useState(options[0]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, []);

    const refOne = useRef(null);

    const handleClickOutside = (e) => {
        if (!refOne?.current?.contains(e.target)) {
            setShow(false);
        }
    }

    return (
        <div className="filter">
            <div className="filter-select-input">
                <div className="filter-title">ქალაქი</div>
                <div className="filter-container" onClick={() => setShow(!show)}>
                    <input className="filter-input" type="text" readOnly=" " value={selected}/>
                </div>
                {show ? (
                    <div>
                        <div className="filter-list-container" ref={refOne}>

                            <div className="filter-list-triangle"></div>
                            <div className="filter-list-triangle-white"></div>

                            <div className="filter-list">
                                {options?.filter(value => value !== selected).map(value => <div
                                    onClick={() => {
                                        setSelected(value);
                                        setShow(false);
                                    }}
                                    key={value} className="filter-options">{value}</div>)}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

        </div>
    );
}

export default Index;