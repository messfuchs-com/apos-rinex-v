import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
});
 

function DatePicker(props) {
  const { classes } = props;
  const thisDate = props.date ? new Date(props.date) : new Date();
  const mm = thisDate.getMonth() + 1;
  const dd = thisDate.getDate();
  const yyyy = thisDate.getFullYear();

  const strDate = [
    yyyy,
    (mm>9 ? '': '0') + mm,
    (dd>9 ? '': '0') + dd
  ].join('-');

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        onChange={props.changed}
        label="Choosen Date"
        type="date"
        value={strDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);
