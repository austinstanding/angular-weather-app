import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	fullImagePath: string;
	repoUrl: string;

	constructor() {
		this.fullImagePath = '/assets/images/GitHub-Mark-32px.png';
		this.repoUrl = 'https://github.com/austinstanding/angular-weather-app';
	}

	ngOnInit() {
	}

}
