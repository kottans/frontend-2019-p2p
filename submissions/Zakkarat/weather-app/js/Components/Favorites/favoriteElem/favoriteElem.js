import Component from "../../framework/Component";
import AppState from "../../../Services/AppState";
export default class FavoriteElem extends Component {
  constructor(host, props) {
    super(host, props);
  }
  componentWillMount() {
    ["handleDelete", "clickNotify"].forEach(elem => {
      this[elem] = this[elem].bind(this);
    });
  }

  handleDelete(e) {
    const localStor = JSON.parse(localStorage.getItem("favorite"));
    localStor.favorite = localStor.favorite.filter(item => {
      return item !== e.target.previousElementSibling.innerHTML;
    });
    localStorage.setItem("favorite", JSON.stringify(localStor));
    AppState.update("FAVORITEDEL", null);
  }

  clickNotify(e) {
    if (e.target.classList.contains("delete-city")) {
      return;
    }
    let city = e.target.innerText;
    if (!city) {
      city = e.target.firstElementChild.innerText;
    }
    city = city.split(",")[0];
    AppState.update("SIDEBAR", city);
  }
  render() {
    return [
      {
        tag: "div",
        classList: "city-block",
        eventHandlers: [{ eventType: "click", handler: this.clickNotify }],
        children: [
          { tag: "h3", classList: "city-block-text", content: this.props.city },
          {
            tag: "button",
            classList: "delete-city",
            eventHandlers: [{ eventType: "click", handler: this.handleDelete }]
          }
        ]
      }
    ];
  }
}
