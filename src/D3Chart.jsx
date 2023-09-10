import React, { useEffect, useRef } from 'react';import * as d3 from 'd3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSchool } from '@fortawesome/free-solid-svg-icons';
const D3Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [10, 20, 30, 40, 50];

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', 500)
      .attr('height', 300);
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => 300 - d * 5)
      .attr('width', 65)
      .attr('height', (d) => d * 5)
      .attr('fill', 'teal');
  }, []);

  return (

    <div ref={chartRef}></div>
    )
};

export default D3Chart;

