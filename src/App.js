import React, { Component } from "react";
import MenuComponent from "./menu/MenuComponent";
import HomeComponent from "./home/HomeComponent";
import RentComponent from "./rent/RentComponent";
import GalleryComponent from "./gallery/GalleryComponent";
import ComingSoonComponent from "./comingSoon/ComingSoonComponent";
import ContactComponent from "./contact/ContactComponent";
import BoatComponent from "./boat/BoatComponent";
import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/rent" component={RentComponent} />
          <Route path="/gallery" component={GalleryComponent} />
          <Route path="/comingsoon" component={ComingSoonComponent} />
          <Route path="/contact" component={ContactComponent} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <BoatComponent />
      </div>
    );
  }
}

export default App;
