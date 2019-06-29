import Component from "../framework/Component";
import { historyElem } from "../history/historyElem/";
import AppState from "../../Services/AppState";
export default class FavoriteLocation extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch("HISTORY", this.handleHistoryUpdate);
    AppState.watch("HISTORYDEL", this.updateHistoryAfterDeletion);
    AppState.watch("HISTORYPOP", this.updateMyself);
  }

  componentWillMount() {
    [
      "updateMyself",
      "handleHistoryUpdate",
      "updateHistoryAfterDeletion"
    ].forEach(elem => {
      this[elem] = this[elem].bind(this);
    });
    const localStor = JSON.parse(localStorage.getItem("history"));
    this.state = {
      history: [],
      classList: ["history-list-active"]
    };
    this.updateMyself(localStor);
  }

  handleHistoryUpdate(data) {
    const current = {
      newCity: data,
      history: this.state.history
    };
    current.newCity !== null &&
    !current.history.some(item => item === current.newCity) &&
    this.state.history.length < 5
      ? current.history.push(current.newCity)
      : null;
    localStorage.setItem("history", JSON.stringify(current));
    this.updateMyself(current);
  }
  updateHistoryAfterDeletion() {
    const localStor = JSON.parse(localStorage.getItem("history"));
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
        attributes: [
          {
            name: "id",
            value: "history"
          }
        ],
        children: [
          { tag: "h2", content: "History", classList: ["head-side"] },
          { tag: "hr" },
          {
            tag: "div",
            children: this.state.history
              ? this.state.history.map(item => {
                  return {
                    tag: historyElem,
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
