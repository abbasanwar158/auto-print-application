import React, { useState, useContext, useEffect } from "react";
import styles from "./ViewHolidays.module.scss";
import SVG from "react-inlinesvg";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import { RootContext } from "../../../context/RootContext";
import { useHistory } from "react-router-dom";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function ViewHolidays() {

  const history = useHistory();
  const classes = useStyles2();
  const [date, setDate] = useState('');
  const [allCheckbox, setAllCheckbox] = useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { holidaysData, setHolidaysData, setIndex } = useContext(RootContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  }

  const handleChangeCheckbox = (event) => {
    setAllCheckbox(event.target.checked)
  }

  useEffect(() => {
    holidayDataFunction();
  }, []);

  const holidayDataFunction = () => {
    var holidaysArr = [];
    var holidaysFilttered = [];
    fetch("http://127.0.0.1:8000/api/holidays")
      .then(res => res.json())
      .then(
        (response) => {
          holidaysArr = response;
          holidaysArr.map((x,i)=>{
            if(!x.is_deleted){
              holidaysFilttered.push(x);
            }
          })
          setHolidaysData(holidaysFilttered);
        },
        (error) => {
          console.log("error", error)
        }
      )
  }

  const arhiveData = (event) => {
    var id = event.target.value;
    fetch(`http://127.0.0.1:8000/api/holiday/archive/${id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          is_deleted: true,
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        holidayDataFunction();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const searchHoliday = () => {
    var dateSend = date;
    var checkbox = allCheckbox;
    var holiday = [];
    if(!checkbox){
      fetch(`http://127.0.0.1:8000/api/holiday/search/${dateSend}`)
        .then(res => res.json())
        .then(
          (response) => {
            if(response.length>0){
              if(!response[0].is_deleted){
                holiday.push(response[0]);
                setHolidaysData(holiday);
              }
              else{
                alert('No record Found!!!!!!!!!!!')
              }
            }
          },
          (error) => {
            console.log("error", error)
          }
        )
    }
    else{
      holidayDataFunction();
    }
  }

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Holidays</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>View</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>View All Holidays</h1>
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
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <FormControl >
                  <FormControlLabel
                    className={styles.allCheckbox}
                    value="All"
                    control={<Checkbox color="primary" />}
                    label="ALL"
                    labelPlacement="end"
                    onChange={handleChangeCheckbox}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <Button onClick={searchHoliday} variant="contained" color="default" className={styles.searchBtn}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={styles.flex}>
          <TableContainer component={Paper} className={styles.table}>
            <Table className={classes.table} aria-label="custom pagination table">
              <TableHead className={styles.tableHeader}>
                <TableRow>
                  <TableCell className={styles.TableCell} >Date</TableCell>
                  <TableCell className={styles.TableCell} >Occasion</TableCell>
                  <TableCell className={styles.TableCell} >Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? holidaysData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : holidaysData
                ).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className={styles.nameCells}>{row.date}</TableCell>
                    <TableCell className={styles.subCells}>{row.occasion}</TableCell>
                    <TableCell className={styles.subCells}>
                    <button
                      value={row.id}
                      onClick={(e) => {
                        setIndex(e.target.value);
                        history.push('/holiday/edit')
                      }}
                    >Edit</button>
                    |
                    <button
                      value={row.id}
                      className={styles.deleteBtn}
                      onClick={arhiveData}
                    >Archive
                    </button>
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    className={styles.pagginationContainer}
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={3}
                    count={holidaysData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>

    </>
  );
}
