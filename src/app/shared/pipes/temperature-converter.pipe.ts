import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

	transform(value: number, unit: string) {
		if (value && !isNaN(value)) {
			if (unit === 'F') {
				let temperature = (value * 9 / 5) + 32;
				return temperature.toFixed(2);
			}
			if (unit === 'C') {
				let temperature = (value - 32) * 5 / 9;
				return temperature.toFixed(2);
			}
		}
		return;
	}

}
