import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Weather } from '../weather';

@Component({
	selector: 'weather-item',
	templateUrl: './weather-item.component.html'
})
export class WeatherItemComponent implements OnInit {
	// tslint:disable-next-line:no-input-rename
	@Input('WeatherItem') weather: Weather;
	// declare event for subscription
	@Output() weatherItemChanges = new EventEmitter();

	ngOnInit(): any {
	}

	selectedWeatherItem(event: Event) {
		let item = (event.target as HTMLDivElement);
		console.log('Selected div element', item);
		// Raise event
		this.weatherItemChanges.emit(item.innerHTML);
	}
}
