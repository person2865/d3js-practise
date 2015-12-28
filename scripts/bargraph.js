/*var containerData = {
    height: '500px',
    width: '500px',
    border: '1px solid black',
    margin: '5px',
    padding: '5px'
};

var container = d3.select('body')
        .append('svg')
        .attr('class', 'chart')
        .data(containerData)
        .enter();

container
    .attr('height', function(d) { return d.height; })
    .attr('width', function(d) { return d.width; })
    .style('border', function(d) { return d.border; })
    .style('margin', function(d) { return d.margin; })
    .style('padding', function(d) { return d.padding; });
*/


/*var barGraphData = [{
    size: 4,
    color: 'blue'
}, {
    size: 8,
    color: 'green'
}, {
    size: 15,
    color: 'red'
}, {
    size: 16,
    color: 'orange'
}, {
    size: 23,
    color: 'purple'
}, {
    size: 42,
    color: 'black'
}];

var barHeight = 20;
var maxWidth = containerData.width;

var barGroups = container.selectAll('g').data(barGraphData).enter().append('g');
*/
/*barGroups
    .attr('transform', function(d, i) { return 'translate(0, ' + i * 20 + ')'; })*/
//var bars = barsGroup.selectAll('rect').data(barGraphData).enter().append('rect');

/* Scaling */
/*var barSizeArr = (function() {
    var arr = [];
    barGraphData.forEach(function(i) {
        arr.push(i.size);
    })
    return arr;
} ());*/

//var myScale = d3.scale.linear().domain([0, d3.max(barSizeArr)]).range([0, maxWidth]);

/*bars
    .style('width', function(d) {
        //console.log(myScale(d.size));
        return myScale(d.size) + 'px';
    })
    .style('height', '20px')
    .attr('y', function(d, i) { return i * 20; })
    .attr('x', 0)
    .text(function(d) { return d.size; });
*/