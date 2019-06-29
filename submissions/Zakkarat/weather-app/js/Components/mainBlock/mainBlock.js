import Component from "../framework/Component";
import {searchBar} from "./searchBar";
import {currentWeather} from "./currentWeather"
import { weatherForecast } from "./weatherForecast";
export default class mainBlock extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
      return [
          {tag: 'div', classList: ['main'], children: [{
              tag: searchBar,
          },
            {
                tag: currentWeather
            }, 
          {tag: weatherForecast}]}
      ]
  }
}