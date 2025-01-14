/* eslint-disable import/prefer-default-export */
import { select } from "d3-selection";
import { selectAll } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisLeft } from "d3-axis";
import { axisBottom } from "d3-axis";
import { scaleBand } from "d3-scale";
import * as d3Line from "d3-shape";
// import { line } from "d3-shape";
import * as d3 from "d3";
import { transition } from "d3-transition";
import { scaleOrdinal } from "d3-scale";
import { curveBasis } from "d3-shape";

//IMPORTING FOR SCATTER GRAPH
import { csv, extent, max } from "d3";

window.onload = function () {
  // document.getElementById("graph1");
  // document.getElementsByTagName("svg");
  // document.getElementById("graph").innerHTML = "";
  document.getElementByTagName("svg").empty();
};
window.onbeforeunload = function () {
  // console.log("CALL CALL CALL");
};
let script = {
  name: "BarCharts",
  allData: [],
  barData: [],
  svgWidth: window.innerWidth,
  max: 0,
  count: 0,
  pie_data: [
    { platform: "Android", percentage: 40.11 },
    { platform: "Windows", percentage: 36.69 },
    { platform: "iOS", percentage: 13.06 },
  ],
};

//GRAPH 1
class scatterplot {
  async scatterGraph(data) {
  //  console.log(getdata.topicData)
    //   const scatterPlot = (selection, props) => {
    //     const {
    //       xValue,
    //       yValue,
    //       margin,
    //       width,
    //       height,
    //       data
    //     } = props;
    //     // console.log("Radius is",circleRadius)
    //     console.log(data)
    //     const innerWidth = script.svgWidth - margin.left - margin.right;
    //     const innerHeight = 550 - margin.top - margin.bottom;

    //     // const xScale = scaleBand().domain(data.map((d) => d.name)).range([0, innerWidth])
    //     const xScale = scaleLinear()
    //       .domain(extent(data, xValue))
    //       // .domain([0, Math.max(...data.map((o) => o.horsepower))])
    //       .range([0, innerWidth]).nice()
    //       // .domain(extent(data, xValue))
    //       // .range([0, innerWidth])
    //       // .nice();

    //     const yScale = scaleBand().domain(data.map((d) => d.name)).range([innerHeight, 0]),

    //       yScale1 = scaleLinear().domain([0, 8]).range([0, innerHeight]).nice(),

    //       y_axis = axisLeft().scale(yScale1);
    //         // const yScale = scaleLinear();Q
    //     // yScale.domain(extent(data, yValue));
    //     // yScale.range([innerHeight, 0]);
    //     // yScale.nice();

    //        const x_axis = axisBottom(xScale),
    //          xAxisTranslate =500;

    //      const xGridLine = axisBottom(xScale)
    //       .scale(xScale)
    //       .tickSize(500, 0, 0)
    //        .tickFormat("");

    //         var yGridLine = axisLeft(yScale1)
    //           .scale(yScale1)

    //           // .tickPadding(5)
    //           .tickSize(-innerWidth)

    //           .tickFormat("");

    //     let g0 = svg_1
    //       .append("g")
    //       .attr("transform", "translate(" + 30 + "," + 20 + ")");

    // svg_1.append("g")
    //       .attr("class", "y axis")
    //       .attr("transform", "translate(25,0)")
    //   // .call(y_axis)

    //   // svg_1.select(".x.axis").call(x_axis);
    //   //   svg_1.select(".x.axis").remove();

    // svg_1
    //       .append("g")
    //       .attr("class", "x axis")
    //       .attr("transform", "translate(20," + xAxisTranslate + ")")
    //       // .call(x_axis)

    //         svg_1
    //       .append("g")
    //       .classed("gridLine", true)
    //       .attr("transform", "translate(25,0)")
    //       .style("color", "grey")
    //       .attr("opacity", "0.5")
    //       // .call(yGridLine);

    //     svg_1
    //       .append("g")
    //       .classed("gridLine", true)
    //       .attr("transform", "translate(25,0)")
    //       .style("color", "grey")
    //       .attr("opacity", "0.5")
    //       // .call(xGridLine);

    //     const circles = g0
    //       .selectAll('circle').data(data);
    //     circles
    //       .enter().append('circle')
    //       .attr('cx', innerWidth / 2)
    //       .attr('cy', innerHeight / 2)
    //       .attr('r', function (d) {
    //         // console.log("i values", circleRadius.cylinders)
    //         return Math.exp(d.horsepower / 100);
    //       })
    //       .attr("fill", function (circleRadius) { return circleRadius.horsepower <= 100 ? '#BCCBB1' : '#8676FF' })
    //       .attr("opacity", 0.7).on("mouseover", mouseover)
    //       .on("mousemove", function () {
    //           Tooltip
    //             .style("top", event.pageY - 10 + "px")
    //             .style("left", event.pageX + 10 + "px");
    //         })
    //       .on("mouseleave", mouseleave);

    //   svg_1.selectAll("circle")
    //   .transition()
    //   .duration(2000)
    // .delay((d, i) => i * 10)
    //         .attr('cy', d => yScale(yValue(d)))
    //         .attr('cx', d => xScale(xValue(d)))
    //         .attr('r', function (circleRadius) {
    //           // console.log("i values", circleRadius.cylinders)
    //   return 5*(Math.exp(circleRadius.horsepower /100));
    //         })
    //   };
    
    /*
    const svg_1 = select("#graph1")
      .append("svg")
      .attr("viewBox", `0 0 ${script.svgWidth + 50} 550`)
      .style("background-color", "red");
    let g0 = svg_1
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 0 + ")");

 
    // create a tooltip
    
      var Tooltip = select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    // Three function that change the tooltip when user hover / move / leave a cell
    let mouseover = function (d) {
      Tooltip.style("opacity", 1)
        .style("visibility", "visible")
        .html("The exact value of<br>this cell is: " + d.horsepower)
        .style("left", event.pageX + 70 + "px")
        .style("top", event.pageY + "px");
      select(this)
        .attr("r", function (circleRadius) {
          // console.log("i values", circleRadius.cylinders)
          return 7 * Math.exp(circleRadius.horsepower / 100);
        })
        .style("stroke", function (circleRadius) {
          return circleRadius.horsepower <= 100 ? "#7BCCB5" : "blue";
        })
        .style("stroke-width", 10)
        .style("opacity", 0.3);
    };
    let mousemove = function (d) {
      Tooltip.html("The exact value of<br>this cell is: " + d.horsepower)
        .style("left", event.pageX + 70 + "px")
        .style("top", event.pageY + "px");
    };
    let mouseleave = function (d) {
      Tooltip.style("opacity", 0);
      select(this)
        .attr("r", function (circleRadius) {
          // console.log("i values", circleRadius.cylinders)
          return 5 * Math.exp(circleRadius.horsepower / 100);
        })
        .style("stroke", "none")
        .style("opacity", 0.8);
    };

    let response2 = await fetch(
      "https://run.mocky.io/v3/35effb46-6d36-4026-9695-e573f6c90248"
    );
    data = await response2.json();
    data = data.slice(0, 25);

        const xValue1 = function (circleRadius) {
        return circleRadius.horsepower;
      },
      yValue1 = function (circleRadius) {
        return circleRadius.name;
      };

    const xScale1 = scaleLinear()
      .domain(extent(data, xValue1))
      // .domain([0, Math.max(...data.map((o) => o.horsepower))])
      .range([0, innerWidth]);

    const yScale2 = scaleBand()
      .domain(data.map((d) => d.name))
      .range([innerHeight, 0]);
    



    let sim = d3.forceSimulation(data);
    sim.force("collision", d3.forceCollide(function (d) {
          // console.log("i values", circleRadius.cylinders)
          return Math.exp(d.horsepower / 100);
        })); // Repulsion force
    // .attr('cy', d => yScale(yValue(d)))
    // .attr('cx', d => xScale(xValue(d)))
    sim.force(
      "x_force",
      d3.forceX((d) => d.horsepower)
    ); // Each point attacted to its center x and y
    sim.force(
      "y_force",
      d3.forceY((d) => d.mpg)
    );
    sim.on("tick", render); // Redraws scatterplot at every simulation "tick"
    // sim.stop(); 
     // render();
     
     
    
    function render() {
    
      const circles = svg_1.selectAll("circle").data(data);
      circles
        .enter()
        .append("circle")
        .attr("cy", (d) => d.mpg)
        .attr("cx", (d) => d.horsepower)
        .attr("r", function (d) {
          // console.log("i values", circleRadius.cylinders)
          return 5 * Math.exp(d.horsepower / 100);
        })
        .attr("fill", function (circleRadius) {
          return circleRadius.horsepower <= 100 ? "#BCCBB1" : "#8676FF";
        })
        .attr("opacity", 0.7)
        .on("mouseover", mouseover)
        .on("mousemove", function () {
          Tooltip.style("top", event.pageY - 10 + "px").style(
            "left",
            event.pageX + 10 + "px"
          );
        })
        .on("mouseleave", mouseleave);

      
      circles.attr("cy", (d) => d.mpg).attr("cx", (d) => d.horsepower)
      
      
    }
      sim.force("collision", d3.forceCollide(d => d.horsepower)); 
  sim.alpha(1); // Alpha value of 1 resets simulation back to beginning
  sim.restart();
      
      
    //   const xValue = function (d) {
    //       return d.horsepower;
    //     },
    //     yValue = function (d) {
    //       return d.name;
    //     },
    //     yValue1 = function (d) {
    //       return d.mpg;
    //     },
    //     margin = { top: 20, right: 10, bottom: 20, left: 10 };

    //   console.log(yValue1)
    //   const innerWidth = script.svgWidth - margin.left - margin.right;
    //   const innerHeight = 550 - margin.top - margin.bottom;

    //   // const xScale = scaleBand().domain(data.map((d) => d.name)).range([0, innerWidth])
    //   const xScale = scaleLinear()
    //     .domain(extent(data, xValue))
    //     .range([0, innerWidth])
    //     .nice();

    //   const yScale = scaleBand()
    //       .domain(data.map((d) => d.name))
    //     .range([innerHeight, 0]),
        
    //     // yScale1 = scaleLinear().domain([0, 8]).range([0, innerHeight]).nice(),
    //     yScale1 = scaleLinear().domain(extent(data, yValue1)).range([0, innerHeight-10]).nice(),

    //     y_axis = axisLeft().scale(yScale1);

    //   const x_axis = axisBottom(xScale),
        
    //     xAxisTranslate = 510;

    //   const xGridLine = axisBottom(xScale)
    //     .scale(xScale)
    //     .tickSize(500, 0, 0)
    //     .tickFormat("");

    //   var yGridLine = axisLeft(yScale1).scale(yScale1)
    //     // .tickPadding(5)
    //     .tickSize(-innerWidth)
    //     .tickFormat("");

     
    //   //Comment out starts
    //   svg_1
    //     .append("g")
    //     .attr("class", "y axis")
    //     .attr("transform", "translate(25,0)")
    //     .call(y_axis);
    //   svg_1
    //     .append("g")
    //     .attr("class", "x axis")
    //     .attr("transform", "translate(20," + xAxisTranslate + ")").call(x_axis)
    //   svg_1
    //     .append("g")
    //     .classed("gridLine", true)
    //     .attr("transform", "translate(25,0)")
    //     .style("color", "grey")
    //     .attr("opacity", "0.5")
    //   .call(yGridLine);
    //   svg_1
    //     .append("g")
    //     .classed("gridLine", true)
    //     .attr("transform", "translate(25,0)")
    //     .style("color", "grey")
    //     .attr("opacity", "0.5")
    //   .call(xGridLine);

    //   //Till here commeneted out

      
    //   svg_1
    //     .selectAll("circle")
    //     .transition()
    //     .duration(2000)
    //     .delay((d, i) => i * 10)

    //    // .attr("cy", (d) => yScale1(yValue1(d)))
    //    // .attr("cx", (d) => xScale(xValue(d)))
    //           .attr("cy", (d) => d.mpg)
    //    .attr("cx", (d) =>d.horsepower)
        
    //     .attr("r", function (circleRadius) {
    //       // console.log("i values", circleRadius.cylinders)
    //       return 5 * Math.exp(circleRadius.horsepower / 100);
    //     });
    //   // console.log("render", data);
    // }
    
    // sim.alpha(1);
    // sim.restart();
    // this.heySim = sim;
    // console.log("hey", this.heySim);
    // Simulation is off initially
   
   */
  
    // console.log("jss", data.topicData.length)
    let datapoints = data.topicData;
    var width = 670;
    let count = 0,
    countneg =0 
    for (let i = 0; i < data.topicData.length; i++){
      if (data.topicData[i].uniqueTotalCandidates > 0)
      {
        count++;
      }
      else {
        countneg++
      }
    }
    // console.log("count is", count, "and", countneg)
    if (count <= 65) {
      let height = 300; 
      makescattergraph(height)
    }
    else if (count <= 160)  {
      let height = 450; 
      makescattergraph(height)
    }
    else if (count <= 250)  {
      let height = 650; 
      makescattergraph(height)
    }
    else {
      let height = 900; 
      makescattergraph(height)
    }
    
  //  var width = 650,
  //   height = 500;

    function makescattergraph(height){
      var svg = d3
        .select("#graph1")
        .append("svg")
        // .attr("height", height)
        // .attr("width", width)
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${width} ${height}`)
        // .style("background-color", "black")
        .append("g")
        .attr("transform", "translate(0 , 0)");

      var defs = svg.append("defs");
      defs
        .append("pattern")
        .attr("id", "Beyonce")
        .attr("height", "100%")
        .attr("width", " 100%")
        .append("image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none");

      // var radiusScale = (d3.scaleSqrt().domain([1, 300]).range([0, 50]));
      var radiusScale = (d3.scaleSqrt().domain(extent(datapoints, function (d) { return d.uniqueTotalCandidates; })).range([0, 35]));
      const xScale = scaleLinear()
        .domain([0, 500])
        .range([50, width])
    
      var forceXCombine = d3.forceX(width / 3).strength(0.05);
      var forceCollide = d3.forceCollide(function (d) {
        return radiusScale(d.uniqueTotalCandidates) + 2;
        // add mpg
      });
      var simulation = d3
        .forceSimulation()
        .force("x", forceXCombine)
        .force("y", d3.forceY(height / 2).strength(0.05))
        .force("collide", forceCollide);

      //api caling
      // let response3 = await fetch(
      //   // "https://run.mocky.io/v3/dbd4f859-0a26-461d-a9b7-f81983c14ea4"
      //   "https://run.mocky.io/v3/35effb46-6d36-4026-9695-e573f6c90248"
      // );

      // let datapoints = await response3.json();
      // datapoints = datapoints.slice(0, 25);
      // console.log("datapoints", datapoints);
      defs
        .selectAll(".artist-pattern")
        .data(datapoints)
        .enter()
        .append("pattern")
        .attr("class", "artist-pattern")
        .attr("height", "100%")
        .attr("width", "100%")
        .append("height", 1)
        .append("width", 1)
        .attr("preserveAspectRatio", "none");

      var circles = svg
        .selectAll(".artist")
        .data(datapoints)
        .enter()
        .append("circle")
        .attr("class", "artist")
        .attr("r", function (d) {
          // console.log("ddd", d.uniqueTotalCandidates, "and" , (radiusScale(d.uniqueTotalCandidates)%100) )
          return radiusScale(d.uniqueTotalCandidates);
          // add mpg
        })
        .attr("fill", function (d) {
          return d.active ? "#8676FF" : "#BCCBB1";
        })
      //
      simulation.nodes(datapoints).on("tick", ticked);

      function ticked() {
        circles
          .attr("cx", function (d) {
            // console.log(d)
            return xScale(d.x);
            // return(d.x);

          })
          .attr("cy", function (d) {
            return d.y;
          })
          .on("mouseover", mouseover)
          //   .on("mousemove", function () {
          //     Tooltip.style("top", event.pageY - 10 + "px").style(
          //       "left",
          //       event.pageX + 10 + "px"
          //     );
          //   })
          .on("mouseleave", mouseleave);
      }

  
      // create a tooltip
    
      var Tooltip = select("body")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        // .style("border", "solid")
        // .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
     ;

    
      // Three function that change the tooltip when user hover / move / leave a cell
      let mouseover = function (d, datapoints) {
        // console.log(datapoints.uniqueTotalCandidates)
        Tooltip.style("opacity", 1)
          .style("visibility", "visible")
          .html("<p>Topic name<p> <div id='tipDiv'></div>"+ datapoints.uniqueTotalCandidates)
          .style("left", event.pageX + 20 + "px")
          .style("top", event.pageY + "px");
        select(this)
          .attr("r", function (d) {
      
            return radiusScale(d.uniqueTotalCandidates + 5);
            // add mpg
          })
          .style("stroke", function (d) {
            return d.active ? "#bcb4fe" : "#D0DFC5";
          })
          .style("stroke-width", 5)
          // .style("opacity", 0.3);
      };

      var tipSVG = select("#tipDiv")
     .append("div")
     .attr("width", 220)
        .attr("height", 55)
        .style("background-color","red");
      
      let mouseleave = function (d) {
        Tooltip.style("opacity", 0);
        select(this)
          .attr("r", function (d) {
      
            return radiusScale(d.uniqueTotalCandidates);
            // add mpg
          })
          .style("stroke", "none")
          .style("opacity", 0.8);
      };
    }
  }
}

// #Original Code
// //GRAPH 2
// class D3BarChart {
//   async myData(user) {
//     script.marks_data = [];
//     script.allData = [];
//     script.allData = user;
//     this.marks_data = user.marks;
//     var max = Math.max(...user.map((o) => o.marks));
//     script.max = max;
//     // console.log("new datasss", script.newdata);

//     script.allData.forEach((element) => {
//       script.marks_data.push(element.marks);
//     });
//     document.getElementById("chkgraph").innerHTML = "";
//     this.makegraph();
//   }

//   makegraph() {
//     script.count += 1;
//     const bar_color = "black";
//     const svgHeight = 300,
//       barPadding = 30,
//       barWidth = script.svgWidth / script.allData.length,
//       //y scale
//       yScale = scaleLinear().domain([0, script.max]).range([0, svgHeight]),
//       yScale1 = scaleLinear().domain([0, script.max]).range([svgHeight, 0]),
//       y_axis = axisLeft().scale(yScale1),
//       //X scale
//       margin = { top: 10, right: 100, bottom: 50, left: 25 },
//       xScale = scaleBand()
//         .range([margin.left, barWidth * script.allData.length + 30])
//         .domain(script.allData.map((d) => d.testName));
//     // console.log("width is ", script.svgWidth);

//     const x_axis = axisBottom(xScale),
//       xAxisTranslate = svgHeight + 10;

//     const xGridLine = axisBottom(xScale)
//       .scale(xScale)
//       .tickSize(svgHeight, 0, 0)
//       .tickFormat("");

//     // .ticks(10);
//     var yGridLine = axisLeft(yScale1)
//       .scale(yScale1)
//       .tickSize(-script.svgWidth, 0, 0)
//       .tickFormat("");

//     // For making the svg
//     const svg = select("#chkgraph")
//       .append("svg")
//       .attr("viewBox", `0 0 ${script.svgWidth + 50} ${svgHeight + 100}`);

//     //drawing y axis
//     svg.append("g").attr("transform", "translate(25,0)").call(y_axis),
//       //Xaxis DRAW

//       // svg.selectAll("*").remove();
//       svg
//         .append("g")
//         .attr("transform", "translate(0," + xAxisTranslate + ")")
//         .call(x_axis)
//         .selectAll("text")
//         .style("text-anchor", "end")
//         .style("color", "black")
//         .attr("dx", "-.8em")
//         .attr("dy", ".15em")
//         .attr("transform", "rotate(-45)");

//     svg
//       .append("g")
//       .classed("gridLine", true)
//       .attr("transform", "translate(25,0)")
//       .style("color", "grey")
//       .attr("opacity", "0.5")
//       .call(yGridLine);

//     svg
//       .append("g")
//       .classed("gridLine", true)
//       .attr("transform", "translate(0,0)")
//       .style("color", "grey")
//       .attr("opacity", "0.5")
//       .call(xGridLine);

//     svg
//       .selectAll("rect")
//       .data(script.marks_data, (d) => d)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * barWidth)
//       .attr("y", function (p) {
//         return svgHeight - yScale(p);
//       })
//       .attr("height", function (d) {
//         return yScale(d);
//       })
//       .attr("width", barWidth - barPadding)
//       .attr("fill", bar_color)
//       .attr("transform", "translate(40,0)") //mose over start
//       .on("mouseover", function (marks_data, i) {
//         tooltip.html(`Marks: ${marks_data}`).style("visibility", "visible");
//         select(this).attr("fill", "#666666");
//       })
//       .on("mousemove", function () {
//         tooltip
//           .style("top", event.pageY - 10 + "px")
//           .style("left", event.pageX + 10 + "px");
//       })
//       .on("mouseout", function () {
//         tooltip.html(``).style("visibility", "hidden");
//         select(this).attr("fill", bar_color);
//       });

//     //Line chart
//     var g = svg
//       .append("g")
//       .attr("transform", "translate(" + barWidth / 2 + "," + 0 + ")");
//     var x = xScale,
//       y = yScale1,
//       line = d3Line
//         .line()
//         .x(function (d) {
//           return x(d.testName);
//         })
//         .y(function (d) {
//           // console.log(d.marks);
//           return y(d.marks);
//         });
//     // .curve(curveBasis);

//     var path = g
//       .append("path")
//       .datum(script.allData)
//       .attr("fill", "none")
//       .attr("stroke", "#79BAC5")
//       .attr("stroke-linejoin", "round")
//       .attr("stroke-linecap", "round")
//       .attr("stroke-width", 2.5)
//       .attr("d", line);
//     // g.selectAll("path").datum(this.allData)

//     const tooltip = select("body")
//       .append("div")
//       .attr("class", "d3-tooltip")
//       .style("position", "absolute")
//       .style("z-index", "10")
//       .style("visibility", "hidden")
//       .style("padding", "15px")
//       .style("background", "#56ecb2")
//       .style("border-radius", "5px")
//       .style("color", "#fff")
//       .text("a simple tooltip");
//     // console.log(script.count);
//     // rect.exit().remove();
//     // svg.selectAll("rect > *").remove();
//   }
// }

// class D3BarChart {
//   async myData(user) {
//     script.marks_data = [];
//     script.allData = user;
//     this.marks_data = user.count;
//     var max = Math.max(...user.map((o) => o.count));
//     script.max = max;
//     // console.log("new datasss", script.newdata);

//     script.allData.forEach((element) => {
//       script.marks_data.push(element.count);
//     });
//     document.getElementById("chkgraph").innerHTML = "";
//     this.makegraph();
//   }

//   makegraph() {
//     // script.count += 1;
//     const bar_color = "black";
//     const svgHeight = 300,
//       barPadding = 30,
//       barWidth = (script.svgWidth-25) / script.allData.length,
//       //y scale
     
    
//       //X scale
//       margin = { top: 10, right: 10, bottom: 25, left: 10 },
//       xScale = scaleBand()
//         .domain(script.allData.map((d) => d.x_axis))
//         .range([0, script.svgWidth]);
//     // console.log("width is ", script.svgWidth);

//     const yScale = scaleLinear().domain([0, script.max]).range([0, svgHeight-margin.bottom]),
//        yScale1 = scaleLinear().domain([0, script.max]).range([svgHeight-margin.bottom, 0]),
//       y_axis = axisLeft().scale(yScale1),
//      x_axis = axisBottom(xScale),
//       xAxisTranslate = svgHeight-25;

//     const xGridLine = axisBottom()
//       .scale(xScale)
//       .tickSize(svgHeight-margin.bottom, 0, 0)
//       .tickFormat("");

//     // .ticks(10);
//     var yGridLine = axisLeft(yScale1)
//       .scale(yScale1)
      
//       .tickSize(-script.svgWidth, 0, 0)
//       .tickFormat("");

//     // For making the svg
//     const svg = select("#chkgraph")
//       .append("svg")
//       .attr("viewBox", `0 0 ${script.svgWidth} ${svgHeight}`)
//       // .style("background-color","red");

//     //drawing y axis
//     svg.append("g").attr("transform", "translate(25,0)")
//       .call(y_axis)
//       //Xaxis DRAW

//       // svg.selectAll("*").remove();
//       svg
//         .append("g")
//         .attr("transform", "translate(25," + xAxisTranslate + ")")
//         .call(x_axis)
//         .selectAll("text")
//         .style("text-anchor", "end")
//         .style("color", "black")
//         .attr("dx", "-.8em")
//         .attr("dy", ".15em")
//         .attr("transform", "rotate(-45)");

//     svg
//       .append("g")
//       .classed("gridLine", true)
//       .attr("transform", "translate(30,0)")
//       .style("color", "grey")
//       .attr("opacity", "0.5")
//       .call(yGridLine);

//     svg
//       .append("g")
//       .classed("gridLine", true)
//       .attr("transform", "translate(22,0)")
//       .style("color", "grey")
//       .attr("opacity", "0.5")
//       .call(xGridLine);

   
//     svg
//       .selectAll("rect")
//       .data(script.marks_data, (d) => d)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * barWidth)
//       .attr("y", function (p) {
//         return svgHeight-margin.bottom - yScale(p);
//       })
//       .attr("height", function (d) {
//         return yScale(d);
//       })
//       .attr("width", barWidth)
//       .attr("fill", bar_color)
//       // .attr("transform", "translate(30,0)")
//       .attr("transform", "translate(25," + 0 + ")")
//       //mose over start
//       .on("mouseover", function (marks_data, i) {
//         tooltip.html(`Marks: ${marks_data}`).style("visibility", "visible");
//         select(this).attr("fill", "#666666");
//       })
//       .on("mousemove", function () {
//         tooltip
//           .style("top", event.pageY - 10 + "px")
//           .style("left", event.pageX + 10 + "px");
//       })
//       .on("mouseout", function () {
//         tooltip.html(``).style("visibility", "hidden");
//         select(this).attr("fill", bar_color);
//       });

//     //Line chart
   
//     var x = scaleBand()
//         .domain(script.allData.map((d) => d.x_axis))
//         .range([0, script.svgWidth - 25]),
//       y = yScale1,
//       line = d3Line
//         .line()
//         .x(function (d) {
//           return x(d.x_axis);
//         })
//         .y(function (d) {
//           // console.log(d.marks);
//           return y(d.count);
//         });
//     // .curve(curveBasis);

//       var g = svg
//       .append("g")
//       .attr("transform", "translate(" + 30 + "," + 0 + ")");
//     var path = g
//       .append("path")
//       .datum(script.allData)
//       .attr("fill", "none")
//       .attr("stroke", "#79BAC5")
//       .attr("stroke-linejoin", "round")
//       .attr("stroke-linecap", "round")
//       .attr("stroke-width", 2.5)
//       .attr("d", line);
//     // g.selectAll("path").datum(this.allData)

//     const tooltip = select("body")
//       .append("div")
//       .attr("class", "d3-tooltip")
//       .style("position", "absolute")
//       .style("z-index", "10")
//       .style("visibility", "hidden")
//       .style("padding", "15px")
//       .style("background", "#56ecb2")
//       .style("border-radius", "5px")
//       .style("color", "#fff")
//       .text("a simple tooltip");
//     // console.log(script.count);
//     // rect.exit().remove();
//     // svg.selectAll("rect > *").remove();

//     // console.log(chartcontainer)
//     // chartcontainer.scrollLeft;
//   }
// }

// #Changed Code
// class D3BarChart {
//   async myData(user) {
//     script.marks_data = [];
//     let fullbarData =
//     script.allData = user;
//     // script.marks_data = user.count;
//     var max = Math.max(...user.map((o) => o.count));
//     script.max = max;
//     script.allData.forEach((element) => {
//       script.marks_data.push(element.count);
//     });
//     document.getElementById("barchartGraph").innerHTML = "";

//     //1) d.x_axis  2) HIghest marks of BAR ; 3) Bar Color ; 4)bardata ; 5)y_axis
//     this.makegraph();
//   }

//   makegraph() {
//         // console.log("users",script.max)

  
    
//     // console.log("lennn", len)
//     const rectWidth = 50;
//     const svgHeight = 250,
//       barWidth = 20
      
//     let len = script.allData.length * (rectWidth) ;
//     let margin = { top: 10, right: 10, bottom: 35, left: 15 },
//       height = svgHeight - margin.bottom,
//       width = len ;
//     // For making the svg
//     const svg1 = select("#barchartGraph")
//       .append("svg")
//       .attr("height", svgHeight)
//       .attr("width", len + 50);
//       // .style("background-color", "red");

//     //SCALES START
        
//     const xScale = scaleBand()
//       .domain(script.allData.map((d) => d.x_axis))        //variable1??
//       .range([0, len]);
//       // .padding(0),
    
//     // variable2??
//     const yScale = scaleLinear().domain([0, script.max]).range([0, svgHeight - margin.bottom - margin.top]);
//     const yScale1 = scaleLinear().domain([0, script.max]).range([svgHeight - margin.bottom, 0]);
     
//     const x_axis = axisBottom(xScale)
//         .tickSize(-svgHeight),
//       xAxisTranslate = svgHeight - margin.bottom + 5;
    
  
//     const y_axis = axisLeft(yScale1)
//       .tickSize(-width)
//        .ticks((script.max+5)/5);
    
//     const g =  svg1
//       .append("g")
//       .attr("transform", "translate(" + 30 + "," +xAxisTranslate + ")")
//     // .attr("transform","translate(150,150)");
//     g.append("g")
//       .attr("class", "bar-x-axis").call(x_axis)
//         .selectAll("text")
//         .style("text-anchor", "end")
//       .style("color", "#A3A3A3")
//       .style("font","Roboto")
//         .attr("dx", "-.8em")
//         .attr("dy", ".15em")
//       // .attr("transform", "rotate(-30)");
//       .attr("transform", "rotate(-15)");
    
//     svg1.append("g").attr("class", "bar-x-axis").attr("transform", "translate(30,0)")
//       .call(y_axis)
//     .selectAll("text")
//         .style("text-anchor", "end")
//       .style("color", "#A3A3A3")
//       .style("font","Roboto")
//         .attr("dx", "-.8em")
//         .attr("dy", ".15em")
    
//     //  const xGridLine = axisBottom()
//     //   .scale(xScale)
//     //   .tickSize(svgHeight-25, 0, 0)
//     //   .tickFormat("");
    
    
//     //    svg1
//     //   .append("g")
//     //   .classed("gridLine", true)
//     //   .attr("transform", "translate(15,0)")
//     //   .style("color", "#F0F0F0")
//     //   .attr("opacity", "0.5")
//     //   .call(xGridLine);
    
//     //SCALES END
//     const t = select("svg1").transition().duration(2000);

//      const g1 =  svg1
//       .append("g")
//       .attr("transform", "translate(" + 25 + ","+ 0 + ")")

//     const rect =
//       g1.selectAll("rect")
//       .data(script.marks_data, (d) => d)
//       .join(
//         (enter) => {
//           const rect = enter
//             .append("rect")
//             .attr("width", rectWidth-barWidth)
//             .attr("stroke-width", 3)
//             // .attr("stroke", "#7E857E")
//             .attr("stroke", "#88888E")

//             .attr("fill", "#514B4B")
//             // overwrite the default so the animation looks better:
//             .attr("x", (d, i) => i * rectWidth)
//             .attr("y", function (p) {
              
//              return  height;
//             })
            
//             .attr("height", function (d) {
//               // return yScale(d);
//               return 0

//             })     .attr("transform", "translate(" + margin.left + "," + 0 + ")")
//     //mose over start
//       .on("mouseover", function (marks_data, i) {
//         tooltip
//           .style("top", event.pageY - 10 + "px")
//           .style("left", event.pageX + 10 + "px").html(`Marks: ${marks_data}`).style("visibility", "visible");
//         select(this).attr("fill", "#666666");

//         //tryyyy
//         /*
//          svg1
//             .append("circle")
//             .attr("cx", (d) => xScale(d) + 20)
//             .attr("cy", (d) =>
//               yScale1(d)
//             )
//             .attr("r", 4)
//             .attr("fill", "#3379B3")
//             .attr("stroke-width", function() {
//               return 2;
//             })
//             .attr("stroke", "white");
//           tooltip.style("left", i.pageX + "px");
//           tooltip.style("top", i.pageY - 87 + "px");
//           tooltip.style("display", "inline-block");
//             */
//         //end
//       })
//       .on("mousemove", function () {
//         tooltip
//           // tooltip.html(``).style("visibility", "hidden");
//       })
//       .on("mouseout", function () {
//         tooltip.html(``).style("visibility", "hidden");
//         select(this).attr("fill", "#514B4B");
//         // tooltip.remove()
//       });

         
//             // .attr("transform", "translate(25," + 0 + ")");

//           return rect;
//         },
//         (update) => update,
//         (exit) => {
//           exit
//             .transition(t)
//             .attr("y", function (p) {
              
//               return svgHeight - margin.bottom - yScale(p);
//             })
//               .attr("height", 0)
//             .remove();
//         }
//       )
//       // animate enter + update selection
//         .transition()
//         .duration(2000)
//       .delay((d, i) => i * 10)
//       .attr("x", (d, i) => i * rectWidth)
//         .attr("y", function (p) {
        
//         return  height - yScale(p);
//       })
//       .attr("height", function (d) {
//               return yScale(d);
//       })
//       .attr("width", rectWidth- barWidth)
   

//     // //Line chart
//       var x = xScale,
//       y = yScale1,
//       line = d3Line
//         .line()
//         .x(function (d) {
//           return x(d.x_axis);
//         })
//         .y(function (d) {
//           return y(d.count);
//         });
//     // .curve(curveBasis);
    
//     const g2 = svg1
//       .append("g")
//       .attr("transform", "translate(" + 55 + "," + 0 + ")");
//     const path = g2
//       .append("path")
//       .datum(script.allData)
//       .attr("fill", "none")
//       .attr("stroke", "#79BAC5")
//       .attr("stroke-linejoin", "round")
//       .attr("stroke-linecap", "round")
//       .attr("stroke-width", 1)
//       .attr("d", line);

//     const tooltip = select("body")
//       .append("div")
//       .attr("class", "d3-tooltip")
//       .style("position", "absolute")
//       .style("z-index", "10")
//       .style("visibility", "hidden")
//       .style("padding", "15px")
//       .style("background", "#56ecb2")
//       .style("border-radius", "5px")
//       .style("color", "#fff")
//       .text("a simple tooltip");
//     // console.log(script.count);
//     // rect.exit().remove();
//     // svg.selectAll("rect > *").remove();

//     // console.log(chartcontainer)
//     // chartcontainer.scrollLeft;

//   }

// }
    

class D3BarChart {
  async myData(user) {
    script.barData = [];
    script.allData = user;
    // script.marks_data = user.count;
    var max = Math.max(...user.map((o) => o.count));
    script.max = max;
    script.allData.forEach((element) => {
      script.barData.push(element.count);
    });
    document.getElementById("barchartGraph").innerHTML = "";

    //1) d.x_axis  2) HIghest marks of BAR ; 3) Bar Color ; 4)bardata ; 5)y_axis
    this.makegraph();
  }

  makegraph() {
        // console.log("users",script.max)

  
    
    // console.log("lennn", len)
    const rectWidth = 50;
    const svgHeight = 250,
      barWidth = 20
      
    let len = script.allData.length * (rectWidth) ;
    let margin = { top: 10, right: 10, bottom: 35, left: 15 },
      height = svgHeight - margin.bottom,
      width = len ;
    // For making the svg
    const svg1 = select("#barchartGraph")
      .append("svg")
      .attr("height", svgHeight)
      .attr("width", len + 50);
      // .style("background-color", "red");

    //SCALES START
        
    const xScale = scaleBand()
      .domain(script.allData.map((d) => d.x_axis))        //variable1??
      .range([0, len]);
      // .padding(0),
    
    // variable2??
    const yScale = scaleLinear().domain([0, script.max]).range([0, svgHeight - margin.bottom - margin.top]);
    const yScale1 = scaleLinear().domain([0, script.max]).range([svgHeight - margin.bottom, 0]);
     
    const x_axis = axisBottom(xScale)
        .tickSize(-svgHeight),
      xAxisTranslate = svgHeight - margin.bottom + 5;
    
  
    const y_axis = axisLeft(yScale1)
      .tickSize(-width)
       .ticks((script.max+5)/5);
    
    const g =  svg1
      .append("g")
      .attr("transform", "translate(" + 30 + "," +xAxisTranslate + ")")
    // .attr("transform","translate(150,150)");
    g.append("g")
      .attr("class", "bar-x-axis").call(x_axis)
        .selectAll("text")
        .style("text-anchor", "end")
      .style("color", "#A3A3A3")
      .style("font","Roboto")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
      // .attr("transform", "rotate(-30)");
      .attr("transform", "rotate(-15)");
    
    svg1.append("g").attr("class", "bar-x-axis").attr("transform", "translate(30,0)")
      .call(y_axis)
    .selectAll("text")
        .style("text-anchor", "end")
      .style("color", "#A3A3A3")
      .style("font","Roboto")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
    
    //  const xGridLine = axisBottom()
    //   .scale(xScale)
    //   .tickSize(svgHeight-25, 0, 0)
    //   .tickFormat("");
    
    
    //    svg1
    //   .append("g")
    //   .classed("gridLine", true)
    //   .attr("transform", "translate(15,0)")
    //   .style("color", "#F0F0F0")
    //   .attr("opacity", "0.5")
    //   .call(xGridLine);
    
    //SCALES END
    const t = select("svg1").transition().duration(2000);

     const g1 =  svg1
      .append("g")
      .attr("transform", "translate(" + 25 + ","+ 0 + ")")

    const rect =
      g1.selectAll("rect")
        .data(script.barData, (d) => d)
        .join(
          (enter) => {
            const rect = enter
              .append("rect")
              .attr("width", rectWidth - barWidth)
              .attr("stroke-width", 3)
              // .attr("stroke", "#7E857E")
              .attr("stroke", "#88888E")

              .attr("fill", "#514B4B")
              // overwrite the default so the animation looks better:
              .attr("x", (d, i) => i * rectWidth)
              .attr("y", function (p) {
              
                return height;
              })
            
              .attr("height", function (d) {
                // return yScale(d);
                return 0

              }).attr("transform", "translate(" + margin.left + "," + 0 + ")")
              //mose over start
              .on("mouseover", function (barData, i) {
                tooltip
                  .style("top", event.pageY - 10 + "px")
                  .style("left", event.pageX + 10 + "px").html(`Marks: ${barData}`).style("visibility", "visible");
                select(this).attr("fill", "#666666");

                //tryyyy
                /*
                 svg1
                    .append("circle")
                    .attr("cx", (d) => xScale(d) + 20)
                    .attr("cy", (d) =>
                      yScale1(d)
                    )
                    .attr("r", 4)
                    .attr("fill", "#3379B3")
                    .attr("stroke-width", function() {
                      return 2;
                    })
                    .attr("stroke", "white");
                  tooltip.style("left", i.pageX + "px");
                  tooltip.style("top", i.pageY - 87 + "px");
                  tooltip.style("display", "inline-block");
                    */
                //end
              })
              .on("mousemove", function () {
                tooltip
                // tooltip.html(``).style("visibility", "hidden");
              })
              .on("mouseout", function () {
                tooltip.html(``).style("visibility", "hidden");
                select(this).attr("fill", "#514B4B");
                // tooltip.remove()
              });

         
            // .attr("transform", "translate(25," + 0 + ")");

            return rect;
          },
          (update) => update,
          (exit) => {
            exit
              .transition(t)
              .attr("y", function (p) {
              
                return svgHeight - margin.bottom - yScale(p);
              })
              .attr("height", 0)
              .remove();
          }
        )
        // animate enter + update selection
        .transition()
        .duration(2000)
        .delay((d, i) => i * 10)
        .attr("x", (d, i) => i * rectWidth)
        .attr("y", function (p) {
        
          return height - yScale(p);
        })
        .attr("height", function (d) {
          return yScale(d);
        })
        .attr("width", rectWidth - barWidth);
    
   const tooltip = select("body")
      .append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("padding", "15px")
      .style("background", "#56ecb2")
      .style("border-radius", "5px")
      .style("color", "#fff")
      .text("a simple tooltip");

    // rect.exit().remove();
    // svg.selectAll("rect > *").remove();


    // //Line chart
   
    function linechart1() {
      var x = xScale,
        y = yScale1,
        line = d3Line
          .line()
          .x(function (d) {
            console.log("linexxx", x(d.x_axis))
            return x(d.x_axis);
          })
          .y(function (d) {
            console.log("lineyyy", y(d.count))
            return y(d.count);
          });
      // .curve(curveBasis);
    
      const g2 = svg1
        .append("g")
        .attr("transform", "translate(" + 55 + "," + 0 + ")");
      const path = g2
        .append("path")
        .datum(script.allData)
        .attr("fill", "none")
        .attr("stroke", "#79BAC5")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1)
        .attr("d", line);
    }

    this.makegraph.linechart1= linechart1;

  }

}
    /*
    const bar_color = "black";
    const svgHeight = 350,
      barPadding = 5,
      width = 1256,
      barWidth = (width) / script.allData.length,
      //y scale
     
    
      //X scale
      margin = { top: 10, right: 10, bottom: 25, left: 10 },
      xScale = scaleBand()
        .domain(script.allData.map((d) => d.x_axis))
        .range([0, width]);
    // console.log("width is ", script.svgWidth);

    const yScale = scaleLinear().domain([0, script.max]).range([0, svgHeight-margin.bottom]),
       yScale1 = scaleLinear().domain([0, script.max]).range([svgHeight-margin.bottom, 0]),
      y_axis = axisLeft().scale(yScale1),
     x_axis = axisBottom(xScale),
      xAxisTranslate = svgHeight-25;

    const xGridLine = axisBottom()
      .scale(xScale)
      .tickSize(svgHeight-margin.bottom, 0, 0)
      .tickFormat("");

    // .ticks(10);
    var yGridLine = axisLeft(yScale1)
      .scale(yScale1)
      
      .tickSize(-script.svgWidth, 0, 0)
      .tickFormat("");



    //drawing y axis
    svg.append("g").attr("transform", "translate(25,0)")
      .call(y_axis)
      //Xaxis DRAW

      // svg.selectAll("*").remove();
      svg
        .append("g")
        .attr("transform", "translate(25," + xAxisTranslate + ")")
        .call(x_axis)
        .selectAll("text")
        .style("text-anchor", "end")
        .style("color", "black")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    svg
      .append("g")
      .classed("gridLine", true)
      .attr("transform", "translate(30,0)")
      .style("color", "grey")
      .attr("opacity", "0.5")
      .call(yGridLine);

    svg
      .append("g")
      .classed("gridLine", true)
      .attr("transform", "translate(22,0)")
      .style("color", "grey")
      .attr("opacity", "0.5")
      .call(xGridLine);

   
    svg
      .selectAll("rect")
      .data(script.marks_data, (d) => d)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * barWidth)
      .attr("y", function (p) {
        return svgHeight-margin.bottom - yScale(p);
      })
      .attr("height", function (d) {
        return yScale(d);
      })
      .attr("width", barWidth - barPadding)
      .attr("fill", bar_color)
      // .attr("transform", "translate(30,0)")
      .attr("transform", "translate(25," + 0 + ")")
      //mose over start
      .on("mouseover", function (marks_data, i) {
        tooltip.html(`Marks: ${marks_data}`).style("visibility", "visible");
        select(this).attr("fill", "#666666");
      })
      .on("mousemove", function () {
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip.html(``).style("visibility", "hidden");
        select(this).attr("fill", bar_color);
      });

    //Line chart
   
    var x = scaleBand()
        .domain(script.allData.map((d) => d.x_axis))
        .range([0, script.svgWidth - 25]),
      y = yScale1,
      line = d3Line
        .line()
        .x(function (d) {
          return x(d.x_axis);
        })
        .y(function (d) {
          // console.log(d.marks);
          return y(d.count);
        });
    // .curve(curveBasis);

      var g = svg
      .append("g")
      .attr("transform", "translate(" + 30 + "," + 0 + ")");
    var path = g
      .append("path")
      .datum(script.allData)
      .attr("fill", "none")
      .attr("stroke", "#79BAC5")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2.5)
      .attr("d", line);
    // g.selectAll("path").datum(this.allData)

    const tooltip = select("body")
      .append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("padding", "15px")
      .style("background", "#56ecb2")
      .style("border-radius", "5px")
      .style("color", "#fff")
      .text("a simple tooltip");
    // console.log(script.count);
    // rect.exit().remove();
    // svg.selectAll("rect > *").remove();

    // console.log(chartcontainer)
    // chartcontainer.scrollLeft;
  }
}

*/

//GRAPH 3
class piePlot {
  pieGraph() {
    const svgHeight = 250,
      // svgWidth = 350
      radius = Math.min(script.svgWidth, svgHeight) / 2;
    console.log("height is", svgHeight);
    // console.log("pie data", script.pie_data);

    const svg = select("#pieChart")
      .append("svg")
      // .append("svg")
      // .attr("viewBox", `0 0 ${script.svgWidth} ${svgHeight}`)
      .attr('width', script.width)
      .attr('height',svgHeight)
    // .style("background-color", "pink");

    const g = svg
      .append("g")
      // .attr(
      //   "transform",
      //   "translate(" + (script.svgWidth/2) + "," + (svgHeight/2) + ")"
      // );
    .attr('transform', `translate(${script.svgWidth/10},${svgHeight/2})`);
console.log("widthhh", script.svgWidth)
    // var color = scaleOrdinal(d3.schemeCategory10);
    let colorScale = scaleOrdinal()
      .domain(script.pie_data.map((d) => d.platform))
      .range(["#FFC145", "#33A02C", "#3379B3"]);

    const pies = d3Line.pie().value(function (d) {
      // console.log(d.percentage);

      return d.percentage;
    });
    //SHADOW
    var defs = svg.append("defs");

    // create filter with id #drop-shadow
    // height=130% so that the shadow is not clipped
    var filter = defs
      .append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");

    // SourceAlpha refers to opacity of graphic that this filter will be applied to
    // convolve that with a Gaussian with standard deviation 3 and store result
    // in blur
    filter
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 1)
      .attr("result", "blur");

    // translate output of Gaussian blur to the right and downwards with 2px
    // store result in offsetBlur
    filter
      .append("feOffset")
      .attr("in", "blur")
      .attr("dx", -2)
      .attr("dy", -2)
      .attr("result", "offsetBlur");

    // overlay original SourceGraphic over translated blurred opacity by using
    // feMerge filter. Order of specifying inputs is important!
    var feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const path = d3Line.arc().outerRadius(radius-5).innerRadius(60);
    //  console.log("ok");

    const arc = g
      .selectAll("arc")
      .data(pies(script.pie_data))
      .enter()
      .append("g")
      .style("filter", "url(#drop-shadow)");
    arc
      .append("path")
      .attr("d", path)

      .attr("fill", function (d) {
        return colorScale(d.data.percentage);
      })
      .on("mouseover", function (d, i) {
        // console.log("doneeee");
        tooltip
          .html(`Percentage: ${d.data.percentage}`)
          .style("visibility", "visible");
        // console.log("percent is", d);
        select(this).attr("fill", "#F70D1A");
      })

      .on("mousemove", function () {
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip.html(``).style("visibility", "hidden");
        select(this).attr("fill", function (d) {
          return colorScale(d.data.percentage);
        });
      });

    let sum = 0;
    script.pie_data.forEach((x) => {
      sum += x.percentage;
    });

    // console.log("summis", sum);
    // console.log(total);
    svg
      .append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      // .attr("style", "font-family:Poppins")
      .style("font-family", "Poppins")
      .style("font-weight", "500")

      .attr("font-size", "18")
      .attr("fill", "#696969")
      .attr(
        "transform",
        "translate(" + (radius + 15) + "," + (radius - 10) + ")"
      )
      .text("Total Tests");

    svg
      .append("svg:text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      // .attr("style", "font-family:Poppins")
          .style("font-family", "Poppins")
      .style("font-weight", "700")
      .attr("font-size", "20")
      .attr("fill", "#696969")
      .attr(
        "transform",
        "translate(" + (radius + 15) + "," + (radius + 15) + ")"
      )
      .text(` ${sum} `);

    const tooltip = select("body")
      .append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("padding", "15px")
      .style("background", "#56ecb2")
      .style("border-radius", "5px")
      .style("color", "#fff")
      .text("a simple tooltip");
  }
}

//GRAPH 4
class scatterplot_rect {
  async scatterGraph(data) {

    const scatterPlots = (selection, props) => {
      const { xValue, yValue, margin, width, height, data , widthvalue } = props;
      const innerWidth = script.svgWidth - margin.left - margin.right;
      const innerHeight = 340 - margin.top - margin.bottom;

      // const xScale = scaleBand().domain(data.map((d) => d.name)).range([0, innerWidth])
      const xScale = scaleLinear()
        .domain(extent(data.groupsData, xValue)) //????
        // .domain([0, 8])
        .range([0, script.svgWidth])
        .nice();
      
      // const xScale3 = scaleLinear()
      //   // .domain(extent(data.groupsData, widthvalue)) //????
      //   .domain([0, 100])
      //   .range([0, innerWidth]);



      const xScale1 = scaleLinear()
        .domain([0, 8])
        .range([0, script.svgWidth])
        .nice();

      const yScale = scaleBand()
          .domain(data.groupsData.map((d) => d.groupName))
        .range([innerHeight, 0]),
        
        yScale1 = scaleLinear().domain([0, 8]).range([0, 340]).nice(),
        y_axis = axisLeft().scale(yScale1);
      // const yScale = scaleLinear();Q
      // yScale.domain(extent(data, yValue));
      // yScale.range([innerHeight, 0]);
      // yScale.nice();

      const x_axis = axisBottom(xScale),
        xAxisTranslate = 350;

      const xGridLine = axisBottom(xScale1)
        .scale(xScale1)
        .tickSize(340, 0, 0)
        .tickFormat("");

      var yGridLine = axisLeft(yScale1)
        .scale(yScale1)

        // .tickPadding(5)
        .tickSize(-script.svgWidth)

        .tickFormat("");

      let g4 = svg_4
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 0 + ")");

      svg_4
        .append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0,0)")
      // .call(y_axis)

      // svg_1.select(".x.axis").call(x_axis);
      //   svg_1.select(".x.axis").remove();

      svg_4
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(20," + xAxisTranslate + ")")
      // .call(x_axis)

      svg_4
        .append("g")
        .classed("gridLine", true)
        .attr("transform", "translate(0,0)")
        .style("color", "grey")
        .attr("opacity", "0.5")
        .call(yGridLine);

      svg_4
        .append("g")
        .classed("gridLine", true)
        .attr("transform", "translate(0,0)")
        .style("color", "grey")
        .attr("opacity", "0.5")
        .call(xGridLine);

      // console.log("each radiussss ",circleRadius )
      const rects = svg_4.append("g").selectAll("rect").data(data.groupsData);
      rects
        .enter()
        .append("rect")
        .attr('x', innerWidth)
        .attr('y', innerHeight)
        .attr("width", function (d) {
          return 15 * (d.repeatingPercentage);
          // return xScale3(x(d));
        })
        .attr("height", function (d) {
          return 10 * (d.repeatingPercentage);
        })
        .attr("fill", function (d) {
          return d.numberOfCandidates>= 50 ? "#308D85" : "#E74B1D";
          // return d.active ? "#E74B1D" : "#308D85"; // false

        })
        .attr("opacity", 0.7)
        
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

      svg_4
        .selectAll("rect")
        // .style("padding", "50px")
        .transition()
        .duration(2000)
        .delay((d, i) => i * 10)
        .attr("y", (d) => yScale(yValue(d)))
        .attr("x", (d) => xScale1(xValue(d)));
    };

    const svg_4 = select("#rect_scatter")
      .append("svg")
      // .attr("viewBox", `0 0 ${script.svgWidth} 350`)
      .attr("viewBox", `0 0 ${innerWidth} ${innerHeight}`)
    
    // .style("background-color", "red")

    //  const height =  +svg.attr('height');

    function render() {
      svg_4.call(scatterPlots, {
        xValue: function (d) {
          return d.repeatingPercentage;
        },
        yValue: function (d) {
          return d.groupName;
        },
        widthvalue : function (d) {
          return d.repeatingPercentage;
        },

        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        // width,
        // height,
        data,
      });

      // console.log("render", data);
    }

    var Tooltip = select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    // Three function that change the tooltip when user hover / move / leave a cell
    let mouseover = function (d) {
      Tooltip.style("opacity", 1)
        .style("visibility", "visible")
        .html("Number Of candidates are :  " + d.numberOfCandidates)
        .style("left", event.pageX + 70 + "px")
        .style("top", event.pageY + "px");
      select(this)
        .attr("width", function (d) {
          return 15 * (d.repeatingPercentage)
        })
        .attr("height", function (d) {
          return 10 * (d.repeatingPercentage);
        })
        .style("stroke", function (d) {
          return d.repeatingPercentage <= 0.5 ? "red" : "blue";
        })
        .style("opacity", 0.54);
    };
    let mousemove = function (d) {
      Tooltip.html("Number Of candidates are :  " + d.numberOfCandidates)
        .style("left", event.pageX + 70 + "px")
        .style("top", event.pageY + "px");
    };
    let mouseleave = function (d) {
      Tooltip.style("opacity", 0);
      select(this)
        .attr("width", function (d) {
          return 15 * (d.repeatingPercentage)
        })
        .attr("height", function (d) {
          return 10 * (d.repeatingPercentage);
        })
        .style("stroke", "none")
        .style("opacity", 0.8);
    };
    /*
    // create a tooltip
  var Tooltip = select("#rect_scatter")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  let mouseover = function(d) {
    Tooltip
      .style("opacity", 1).style("visibility", "visible").html("The exact value of<br>this cell is: " + d.horsepower)
      .style("left", (event.pageX + 70) + "px") 
            .style("top", (event.pageY) + "px")
    select(this)
      .attr('r', function (circleRadius) {
          // console.log("i values", circleRadius.cylinders)
  return 7*(Math.exp(circleRadius.horsepower /100));
        })
      .style("stroke", function (circleRadius) { return circleRadius.horsepower <= 100 ? 'red' : 'blue' })
      .style("opacity", 0.54)
  };
  let mousemove = function(d) {
    Tooltip
      .html("Thess exact value of<br>this cell is: " + d.horsepower)
      .style("left", (event.pageX + 70) + "px") 
            .style("top", (event.pageY) + "px")
  }
  let mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
    select(this)
      .attr('r', function (circleRadius) {
          // console.log("i values", circleRadius.cylinders)
  return 5*(Math.exp(circleRadius.horsepower /100));
        })
      .style("stroke", "none")
      .style("opacity", 0.8)
  }
    
  */

    // const response3 = await fetch(
    //   "https://run.mocky.io/v3/35effb46-6d36-4026-9695-e573f6c90248"
    // );
    // data = await response3.json();
    // data = data.slice(0, 100);
    render();
  }
}

// GRAPH 5
// class treeGraph1 {
//   async pieGraph(classes) {
//     // console.log(classes);
//     let div = d3
//       .select("body")
//       .append("div")
//       .attr("class", "tooltip")
//       .style("opacity", 0)
//       .style("background-color", "black");

//     const diameter = script.svgWidth,
//       radius = diameter / 2,
//       innerRadius = radius /2.5;

//       // console.log("Radius", radius, "Inner radiusss" , innerRadius)
//     let cluster = d3.cluster().size([360, innerRadius]);

//     let line = d3
//       .lineRadial()
//       .curve(d3.curveBundle.beta(0.85))
//       .radius(function (d) {
//         // console.log("ddddddddddddd", d);
//         return d.y;
//       })
//       .angle(function (d) {
//         return (d.x / 180) * Math.PI;
//       });

//     let svg = d3
//       .select("div#container")
//       .append("svg")
//       .attr("preserveAspectRatio", "xMinYMin meet")
//       .attr("viewBox", `-${script.svgWidth / 2} -450 ${script.svgWidth} 900`)
//       .classed("svg-content", true);
//     // .style("background-color", "pink");

//     svg
//       .selectAll("circle")
//       .data(classes)
//       .enter()
//       .append("circle")
//       .style("stroke", "#FED074")
//       .style("stroke-width", "5px")

//       .style("fill", "#FFE5B4")
//       .style("opacity", 0.1)
//       .attr("r", innerRadius)
//       .attr("cx", 0)
//       .attr("cy", 0);
//     svg
//       .append("g")
//       .attr("transform", "translate(" + radius + "," + radius + ")");

//     let link = svg.append("g").selectAll(".link"),
//       node = svg.append("g").selectAll(".node");

//     let root = packageHierarchy(classes).sum(function (d) {
//       return d.size;
//     });

//     // console.log("root size", root);
//     cluster(root);

//     // console.log("leaves", root.leaves());
//     link = link
//       .data(packageImports(root.leaves()))
//       .enter()
//       .append("path")
//       .each(function (d) {
//         (d.source = d[0]), (d.target = d[d.length - 1]);
//       })
//       .attr("class", "link")
//       .attr("d", line);

//     node = node.data(root.leaves());

//     // console.log("root", node);
//     node
//       .enter()
//       .append("a")
//       .attr("class", "node")
//       .attr("dy", "0.31em")
//       .append("text")
//       .attr("class", "node")
//       .attr("dy", "0.31em")
//       .attr("transform", function (d) {
//         return (
//           "rotate(" +
//           (d.x - 90) +
//           ")translate(" +
//           (d.y + 8) +
//           ",0)" +
//           (d.x < 180 ? "" : "rotate(180)")
//         );
//       })
//       .attr("text-anchor", function (d) {
//         return d.x < 180 ? "start" : "end";
//       })

//       .text(function (d) {
//         return d.data.name;
//         // return d.data.key;
//       })
//       .on("mouseover", mouseovered)
//       .on("mouseout", mouseouted);

//     function mouseovered(d, i) {
//       // console.log("mousemoved", i);
//       link
//         .classed("link--target", function (l) {
//           if (l.target === i) {
//             // console.log("targeett", l.target);
//             return (l.source.source = true);
//           }
//         })
//         .classed("link--source", function (l) {
//           if (l.source === i) return (l.target.target = true);
//         })

//         .filter(function (l) {
//           return l.target === i || l.source === i;
//         })

//         .raise();

//       node
//         .classed("node--target", function (n) {
//           return n.target;
//         })
//         .classed("node--source", function (n) {
//           return n.source;
//         });

//       div.transition().duration(200).style("opacity", 0.9);
//     }

//     function mouseouted() {
//       // console.log(d);
//       link.classed("link--target", false).classed("link--source", false);

//       node.classed("node--target", false).classed("node--source", false);
//       div.transition().duration(500).style("opacity", 0);
//     }

//     // Lazily construct the package hierarchy from class names.
//     function packageHierarchy(classes) {
//       let map = {};

//       function find(name, data) {
//         let node = map[name],
//           i;
        
//         if (!node) {
//           // console.log("1 node", node,"2 i", i)
//           node = map[name] = data || { name: name, children: [] };
//           if (name.length) {
//             console.log("ok",find(name.substring(0, (i = name.lastIndexOf(".")))))
//             // console.log("22 node", node,"33 i", i)
//             node.parent = find(name.substring(0, (i = name.lastIndexOf("."))));
//             node.parent.children.push(node);
//             node.key = name.substring(i + 1);

//           }
//         }
//         return node;
//       }

//       classes.forEach(function (d) {
//         // find(d.name, d);
//         let i;
//         find(d.name.substring(0, (i = d.name.lastIndexOf("."))), d);

//       });

//       return d3.hierarchy(map[""]);
//     }

//     // Return a list of imports for the given array of nodes.
//     function packageImports(nodes) {
//                               // console.log("parent", nodes)

//       // let map = {},
//       let map = [],
        
//         imports = [];

//       // Compute a map from name to node.
//       nodes.forEach(function (d) {
//         map[d.data.name] = d;
//       });

//       // console.log("i1",map)
//       // For each import, construct a link from the source to target node.
//       nodes.forEach(function (d) {
//         // console.log("liiiss", d.data.imports)
//         //ORIGINAL CODE 

//         // if (d.data.imports)
//         //   d.data.imports.forEach(function (i) {
//         //     console.log("mappp11",i)
//         //     imports.push(map[d.data.name].path(map[i]));
//         //   });
        
//         if (d.data.imports)
//             // console.log("kyaa yaar", d.data.imports)
//         d.data.imports.forEach(function (i, j) {
           
//             // console.log("mappp11", d.data.imports.length)
//             // console.log(i,"=============",d.data.imports[j])
//           imports.push(map[d.data.name].path(map[d.data.imports[j]]));
//           //  console.log("last i", imports)
//           });
//       });
//       console.log("11", imports)
//       return imports;
//     }
//   }
// }

class treeGraph {
  async dendoGram(classes) {
    // console.log(classes);
    let div = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("background-color", "black");

    const diameter = script.svgWidth,
      radius = diameter / 2,
      innerRadius = radius /2;

      // console.log("Radius", radius, "Inner radiusss" , innerRadius)
    let cluster = d3.cluster().size([360, innerRadius]);

    let line = d3
      .lineRadial()
      .curve(d3.curveBundle.beta(0.85))
      .radius(function (d) {
        // console.log("ddddddddddddd", d);
        return d.y;
      })
      .angle(function (d) {
        return (d.x / 180) * Math.PI;
      });

    let svg = d3
      .select("div#container")
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `-${script.svgWidth / 2} -450 ${script.svgWidth} 900`)
      .classed("svg-content", true);
    // .style("background-color", "pink");

    svg
      .selectAll("circle")
      .data(classes)
      .enter()
      .append("circle")
      .style("stroke", "#FED074")
      .style("stroke-width", "5px")

      .style("fill", "#FFE5B4")
      .style("opacity", 0.1)
      .attr("r", innerRadius)
      .attr("cx", 0)
      .attr("cy", 0);
    svg
      .append("g")
      .attr("transform", "translate(" + radius + "," + radius + ")");

    let link = svg.append("g").selectAll(".link"),
      node = svg.append("g").selectAll(".node");

    let root = packageHierarchy(classes).sum(function (d) {
      return d.size;
    });

    // console.log("root size", root);
    cluster(root);

    // console.log("leaves", root.leaves());
    link = link
      .data(packageImports(root.leaves()))
      .enter()
      .append("path")
      .each(function (d) {
        (d.source = d[0]), (d.target = d[d.length - 1]);
      })
      .attr("class", "link")
      .attr("d", line);

    node = node.data(root.leaves());

    // console.log("root", node);
    node
      .enter()
      .append("a")
      .attr("class", "node")
      // .attr("dy", "0.31em")
      .append("text")
      .attr("class", "node")
      // .attr("dy", "0.31em")
      .attr("transform", function (d) {
        return (
          "rotate(" +
          (d.x - 90) +
          ")translate(" +
          (d.y + 8) +
          ",0)" +
          (d.x < 180 ? "" : "rotate(180)")
        );
      })
      .attr("text-anchor", function (d) {
        return d.x < 180 ? "start" : "end";
      })

      .text(function (d) {
        return d.data.parentTag;
        // return d.data.key;
      })
      .on("mouseover", mouseovered)
      .on("mouseout", mouseouted);

    function mouseovered(d, i) {
      // console.log("mousemoved", i);
      link
        .classed("link--target", function (l) {
          if (l.target === i) {
            // console.log("targeett", l.target);
            return (l.source.source = true);
          }
        })
        .classed("link--source", function (l) {
          if (l.source === i) return (l.target.target = true);
        })

        .filter(function (l) {
          return l.target === i || l.source === i;
        })

        .raise();

      node
        .classed("node--target", function (n) {
          return n.target;
        })
        .classed("node--source", function (n) {
          return n.source;
        });

      div.transition().duration(200).style("opacity", 0.9);
    }

    function mouseouted() {
      // console.log(d);
      link.classed("link--target", false).classed("link--source", false);

      node.classed("node--target", false).classed("node--source", false);
      div.transition().duration(500).style("opacity", 0);
    }

    // Lazily construct the package hierarchy from class names.
    function packageHierarchy(classes) {
      let map = {};

      function find(parentTag, data) {
        let node = map[parentTag],
          i;
        if (!node) {
          node = map[parentTag] = data || { name: parentTag, children: [] };
          if (parentTag.length) {
          
            // console.log("okkk222",find(parentTag.substring(0, (i = parentTag.lastIndexOf("#")))))
            // node.parent = find(parentTag.substring(0, (i = parentTag.lastIndexOf("."))));
            node.parent = find(parentTag.substring(0, (i = parentTag.lastIndexOf("#"))));
            node.parent.children.push(node);
            node.key = parentTag.substring(i + 1);
          }
        }
        return node;
      }

      classes.forEach(function (d) {
        // console.log("name" , d.parentTag ,"and", d)
        find(d.parentTag, d);
      });

      return d3.hierarchy(map[""]);
    }

    // Return a list of imports for the given array of nodes.
    function packageImports(nodes) {
    // console.log("nodesss2",nodes)

      let map = {},
        importss = [];

      // Compute a map from name to node.
      nodes.forEach(function (d) {
        map[d.data.parentTag] = d;
        // console.log("mapssdd",map)
      });

      // console.log("i2",map)
      // For each import, construct a link from the source to target node.
      nodes.forEach(function (d) {
        // console.log("kyaa yaar 2", d.data.imports)
        if (d.data.imports)
          d.data.imports.forEach(function (i, j) {
            // console.log("i",i)
            // console.log("hmmm",j , map[i])
            if (typeof map[i] === 'undefined') {
              // console.log("haan g")
              return;
            }
            else{
            // for (let k = 0; k <= d.data.imports.length; k++) {
              // console.log("mappp",j, map[d.data.parentTag], "andd", map[i],"or",i)
              // console.log("break", d.data.imports.length)
              importss.push(map[d.data.parentTag].path(map[i]));
              // console.log("last i 2", importss)
            }
            
          });
      });
 
      // console.log("iiiimmmmmpppp",importss)
      return importss;
    }
  }
}
// eslint-disable-next-line no-redeclare
export { D3BarChart, scatterplot, scatterplot_rect, piePlot, treeGraph};
  // treeGraph1
