import Component from "../framework/Component";
import { favoriteElem } from "../Favorites/favoriteElem/";
import AppState from "../../Services/AppState";
export default class FavoriteLocation extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch("FAVORITE", this.handleFavoriteUpdate);
    AppState.watch("FAVORITEDEL", this.updateFavoriteAfterDeletion);
    AppState.watch("FAVORITEPOP", this.updateMyself);
  }

  componentWillMount() {
    [
      "updateMyself",
      "handleFavoriteUpdate",
      "updateFavoriteAfterDeletion"
    ].forEach(elem => {
      this[elem] = this[elem].bind(this);
    });
    const localStor = JSON.parse(localStorage.getItem("favorite"));
    this.state = {
      favorite: [],
      classList: ["favorite-list-active"]
    };
    this.updateMyself(localStor);
  }

  handleFavoriteUpdate(data) {
    const current = {
      newCity: data,
      favorite: this.state.favorite
    };
    current.newCity !== null &&
    !current.favorite.some(item => item === current.newCity) &&
    this.state.favorite.length < 5
      ? current.favorite.push(current.newCity)
      : null;
    localStorage.setItem("favorite", JSON.stringify(current));
    this.updateMyself(current);
  }
  updateFavoriteAfterDeletion() {
    const localStor = JSON.parse(localStorage.getItem("favorite"));
    this.updateMyself(localStor);
  }
  updateMyself(substate) {
    this.updateState(substate);
  }
  render() {
    return [
      {
        tag: "div",
        classList: this.state.classList.map(item => item),
        attributes: [{ name: "id", value: "favourites" }],
        children: [
          { tag: "h2", content: "Favorites", classList: ["head-side"] },
          { tag: "hr" },
          {
            tag: "div",
            children: this.state.favorite
              ? this.state.favorite.map(item => {
                  return {
                    tag: favoriteElem,
                    props: { city: item }
                  };
                })
              : ""
          }
        ]
      }
    ];
  }
}
