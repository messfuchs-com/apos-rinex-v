import React from 'react';
import PropTypes from 'prop-types';

const BAR_HEIGHT = 20;
const BAR_WIDTH = 480;
const STROKE_SCALE = 5;
const STROKE_FIX = 2;


const RinexAvailabilityChart = (props) => {
  const { max, gaps } = props;
  const ratio = BAR_WIDTH / max;
  let gapLines;
  if (gaps) {
    gapLines = gaps.map((gap, idx) => {
      // console.log(gap)
      const xTick = gap * ratio;
      // console.log(gap + " => " + xTick);
      return (
        <line
          key={idx}
          x1={xTick}
          y1={0}
          x2={xTick}
          y2={BAR_HEIGHT}
          stroke="#ff0000"
          strokeWidth={ratio * STROKE_SCALE}
        />
      );
    });
  }

  const hourLines = [];
  for (let i = 1; i < 24; i++) {
    let strokeWidthScale = i % 3 ? 0.3 : 1;
    strokeWidthScale = i % 12 ? strokeWidthScale : 2;

    hourLines.push(
      <line
        key={i}
        x1={BAR_WIDTH / 24 * i}
        y1={0}
        x2={BAR_WIDTH / 24 * i}
        y2={BAR_HEIGHT}
        stroke="#000000"
        strokeWidth={ratio * STROKE_FIX * strokeWidthScale}
      />,
    );
  }

  return (
    <svg height={BAR_HEIGHT} width={BAR_WIDTH}>
      <rect
        fill="#00ff00"
        strokeWidth={0.0}
        width={BAR_WIDTH}
        height={BAR_HEIGHT}
      />
      {hourLines}
      {gapLines}
    </svg>
  );
};

RinexAvailabilityChart.propTypes = {
  max: PropTypes.number,
  gaps: PropTypes.arrayOf(Object),
};

RinexAvailabilityChart.defaultProps = {
  max: 100,
  gaps: [],
};

export default RinexAvailabilityChart;
