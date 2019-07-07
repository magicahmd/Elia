import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor:'#F9F9F9',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    textAlign: 'center',
    fontFamily: 'DINNEXTARABIC',
  },
  header:{
    textAlign:'center',
    fontFamily:'Midan',
    fontSize:'25px'
  },

  cellText:{
    textAlign:'center',
     fontSize:'15px',
      color:'#555555',
  }
});

let id = 0;
function createData(status, course, grade, region, date) {
  id += 1;
  return { id, status, course, grade, region, date };
}

const rows = [
  createData('قيد المراجعة', 'اللغة العربية', 'الحادي عشر/أدبي', 'القدس', '15/12/2018'),
  createData('قيد المراجعة', 'اللغة العربية', 'الحادي عشر/أدبي', 'القدس', '15/12/2018'),
  createData('قيد المراجعة', 'اللغة العربية', 'الحادي عشر/أدبي', 'القدس', '15/12/2018'),
];

function DroosiTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>الحالة</TableCell>
            <TableCell className={classes.header}>الدرس</TableCell>
            <TableCell className={classes.header}>الصف</TableCell>
            <TableCell className={classes.header}>المنطقة</TableCell>
            <TableCell className={classes.header}>تاريخ التقديم</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell className={classes.cellText}>{row.status}</TableCell>
                <TableCell className={classes.cellText}>{row.course}</TableCell>
                <TableCell className={classes.cellText}>{row.grade}</TableCell>
                <TableCell className={classes.cellText}>{row.region}</TableCell>
                <TableCell className={classes.cellText}>{row.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

DroosiTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DroosiTable);
