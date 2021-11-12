import React, { useState, useContext, useEffect } from "react";
import styles from "./EditEmployee.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";
import { useHistory } from "react-router-dom";


export default function NewEmployee() {

  const { employeesData, index } = useContext(RootContext);
  const [externalId, setExternalId] = useState('')
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [cnic, setCnic] = useState('')
  const [email, setEmail] = useState('')
  const [joiningDate, setJoiningDate] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const history = useHistory();

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeExId = (event) => {
    setExternalId(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDesignation = (event) => {
    setDesignation(event.target.value);
  };

  const handleChangeCnic = (event) => {
    setCnic(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeDate = (event) => {
    setJoiningDate(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const Chevron = () => {
    return (
      <span className={styles.dropDownCustomizeSvg}>
        <SVG src={`${process.env.PUBLIC_URL}/images/downArrow.svg`} />
      </span>
    );
  };

  useEffect(() => {
    var employeeDataForEdit = employeesData[index]
    setExternalId(employeeDataForEdit.employee_external_id)
    setName(employeeDataForEdit.name)
    setDesignation(employeeDataForEdit.designation)
    setCnic(employeeDataForEdit.cnic)
    setEmail(employeeDataForEdit.email)
    setJoiningDate(employeeDataForEdit.joining_date)
    setDescription(employeeDataForEdit.description)
    var statusValue = employeeDataForEdit.active
    if (statusValue) {
      setStatus(1)
    }
    else {
      setStatus(0)
    }
  }, []);

  const editEmployee = () => {
    var today = new Date()
    fetch(`http://127.0.0.1:8000/api/employee/update/${employeesData[index].id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          employee_external_id: externalId,
          name: name,
          active: status,
          created_at: today,
          updated_at: today,
          cnic: cnic,
          email: email,
          designation: designation,
          joining_date: joiningDate,
          description: description,
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
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
          <span className={styles.breadCrumbsSpan}>Employees</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Edit</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Edit Employee</h1>
      </div>
      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Employee external"
                    type="number"
                    variant="outlined"
                    value={externalId}
                    onChange={handleChangeExId}
                  >
                  </TextField>
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
                    label="Name"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={handleChangeName}
                  >
                  </TextField>
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
                    label="Designation"
                    type="text"
                    variant="outlined"
                    value={designation}
                    onChange={handleChangeDesignation}
                  >
                  </TextField>
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
                    label="CNIC"
                    type="text"
                    variant="outlined"
                    value={cnic}
                    onChange={handleChangeCnic}
                  >
                  </TextField>
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
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={handleChangeEmail}
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <FormControl fullWidth>
                  <TextField
                    className={styles.fieldDiv}
                    id="date"
                    label="Joining Date"
                    type="date"
                    variant="outlined"
                    defaultValue="2021-01-01"
                    size="small"
                    value={joiningDate}
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
                    label="Description"
                    type="text"
                    variant="outlined"
                    value={description}
                    onChange={handleChangeDescription}
                  >
                  </TextField>
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
                    label="Status"
                    variant="outlined"
                    value={status}
                    onChange={handleChangeStatus}
                    menuprops={{ variant: "menu" }}
                    select
                    SelectProps={{ IconComponent: () => <Chevron /> }}
                  >
                    <MenuItem value="1">
                      Active
                    </MenuItem>
                    <MenuItem value="0">
                      Not Active
                    </MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <Button onClick={editEmployee} variant="contained" color="primary" className={styles.saveButton}>
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  onClick={(e) => history.push('/employees')}
                >
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
