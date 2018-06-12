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
  });


class RinexAvailability extends Component {

  state = {
    "providers": {
      "APOS(A)": {
        "stations": [
          {
            "sId": "AMST",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 3,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "sId": "DIEN",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 1,
            "percentage": 99.98,
            "gaps": []
          },
          {
            "sId": "DLBG",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "DOER",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "FLDB",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "FLDK",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "FRST",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "GMUE",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "GRAZ",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "HBLT",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "HKBL",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "HORN",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "INBK",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "KOPS",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "KRBG",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "KTZB",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "LECH",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "MSTB",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "MUEN",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "OBWT",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "PATK",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "PFAN",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "POEL",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "RIED",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "ROHR",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "SBGZ",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "SILL",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 2,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "sId": "SPDR",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "STPO",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "TAMS",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "TRFB",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 2,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "sId": "VKLB",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "VLCH",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "VLKM",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "WIEN",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "WIND",
            "provider": "APOS(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          }
        ]
      },
      "KELAG(A)": {
        "stations": [
          {
            "sId": "KOET",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "LANK",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "KLAG",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "BLEI",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "LEON",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "TREI",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 8,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "sId": "LIES",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "SECK",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 1,
            "percentage": 100,
            "gaps": []
          }
        ]
      },
      "AGNES(CH)": {
        "stations": [
          {
            "sId": "ARDE",
            "provider": "AGNES(CH)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "DAVO",
            "provider": "AGNES(CH)",
            "gapsBigger": 1,
            "gapsLesser": 0,
            "percentage": 99.88,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "37",
                "gEnd": "38"
              }
            ]
          },
          {
            "sId": "SARG",
            "provider": "AGNES(CH)",
            "gapsBigger": 3,
            "gapsLesser": 3,
            "percentage": 99.82,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1062",
                "gEnd": "1063"
              },
              {
                "gId": "2",
                "gBegin": "1075",
                "gEnd": "1076"
              },
              {
                "gId": "3",
                "gBegin": "1081",
                "gEnd": "1081"
              }
            ]
          },
          {
            "sId": "STGA",
            "provider": "AGNES(CH)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          }
        ]
      },
      "SAPOS-BY(D)": {
        "stations": [
          {
            "sId": "AINR",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "ASCH",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "BADT",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "FNST",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 3,
            "gapsLesser": 3,
            "percentage": 99.71,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1266",
                "gEnd": "1267"
              },
              {
                "gId": "2",
                "gBegin": "1276",
                "gEnd": "1277"
              },
              {
                "gId": "3",
                "gBegin": "1360",
                "gEnd": "1362"
              }
            ]
          },
          {
            "sId": "GRMP",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "LIND",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 1,
            "gapsLesser": 1,
            "percentage": 99.77,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1423",
                "gEnd": "1427"
              }
            ]
          },
          {
            "sId": "PASS",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "PFRK",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "ROSE",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 2,
            "gapsLesser": 1,
            "percentage": 99.76,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1423",
                "gEnd": "1427"
              },
              {
                "gId": "2",
                "gBegin": "1430",
                "gEnd": "1430"
              }
            ]
          },
          {
            "sId": "TRST",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "WRTH",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 6,
            "gapsLesser": 5,
            "percentage": 99.59,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "175",
                "gEnd": "176"
              },
              {
                "gId": "2",
                "gBegin": "177",
                "gEnd": "178"
              },
              {
                "gId": "3",
                "gBegin": "534",
                "gEnd": "535"
              },
              {
                "gId": "4",
                "gBegin": "1316",
                "gEnd": "1318"
              },
              {
                "gId": "5",
                "gBegin": "1320",
                "gEnd": "1320"
              },
              {
                "gId": "6",
                "gBegin": "1320",
                "gEnd": "1321"
              }
            ]
          }
        ]
      },
      "CZEPOS(CZ)": {
        "stations": [
          {
            "sId": "CBUD",
            "provider": "CZEPOS(CZ)",
            "gapsBigger": 1,
            "gapsLesser": 4,
            "percentage": 99.96,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "738",
                "gEnd": "739"
              }
            ]
          },
          {
            "sId": "CJHR",
            "provider": "CZEPOS(CZ)",
            "gapsBigger": 0,
            "gapsLesser": 2,
            "percentage": 99.98,
            "gaps": []
          },
          {
            "sId": "CHOD",
            "provider": "CZEPOS(CZ)",
            "gapsBigger": 0,
            "gapsLesser": 4,
            "percentage": 99.98,
            "gaps": []
          },
          {
            "sId": "CZNO",
            "provider": "CZEPOS(CZ)",
            "gapsBigger": 0,
            "gapsLesser": 1,
            "percentage": 99.98,
            "gaps": []
          }
        ]
      },
      "SKPOS(SK)": {
        "stations": [
          {
            "sId": "SKBR",
            "provider": "SKPOS(SK)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "SKSE",
            "provider": "SKPOS(SK)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          }
        ]
      },
      "GNSSNET.HU(H)": {
        "stations": [
          {
            "sId": "CSOR",
            "provider": "GNSSNET.HU(H)",
            "gapsBigger": 0,
            "gapsLesser": 11,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "sId": "SPRN",
            "provider": "GNSSNET.HU(H)",
            "gapsBigger": 19,
            "gapsLesser": 550,
            "percentage": 98.22,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "321",
                "gEnd": "321"
              },
              {
                "gId": "2",
                "gBegin": "563",
                "gEnd": "563"
              },
              {
                "gId": "3",
                "gBegin": "580",
                "gEnd": "580"
              },
              {
                "gId": "4",
                "gBegin": "598",
                "gEnd": "598"
              },
              {
                "gId": "5",
                "gBegin": "607",
                "gEnd": "607"
              },
              {
                "gId": "6",
                "gBegin": "618",
                "gEnd": "618"
              },
              {
                "gId": "7",
                "gBegin": "619",
                "gEnd": "620"
              },
              {
                "gId": "8",
                "gBegin": "640",
                "gEnd": "640"
              },
              {
                "gId": "9",
                "gBegin": "692",
                "gEnd": "693"
              },
              {
                "gId": "10",
                "gBegin": "740",
                "gEnd": "740"
              },
              {
                "gId": "11",
                "gBegin": "839",
                "gEnd": "839"
              },
              {
                "gId": "12",
                "gBegin": "884",
                "gEnd": "884"
              },
              {
                "gId": "13",
                "gBegin": "884",
                "gEnd": "885"
              },
              {
                "gId": "14",
                "gBegin": "900",
                "gEnd": "900"
              },
              {
                "gId": "15",
                "gBegin": "916",
                "gEnd": "917"
              },
              {
                "gId": "16",
                "gBegin": "917",
                "gEnd": "917"
              },
              {
                "gId": "17",
                "gBegin": "926",
                "gEnd": "926"
              },
              {
                "gId": "18",
                "gBegin": "973",
                "gEnd": "973"
              },
              {
                "gId": "19",
                "gBegin": "987",
                "gEnd": "988"
              }
            ]
          },
          {
            "sId": "SARV",
            "provider": "GNSSNET.HU(H)",
            "gapsBigger": 0,
            "gapsLesser": 5,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "sId": "ZALA",
            "provider": "GNSSNET.HU(H)",
            "gapsBigger": 0,
            "gapsLesser": 6,
            "percentage": 99.99,
            "gaps": []
          }
        ]
      },
      "SIGNAL(SLO)": {
        "stations": [
          {
            "sId": "BODO",
            "provider": "SIGNAL(SLO)",
            "gapsBigger": 1,
            "gapsLesser": 0,
            "percentage": 99.88,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1091",
                "gEnd": "1093"
              }
            ]
          },
          {
            "sId": "BOVE",
            "provider": "SIGNAL(SLO)",
            "gapsBigger": 1,
            "gapsLesser": 0,
            "percentage": 99.88,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1091",
                "gEnd": "1093"
              }
            ]
          },
          {
            "sId": "MARI",
            "provider": "SIGNAL(SLO)",
            "gapsBigger": 1,
            "gapsLesser": 0,
            "percentage": 99.88,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1091",
                "gEnd": "1093"
              }
            ]
          },
          {
            "sId": "RADO",
            "provider": "SIGNAL(SLO)",
            "gapsBigger": 1,
            "gapsLesser": 0,
            "percentage": 99.88,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1091",
                "gEnd": "1093"
              }
            ]
          },
          {
            "sId": "SLOG",
            "provider": "SIGNAL(SLO)",
            "gapsBigger": 1,
            "gapsLesser": 0,
            "percentage": 99.88,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "1091",
                "gEnd": "1093"
              }
            ]
          }
        ]
      },
      "STPOS(I)": {
        "stations": [
          {
            "sId": "BRBZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "MABZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "STBZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "PRBZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "sId": "HELM",
            "provider": "STPOS(I)",
            "gapsBigger": 1,
            "gapsLesser": 6,
            "percentage": 99.93,
            "gaps": [
              {
                "gId": "1",
                "gBegin": "863",
                "gEnd": "863"
              }
            ]
          }
        ]
      }
    }
  }

  createBarChart = (station, gaps) => {
    const gapList = [];
    for (let i = 0; i < gaps.length; i++) {
      const gBegin = parseInt(gaps[i].gBegin);
      const gEnd = parseInt(gaps[i].gEnd);
      for (let j = gBegin; j <= (gEnd); j++) {
        gapList.push(j)
      }
    }
    console.log(station);
    console.log(gapList);
    return <Chart max={60 * 24} gaps={gapList} />
  }

  render() {

    const { classes } = this.props;
    const providerList = [];


    Object.keys(this.state.providers).forEach(providerId => {
      const stationList = [];
      for (let i = 0; i < this.state.providers[providerId].stations.length; i++) {
        let station = this.state.providers[providerId].stations[i];
        let stationData = {
          sId: station.sId,
          bigger: station.gapsBigger,
          lesser: station.gapsLesser,
          gaps: station.gaps,
          percentage: parseFloat(station.percentage).toFixed(2)
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
                  {stationList.map(n => {
                    const barChart = this.createBarChart(n.sId, n.gaps);
                    return (
                      <TableRow key={n.sId}>
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
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
      providerList.push(provider);
    });
    return (
      <div>
        {providerList}
      </div>
    );
  }
}


RinexAvailability.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RinexAvailability);