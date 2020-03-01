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
import HighchartsLollipop from 'highcharts/modules/lollipop';
import HighchartsDumbell from 'highcharts/modules/dumbbell';
import HighchartsRoundedCorners from 'yarn-highcharts-rounded-corners';
import { Styles } from '../../../styles/Designs/Lines';

HighchartsRoundedCorners(Highcharts);
HighchartsMore(Highcharts);
HighchartsDumbell(Highcharts);
HighchartsLollipop(Highcharts);

export const Bars = () => (
      <Fragment>
            <SimpleBarChart />
            <GradientBarChart />
            <MultipleBarChart />
            <StackedBarChart />
            <VerticalBarChart />
            <VerticalGroupedBarChart />
            <VerticalStackedBarChart />
            <PyramidBarChart />
            <SimpleLipstickChart />
            <GradientLipstickChart />
            <PyramidLipstickChart />
            <PyramidLollipopChart />
            <SimpleLollipopChart />
            <SimpleCableBrideChart />
            <SimpleDumbellChart />
            <ContrastBarChart />
            <ZonedBarChart />
            <RangeBarChart />
      </Fragment>
)

const SimpleBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const GradientBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: {
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
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Gradient Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleLollipopChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "lollipop"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  pointWidth: 50,
                  series: {
                        marker: {
                              symbol: "circle",
                              lineWidth: 5,
                              radius: 15
                        }
                  }
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 60, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: "#f33535"
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Lollipop Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleCableBrideChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "lollipop"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  pointWidth: 50,
                  series: {
                        marker: {
                              symbol: "circle",
                              lineWidth: 5,
                              radius: 15
                        }
                  }
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 60, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: fade(theme.chartConfig.colors[1], 0.3)
                  },
                  {
                        name: "Connectors",
                        type: "line",
                        data: [579, 60, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: theme.chartConfig.colors[1],
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Cable-Stayed Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleLipstickChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  column: {
                        ...theme.chartConfig.plotOptions.column,
                        borderRadiusTopLeft: "50%",
                        borderRadiusTopRight: "50%"
                  }
            },
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: theme.chartConfig.colors[1],
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Lipstick Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const GradientLipstickChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  column: {
                        ...theme.chartConfig.plotOptions.column,
                        borderRadiusTopLeft: "50%",
                        borderRadiusTopRight: "50%"
                  }
            },
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        color: {
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
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Gradient Lipstick Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const ContrastBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            colors: ["#FFFFFF", "#FFFFFF80"],
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
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532]
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
                        Contrast Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperContrastSpline}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const ZonedBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
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
                              fillColor: theme.chartConfig.colors[1]
                        }, {
                              value: 8,
                              dashStyle: 'dot',
                              color: theme.chartConfig.colors[2],
                              fillColor: theme.chartConfig.colors[3]
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
                        Bar Zone Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const RangeBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
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
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                        zIndex: 1,
                  },
                  {
                        name: 'Range',
                        data: [[450, 620], [12, 190], [140, 480], [102, 490], [120, 470], [129, 329], [219, 530], [20, 299], [196, 489], [430, 699], [129, 376], [307, 667]],
                        type: 'arearange',
                        lineWidth: 0,
                        fillOpacity: 0.3,
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
                        Bar Range Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleDumbellChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "dumbbell"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  pointWidth: 50,
                  series: {
                        marker: {
                              symbol: "circle",
                              lineWidth: 5,
                              radius: 12,
                        },
                        lowColor: "#9E9E9E"
                  },
            },
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  shared: true,
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [{
                              low: 69,
                              high: 82
                        }, {
                              low: 70,
                              high: 81
                        }, {
                              low: 69,
                              high: 75
                        }, {
                              low: 65,
                              high: 78
                        }, {
                              low: 70,
                              high: 81
                        }, {
                              low: 70,
                              high: 79
                        }, {
                              low: 72,
                              high: 81
                        }, {
                              low: 68,
                              high: 78
                        }, {
                              low: 69,
                              high: 81
                        }, {
                              low: 70,
                              high: 83
                        }, {
                              low: 68,
                              high: 81
                        }, {
                              low: 69,
                              high: 83
                        }],
                        color: theme.chartConfig.colors[3],
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Dumbbell Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MultipleBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532]
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                  },
                  {
                        name: "Amazon",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9]
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Grouped Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const StackedBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "column"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  column: {
                        ...theme.chartConfig.plotOptions.column,
                        stacking: 'normal',
                  }
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532]
                  },
                  {
                        name: "Amazon",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9]
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                  },
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Stacked Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleBar}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const VerticalBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bar",
                  height: theme.isMobile ? "480px" : "600px",
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532],
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Vertical Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.verticalBarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const VerticalGroupedBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bar",
                  height: theme.isMobile ? "480px" : "600px",
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532]
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                  },
                  {
                        name: "Amazon",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9]
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Vertical Grouped Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.verticalBarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const VerticalStackedBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bar",
                  height: theme.isMobile ? "480px" : "600px",
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  bar: {
                        ...theme.chartConfig.plotOptions.column,
                        stacking: 'normal',
                  }
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [579, 45, 325, 277, 304, 209, 355, 95, 355, 566, 217, 532]
                  },
                  {
                        name: "Amazon",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9]
                  },
                  {
                        name: "Google",
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                  },
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Vertical Stacked Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.verticalBarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const PyramidBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bar",
                  height: theme.isMobile ? "480px" : "600px",
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  series: {
                        ...theme.chartConfig.plotOptions.series,
                        stacking: 'normal'
                  }
            },
            xAxis: [{
                  ...theme.chartConfig.xAxis,
                  reversed: false,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }, {
                  ...theme.chartConfig.xAxis,
                  opposite: true,
                  reversed: false,
                  linkedTo: 0,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            series: [
                  {
                        name: "Analytixa",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9]
                  },
                  {
                        name: "Amazon",
                        data: [-454.4, -295.6, -194.1, -216.4, -148.5, -135.6, -176, -144, -129.2, -106.4, -71.5, -29.9]
                  },
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Pyramid Bar Chart
                  </Typography>
                  <Paper elevation={0} className={styl.verticalBarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const PyramidLipstickChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bar",
                  height: theme.isMobile ? "480px" : "600px",
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  series: {
                        ...theme.chartConfig.plotOptions.series,
                        stacking: 'normal'
                  },
            },
            xAxis: [{
                  ...theme.chartConfig.xAxis,
                  reversed: false,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }, {
                  ...theme.chartConfig.xAxis,
                  opposite: true,
                  reversed: false,
                  linkedTo: 0,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            series: [
                  {
                        name: "Analytixa",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9],
                        borderRadiusTopLeft: "50%",
                        borderRadiusTopRight: "50%",
                        color: "#f33535"
                  },
                  {
                        name: "Amazon",
                        data: [-454.4, -295.6, -194.1, -216.4, -148.5, -135.6, -176, -144, -129.2, -106.4, -71.5, -29.9],
                        borderRadiusBottomLeft: "50%",
                        borderRadiusBottomRight: "50%",
                        color: theme.chartConfig.colors[4]
                  },
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Pyramid Lipstick Chart
                  </Typography>
                  <Paper elevation={0} className={styl.verticalBarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const PyramidLollipopChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "lollipop",
                  height: theme.isMobile ? "480px" : "600px",
                  inverted: true
            },
            plotOptions: {
                  ...theme.chartConfig.plotOptions,
                  pointWidth: 50,
                  series: {
                        ...theme.chartConfig.plotOptions.series,
                        stacking: 'normal',
                        marker: {
                              symbol: "circle",
                              lineWidth: 5,
                              radius: 15
                        }
                  }
            },
            xAxis: [{
                  ...theme.chartConfig.xAxis,
                  reversed: false,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }, {
                  ...theme.chartConfig.xAxis,
                  opposite: true,
                  reversed: false,
                  linkedTo: 0,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            series: [
                  {
                        name: "Analytixa",
                        data: [454.4, 295.6, 194.1, 216.4, 148.5, 135.6, 176, 144, 129.2, 106.4, 71.5, 29.9],
                  },
                  {
                        name: "Amazon",
                        data: [-454.4, -295.6, -194.1, -216.4, -148.5, -135.6, -176, -144, -129.2, -106.4, -71.5, -29.9],
                        color: theme.chartConfig.colors[4]
                  },
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Pyramid Lollipop Chart
                  </Typography>
                  <Paper elevation={0} className={styl.verticalBarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}