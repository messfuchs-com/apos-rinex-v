import React, { Component } from 'react';
import { Typography, Card, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Chart from '../components/RinexAvailabilityChart';

import exampleData from '../examples/exampleData';
import DatePicker from '../hoc/pickers/DatePicker';

import parseOldRinex from '../share/parseOldRinex';
import {dateToObject} from '../share/formatDate';
import formatDate from '../share/formatDate';


const styles = theme => (
  {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    card: {
      minWidth: 275,
      margin: 10
    },
    innerCard: {
      margin: 5
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });


class RinexAvailability extends Component {

  state = {
    //data: null,
    //...exampleData,
    date: null
  }

  generateState(tempDate) {
    // clear old data
    this.setState({ providers: {}, date: null });
    const params = dateToObject(tempDate);
    const dateStr = formatDate(tempDate);
    let newStateObject = {
      providers: {},
      date: dateStr
    };
    const filePath = '../' + params.year + '/' + dateStr + '.htm';
    console.log("Looking for data in " + filePath);
    parseOldRinex(filePath).then( response => {
      console.log("lookes good");
      console.log(response);
      const providers = {...response.providers};
      
      // Add attributes for nice rendering
      Object.keys(providers).forEach(providerId => {
        providers[providerId].isExpanded = false;
        providers[providerId].gapList = [];
      }; 

      this.setState({
        ...newStateObject,
        providers: providers
      })
    }).catch( error => {
      console.log("error");
      this.setState(newStateObject);
    });
  }

  componentWillMount() {
    const today = new Date();
    let tempDate = new Date();
    tempDate = tempDate.setDate(today.getDate()-1);
    const newState = this.generateState(tempDate);
  }

  onChangeDateHandler = (event) => {
    const newState = this.generateState(event.target.value);
  }

  createBarChart = (providerId, station, gaps) => {
    const gapList = [];
    for (let i = 0; i < gaps.length; i++) {
      const gBegin = parseInt(gaps[i].gBegin);
      const gEnd = parseInt(gaps[i].gEnd);
      for (let j = gBegin; j <= (gEnd); j++) {
        gapList.push(j)
      }
    }
    if (gapList.length > 0) {
      console.log(station);
      console.log(gapList);
      const providers = {...this.state.providers};
      const oldProvider = {...providers[providerId]};
      oldProvider.gapList = oldProvider.gapList.concat(gapList);
      providers[providerId] = oldProvider;
      this.setState({ providers: providers });      
    }
    return <Chart max={60 * 24} gaps={gapList} />
  }

  render() {

    const { classes } = this.props;
    let providerList = (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="display1" gutterBottom>No Data</Typography>
        </CardContent>
      </Card>
    );

    if (this.state.providers && Object.keys(this.state.providers).length > 0) {
      providerList = []
      Object.keys(this.state.providers).forEach(providerId => {
        const stationList = [];
        const detailList = [];
        for (let i = 0; i < this.state.providers[providerId].stations.length; i++) {
          let station = this.state.providers[providerId].stations[i];
          let stationData = {
            sId: station.sId,
            bigger: station.gapsBigger,
            lesser: station.gapsLesser,
            gaps: station.gaps,
            percentage: parseFloat(station.percentage).toFixed(2)
          }
          for (let j = 0; j < station.detail.length; j++) {
            detailList.push(station.detail[j]);
          }
          stationList.push(stationData);
        }
        let provider = (
          <Card className={classes.card} key={providerId}>
            <CardContent>
              <Typography variant="display1" gutterBottom>
                {providerId}
                <Chart max={60 * 24} gaps={this.providers[providerId].gapList} />
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.providers[providerId].isExpanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.providers[providerId].isExpanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.providers[providerId].isExpanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>StationName</TableCell>
                      <TableCell numeric>Bigger</TableCell>
                      <TableCell numeric>Lesser</TableCell>
                      <TableCell numeric>Percentage</TableCell>
                      <TableCell>Graphic</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {stationList.map((n,idx) => {
                      const barChart = this.createBarChart(providerId, n.sId, n.gaps);
                      return (
                        <TableRow key={"g"+n.sId+"-"+idx}>
                          <TableCell component="th" scope="row">
                            {n.sId}
                          </TableCell>
                          <TableCell numeric>{n.bigger}</TableCell>
                          <TableCell numeric>{n.lesser}</TableCell>
                          <TableCell numeric>{n.percentage}</TableCell>
                          <TableCell>{barChart}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </CardContent>
            <CardContent>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>StationName</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>Until</TableCell>
                      <TableCell>Dauer [s]</TableCell>
                      <TableCell>Dauer [h]</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {detailList.map((n, idx) => {
                      return (
                        <TableRow key={"d"+n.sId+"-"+idx}>
                          <TableCell component="th" scope="row">{n.sId}</TableCell>
                          <TableCell>{n.duranceFrom}</TableCell>
                          <TableCell>{n.duranceUntil}</TableCell>
                          <TableCell numeric>{n.duranceSec}</TableCell>
                          <TableCell>{n.duranceHour}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </CardContent>
            </Collapse>
          </Card>
        );
        providerList.push(provider);
      });
    }

    return (
      <div>
        <Card className={classes.card} key={"chooseDate"}>
          <CardContent>
            <DatePicker 
              date={this.state.date} 
              changed={(event) => this.onChangeDateHandler(event)}
            />
          </CardContent>
        </Card>
        {providerList}
      </div>
    );
  }
}


RinexAvailability.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RinexAvailability);
