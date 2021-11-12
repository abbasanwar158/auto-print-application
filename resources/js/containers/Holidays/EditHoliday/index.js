import React, { useState, useContext, useEffect } from "react";
import styles from "./EditHoliday.module.scss";
import SVG from "react-inlinesvg";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";
import { useHistory } from "react-router-dom";

export default function EditHoliday() {

  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const history = useHistory();
  const { index, holidaysData } = useContext(RootContext);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  }
  
  const handleChangeOccasion = (event) => {
    setOccasion(event.target.value);
  }

  useEffect(() => {
    holidaysData.map((x,i)=>{
      if(x.id == index){
        setDate(holidaysData[i].date);
        setOccasion(holidaysData[i].occasion);
        setCreatedAt(holidaysData[i].created_at);
      }
    })
  }, []);

  const holidayUpdate = () => {
    var today = new Date()
    fetch(`http://127.0.0.1:8000/api/holiday/update/${index}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: date,
          occasion: occasion,
          created_at: createdAt,
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
          <span className={styles.breadCrumbsSpan}>Edit Holiday</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Edit Holiday </h1>
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
                <Button onClick={holidayUpdate} size="small" variant="contained" color="primary" className={styles.uploadButton}>
                  Update
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
