import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherSwiperComponent } from './weather-swiper.component';

describe('WeatherSwiperComponent', () => {
	let component: WeatherSwiperComponent;
	let fixture: ComponentFixture<WeatherSwiperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeatherSwiperComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherSwiperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
