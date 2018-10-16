import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    width: 275
  }
};

class HomeComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <p>
            Descrierea este un mod de expunere prin care se prezintă trăsăturile
            caracteristice ale unui colț din natură, ale unui peisaj, fenomen al
            naturii, portretul unui personaj etc. De asemenea, descrierea este
            și o operă literară, în proză sau în versuri, organizată pe baza
            descrierii literare. Ea poate fi: de tip tablou (descrierea unei
            furtuni, unui lac, unui anotimp etc.);de tip portret (enumerarea
            trăsăturilor fizice și morale ale unei persoane).
          </p>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(HomeComponent);
