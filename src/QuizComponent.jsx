import { Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getQuestions, resetQuestionNumber } from './questions';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '5em',
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: '2em'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  questions: {
    padding: '2em',
  }
}));

const QuizComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [questions, setQuestions] = useState();
  const steps = ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4', 'Vraag 5'];
  const classes = useStyles();

  useEffect(() => {
    setActiveStep(Number(localStorage.getItem('step')) || 0);
    getQuestions();
    setQuestions(getQuestions());
  }, []);

  const handleNext = () => {
    const correctAnswer = questions[activeStep].correctAnswer;
    if (answer === correctAnswer) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      localStorage.setItem('step', 1);
      setAnswer(0);
    } else {
      resetForm();
    }
  }

  const resetForm = () => {
    localStorage.setItem('step', 0);
    setActiveStep(0);
    setAnswer(0);
    resetQuestionNumber();
    getQuestions();
    setQuestions(getQuestions());
  }

  const getQuestion = (step) => {
    return questions[step].question;
  }

  const getAnswers = (step) => {
    return questions[step].answers;
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper>
          <Stepper activeStep={activeStep}>
            {
              steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel></StepLabel>
                  </Step>
                )
              })
            }
          </Stepper>
          {
            questions && <Grid container className={classes.questions}>
              {activeStep === steps.length ? (
                <>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="h1" component="h2" className={classes.instructions}>
                      Gefeliciteerd!!!
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="h5">
                      De cijfercode is: 812
                    </Typography>
                  </Grid>
                </>
              ) : (
                  <>
                    <Grid item xs={12}>
                      <Typography className={classes.instructions}>{getQuestion(activeStep)}</Typography>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Antwoord</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={answer} onChange={(event) => setAnswer(event.target.value)}>
                          {getAnswers(activeStep).map((answer) => {
                            return (
                              <FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />
                            )
                          })
                          }

                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </Grid>
                  </>
                )
              }
            </Grid>
          }
        </Paper>
      </Grid >
    </Grid >
  );
}

export default QuizComponent;