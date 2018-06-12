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

  return (
    <svg height={BAR_HEIGHT} width={BAR_WIDTH}>
      <rect
        fill={"#00ff00"}
        strokeWidth={0.0}
        width={BAR_WIDTH}
        height={BAR_HEIGHT}
      />
      <line
        x1={props.max / 2 * ratio} y1={0}
        x2={props.max / 2 * ratio} y2={BAR_HEIGHT}
        stroke={"#000000"}
        strokeWidth={ratio * STROKE_FIX}
      />
      <line
        x1={props.max / 4 * ratio} y1={0}
        x2={props.max / 4 * ratio} y2={BAR_HEIGHT}
        stroke={"#000000"}
        strokeWidth={ratio * STROKE_FIX}
      />
      <line
        x1={props.max / 4 * ratio * 3} y1={0}
        x2={props.max / 4 * ratio * 3} y2={BAR_HEIGHT}
        stroke={"#000000"}
        strokeWidth={ratio * STROKE_FIX}
      />
      {gapLines}
    </svg>
  )

}

export default RinexAvailabilityChart;