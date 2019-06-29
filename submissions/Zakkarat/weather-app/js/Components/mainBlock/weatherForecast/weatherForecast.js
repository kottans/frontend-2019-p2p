import Component from "../../framework/Component";
import { weatherForecastItem } from "./weatherForecastItem";
import AppState from "../../../Services/AppState";
export default class weatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch("FORECAST", this.forecastUpd);
  }
  componentWillMount() {
    ["forecastUpd", "updateMyself"].forEach(elem => {
      this[elem] = this[elem].bind(this);
    });
    this.state = {
      list: []
    };
  }
  forecastUpd(data) {
    data.list.length ? this.updateMyself(data) : null;
  }
  updateMyself(subState) {
    this.updateState(subState);
  }

  render() {
    return [
      {
        tag: "div",
        classList: ["display-week"],
        children: this.state.list
          ? this.state.list
              .filter(
                day =>
                  !(this.state.list.indexOf(day) % 7) &&
                  this.state.list.indexOf(day) !== 0
              )
              .map(day => {
                return {
                  tag: weatherForecastItem,
                  props: { ...day }
                };
              })
          : ""
      }
    ];
  }
}
