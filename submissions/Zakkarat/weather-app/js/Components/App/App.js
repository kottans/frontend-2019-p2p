import Component from "../framework/Component";
import { FavoriteLocation } from "../Favorites";
import { mainBlock } from "../mainBlock"
import { historyLocation } from "../history"
export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
      return [
          {tag: FavoriteLocation},
          {tag: mainBlock},
          {tag: historyLocation}
      ]
  }
}



//   render() {
//     const t1 = document.createElement("div");
//     new Temperature(t1, { temperature: 32, unit: "C" });
//     const w1 = document.createElement("div");
//     w1.className = "div";
//     new Wind(w1, { speed: 100, unit: "mph" });
//     return [
//       t1,
//       {
//         tag: Temperature,
//         props: {
//           temperature: 7,
//           unit: "C"
//         }
//       },
//       {
//         tag: "div",
//         content: "Me div",
//         classList: ["nice"],
//         attributes: [{ name: "title", value: "Me defunetrly nice div" }]
//       },
//       {
//         tag: "div",
//         content: "Me parent div",
//         classList: ["nice"],
//         attributes: [{ name: "title", value: "Me defunetrly nice div" }],
//         children: [
//             {tag: 'div', content: 'heh'},
//             {tag: 'div', content: 'kek', children: [
//                 {tag: 'div', content: "heh1"},
//                 {tag: 'div', content: "heh2"},
//             ]},
//             {tag: 'div', content: 'hehkek'}
//         ]
//       },
//       {
//         tag: Temperature,
//         props: {
//           temperature: 19,
//           unit: "C"
//         }
//       },
//       t1
//     ];
//   }
// }
