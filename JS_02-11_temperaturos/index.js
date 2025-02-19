import { getTemperatureData } from "./modules/getTemperatureData.js";
import {
	setCity,
	setEndDate,
	setStartDate,
	setTableData,
	set_day_temperatures,
} from "./modules/html.js";

const JSONData = await getTemperatureData();
const data = JSONData.temperatureData;

// Miesto nustatymas
setCity(data.city);

// Datų nustatymas
setStartDate(data.data[0].date);
setEndDate(data.data[data.data.length - 1].date);

//Lentelės sukūrimas
setTableData(data.data);

set_day_temperatures(data.data);