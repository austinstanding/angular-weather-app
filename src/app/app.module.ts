import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherService } from './weather/weather.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SignoutComponent } from './auth/signout/signout.component';
import { TemperatureConverterPipe } from './shared/pipes/temperature-converter.pipe';
import { RouterModule } from '@angular/router';
import { WeatherSwiperComponent } from './weather/weather-swiper/weather-swiper.component';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	observer: true,
	direction: 'horizontal',
	threshold: 50,
	spaceBetween: 5,
	slidesPerView: 3,
	centeredSlides: true,
	keyboard: true,
	mousewheel: true,
	a11y: true,
	scrollbar: true
};

@NgModule({

	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		SwiperModule,
	],

	declarations: [
		AppComponent,
		WeatherSearchComponent,
		WeatherListComponent,
		WeatherItemComponent,
		HeaderComponent,
		FooterComponent,
		PageNotFoundComponent,
		WeatherTodayComponent,
		SigninComponent,
		SignupComponent,
		SignoutComponent,
		TemperatureConverterPipe,
		WeatherSwiperComponent,
	],

	providers: [
		WeatherService,
		AuthService,
		AuthGuard,
		{ provide: APP_CONFIG, useValue: AppConfig },
		{ provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }
	],

	bootstrap: [AppComponent]
})
export class AppModule { }
