import Component from "../../framework/Component";
import WeatherDataService from "../../../Services/WeatherDataService.js";
import AppState from "../../../Services/AppState.js";
export default class currentWeather extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch("WEATHER", this.updateMyself);
    this.getLocationData();
  }

  componentWillMount() {
    ["updateMyself", "getLocationData", "handleUnit", "favoriteNotify", "stateTempChange"].forEach(
      elem => {
        this[elem] = this[elem].bind(this);
      }
    );
    this.state = {
      name: "",
      sys: { country: "" },
      main: { temp: "", humidity: "" },
      unit: "C",
      oppositeUnit: "F",
      windUnit: "m/s",
      wind: { speed: "", deg: "" },
      feel: "",
      weather: [{ id: "" }],
      star: false
    };
  }
  getLocationData() {
    WeatherDataService.getWeather("kiev");
  }
  handleUnit() {
    const valuesKits = [["F", "C", "mi/h", "imperial"], ["C", "F", "m/s", "metric"]]
    if (this.state.unit === "C") {
      this.stateTempChange(valuesKits[0])
    } else {
      this.stateTempChange(valuesKits[1])
    }
    WeatherDataService.getWeather(this.state.name);
  }
  stateTempChange(values) {
    this.state.unit = values[0];
    this.state.oppositeUnit = values[1];
    this.state.windUnit = values[2];
    AppState.update("UNITS", values[3]);
  }
  updateMyself(subState) {
    const city = `${subState.name}, ${subState.sys.country}`;
    AppState.update("HISTORY", city);
    const localStor = JSON.parse(localStorage.getItem("favorite"));
    if (localStor && localStor.favorite.some(item => item === city)) {
      subState.star = true;
    } else {
      subState.star = false;
    }
    this.updateState(subState);
  }
  favoriteNotify(e) {
    const city =
      e.target.nextElementSibling.firstElementChild.firstElementChild.innerText;
    const localStor = JSON.parse(localStorage.getItem("favorite"));
    if(localStor && localStor.favorite.length > 4) {
      return
    }
    if (localStor && localStor.favorite.some(item => item === city)) {
      localStor.favorite = localStor.favorite.filter(item => {
        return item !== city;
      });
      localStorage.setItem("favorite", JSON.stringify(localStor));
      AppState.update("FAVORITEDEL", city);
    } else {
      AppState.update("FAVORITE", city);
    }
    const star = document.getElementById("star");
    star.classList.toggle("star-active");
  }
  render() {
    return [
      {
        tag: "div",
        classList: ["display-day"],
        children: [
          {
            tag: "div",
            classList: this.state.star ? ["star", "star-active"] : ["star"],
            content: "☆",
            attributes: [{ name: "id", value: "star" }],
            eventHandlers: [
              { eventType: "click", handler: this.favoriteNotify }
            ]
          },
          {
            tag: "div",
            classList: ["upper-day"],
            children: [
              {
                tag: "div",
                classList: ["city"],
                children: [
                  {
                    tag: "h1",
                    content: `${this.state.name}, ${this.state.sys.country}`
                  },
                  "&nbsp;&nbsp;",
                  {
                    tag: "h1",
                    children: [
                      {
                        tag: "i",
                        classList: ["wi", `wi-owm-${this.state.weather[0].id}`]
                      }
                    ]
                  }
                ]
              },
              {
                tag: "div",
                classList: "temp",
                children: [
                  {
                    tag: "h1",
                    classList: "degree",
                    content: `${Math.ceil(this.state.main.temp)}&#176;`
                  },
                  {
                    tag: "h1",
                    classList: "degree-state",
                    content: this.state.unit
                  },
                  {
                    tag: "div",
                    classList: "change-deg",
                    content: this.state.oppositeUnit,
                    attributes: [{ name: "id", value: "switch-button" }],
                    eventHandlers: [
                      { eventType: "click", handler: this.handleUnit }
                    ]
                  }
                ]
              }
            ]
          },
          {
            tag: "div",
            classList: "bottom-day",
            children: [
              {
                tag: "div",
                classList: "humidity",
                children: [
                  { tag: "h3", content: "Humidity:&nbsp;&nbsp;" },
                  { tag: "h3", content: `${this.state.main.humidity}%` }
                ]
              },
              {
                tag: "div",
                classList: "wind",
                children: [
                  {
                    tag: "h3",
                    content: `${this.state.wind.speed} ${this.state.windUnit}`
                  },
                  "&nbsp;&nbsp;",
                  {
                    tag: "h3",
                    children: [
                      {
                        tag: "i",
                        classList: [
                          "wi",
                          "wi-wind",
                          `towards-${this.state.wind.deg}-deg`
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                tag: "div",
                classList: "feel",
                children: [
                  {
                    tag: "h3",
                    content: `Feels like: ${Math.ceil(
                      this.state.main.temp
                    )}&#176;`
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}
