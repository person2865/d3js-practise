/*********** Creating the svg element **********/

var svgContainerData = [{
    height: 500,
    width: 500,
    style: 'border: 1px solid black; margin: 5px; padding: 5px'
}];

var svgContainer = d3.select('body').selectAll('svg').data(svgContainerData).enter().append('svg');

svgContainer
    .attr('width', function(d) { return d.width; })
    .attr('height', function(d) { return d.height; })
    .attr('style', function(d) { return d.style; });


/************* Creating circles **************/
/*var circleData = [
    { 'cx': 20, 'cy': 20, 'radius': 20, 'color' : 'violet' },
    { 'cx': 70, 'cy': 70, 'radius': 20, 'color' : 'purple' },
    { 'cx': 120, 'cy': 120, 'radius': 20, 'color' : 'pink' }
];
var circles = svgContainer.selectAll('circle').data(circleData).enter().append('circle');
var circleAttrs = circles.attr('cx', function(d) { return d.cx; })
                        .attr('cy', function(d) { return d.cy; })
                        .attr('r', function(d) { return d.radius; })
                        .style('fill', function(d) { return d.color; });

var texts = svgContainer.selectAll('text').data(circleData).enter().append('text');
var textAttr = texts.attr('x', function(d) { return d.cx; })
                 .attr('y', function(d) { return d.cy; })
                 .text( function (d) { return '( ' + d.cx + ', ' + d.cy +' )'; })
                 .attr('font-family', 'sans-serif')
                 .attr('font-size', '12px')
                 .attr('fill', 'red');*/



/***** How to create a grid: experiment ******/
/*var gridData = [],
    division = 20,
    maxHeight = svgContainerData[0].height,
    maxWidth = svgContainerData[0].width,
    xCounter = 0,
    yCounter = 0,
    gridLineWidth = 0.05,
    gridLineColor = 'black';


while(xCounter <= maxWidth && yCounter <= maxHeight) {
    gridData.push({
        x1: xCounter,
        y1: 0,
        x2: xCounter,
        y2: maxHeight,
        color: gridLineColor,
        width: gridLineWidth
    }, {
        x1: 0,
        y1: yCounter,
        x2: maxWidth,
        y2: yCounter,
        color: gridLineColor,
        width: gridLineWidth
    });
    xCounter = xCounter + division;
    yCounter = yCounter + division;
}

//console.log(gridData);

var gridLines = svgContainer.selectAll('line').data(gridData).enter().append('line');
gridLines
    .attr('x1', function(d){return d.x1;})
    .attr('y1', function(d){return d.y1;})
    .attr('x2', function(d){return d.x2;})
    .attr('y2', function(d){return d.y2;})
    .attr('stroke', function(d){return d.color;})
    .attr('stroke-width', function(d){return d.width;});*/



/********* Creating Axis *************/
/*var axisScale = d3.scale.linear().domain([0, 500]).range([0, 500]);

var xAxis = d3.svg.axis().scale(axisScale);

var xAxisGroup = svgContainer.append('g').call(xAxis);*/