import AppState from "./AppState";

class WeatherDataService {
    constructor() {
        this.appIds = [
            { type: "weather", APPID: "9b56af47f5baa2ff8c03fde75ad1993a" },
            { type: "forecast", APPID: "e1403e6bd9381734b9ef1b0163cf00f7" }
          ]
          this.units = 'metric';
          this.getWeather = this.getWeather.bind(this);
          AppState.watch("UNITS", value => {this.units = value});
          AppState.watch("SIDEBAR", this.getWeather);
    }
  getWeather(userInput) {
    const promises = this.appIds.map(controlPoint => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/${
          controlPoint.type
        }?q=${userInput}&units=${this.units}&APPID=${controlPoint.APPID}`
      ).then(response => {
        if (response.ok) {
          return response.json();
        }
      }).then(data => {
        if(controlPoint.type === 'weather') {
          AppState.update('WEATHER', data)
        } else {
          AppState.update('FORECAST', data)
        }
        return data
      });
    });
    return Promise.all(promises)
  }
}

export default new WeatherDataService();
