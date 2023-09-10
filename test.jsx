i need to add this to nodes icon       <i className="fas fa-home"></i>
    import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

const GraphNetwork = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      nodes: [
        { id: 'node1', icon:<home/> },
        { id: 'node2', icon: ''},
        { id: 'node3', icon: 'Custom Icon' },
        { id: 'node4', icon: 'Another Icon' },
      ],
      links: [
        { source: 'node1', target: 'node2' },
        { source: 'node1', target: 'node3' },
        { source: 'node2', target: 'node4' },
      ],
    };

    const width = 500;
    const height = 300;

    const svg = d3.select(chartRef.current).append('svg').attr('width', width).attr('height', height);

    const simulation = d3
      .forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id((d) => d.id))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.selectAll('line').data(data.links).enter().append('line').attr('stroke', 'gray').attr('stroke-width', 1);

    const node = svg.selectAll('.node').data(data.nodes).enter().append('g').attr('class', 'node');

    node.append('circle').attr('r', 10).attr('fill', 'teal');

    node.each(function (d) {
      const el = d3.select(this);
      if (React.isValidElement(d.icon)) {
        const foreignObject = el.append('foreignObject').attr('width', 18).attr('height', 18);
        const foreignDiv = foreignObject.append('xhtml:div');
        ReactDOM.createPortal(d.icon, foreignDiv.node());
      } else {
        el.append('text').text(d.icon);
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

export default GraphNetwork;