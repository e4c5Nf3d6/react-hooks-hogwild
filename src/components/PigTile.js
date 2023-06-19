import React, {useState} from "react";

function PigTile({ hog }) {
    const [detailsVisibility, setDetailsVisibility] = useState(true)
    const [isHidden, setIsHidden] = useState(false)

    function displayDetails() {
        setDetailsVisibility(!detailsVisibility)
    }

    function handleHide() {
        setIsHidden(!isHidden)
    }

    return (
        <div className="ui eight wide column" style={{ display: isHidden ? 'none' : 'unset' }}>
            <div className="ui card pigTile" onClick={displayDetails}>
                <div className="image">
                    <img src={hog.image} alt="Pig Pic" />
                </div>
                <div className="content">
                    <div className="header">{hog.name}</div>
                </div> 
                <div className="ui small feed" style={{ display: detailsVisibility ? 'none' : 'unset' }}>
                    <p>Specialty: {hog.specialty} </p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </div>
                <button className="ui button" onClick={handleHide}>Hide Hog</button>
            </div>
        </div>
    )
}

export default PigTile