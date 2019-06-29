import Component from "../../framework/Component";
import {Autocomplete} from "../../../Services/MapsService"
import WeatherDataService from "../../../Services/WeatherDataService.js"
import AppState from "../../../Services/AppState";
export default class searchbar extends Component {
  constructor(host, props) {
    super(host, props);

  }

  componentWillMount() {
    this.input = document.createElement("input");
    this.input.type = "text";
    [{ name: "action", value: "" }, {name: 'autocomplete', value: 'off'}, {name: 'required', value: ''}].forEach(argums => {
      this.input.setAttribute(arguments.name, arguments.value);
    })
    this.input.classList.add("search");
    ['handleFavPopup', 'handleHistPopup', 'handleAutoComplete', 'handleEnter'].forEach(elem => {
    this[elem] = this[elem].bind(this);
    })
    this.handleAutoComplete();
  }
  
  handleFavPopup() {
    const menu = document.getElementById('favourites');
    menu.classList.toggle('favorite-list')
    setTimeout(function(){
      AppState.update('FAVORITEPOP', {classList: [...menu.classList]})
    }, 900)
  }

  handleHistPopup() {
    const menu = document.getElementById('history');
    menu.classList.toggle('history-list');
    setTimeout(function(){
      AppState.update('HISTORYPOP', {classList: [...menu.classList]})
    }, 900)

  }

  handleAutoComplete() {
    Autocomplete(this.input, this.handleAutoComplete)
  }

  handleEnter(event) {
    event.preventDefault();
    const value = this.input.value.split(',')[0]
    WeatherDataService.getWeather(value);
    this.input.value = '';
  }
  render() {
    return [
      {
        tag: "div",
        classList: ["search-block"],
        children: [
          {
            tag: "div",
            classList: ["fav-button"],
            attributes: [{name: 'id', value: 'fav'}],
            eventHandlers: [{
              eventType: 'click',
              handler: this.handleFavPopup
            }],
            children: [{ tag: "h2", content: "Fav" }]
          }, {
            tag: 'form',
            classList: 'search-form',
            eventHandlers: [{eventType: 'submit', handler: this.handleEnter}],
            children: [this.input,]
          },
          {
            tag: "div",
            classList: ["fav-button"],
            attributes: [{name: 'id', value: 'hist'}],
            eventHandlers: [{
              eventType: 'click',
              handler: this.handleHistPopup
            }],
            children: [{ tag: "h2", content: "Hist" }]
          }
        ]
      }
    ];
  }
}
