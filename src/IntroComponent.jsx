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
        <Typography gutterBottom variant="body1" component="p">
          Sinterklaas zat te denken, zal ik de cadeaus zomaar schenken.
          Helaas Mar dit gaat niet gebeuren, god wat zal jij nu treuren.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Hierna zal een quiz volgen met 5 vragen.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Na 5 juiste antwoorden zal het laatste stukje van de puzzel duidelijk worden.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Let op! Bij elk fout antwoord zal de quiz automatisch opnieuw beginnen.
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          Bij elke vraag mag 1 persoon je helpen, zolang het niet de persoon is waar het over gaat.
        </Typography>
        <CardActions>
          <Button variant="contained" size="large" color="primary" onClick={() => history.push('/quiz')}>
            Start quiz
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default withRouter(IntroComponent);