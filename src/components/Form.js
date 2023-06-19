import React, {useState} from "react";

function Form({ onAddPiggy }) {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: true,
        weight: "",
        "highest medal achieved": "wood",
        image: ""
    })

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAddPiggy(formData)

        setFormData({
            name: "",
            specialty: "",
            greased: true,
            weight: "",
            "highest medal achieved": "wood",
            image: ""
        })
    }

    return (
        <div>
            <h3>Add a New Hog!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Pig Name" 
                />

                <label htmlFor="image">Image: </label>
                <input 
                    type="text" 
                    id="image" 
                    value={formData.image} 
                    onChange={handleChange} 
                    placeholder="Image URL" 
                />

                <label htmlFor="specialty">Specialty: </label>
                <input 
                    type="text" 
                    id="specialty" 
                    value={formData.specialty} 
                    onChange={handleChange} 
                    placeholder="Specialty" 
                />

                <label htmlFor="highest medal achieved">Highest Medal Achieved: </label>
                <select id="highest medal achieved" value={formData["highest medal achieved"]} onChange={handleChange}>
                    <option value="wood">Wood</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                </select>
                
                <label htmlFor="weight">Weight: </label>
                <input 
                    type="number"
                    id="weight" 
                    value={formData.weight} 
                    onChange={handleChange} 
                    placeholder="Weight" 
                />

                <label htmlFor="greased">Greased? </label>
                <input 
                    type="checkbox" 
                    id="greased" 
                    checked={formData.greased} 
                    onChange={handleChange} 
                /> 
                <input type="submit" value="Submit" />                
            </form>
        </div>
    )
}

export default Form