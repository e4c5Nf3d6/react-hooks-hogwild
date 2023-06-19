import React from "react";
import PigTile from "./PigTile";

function PigList({ hogs }) {
    const pigCards = hogs.map(hog => {
        return (
            <PigTile key={hog.name} hog={hog} />
        )
    })

    return (
        <div className="ui grid container">
            {pigCards}
        </div>
    )
}

export default PigList