import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import pozaBarca from "./assets/pozabarcacomponent.jpg";

const styles = {
  card: {
    maxWidth: 600,
    maxHeight: 600,
    marginTop: 100
  },
  media: {
    objectFit: "cover"
  }
};

class BoatComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                GLASTRON GXL 205 SF
              </Typography>
              <Typography component="p">
                Detalii tehnice <br />
                Motor: 4.3L <br />
                Putere: 220CP <br />
                Lungime: 6 metri
                <br />
                Capacitate maxima: 10 persoane
                <br />
                Posibilitate
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* ...................aici este poza cu barca si butonul......................... */}

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Poza barca"
              className={classes.media}
              height="140"
              // image={pozaBarca}
              title="Poza barca"
            />
          </CardActionArea>
          <CardActions>
            <Button size="big" color="primary">
              Pentru mai multe poze, apasati aici
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(BoatComponent);
