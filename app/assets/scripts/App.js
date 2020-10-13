import "../styles/styles.css";
import "lazysizes";
import Tabs from "./modules/Tabs";

new Tabs();

if (module.hot) {
  module.hot.accept();
}
