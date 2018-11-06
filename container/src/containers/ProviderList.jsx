import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';


import Chart from '../components/RinexAvailabilityChart';
import parseOldRinex from '../share/parseOldRinex';
import {dateToObject} from '../share/formatDate';
import formatDate from '../share/formatDate';

console.log(process.env)
const rinexPath = process.env.REACT_APP_RINEX_PATH;

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
    button: {
      margin: theme.spacing.unit,
    }
  });


class ProviderList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      providers: {},
    }
  }  

  componentDidMount() {
    this.generateState(this.props.date);
  }

  generateState(tempDate) {
    const params = dateToObject(tempDate);
    const dateStr = formatDate(tempDate);
    let newStateObject = {
      providers: {},
    };
    console.log(process.env);
    const filePath = rinexPath + '/' + params.year + '/' + dateStr + '.htm';
    console.log("Looking for data in " + filePath);
    parseOldRinex(filePath).then( response => {
      this.setState({
        ...newStateObject,
        providers: response.providers
      })
      console.log('Found ' + filePath)
    }).catch( error => {
      console.log("Error with file " +  filePath);
      this.setState(newStateObject);      
    });
  }

  createBarChart(station, gaps) {
    const gapList = [];
    for (let i = 0; i < gaps.length; i++) {
      const gBegin = parseInt(gaps[i].gBegin, 10);
      const gEnd = parseInt(gaps[i].gEnd, 10);
      for (let j = gBegin; j <= (gEnd); j++) {
        gapList.push(j)
      }
    }
    return <Chart max={60 * 24} gaps={gapList} />
  }

  render() {
      const { classes } = this.props;   
      const { providers } = this.state;
  
      let providerList = (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="display1" gutterBottom>No Data</Typography>
          </CardContent>
        </Card>
      );
 
      if (providers && Object.keys(providers).length > 0) {
        console.log("Do something with them");
        providerList = []
        Object.keys(providers).forEach(providerId => {
          const stationList = [];
          const detailList = [];
          for (let i = 0; i < providers[providerId].stations.length; i++) {
            let station = providers[providerId].stations[i];
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
                </Typography>
              </CardContent>
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
                        const barChart = this.createBarChart(n.sId, n.gaps);
                        return (
                          <TableRow key={"g"+n.sId+"-"+idx}>
                            <TableCell style={{width: '15%'}} component="th" scope="row">
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
                            <TableCell style={{width: '15%'}} component="th" scope="row">{n.sId}</TableCell>
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
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
          providerList.push(provider);
        });
      } 
      return (
        <div>
          {providerList}
        </div>
      )
  }
}
 
export default withStyles(styles)(ProviderList);
