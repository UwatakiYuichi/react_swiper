import logo from "./logo.svg";
import "./App.css";

import AppSample from "./component/AppSample";
import SwiperParts from "./component/SwiperParts";

export default function App() {
  return (
    <div className="App">
      <AppSample></AppSample>
      <SwiperParts />
      <SwiperParts />
    </div>
  );
}
