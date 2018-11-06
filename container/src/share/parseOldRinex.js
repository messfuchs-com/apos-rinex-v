
export default function parseOldRinex ( oldRinexHtml ) {

  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', oldRinexHtml, false);

    // fetch(oldRinexHtml).then(response => {
    //   console.log('Fetch Response');
    //   console.log(response.text());
    // }).then(text => console.log(text));

    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        var rinexData = {
          providers: {}
        };
        let provider = "???(?)";
        let stationName;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(req.responseText, "text/html");
        // var head = xmlDoc.getElementsByTagName("head");
        // if ( !head[0].innerText || head[0].innerText.indexOf('APOS') < 0) {
        //   reject('File is not valid');
        // }
        var allGaps = {};
        var gapList = [];
        var stations = xmlDoc.getElementsByTagName("tr");
        // Get Table Row
        for (var i = 0; i < stations.length; i++) {

          var tableColumns = stations[i].children;

          if (tableColumns[0].hasAttribute("colspan") && tableColumns[0].getAttribute("colspan") === "6") {
            provider = tableColumns[0].children[0].children[0].getAttribute("name");
            // console.log("new Provider: " + provider);
          }

          if (tableColumns.length <= 4 && tableColumns.length >= 3) {
              
            if (tableColumns.length > 3 && tableColumns[0].children[0].innerHTML === "Station") continue;
            if (tableColumns.length === 4) {
              stationName = tableColumns[0].children[0].innerHTML.replace(/\ /g, '').replace(/\n/g, '');
            }

            if (!(stationName in allGaps)) {
              allGaps[stationName] = {};
            }

            if (!('detail' in allGaps[stationName])) {
              allGaps[stationName]['detail'] = [];
            }

            var duranceHour, duranceSec, timeWindow;

            switch(tableColumns.length) {
              case 4:
                timeWindow = tableColumns[1].innerHTML;
                duranceSec = parseInt(tableColumns[2].innerHTML, 0);
                duranceHour = tableColumns[3].innerHTML;
                break;
              case 3:
                timeWindow = tableColumns[0].innerHTML;
                duranceSec = parseInt(tableColumns[1].innerHTML, 0);
                duranceHour = tableColumns[2].innerHTML;
                break;	
              default:
                console.log('You should not be here!');
            }
            timeWindow = timeWindow.replace(/ /g, '').replace(/\n/g, '').replace('-', ' ').split(' ');
            var duranceFrom = timeWindow[0];
            var duranceUntil = timeWindow[1];

            allGaps[stationName].detail.push(
              {
                sId: stationName,
                duranceFrom: duranceFrom,
                duranceUntil: duranceUntil,
                duranceSec: duranceSec,
                duranceHour: duranceHour
              }
            )
          }

          if (tableColumns.length < 6) continue;

          var tempGaps = {};
          stationName = tableColumns[0].innerText;
          var stationProvider = provider;
          var stationGapsBigger = parseInt(tableColumns[2].innerText, 0);
          var stationGapsLesser = parseInt(tableColumns[3].innerText, 0);
          var stationPercentage = parseFloat(tableColumns[5].innerText.replace('%s', '').replace(",", "."));
          if (stationName.length > 4) continue;
          var params = stations[i].getElementsByTagName("param");
          var numberOfGaps;
          if (!(stationName in allGaps)) {
            allGaps[stationName] = {};
          }
          if (!('detail' in allGaps[stationName])) {
            allGaps[stationName].detail = [];
          }
          allGaps[stationName]['sId'] = stationName;
          allGaps[stationName]['provider'] = stationProvider;
          allGaps[stationName]['gapsBigger'] = stationGapsBigger;
          allGaps[stationName]['gapsLesser'] = stationGapsLesser;
          allGaps[stationName]['percentage'] = stationPercentage;
          if (!('gaps' in allGaps[stationName])) {
            allGaps[stationName]['gaps'] = [];
          }

          for (var j = 0; j < params.length; j++) {
              var gapId, gapValue;
            if (params[j].name === 'ngaps') {
              numberOfGaps = parseInt(params[j].value, 0);
              allGaps[stationName].nagps = numberOfGaps;
              }
              if (params[j].name.startsWith('gapbegin')) {
                gapId = params[j].name.replace("gapbegin", "");
                gapValue = params[j].value;
                if (!(gapId in tempGaps)) {
                  tempGaps[gapId] = {};
                };
                tempGaps[gapId].gId = gapId;
                tempGaps[gapId].gBegin = gapValue;

              }
              if (params[j].name.startsWith('gapend')) {
                gapId = params[j].name.replace("gapend", "");
                gapValue = params[j].value;
                tempGaps[gapId].gEnd = gapValue;
              }
            }

            Object.keys(tempGaps).forEach(gap => {
              allGaps[stationName]['gaps'].push(tempGaps[gap]);
            })
          }

          Object.keys(allGaps).forEach(gap => {
            provider = allGaps[gap].provider;
            if (!(provider in rinexData.providers)) {
              rinexData.providers[provider] = {
                stations: []
              };
            }
            rinexData.providers[provider]['stations'].push(allGaps[gap]);
            gapList.push(allGaps[gap]);
          })

          console.log(rinexData);

          if (rinexData.providers.length === 0) {
            reject(Error('No Data parsed'));
          }          
          resolve(rinexData);
        }
        else {
          console.log('Wrong Status Code');
          reject(Error(req.statusText));
        }
    }

    // Handle network errors
    req.onerror = function() {
      reject(Error('Network Error'));
    };

    // Make the request
    req.send();

  })
}
