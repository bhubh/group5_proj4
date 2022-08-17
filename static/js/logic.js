//  select the data for producition vs consumption plot
  d3.json("../static/js/full_us_data.json").then(function(data){console.log(data);

    // grab values
    var year = data.map(item => item.year)
    var renewable_production = data.map(item => item.produced_renewable)
    var total_consumed = data.map(item => item.total_consumed)

// create objects for total renewable and total consumption 
var object1 ={
    x: year,
    y: renewable_production,
    type: "bar",
    name: "Renewable Production",
    marker: {color: 'rgb(0, 153, 0)'},
    
};

var object2= {
    x: year,
    y:  total_consumed,
    type: "bar",
    name: "Total Energy Consumption",
    marker: {color: 'rgb(204, 0, 0)'},
}

// array
data =  [object1, object2]

//  layout features
var layout = {
    xaxis: {
        title : "Year",
        tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }},
    yaxis: {
      title: 'Billion BTU',
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }
    },
    legend: {
      x: 0,
      y: 1.5,
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1
  };

  var config = {responsive: true}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot1", data, layout, config);

});

//  select the data for differrence plot
Plotly.d3.csv("../static/csv/full_us_data.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
    var frames = []
    var x = unpack(rows, 'year')
    var y = unpack(rows, 'difference')
  
    var n = 100;
    for (var i = 0; i < n; i++) {
      frames[i] = {data: [{x: [], y: []}]}
      frames[i].data[0].x = x.slice(0, i+1);
      frames[i].data[0].y = y.slice(0, i+1);
    }
    // Render the plot to the div tag with id "plot2"
    Plotly.newPlot('plot2', [{
      x: frames[1].data[0].x,
      y: frames[1].data[0].y,
      fill: 'tozeroy',
      type: 'scatter',
      mode: 'lines',
      line: {color: 'green'},
    }], {
      title: "Difference Between Renewable Production and Total Consumed Energy",
      xaxis: {
        title:"Year",
        range: [
          1970, 2035
        ]
      },
      yaxis: {
        title: "Difference(Bil. BTU)",
        range: [
          -110506126.9,
          90
        ]
      },
      updatemenus: [{
        x: 0.1,
        y: 0,
        yanchor: "top",
        xanchor: "right",
        showactive: false,
        direction: "left",
        type: "buttons",
        pad: {"t": 87, "r": 10},
        buttons: [{
          method: "animate",
          args: [null, {
            fromcurrent: true,
            transition: {
              duration: 0,
            },
            frame: {
              duration: 40,
              redraw: false
            }
          }],
          label: "Play"
        }, {
          method: "animate",
          args: [
            [null],
            {
              mode: "immediate",
              transition: {
                duration: 0
              },
              frame: {
                duration: 0,
                redraw: false
              }
            }
          ],
          label: "Pause"
        }]
      }]
    }).then(function() {
      Plotly.addFrames('plot2', frames);
    });
  
  })
//////////////////////////////////////////
// create plots for states
// select the states data
d3.json("../static/js/states_full_data.json").then(function(data){console.log(data);
  document.getElementById("selDataset").addEventListener("change", function() {
    var value = this[this.selectedIndex].value;
    getPlot(value, data);
    getPlot2(value, data);
  })
  //  select and get dropdown variable
  var dropdown = d3.select("#selDataset");

  //  create states variable
  var states = data.map(item => item.state)

  console.log(states)

  // select the data for the dropdwown menu
  var filtered = states.filter(function(item, pos){
    return states.indexOf(item)== pos; 
  });
  console.log(filtered)
  //  add states to dropdown menu
  filtered.forEach( state => {
              dropdown
              .append("option")
              .text(state)
              .property("value", state);
          });
  
  // display plots
  getPlot(filtered[0], data);
  getPlot2(filtered[0], data);

// create a function that displays plots by selected states
  function getPlot(value, data){
    var year = data.map(item => value === item.state && item.year );
    var renewable = data.map(item => value === item.state && item.produced_renewable);
    var consumed = data.map(item  => value == item.state && item.total_consumed);

    console.log(renewable)
  
    var s_trace1 = {
      x: year,
      y: renewable,
      fill: 'tonexty',
      type: 'scatter',
      name: "Renewable Production",
      mode: 'lines',
      line: {
        dash: 'solid',
        width: 8
      },
      marker: {color: 'green'}
      
    };

    var s_trace2 = {
      x: year,
      y: consumed,
      fill: 'tozeroy',
      type: "scatteer",
      name: "Total Consumption",
      mode: 'lines',
      line: {
        dash: 'solid',
        width: 8
      },
      marker: {color: 'red'}
    }

    // layout settings
    var layout  = {
      title: "Renewable Production vs Total Energy Consumption",
      xaxis:{
        title:"Year",
        tickmode: "linear",
        dtick: 10
      },
      yaxis:{
        title:"Billion BTU"
      }
    
    };
    
    state_data = [s_trace1, s_trace2];
    
    // create the plot and give id Plot3
    Plotly.newPlot("plot3",state_data, layout);
  }
  function getPlot2(value, data){
    
    var year = data.map(item => value === item.state && item.year );
    var population = data.map(item => value === item.state && item.population);
    var price = data.map(item  => value === item.state && item.energy_price);

    var s_trace4 = {
      x: year,
      y: price,
      name: "Price",
      mode: 'lines',
      line: {
      dash: 'solid',
      width: 6
      },
      marker:{
        color: "rgb(255, 128, 0)"
      }
    };

    //  layout settings
    var layout  = {
      title: "Average Price",
      xaxis:{
        title:"Year"
      },
      yaxis:{
        title:"$/million BTU"
      },
      
    };
    
    state_data = [s_trace4];
    //  render plot ID and name plot4
    Plotly.newPlot("plot4",state_data, layout);
  };
  
}); 