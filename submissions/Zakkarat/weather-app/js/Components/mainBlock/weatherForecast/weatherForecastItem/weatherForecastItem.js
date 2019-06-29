import Component from "../../../framework/Component";
export default class weatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
    this.transformToWeekDay();
  }
  
  transformToWeekDay() {
    this.props.dt_txt = new Date(this.props.dt_txt.split(',')[0])
    this.props.dt_txt = this.props.dt_txt.toString().split(' ')[0];
    this._render();
  }

  render() {
    return [
      {
        tag: "div",
        classList: ["card"],
        children: [
          { tag: "h1", classList: "week-day", content: this.props.dt_txt },
          { tag: "hr" },
          {
            tag: "h1",
            classList: "week-status",
            children: [
              {
                tag: "i",
                classList: ["wi", `wi-owm-${this.props.weather[0].id}`]
              }
            ]
          },
          {tag: 'h1', classList: "week-temp", content: `${Math.ceil(this.props.main.temp)}&#176;`}
        ]
      }
    ];
  }
}
