var circlesData = [{
    'x_axis': 30,
    'y_axis': 30,
    'radius': 20,
    'color' : 'green'
}, {
    'x_axis': 60,
    'y_axis': 60,
    'radius': 20,
    'color' : 'blue'
}, {
    'x_axis': 90,
    'y_axis': 90,
    'radius': 20,
    'color' : 'red'
}];

var rectData = [{
    x: 300,
    y: 30,
    height: 50,
    width: 70,
    fill: 'yellow',
    stroke: 'red',
    'stroke-width': 2
}];

var polylineData = [{
    points: '110,50 150,50 150,70 200,70 200,100',
    stroke: 'blue',
    'stroke-width': 2,
    fill: 'none'
}];

var polygonData = [{
    points: '100,150 50,200 150,200',
    stroke: 'blue',
    'stroke-width': 2,
    fill: 'yellow'
}];

var ellipseData = [{
    cx: 300,
    cy: 150,
    rx: 100,
    ry: 50,
    fill: 'red',
    stroke: 'green',
    'stroke-width': 2
}];

var lineData = [{
    x1: 50,
    y1: 210,
    x2: 400,
    y2: 300,
    stroke: 'green',
    'stroke-width': 5
}];

var svgContainerData = [{
    height: 500,
    width: 500,
    style: 'border: 1px solid black; margin: 5px; padding: 5px'
},
{
    height: 500,
    width: 500,
    style: 'border: 1px solid black; margin: 5px; padding: 5px'
}];

var svgContainer = d3.select('body').selectAll('svg').data(svgContainerData).enter().append('svg');

svgContainer
    .attr('width', function(d) { return d.width; })
    .attr('height', function(d) { return d.height; })
    .attr('style', function(d) { return d.style; });

var circles = svgContainer.selectAll('circle').data(circlesData).enter().append('circle');
var rectangles = svgContainer.selectAll('rect').data(rectData).enter().append('rect');
var polylines = svgContainer.selectAll('polyline').data(polylineData).enter().append('polyline');
var polygons = svgContainer.selectAll('polygon').data(polygonData).enter().append('polygon');
var ellipses = svgContainer.selectAll('ellipse').data(ellipseData).enter().append('ellipse');
var lines = svgContainer.selectAll('line').data(lineData).enter().append('line');

circles
    .attr('cx', function(d) { return d.x_axis; })
    .attr('cy', function(d) { return d.y_axis; })
    .attr('r', function(d) { return d.radius; })
    .attr('fill', function(d) { return d.color; });

rectangles
    .attr('x', function(d) { return d.x; })
    .attr('y', function(d) { return d.y; })
    .attr('height', function(d) { return d.height; })
    .attr('width', function(d) { return d.width; })
    .attr('stroke', function(d) { return d.stroke; })
    .attr('stroke-width', function(d) { return d['stroke-width']; })
    .attr('fill', function(d) { return d.fill; });

polylines
    .attr('stroke', function(d) { return d.stroke; })
    .attr('stroke-width', function(d) { return d['stroke-width']; })
    .attr('points', function(d) { return d.points; })
    .attr('fill', function(d) { return d.fill; });

polygons
    .attr('stroke', function(d) { return d.stroke; })
    .attr('stroke-width', function(d) { return d['stroke-width']; })
    .attr('fill', function(d) { return d.fill; })
    .attr('points', function(d) { return d.points; });

ellipses
    .attr('cx', function(d) { return d.cx; })
    .attr('cy', function(d) { return d.cy; })
    .attr('rx', function(d) { return d.rx; })
    .attr('ry', function(d) { return d.ry; })
    .attr('stroke', function(d) { return d.stroke; })
    .attr('stroke-width', function(d) { return d['stroke-width']; })
    .attr('fill', function(d) { return d.fill; });

lines
    .attr('x1', function(d) { return d.x1; })
    .attr('y1', function(d) { return d.y1; })
    .attr('x2', function(d) { return d.x2; })
    .attr('y2', function(d) { return d.y2; })
    .attr('stroke', function(d) { return d.stroke; })
    .attr('stroke-width', function(d) { return d['stroke-width']; });


var pathCurveStr = 'M 200,400 L 400,400 ' + 
                    'M 200,400 ' +
                    'C 200,300 300,300 300,400' + 
                    'S 400,500 400,400';

var pathCurveStr2 = 'M 200,400 ' +
                    'C 200,300 300,300 300,400' + 
                    'S 400,500 400,400' + 
                    'Z';


pathData = [{
    stroke: 'blue',
    'stroke-width': 3,
    pathD: pathCurveStr2,
    fill: 'none'
}];



var paths = svgContainer.selectAll('path').data(pathData).enter().append('path');

paths
    .attr('stroke', function(d) { return d.stroke; })
    .attr('stroke-width', function(d) { return d['stroke-width']; })
    .attr('d', function(d) { return d.pathD; })
    .attr('fill', function(d) { return d.fill; });