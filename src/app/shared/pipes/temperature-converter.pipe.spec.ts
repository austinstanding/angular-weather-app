import { TemperatureConverterPipe } from './temperature-converter.pipe';
import { environment } from 'src/environments/environment';

describe('Pipe: TemperatureConverterPipe', () => {
	it('create an instance', () => {
		const tempConverterPipe = new TemperatureConverterPipe();
		expect(tempConverterPipe).toBeTruthy();
	});
	it('should not convert if already correct unit', () => {
		const tempConverterPipe = new TemperatureConverterPipe();
		expect(tempConverterPipe.transform(100, environment.units)).toEqual('100');
	});
	it('should convert celcius to farenheit', () => {
		const tempConverterPipe = new TemperatureConverterPipe();
		expect(tempConverterPipe.transform(100, 'imperial')).toEqual('212.00');
		expect(tempConverterPipe.transform(100, 'F')).toEqual('212.00');
	});
	it('should convert farenhiet to celcius', () => {
		const tempConverterPipe = new TemperatureConverterPipe();
		expect(tempConverterPipe.transform(32, 'metric')).toEqual('0.00');
		expect(tempConverterPipe.transform(32, 'C')).toEqual('0.00');
	});
});
