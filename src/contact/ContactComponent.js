import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    width: 275
  }
};

class ContactComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <p>Contact</p>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ContactComponent);
