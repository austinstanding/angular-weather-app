import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
	name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

	transform(value: number, unit: string) {
		if (value && !isNaN(value)) {
			if (unit === environment.units) {
				return value;
			}
			if (unit === 'F' || unit === 'imperial') {
				return this.toFarenheit(value);
			}
			if (unit === 'C' || unit === 'metric') {
				return this.toCelcius(value);
			}
		}
		return;
	}

	toFarenheit(value: number) {
		let temperature = (value * 9 / 5) + 32;
		return temperature.toFixed(2);
	}

	toCelcius(value: number) {
		let temperature = (value - 32) * 5 / 9;
		return temperature.toFixed(2);
	}
}
