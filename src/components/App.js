import React, {useState} from "react";
import Nav from "./Nav";
import Form from "./Form";
import Filter from "./Filter";
import PigList from "./PigList";

import hogs from "../porkers_data";

function App() {

	const [pigs, setPigs] = useState(hogs)
	const [greased, setGreased] = useState('all')
	const [sortValue, setSortValue] = useState('none')

	const filteredPigs = pigs.filter(pig => {
		if (greased === 'greased') {
			return pig.greased === true
		} else if (greased === 'ungreased') {
			return pig.greased === false
		} else {
			return true
		}
	})

	function sortPigs(pigs) {
		if (sortValue === 'name') {
			return ([...pigs].sort((a, b) => {
				let [nameA, nameB] = [a.name.toLowerCase(), b.name.toLowerCase()]
				if (nameA < nameB) {
					return -1
				} else if (nameA > nameB) {
					return 1
				} else {
					return 0
				}
			}))
		} else if (sortValue === 'weight') {
			return ([...pigs].sort((a, b) => {
				let [weightA, weightB] = [a.weight, b.weight]
				if (weightA < weightB) {
					return -1
				} else if (weightA > weightB) {
					return 1
				} else {
					return 0
				}
			}))
		} else {
			return pigs
		}
	}

	const pigsToDisplay = sortPigs(filteredPigs)

	function addPiggy(pigObj) {
		setPigs([
			...pigs,
			pigObj
		])
	}

	return (
		<div className="App">
			<Nav />
			<Form onAddPiggy={addPiggy} />
			<Filter onSetGreased={setGreased} onSetSortValue={setSortValue} />
			<PigList hogs={pigsToDisplay} />
		</div>
	);
}

export default App;
