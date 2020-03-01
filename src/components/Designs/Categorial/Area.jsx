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
import HighchatrsSteamGraph from 'highcharts/modules/streamgraph';
import HighchartsPatternFill from 'highcharts/modules/pattern-fill';
import { Styles } from '../../../styles/Designs/Lines';

HighchartsMore(Highcharts);
HighchartsPatternFill(Highcharts);
HighchatrsSteamGraph(Highcharts)

export const Area = () => (
      <Fragment>
            <SimpleChart />
            <SimpleAreaWithLineChart />
            <ContrastAreaChart />
            <AreaWithGradientChart />
            <MultipleAreaChart />
            <ZonedAreaChart />
            <SteamChart />
            <RangeAreaChart />
            <SimpleAreaWithSplineChart />
            <ContrastAreaWithSplineChart />
            <PatternAreaChart />
            <PatternAreaWithGradientChart />
            <MultipleAreaChartSpline />
            <ZonedSplineAreaChart />
            <RangeAreaSplineChart />
      </Fragment>

)

const SimpleChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Area Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleAreaWithLineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: theme.chartConfig.colors[2],
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Line Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleAreaWithSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[0]],
                                    [1, fade(theme.chartConfig.colors[0], 0.3)]
                              ]
                        },
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[1]],
                                    [1, fade(theme.chartConfig.colors[1], 0.3)]
                              ]
                        },
                  },
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Spline Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const AreaWithGradientChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  area: {
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[3]],
                                    [1, fade(theme.chartConfig.colors[3], 0.3)]
                              ]
                        },
                  }
            },
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: theme.chartConfig.colors[5],
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Gradient Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MultipleAreaChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[0]],
                                    [1, fade(theme.chartConfig.colors[0], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[1]],
                                    [1, fade(theme.chartConfig.colors[1], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Amazon",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[2]],
                                    [1, fade(theme.chartConfig.colors[2], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Multi-Line Area Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MultipleAreaChartSpline = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        fillOpacity: 0.3,
                        color: theme.chartConfig.colors[3],
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[3]],
                                    [1, fade(theme.chartConfig.colors[3], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
                        fillOpacity: 0.3,
                        color: theme.chartConfig.colors[4],
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[4]],
                                    [1, fade(theme.chartConfig.colors[4], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Amazon",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9],
                        fillOpacity: 0.3,
                        color: theme.chartConfig.colors[2],
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[2]],
                                    [1, fade(theme.chartConfig.colors[2], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Multi-Spline Area Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const ContrastAreaChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            colors: ["#FFFFFF80", "#FFFFFF"],
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  series: {
                        ...theme.chartConfig.plotOptions.series,
                        marker: {
                              ...theme.chartConfig.plotOptions.series.marker,
                              lineWidth: 0,
                              radius: 5
                        },
                  }
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  lineColor: "#FFFFFF80",
                  tickColor: "#FFFFFF80",
                  labels: {
                        ...theme.chartConfig.xAxis,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
                  title: {
                        ...theme.chartConfig.xAxis.title,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                  ...theme.chartConfig.yAxis,
                  lineColor: "#FFFFFF80",
                  tickColor: "#FFFFFF80",
                  labels: {
                        ...theme.chartConfig.yAxis.labels,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
                  title: {
                        ...theme.chartConfig.xAxis.title,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
            },
            legend: {
                  ...theme.chartConfig.legend,
                  itemStyle: {
                        fontWeight: 400,
                        color: "#FFFFFFE0",
                  },
                  itemHoverStyle: {
                        color: "#FFFFFF",
                  },
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                  },
            ],
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  backgroundColor: "#FFFFFFA0",
                  pointFormat: '<span style="color: #FFFFFFE0>{series.name}</span>: <b>{point.y}</b>{point.change}<br/>',
            }
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Contrast Area Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperContrastArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const ContrastAreaWithSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            colors: ["#FFFFFF80", "#FFFFFF"],
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  series: {
                        ...theme.chartConfig.plotOptions.series,
                        marker: {
                              ...theme.chartConfig.plotOptions.series.marker,
                              lineWidth: 0,
                              radius: 5
                        },
                  }
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  lineColor: "#FFFFFF80",
                  tickColor: "#FFFFFF80",
                  labels: {
                        ...theme.chartConfig.xAxis,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
                  title: {
                        ...theme.chartConfig.xAxis.title,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                  ...theme.chartConfig.yAxis,
                  lineColor: "#FFFFFF80",
                  tickColor: "#FFFFFF80",
                  labels: {
                        ...theme.chartConfig.yAxis.labels,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
                  title: {
                        ...theme.chartConfig.xAxis.title,
                        style: {
                              color: "#FFFFFF",
                        }
                  },
            },
            legend: {
                  ...theme.chartConfig.legend,
                  itemStyle: {
                        fontWeight: 400,
                        color: "#FFFFFFE0",
                  },
                  itemHoverStyle: {
                        color: "#FFFFFF",
                  },
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
                        marker: {
                              enabled: false
                        }
                  },
            ],
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  backgroundColor: "#FFFFFFA0",
                  pointFormat: '<span style="color: #FFFFFFE0>{series.name}</span>: <b>{point.y}</b>{point.change}<br/>',
            }
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Contrast Area Spline Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperContrastAreaSpline}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const ZonedAreaChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  area: {
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[0]],
                                    [1, fade(theme.chartConfig.colors[0], 0.3)]
                              ]
                        },
                  }
            },
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        zoneAxis: 'x',
                        zones: [{
                              value: 3,
                              dashStyle: 'solid',
                              color: theme.chartConfig.colors[1],
                              fillColor: {
                                    linearGradient: {
                                          x1: 0,
                                          y1: 0,
                                          x2: 0,
                                          y2: 1
                                    },
                                    stops: [
                                          [0, theme.chartConfig.colors[1]],
                                          [1, fade(theme.chartConfig.colors[1], 0.3)]
                                    ]
                              },
                        }, {
                              value: 8,
                              dashStyle: 'dot',
                              color: theme.chartConfig.colors[2],
                              fillColor: {
                                    linearGradient: {
                                          x1: 0,
                                          y1: 0,
                                          x2: 0,
                                          y2: 1
                                    },
                                    stops: [
                                          [0, theme.chartConfig.colors[2]],
                                          [1, fade(theme.chartConfig.colors[2], 0.3)]
                                    ]
                              },
                        },]
                  }
            ],
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  borderColor: "#888"
            }
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Zone Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const ZonedSplineAreaChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  area: {
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[0]],
                                    [1, fade(theme.chartConfig.colors[0], 0.3)]
                              ]
                        },
                  }
            },
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        zoneAxis: 'x',
                        zones: [{
                              value: 3,
                              dashStyle: 'solid',
                              color: theme.chartConfig.colors[1],
                              fillColor: {
                                    linearGradient: {
                                          x1: 0,
                                          y1: 0,
                                          x2: 0,
                                          y2: 1
                                    },
                                    stops: [
                                          [0, theme.chartConfig.colors[1]],
                                          [1, fade(theme.chartConfig.colors[1], 0.3)]
                                    ]
                              },
                        }, {
                              value: 8,
                              dashStyle: 'dot',
                              color: theme.chartConfig.colors[2],
                              fillColor: {
                                    linearGradient: {
                                          x1: 0,
                                          y1: 0,
                                          x2: 0,
                                          y2: 1
                                    },
                                    stops: [
                                          [0, theme.chartConfig.colors[2]],
                                          [1, fade(theme.chartConfig.colors[2], 0.3)]
                                    ]
                              },
                        },]
                  }
            ],
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  borderColor: "#888"
            }
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Spline Zone Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const RangeAreaChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'area'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  crosshairs: true,
                  shared: true,
                  borderColor: "#888"
            },
            series: [
                  {
                        name: "Analytixa - Min Range",
                        data: [[450, 620], [112, 190], [240, 480], [202, 390], [120, 370], [129, 329], [219, 430], [120, 299], [196, 289], [370, 599], [129, 276], [307, 467]],
                        type: 'arearange',
                        zIndex: 1,
                        fillOpacity: 0.5,
                        tooltip: {
                              ...theme.chartConfig.tooltip,
                              valueDecimals: 0,
                              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>',
                        }
                  },
                  {
                        name: 'Analytixa - Max Range',
                        data: [[350, 620], [12, 290], [140, 580], [102, 490], [20, 470], [29, 329], [119, 530], [20, 399], [96, 389], [230, 699], [129, 376], [207, 567]],
                        type: 'arearange',
                        lineWidth: 0,
                        fillOpacity: 0.5,
                        zIndex: 0,
                        marker: {
                              enabled: false
                        },
                        tooltip: {
                              ...theme.chartConfig.tooltip,
                              valueDecimals: 0,
                              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>',
                        }
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Range Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const RangeAreaSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  crosshairs: true,
                  shared: true,
                  borderColor: "#888"
            },
            series: [
                  {
                        name: "Analytixa - Min Range",
                        data: [[450, 620], [112, 190], [240, 480], [202, 390], [120, 370], [129, 329], [219, 430], [120, 299], [196, 289], [370, 599], [129, 276], [307, 467]],
                        type: 'areasplinerange',
                        zIndex: 1,
                        fillOpacity: 0.5,
                        tooltip: {
                              ...theme.chartConfig.tooltip,
                              valueDecimals: 0,
                              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>',
                        }
                  },
                  {
                        name: 'Analytixa - Max Range',
                        data: [[350, 620], [12, 290], [140, 580], [102, 490], [20, 470], [29, 329], [119, 530], [20, 399], [96, 389], [230, 699], [129, 376], [207, 567]],
                        type: 'areasplinerange',
                        lineWidth: 0,
                        fillOpacity: 0.5,
                        zIndex: 0,
                        marker: {
                              enabled: false
                        },
                        tooltip: {
                              ...theme.chartConfig.tooltip,
                              valueDecimals: 0,
                              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>',
                        }
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Area Spline Range Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const PatternAreaChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            defs: {
                  patterns: [{
                        'id': 'custom-pattern-0',
                        'path': {
                              d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                              stroke: theme.chartConfig.colors[0],
                              strokeWidth: 3,
                        }
                  }, {
                        'id': 'custom-pattern-1',
                        'path': {
                              d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                              stroke: theme.chartConfig.colors[1],
                              strokeWidth: 3,
                        }
                  }]
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: theme.chartConfig.colors[0],
                        fillColor: 'url(#custom-pattern-0)'
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
                        color: theme.chartConfig.colors[1],
                        fillColor: 'url(#custom-pattern-1)'
                  },
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Patterned Area Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const PatternAreaWithGradientChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'areaspline'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            defs: {
                  patterns: [{
                        'id': 'custom-pattern0',
                        'path': {
                              d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                              stroke: theme.chartConfig.colors[2],
                              strokeWidth: 3,
                              fill: {
                                    linearGradient: {
                                          x1: 0,
                                          y1: 0,
                                          x2: 0,
                                          y2: 1
                                    },
                                    stops: [
                                          [0, theme.chartConfig.colors[2]],
                                          [1, fade(theme.chartConfig.colors[2], 0.3)]
                                    ]
                              },
                              marker: {
                                    enabled: false
                              },
                        }
                  }, {
                        'id': 'custom-pattern1',
                        'path': {
                              d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                              stroke: theme.chartConfig.colors[4],
                              strokeWidth: 3,
                              fill: {
                                    linearGradient: {
                                          x1: 0,
                                          y1: 0,
                                          x2: 0,
                                          y2: 1
                                    },
                                    stops: [
                                          [0, theme.chartConfig.colors[4]],
                                          [1, fade(theme.chartConfig.colors[4], 0.3)]
                                    ]
                              },
                        }
                  }]
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        fillColor: 'url(#custom-pattern0)',
                        color: theme.chartConfig.colors[2],
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
                        fillColor: 'url(#custom-pattern1)',
                        color: theme.chartConfig.colors[4],
                        marker: {
                              enabled: false
                        },
                  },
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Patterned Gradient Area Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SteamChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'streamgraph',
                  marginBottom: 30,
                  zoomType: 'x'
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  type: 'category',
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [
                              0, 3, 4, 2, 4, 0, 0, 8, 8, 11, 6, 12, 11, 5, 6, 7, 1, 10, 21, 9, 17, 17, 23, 16, 70
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[0]],
                                    [1, fade(theme.chartConfig.colors[0], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Google",
                        data: [
                              0, 2, 5, 3, 7, 0, 0, 10, 4, 10, 7, 7, 8, 4, 2, 4, 8, 6, 4, 3, 3, 7, 14, 11, 15
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[1]],
                                    [1, fade(theme.chartConfig.colors[1], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Amazon",
                        data: [
                              0, 17, 15, 10, 15, 0, 0, 10, 16, 4, 6, 15, 14, 12, 7, 10, 9, 5, 20, 26, 25, 25, 19, 23, 36
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[2]],
                                    [1, fade(theme.chartConfig.colors[2], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Apple",
                        data: [
                              0, 4, 6, 12, 4, 0, 0, 9, 11, 7, 10, 7, 7, 8, 10, 12, 8, 6, 11, 13, 13, 34, 25, 37, 28
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[3]],
                                    [1, fade(theme.chartConfig.colors[3], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Adobe",
                        data: [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 14, 19, 23, 24, 25, 0, 0, 0, 0, 0, 0, 0
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[4]],
                                    [1, fade(theme.chartConfig.colors[4], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Disney",
                        data: [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 10, 5, 4, 8, 0, 0, 0, 0, 0, 0, 0
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[5]],
                                    [1, fade(theme.chartConfig.colors[5], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Facebook",
                        data: [
                              0, 0, 1, 2, 6, 0, 0, 0, 7, 2, 8, 9, 0, 0, 0, 0, 0, 0, 26, 24, 29, 36, 29, 30, 19
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[6]],
                                    [1, fade(theme.chartConfig.colors[6], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Alphabet",
                        data: [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 21, 25, 13, 16, 27, 22, 25, 29, 0, 0, 0, 0, 0, 0, -1
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[7]],
                                    [1, fade(theme.chartConfig.colors[7], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  },
                  {
                        name: "Microsoft",
                        data: [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, -4
                        ],
                        fillOpacity: 0.3,
                        fillColor: {
                              linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                              },
                              stops: [
                                    [0, theme.chartConfig.colors[8]],
                                    [1, fade(theme.chartConfig.colors[8], 0.3)]
                              ]
                        },
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Steam Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleArea}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}