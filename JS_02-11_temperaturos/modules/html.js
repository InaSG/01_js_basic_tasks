import {
	findMinTemperature,
	findMaxTemperature,
	findAvgTemperature,
	getAllData,
} from "./computeTemperatures.js";
import { getTemperatureData } from "./getTemperatureData.js";

export function setCity(city) {
	document.querySelector("#city").innerHTML = city;
}

export function setStartDate(date) {
	document.querySelector("#start-date").innerHTML = date;
}

export function setEndDate(date) {
	document.querySelector("#end-date").innerHTML = date;
}

export function setTableData(temperaturesData) {
	let html = "";

	temperaturesData.forEach((dayTemps) => {
		const allData = getAllData(dayTemps.hourlyTemperatures);

		html += `<tr>
					<td>${dayTemps.date}</td>
					<td>${allData.min.toFixed(1)}</td>
					<td>${allData.max.toFixed(1)}</td>
					<td>${allData.average.toFixed(1)}</td>
				</tr>`;
	});
	document.querySelector("#average-temperatures").innerHTML = html;
}

export function set_day_temperatures(data){
	let silciausia = {data: "", 
		vidurkis: 0};
	let salciausia = {};
	data.forEach((dayTemps) => {
		const dienos_info = getAllData(dayTemps.hourlyTemperatures);
		if(dienos_info.average > silciausia.average){
			silciausia = {
				data: dayTemps.date, 
				vidurkis: dienos_info.average
			}
			console.log(silciausia);
		};
		// return: {
		// 	silciausia : {
		// 		data: , 
		// 		temperatura: },
		// 	salciausia: {
		// 		data: ,
		// 		temperatura: }
		// 	};
	});
	console.log(silciausia);
};
