import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  altcard: {
    width: 275
  }
};

class GalleryComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.altcard}>
        <CardContent>
          <p>Galerie</p>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(GalleryComponent);
