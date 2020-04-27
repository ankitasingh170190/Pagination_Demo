import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Typography,
} from "@material-ui/core";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link, useParams } from "react-router-dom";
import useStyles from "./useStyles";

export default ({ data }: DataProps) => {
  const columns = [
    "First Name",
    "Last Name",
    "Email Address",
  ];
  const classes = useStyles();

  const USER_PATH = "/user";

  const ROWS_PER_PAGE = 15;

  const { pageNumber = 1 } = useParams();

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <Box display="flex" flexDirection="column" flex={1}>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column} className={classes.cell}>
                      <Typography variant="h6">{column}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(ROWS_PER_PAGE > 0
                  ? data.slice(
                      (Number(pageNumber) - 1) * ROWS_PER_PAGE,
                      (Number(pageNumber) - 1) * ROWS_PER_PAGE + ROWS_PER_PAGE,
                    )
                  : data
                ).map(dataRow => {
                  return (
                    <TableRow
                      key={dataRow.id}
                      title="tableRow"
                      className={classes.tableRow}
                      classes={{ hover: classes.hover }}
                      hover
                    >
                      <TableCell className={classes.tableCell}>
                        {dataRow.first_name}
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        {dataRow.last_name}
                      </TableCell>
                      <TableCell align="left" className={classes.tableCell}>
                        {dataRow.email_address}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          flex={1}
          padding={1}
          paddingRight={10}
        >
          <Pagination
            page={Number(pageNumber)}
            count={Math.ceil(data.length / ROWS_PER_PAGE)}
            shape="rounded"
            color="primary"
            showFirstButton
            showLastButton
            boundaryCount={2}
            renderItem={(item: any) => (
              <PaginationItem
              type={"start-ellipsis"}
                component={Link}
                selected
                to={`${USER_PATH}/${item.page}`}
                {...item}
              />
            )}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email_address: string;
}
interface DataProps {
  data: Data[];
}

interface PaginationItem extends Element {
  page: number;
}