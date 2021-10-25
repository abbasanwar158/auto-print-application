import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

/*** Override the Style of Drawer */
const CssTextField = withStyles({

    root: {
        '& label.Mui-focused': {
            color: '#000000',
            fontFamily: 'Poppins',
            fontSize: '16px !important'
        },
        '& .MuiInput-input': {
            '& placeholder': {
                background: 'black',
                color: 'red !important',
                opacity: '1', /* Firefox */
            }
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #939393',
                borderRadius: '5px',
                fontFamily: 'Poppins',
                fontSize: '16px'

            },
            '.MuiInputAdornment-root': {
                display: 'none'
            },
            '&:hover fieldset': {
                borderColor: '#939393',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid #939393'
            },
            '&.Mui-focused fieldset .MuiInputAdornment-root': {
                display: 'block'
            },
        },
    },
})(TextField);


const CustomiseTextField = (props) => <CssTextField InputLabelProps={{
    style: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        color: props.disabled ? '#717171' : '#000000'
    }
}} {...props} />;

export default CustomiseTextField;