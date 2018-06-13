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
      "BEV(A)": {
        "stations": [
          {
            "detail": [],
            "sId": "AMST",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 3,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "DIEN",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 1,
            "percentage": 99.98,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "DLBG",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "DOER",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "FLDB",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "FLDK",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "FRST",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "GMUE",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "GRAZ",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "HBLT",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "HKBL",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "HORN",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "INBK",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "KOPS",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "KRBG",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "KTZB",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "LECH",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "MSTB",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "MUEN",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "OBWT",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "PATK",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "PFAN",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "POEL",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "RIED",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "ROHR",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "SBGZ",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "SILL",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 2,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "SPDR",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "STPO",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "TAMS",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "TRFB",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 2,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "VKLB",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "VLCH",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "VLKM",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "WIEN",
            "provider": "BEV(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "WIND",
            "provider": "BEV(A)",
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
            "detail": [],
            "sId": "KOET",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "LANK",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "KLAG",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "BLEI",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "LEON",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "TREI",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 8,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "LIES",
            "provider": "KELAG(A)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
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
            "detail": [],
            "sId": "ARDE",
            "provider": "AGNES(CH)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "DAVO",
                "duranceFrom": "00:36:39",
                "duranceUntil": "00:38:19",
                "duranceSec": 100,
                "duranceHour": "00:01:40"
              }
            ],
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
            "detail": [
              {
                "sId": "SARG",
                "duranceFrom": "17:42:25",
                "duranceUntil": "17:43:04",
                "duranceSec": 39,
                "duranceHour": "00:00:39"
              },
              {
                "sId": "SARG",
                "duranceFrom": "17:55:28",
                "duranceUntil": "17:56:17",
                "duranceSec": 49,
                "duranceHour": "00:00:49"
              },
              {
                "sId": "SARG",
                "duranceFrom": "18:00:45",
                "duranceUntil": "18:01:26",
                "duranceSec": 41,
                "duranceHour": "00:00:41"
              }
            ],
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
            "detail": [],
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
            "detail": [],
            "sId": "AINR",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "ASCH",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "BADT",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "FNST",
                "duranceFrom": "21:06:03",
                "duranceUntil": "21:07:06",
                "duranceSec": 63,
                "duranceHour": "00:01:03"
              },
              {
                "sId": "FNST",
                "duranceFrom": "21:16:24",
                "duranceUntil": "21:17:28",
                "duranceSec": 64,
                "duranceHour": "00:01:04"
              },
              {
                "sId": "FNST",
                "duranceFrom": "22:39:53",
                "duranceUntil": "22:41:49",
                "duranceSec": 116,
                "duranceHour": "00:01:56"
              }
            ],
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
            "detail": [],
            "sId": "GRMP",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "LIND",
                "duranceFrom": "23:43:29",
                "duranceUntil": "23:46:47",
                "duranceSec": 198,
                "duranceHour": "00:03:18"
              }
            ],
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
            "detail": [],
            "sId": "PASS",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "PFRK",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "ROSE",
                "duranceFrom": "23:43:29",
                "duranceUntil": "23:46:36",
                "duranceSec": 187,
                "duranceHour": "00:03:07"
              },
              {
                "sId": "ROSE",
                "duranceFrom": "23:50:00",
                "duranceUntil": "23:50:20",
                "duranceSec": 20,
                "duranceHour": "00:00:20"
              }
            ],
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
            "detail": [],
            "sId": "TRST",
            "provider": "SAPOS-BY(D)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "WRTH",
                "duranceFrom": "02:55:02",
                "duranceUntil": "02:56:04",
                "duranceSec": 62,
                "duranceHour": "00:01:02"
              },
              {
                "sId": "WRTH",
                "duranceFrom": "02:56:35",
                "duranceUntil": "02:57:37",
                "duranceSec": 62,
                "duranceHour": "00:01:02"
              },
              {
                "sId": "WRTH",
                "duranceFrom": "08:53:57",
                "duranceUntil": "08:55:01",
                "duranceSec": 64,
                "duranceHour": "00:01:04"
              },
              {
                "sId": "WRTH",
                "duranceFrom": "21:56:15",
                "duranceUntil": "21:57:31",
                "duranceSec": 76,
                "duranceHour": "00:01:16"
              },
              {
                "sId": "WRTH",
                "duranceFrom": "21:59:45",
                "duranceUntil": "22:00:02",
                "duranceSec": 17,
                "duranceHour": "00:00:17"
              },
              {
                "sId": "WRTH",
                "duranceFrom": "22:00:19",
                "duranceUntil": "22:01:23",
                "duranceSec": 64,
                "duranceHour": "00:01:04"
              }
            ],
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
            "detail": [
              {
                "sId": "CBUD",
                "duranceFrom": "12:18:26",
                "duranceUntil": "12:18:43",
                "duranceSec": 17,
                "duranceHour": "00:00:17"
              }
            ],
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
            "detail": [],
            "sId": "CJHR",
            "provider": "CZEPOS(CZ)",
            "gapsBigger": 0,
            "gapsLesser": 2,
            "percentage": 99.98,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "CHOD",
            "provider": "CZEPOS(CZ)",
            "gapsBigger": 0,
            "gapsLesser": 4,
            "percentage": 99.98,
            "gaps": []
          },
          {
            "detail": [],
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
            "detail": [],
            "sId": "SKBR",
            "provider": "SKPOS(SK)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
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
            "detail": [],
            "sId": "CSOR",
            "provider": "GNSSNET.HU(H)",
            "gapsBigger": 0,
            "gapsLesser": 11,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "SPRN",
                "duranceFrom": "05:20:50",
                "duranceUntil": "05:21:10",
                "duranceSec": 20,
                "duranceHour": "00:00:20"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "09:22:32",
                "duranceUntil": "09:23:13",
                "duranceSec": 41,
                "duranceHour": "00:00:41"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "09:39:31",
                "duranceUntil": "09:40:12",
                "duranceSec": 41,
                "duranceHour": "00:00:41"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "09:57:51",
                "duranceUntil": "09:58:10",
                "duranceSec": 19,
                "duranceHour": "00:00:19"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "10:06:41",
                "duranceUntil": "10:07:21",
                "duranceSec": 40,
                "duranceHour": "00:00:40"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "10:17:49",
                "duranceUntil": "10:18:28",
                "duranceSec": 39,
                "duranceHour": "00:00:39"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "10:19:06",
                "duranceUntil": "10:19:57",
                "duranceSec": 51,
                "duranceHour": "00:00:51"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "10:39:58",
                "duranceUntil": "10:40:14",
                "duranceSec": 16,
                "duranceHour": "00:00:16"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "11:32:16",
                "duranceUntil": "11:32:39",
                "duranceSec": 23,
                "duranceHour": "00:00:23"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "12:19:38",
                "duranceUntil": "12:19:57",
                "duranceSec": 19,
                "duranceHour": "00:00:19"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "13:58:57",
                "duranceUntil": "13:59:15",
                "duranceSec": 18,
                "duranceHour": "00:00:18"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "14:43:48",
                "duranceUntil": "14:44:06",
                "duranceSec": 18,
                "duranceHour": "00:00:18"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "14:44:15",
                "duranceUntil": "14:44:33",
                "duranceSec": 18,
                "duranceHour": "00:00:18"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "14:59:36",
                "duranceUntil": "14:59:54",
                "duranceSec": 18,
                "duranceHour": "00:00:18"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "15:15:37",
                "duranceUntil": "15:16:47",
                "duranceSec": 70,
                "duranceHour": "00:01:10"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "15:17:05",
                "duranceUntil": "15:17:22",
                "duranceSec": 17,
                "duranceHour": "00:00:17"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "15:25:57",
                "duranceUntil": "15:26:15",
                "duranceSec": 18,
                "duranceHour": "00:00:18"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "16:12:45",
                "duranceUntil": "16:13:01",
                "duranceSec": 16,
                "duranceHour": "00:00:16"
              },
              {
                "sId": "SPRN",
                "duranceFrom": "16:27:21",
                "duranceUntil": "16:27:39",
                "duranceSec": 18,
                "duranceHour": "00:00:18"
              }
            ],
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
            "detail": [],
            "sId": "SARV",
            "provider": "GNSSNET.HU(H)",
            "gapsBigger": 0,
            "gapsLesser": 5,
            "percentage": 99.99,
            "gaps": []
          },
          {
            "detail": [],
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
            "detail": [
              {
                "sId": "BODO",
                "duranceFrom": "18:10:58",
                "duranceUntil": "18:12:39",
                "duranceSec": 101,
                "duranceHour": "00:01:41"
              }
            ],
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
            "detail": [
              {
                "sId": "BOVE",
                "duranceFrom": "18:10:58",
                "duranceUntil": "18:12:38",
                "duranceSec": 100,
                "duranceHour": "00:01:40"
              }
            ],
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
            "detail": [
              {
                "sId": "MARI",
                "duranceFrom": "18:10:58",
                "duranceUntil": "18:12:38",
                "duranceSec": 100,
                "duranceHour": "00:01:40"
              }
            ],
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
            "detail": [
              {
                "sId": "RADO",
                "duranceFrom": "18:10:58",
                "duranceUntil": "18:12:39",
                "duranceSec": 101,
                "duranceHour": "00:01:41"
              }
            ],
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
            "detail": [
              {
                "sId": "SLOG",
                "duranceFrom": "18:10:58",
                "duranceUntil": "18:12:38",
                "duranceSec": 100,
                "duranceHour": "00:01:40"
              }
            ],
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
            "detail": [],
            "sId": "BRBZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "MABZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "STBZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [],
            "sId": "PRBZ",
            "provider": "STPOS(I)",
            "gapsBigger": 0,
            "gapsLesser": 0,
            "percentage": 100,
            "gaps": []
          },
          {
            "detail": [
              {
                "sId": "HELM",
                "duranceFrom": "14:22:43",
                "duranceUntil": "14:22:59",
                "duranceSec": 16,
                "duranceHour": "00:00:16"
              }
            ],
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
                  {detailList.map(n => {
                    return (
                      <TableRow key={n.sId}>
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