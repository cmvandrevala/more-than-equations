var width = 430;
var height = 170;
var p1x = 150;
var p1y = 130;
var p2x = 270;
var p2y = 40;
var radius = 15;
var axisLength = 50;

var svg = d3.select('#dataviz_area')
  .style("width", width + 'px')
  .style("height", height + 'px');

svg.append("line")
  .style("stroke", "black")
  .attr("x1", p1x)
  .attr("y1", p1y)
  .attr("x2", p2x)
  .attr("y2", p2y);

svg.append("line")
  .attr("x1", p1x)
  .attr("y1", p1y)
  .attr("x2", p1x - 50)
  .attr("y2", p1y)
  .attr("stroke", "black")
  .attr("marker-end", "url(#arrow)")
  .attr("stroke-width", 2);

// x-axis
svg.append("line")
  .attr("x1", (p1x + p2x) / 2)
  .attr("y1", (p1y + p2y) / 2)
  .attr("x2", (p1x + p2x) / 2 + axisLength)
  .attr("y2", (p1y + p2y) / 2)
  .attr("stroke", "black")
  .attr("marker-end", "url(#arrow)")
  .attr("stroke-width", 2);

svg.append("text")
  .attr("x", (p1x + p2x) / 2 + axisLength + 10)
  .attr("y", (p1y + p2y) / 2 + 1)
  .text("x");

// y-axis
svg.append("line")
  .attr("x1", (p1x + p2x) / 2)
  .attr("y1", (p1y + p2y) / 2)
  .attr("x2", (p1x + p2x) / 2)
  .attr("y2", (p1y + p2y) / 2 - axisLength)
  .attr("stroke", "black")
  .attr("marker-end", "url(#arrow)")
  .attr("stroke-width", 2);

svg.append("text")
  .attr("x", (p1x + p2x) / 2 + 5)
  .attr("y", (p1y + p2y) / 2 - axisLength - 10)
  .text("y");

svg.append("text")
  .attr("x", p1x - 100)
  .attr("y", p1y + 5)
  .text("F = QE");

svg.append("circle")
  .attr("cx", p1x)
  .attr("cy", p1y)
  .attr("r", radius)
  .style("fill", "blue");

svg.append("line")
  .attr("x1", p2x)
  .attr("y1", p2y)
  .attr("x2", p2x + 50)
  .attr("y2", p2y)
  .attr("stroke", "black")
  .attr("marker-end", "url(#arrow)")
  .attr("stroke-width", 2);

svg.append("text")
  .attr("x", p2x + 60)
  .attr("y", p2y + 5)
  .text("F = QE");

svg.append("circle")
  .attr("cx", p2x)
  .attr("cy", p2y)
  .attr("r", radius)
  .style("fill", "red");

svg.append("text")
  .attr("x", p1x - 15)
  .attr("y", p1y - 25)
  .text("-Q");

svg.append("text")
  .attr("x", p2x - 15)
  .attr("y", p2y - 25)
  .text("+Q");

svg.append("text")
  .attr("x", width / 2)
  .attr("y", height - 20)
  .text("E");

svg.append("line")
  .attr("x1", 150)
  .attr("y1", height - 10)
  .attr("x2", width - 150)
  .attr("y2", height - 10)
  .attr("stroke", "black")
  .attr("marker-end", "url(#arrow)")
  .attr("stroke-width", 3);
