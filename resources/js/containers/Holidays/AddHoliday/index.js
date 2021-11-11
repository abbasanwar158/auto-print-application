import React, { useState, useContext, useEffect } from "react";
import styles from "./AddHoliday.module.scss";
import SVG from "react-inlinesvg";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

export default function AddHoliday() {

  const history = useHistory();
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');


  const handleChangeDate = (event) => {
    setDate(event.target.value);
  }

  const handleChangeOccasion = (event) => {
    setOccasion(event.target.value);
  }

  const newHoliday = () => {
    var today = new Date()
    fetch(`http://127.0.0.1:8000/api/holiday/new`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: date,
          occasion: occasion,
          created_at: today,
          updated_at: today
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        history.push('/holidays');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Holiday</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>New Holiday</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Add New Holiday </h1>
      </div>
      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <FormControl fullWidth>
                  <TextField
                    className={styles.fieldDiv}
                    id="date"
                    label="Date"
                    type="date"
                    variant="outlined"
                    size="small"
                    value={date}
                    onChange={handleChangeDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <a target="_blank" href="https://www.officeholidays.com/countries/pakistan/">
                  <Button variant="contained" color="primary" className={styles.holidaysBtn} >
                    National Holidays
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Occasion"
                    type="text"
                    variant="outlined"
                    value={occasion}
                    onChange={handleChangeOccasion}
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <Button onClick={newHoliday} size="small" variant="contained" color="primary" className={styles.uploadButton}>
                  Save
                </Button>
                <Button onClick={() => {history.push('/holidays')}} size="small" variant="contained" color="default">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
