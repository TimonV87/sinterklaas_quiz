import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  media: {
    height: 300,
  }
})

const GedichtComponent = ({ history }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image='gedicht.jpeg' className={classes.media} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="p">
          Best Mar Sint zat te denken, godver nou moet ik ook nog zo'n gedicht op papier jenken.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Gedichten maken geeft de Sint geen moed, hopelijk maakt de surprise een hoop goed.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          De breuk met Barbara gaf de Sint veel geween, maar dankzij jou was hij weer snel op de been.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Bedankt dat jij en Rob er altijd voor mij zijn, in tijden van geluk en tijden van pijn.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Klik nu maar snel op de onderstaande knop, door naar het volgende puzzelstuk hop hop hop.
        </Typography>
        <CardActions>
          <Button variant="contained" size="large" color="primary" onClick={() => history.push('/intro')}>
            Volgende
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default withRouter(GedichtComponent);