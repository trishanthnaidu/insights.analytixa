import React, { Fragment } from 'react';
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartSolidGauge from 'highcharts/modules/solid-gauge';
import { Styles } from '../../../styles/Designs/Lines';

HighchartsMore(Highcharts);
HighchartSolidGauge(Highcharts);

export const Gauge = () => (
      <Fragment>
            <SimpleGaugeChart />
            <AppleActivityChart />
            <GradientGaugeChart />
      </Fragment>
)

const SimpleGaugeChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'solidgauge',
                  height: '100%',
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  borderWidth: 0,
                  backgroundColor: 'none',
                  shadow: false,
                  style: {
                        fontSize: '16px'
                  },
                  valueSuffix: '%',
                  pointFormat: '<span style="color: ' + theme.text[40] + '"><b>{series.name}</b></span><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
                  positioner: function (labelWidth) {
                        return {
                              x: 205,  //(this.chart.chartWidth - labelWidth) / 2,
                              y: 200, //(this.chart.plotHeight / 2) + 15
                        };
                  }
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
                  background: [{
                        outerRadius: '112%',
                        innerRadius: '88%',
                        backgroundColor: Highcharts.color(theme.chartConfig.colors[0])
                              .setOpacity(0.3)
                              .get(),
                        borderWidth: 0
                  }, {
                        outerRadius: '87%',
                        innerRadius: '63%',
                        backgroundColor: Highcharts.color(theme.chartConfig.colors[1])
                              .setOpacity(0.3)
                              .get(),
                        borderWidth: 0
                  }, {
                        outerRadius: '62%',
                        innerRadius: '38%',
                        backgroundColor: Highcharts.color(theme.chartConfig.colors[2])
                              .setOpacity(0.3)
                              .get(),
                        borderWidth: 0
                  }]
            },
            yAxis: {
                  min: 0,
                  max: 100,
                  lineWidth: 0,
                  tickPositions: []
            },
            series: [{
                  name: 'Move',
                  data: [{
                        color: theme.chartConfig.colors[0],
                        radius: '112%',
                        innerRadius: '88%',
                        y: 80
                  }]
            }, {
                  name: 'Exercise',
                  data: [{
                        color: theme.chartConfig.colors[1],
                        radius: '87%',
                        innerRadius: '63%',
                        y: 65
                  }]
            }, {
                  name: 'Stand',
                  data: [{
                        color: theme.chartConfig.colors[2],
                        radius: '62%',
                        innerRadius: '38%',
                        y: 50
                  }]
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Gauge
                        </Typography>
                  <Paper elevation={0} className={styl.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const GradientGaugeChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'solidgauge',
                  height: '100%',
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  borderWidth: 0,
                  backgroundColor: 'none',
                  shadow: false,
                  style: {
                        fontSize: '16px'
                  },
                  valueSuffix: '%',
                  pointFormat: '<span style="color: ' + theme.text[40] + '"><b>{series.name}</b></span><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
                  positioner: function (labelWidth) {
                        return {
                              x: 205,  //(this.chart.chartWidth - labelWidth) / 2,
                              y: 200, //(this.chart.plotHeight / 2) + 15
                        };
                  }
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
                  background: [{
                        outerRadius: '112%',
                        innerRadius: '88%',
                        backgroundColor: Highcharts.color(theme.chartConfig.colors[0])
                              .setOpacity(0.3)
                              .get(),
                        borderWidth: 0
                  }, {
                        outerRadius: '87%',
                        innerRadius: '63%',
                        backgroundColor: Highcharts.color(theme.chartConfig.colors[1])
                              .setOpacity(0.3)
                              .get(),
                        borderWidth: 0
                  }, {
                        outerRadius: '62%',
                        innerRadius: '38%',
                        backgroundColor: Highcharts.color(theme.chartConfig.colors[2])
                              .setOpacity(0.3)
                              .get(),
                        borderWidth: 0
                  }]
            },
            yAxis: {
                  min: 0,
                  max: 100,
                  lineWidth: 0,
                  tickPositions: []
            },
            series: [{
                  name: 'Move',
                  data: [{
                        color: {
                              linearGradient: {
                                    x1: 0.5,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[0]],
                                    [1, Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.3).get('rgb')]
                              ]
                        },
                        radius: '112%',
                        innerRadius: '88%',
                        y: 80
                  }]
            }, {
                  name: 'Exercise',
                  data: [{
                        color: {
                              linearGradient: {
                                    x1: 0.5,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[1]],
                                    [1, Highcharts.color(theme.chartConfig.colors[1]).brighten(-0.3).get('rgb')]
                              ]
                        },
                        radius: '87%',
                        innerRadius: '63%',
                        y: 65
                  }]
            }, {
                  name: 'Stand',
                  data: [{
                        color: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[2]],
                                    [1, Highcharts.color(theme.chartConfig.colors[2]).brighten(-0.3).get('rgb')]
                              ]
                        },
                        radius: '62%',
                        innerRadius: '38%',
                        y: 50
                  }]
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}  ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Gradient Gauge
                        </Typography>
                  <Paper elevation={0} className={styl.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const AppleActivityChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'solidgauge',
                  height: '100%',
            },
            subtitle: {
                  text: `${theme.theme === "light" ? "*Switch to dark theme, for more accurate expeirence (toggle on top right)" : ""}`
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  borderWidth: 0,
                  backgroundColor: 'none',
                  shadow: false,
                  style: {
                        fontSize: '16px'
                  },
                  valueSuffix: '%',
                  pointFormat: '<span style="color: ' + theme.text[40] + '"><b>{series.name}</b></span><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
                  positioner: function (labelWidth) {
                        return {
                              x: 205,  //(this.chart.chartWidth - labelWidth) / 2,
                              y: 200, //(this.chart.plotHeight / 2) + 15
                        };
                  }
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
                  background: [{
                        outerRadius: '112%',
                        innerRadius: '88%',
                        backgroundColor: "#F9398620",
                        borderWidth: 0
                  }, {
                        outerRadius: '87%',
                        innerRadius: '63%',
                        backgroundColor: "#D7FF0020",
                        borderWidth: 0
                  }, {
                        outerRadius: '62%',
                        innerRadius: '38%',
                        backgroundColor: "#00FFA720",
                        borderWidth: 0
                  }]
            },
            yAxis: {
                  min: 0,
                  max: 100,
                  lineWidth: 0,
                  tickPositions: []
            },
            series: [{
                  name: 'Move',
                  data: [{
                        color: {
                              linearGradient: {
                                    x1: 0.5,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, "#FA1150"],
                                    [1, "#F93986"]
                              ]
                        },
                        radius: '112%',
                        innerRadius: '88%',
                        y: 80
                  }]
            }, {
                  name: 'Exercise',
                  data: [{
                        color: {
                              linearGradient: {
                                    x1: 0.5,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, "#9AFE00"],
                                    [1, "#D7FF00"]
                              ]
                        },
                        radius: '87%',
                        innerRadius: '63%',
                        y: 65
                  }]
            }, {
                  name: 'Stand',
                  data: [{
                        color: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, "#00DEFD"],
                                    [1, "#00FFA7"]
                              ]
                        },
                        radius: '62%',
                        innerRadius: '38%',
                        y: 50
                  }]
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Apple Activity Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}