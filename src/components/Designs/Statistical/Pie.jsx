import React, { Fragment } from 'react';
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsPatternFill from 'highcharts-pattern-fill';
import HighchartsMore from 'highcharts-more';
import HighchartBoost from 'highcharts/modules/boost';
import HighchartVariablePie from 'highcharts/modules/variable-pie';
import { Styles } from '../../../styles/Designs/Lines';

HighchartBoost(Highcharts);
HighchartVariablePie(Highcharts);

export const Pie = () => (
      <Fragment>
            <SimplePieChart />
            <MonochromePieChart />
            <GradientPieChart />
            <VariableChartPieChart />
            <SemiCircleChart />
      </Fragment>
)

const SimplePieChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              sliced: true,
                              selected: true,
                        }, {
                              name: "Apple",
                              y: 15,
                        }, {
                              name: "Google",
                              y: 10,
                        }, {
                              name: "Amazon",
                              y: 15,
                        }, {
                              name: "Microsoft",
                              y: 5,
                        }, {
                              name: "Adobe",
                              y: 10,
                        }, {
                              name: "Disney",
                              y: 5
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Pie Chart
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

const MonochromePieChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              sliced: true,
                              selected: true,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.42).get('rgb')
                        }, {
                              name: "Apple",
                              y: 15,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.28).get('rgb')
                        }, {
                              name: "Google",
                              y: 10,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.14).get('rgb')
                        }, {
                              name: "Amazon",
                              y: 15,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0).get('rgb')
                        }, {
                              name: "Microsoft",
                              y: 5,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0.14).get('rgb')
                        }, {
                              name: "Adobe",
                              y: 10,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0.28).get('rgb')
                        }, {
                              name: "Disney",
                              y: 5,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0.42).get('rgb')
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Monochromatic Pie Chart
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

const GradientPieChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              sliced: true,
                              selected: true,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[0]],
                                          [1, Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Apple",
                              y: 15,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[1]],
                                          [1, Highcharts.color(theme.chartConfig.colors[1]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Google",
                              y: 10,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[2]],
                                          [1, Highcharts.color(theme.chartConfig.colors[2]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Amazon",
                              y: 15,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[3]],
                                          [1, Highcharts.color(theme.chartConfig.colors[3]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Microsoft",
                              y: 5,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[4]],
                                          [1, Highcharts.color(theme.chartConfig.colors[4]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Adobe",
                              y: 10,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[5]],
                                          [1, Highcharts.color(theme.chartConfig.colors[5]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Disney",
                              y: 5,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[6]],
                                          [1, Highcharts.color(theme.chartConfig.colors[6]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Gradient Pie Chart
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

const VariableChartPieChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "variablepie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              z: 30
                        }, {
                              name: "Apple",
                              y: 15,
                              z: 20
                        }, {
                              name: "Amazon",
                              y: 15,
                              z: 25
                        }, {
                              name: "Google",
                              y: 10,
                              z: 30
                        }, {
                              name: "Microsoft",
                              y: 5,
                              z: 35
                        }, {
                              name: "Adobe",
                              y: 10,
                              z: 40
                        }, {
                              name: "Disney",
                              y: 5,
                              z: 25
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Variable Size Pie Chart
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

const SemiCircleChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            plotOptions: {
                  pie: {
                        ...theme.chartConfig.plotOptions.pie,
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%'
                  }
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        data: [{
                              name: "Analytixa",
                              y: 40,
                        }, {
                              name: "Apple",
                              y: 15,
                        }, {
                              name: "Google",
                              y: 10,
                        }, {
                              name: "Amazon",
                              y: 15,
                        }, {
                              name: "Microsoft",
                              y: 5,
                        }, {
                              name: "Adobe",
                              y: 10,
                        }, {
                              name: "Disney",
                              y: 5
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Half Pie Chart
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