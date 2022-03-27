import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from '@material-ui/core/Typography';
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  title: {
    color: 'white',
    margin: '0 0 .5rem .5rem',
    flex: '1 1 100%',
  },
});


const DataTable = ({ title, data }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h6" component="div">
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          classoperation={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            {data.map(row => (
              <TableRow key={row.operation}>
                <TableCell component="th" scope="row">
                  {row.operation}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}


export default DataTable