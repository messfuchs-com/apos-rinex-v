import React from 'react';

const BAR_HEIGHT = 20;
const BAR_WIDTH = 480;
const STROKE_SCALE = 5;
const STROKE_FIX = 2;


const RinexAvailabilityChart = (props) => {

  const ratio = BAR_WIDTH / props.max;
  // console.log("ratio: " + ratio);
  let gapLines;
  if (props.gaps) {
    gapLines = props.gaps.map((gap, idx) => {
      // console.log(gap)
      let xTick = gap * ratio;
      // console.log(gap + " => " + xTick);
      return (
        <line
          key={idx}
          x1={xTick} y1={0}
          x2={xTick} y2={BAR_HEIGHT}
          stroke={"#ff0000"}
          strokeWidth={ratio * STROKE_SCALE}
        />
      )
    })
  }

  const hourLines = [];
  for (let i=1; i<24; i++) {
    let strokeWidthScale = i % 3 ? 0.3 : 1;
    strokeWidthScale =  i % 12 ? strokeWidthScale : 2;

    hourLines.push(
      <line key={i}
        x1={BAR_WIDTH/24*i} y1={0}
        x2={BAR_WIDTH/24*i} y2={BAR_HEIGHT}
        stroke={"#000000"}
        strokeWidth={ratio * STROKE_FIX * strokeWidthScale}
      />
    );
  }

  return (
    <svg height={BAR_HEIGHT} width={BAR_WIDTH}>
      <rect
        fill={"#00ff00"}
        strokeWidth={0.0}
        width={BAR_WIDTH}
        height={BAR_HEIGHT}
      />
      {hourLines}
      {gapLines}
    </svg>
  )

}

export default RinexAvailabilityChart;