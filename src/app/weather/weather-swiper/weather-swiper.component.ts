import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
	selector: 'weather-swiper',
	templateUrl: './weather-swiper.component.html',
	styleUrls: ['./weather-swiper.component.scss'],
	providers: [WeatherService]
})

export class WeatherSwiperComponent implements OnInit {
	@Input('WeatherForecastList') weathers: any;
	errorMessage: string;
	selectedItem: string = 'nothing';

	constructor() { }

	ngOnInit() {
	}

	updateSelectedWeatherItem(event: any) {
		console.log('Recieved selected weather item in carousel component', event);
		this.selectedItem = event;
	}
}
