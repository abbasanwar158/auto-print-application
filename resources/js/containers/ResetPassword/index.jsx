import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import styles from './Resetpassword.module.scss';
import mainStyles from './../../index.module.scss';
import { useHistory } from 'react-router-dom';


export default function Restpassword() {
  const [resetConfirmation, setResetConfirmation] = useState(false);
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
   
    <div className={styles.resetPasswordContainer}>
    <h1 className={styles.heading}>Reset Password</h1>
    <p className={styles.des}>Enter you new password below</p>
    <TextField
      id='outlined-basic'
      label='Password'
      variant='outlined'
      type={passwordShown ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment className={styles.inputendornment} position='end'>
          </InputAdornment>
        ),
      }}
    />
    <div className={styles.actionsContainer}>
      <Button className={mainStyles.defaultButton} variant='contained' onClick={() => setResetConfirmation(true)}>
        <p className={styles.buttonText}>Reset Password</p>
      </Button>
      <Button
        onClick={() => {
          history.push('/login');
        }}
        className={mainStyles.defaultOutlinedButton}
        variant='outlined'
      >
        Login
    </Button>
    </div>
  </div>
  )
}
