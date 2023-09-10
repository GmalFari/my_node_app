

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sourceData } from '../lib/source-data';
import { RandomColor } from '../components/randomColor';

const NewGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    
    
    const width = 2000;
    const height = 2000;

    const svg = d3.select(chartRef.current).append('svg').attr('width', width).attr('height', height);
    const simulation = d3
      .forceSimulation(sourceData.nodes)
      .force('link', d3.forceLink(sourceData.links).id((d) => d.id))
      .force('charge', d3.forceManyBody().strength(-30))
      .force('center', d3.forceCenter(width / 2, height / 2));

      
    const link = svg.selectAll('line').data(sourceData.links).enter().append('line').attr('stroke', 'gray').attr('stroke-width', 1);

    const node = svg.selectAll('.node').data(sourceData.nodes).enter().append('g').attr('class', 'node')      .style('position','relative').style('display', 'flex').style('align-items', 'center').style('justify-content', 'center')
    .style('position','relative').style('display', 'flex').style('align-items', 'center').style('justify-content', 'center');
    
    node
      .append('circle')
      .attr('r', 12)
      .attr('fill',`#252222bd` )

    node.each(function (d) {
      const el = d3.select(this);
      if (d.class) {
        const foreignObject = el.append('foreignObject').attr('width', 18).attr('height', 18);
        const foreignDiv = foreignObject.append('xhtml:div').style('position', 'absolute');
        const foreignIcon = foreignDiv.append('xhtml:i').attr('class', `fas ${d.class}`)
        .style('color',`${RandomColor()}`).style('font-size',"");
        ReactDOM.createPortal(<FontAwesomeIcon icon={d.icon} />, foreignIcon.node());
      }
    });

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });
  }, []);

  return <div ref={chartRef}></div>;
};

export default NewGraph;