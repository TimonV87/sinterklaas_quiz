import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  media: {
    height: 500,
  }
})

const IntroComponent = ({ history }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image='sinterklaas.jpeg' className={classes.media} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          SchenkMulderDavidsVerkerk familiequiz
        </Typography >
        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
          Sinterklaas zat te denken, zal ik de cadeaus zomaar schenken.
          Helaas Mar, je bent er bijna.
        </Typography>
        <CardActions>
          <Button variant="contained" size="large" color="primary" onClick={() => history.push('/quiz')}>
            Volgende
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default withRouter(IntroComponent);