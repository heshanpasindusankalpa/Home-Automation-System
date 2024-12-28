import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default function TemperatureGraph({ data }) {
  const chartData = {
    labels: data.map((point) => point.time),
    datasets: [
      {
        label: 'Temperature',
        data: data.map((point) => point.value),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}

TemperatureGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

TemperatureGraph.defaultProps = {
  data: [],
};
