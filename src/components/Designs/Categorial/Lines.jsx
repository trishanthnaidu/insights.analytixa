import React, { Fragment } from 'react';
import {
      Typography,
      Paper,
      useTheme
} from '../../Core';
import Highcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import { Styles } from '../../../styles/Designs/Lines';

export const Lines = () => (
      <Fragment>
            <SimpleChart />
            <ContrastLineChart />
            <MultipleLineChart />
            <ZonedLineChart />
            <RangeLineChart />
            <SimpleSplineChart />
            <ContrastSplineChart />
            <MultipleSplineChart />
            <ZonedSplineChart />
            <RangeSplineChart />
      </Fragment>

)

const SimpleChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
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
                        Simple Line Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const MultipleLineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
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
                        Multi-Line Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const ContrastLineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
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
                        Contrast Line Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperContrastLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const ZonedLineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
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
                        Line Zone Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const RangeLineChart = () => {
      HighchartsMore(Highcharts.Highcharts);
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
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
                        Line Range Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const SimpleSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "spline"
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
                        Simple Spline Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const MultipleSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "spline"
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
                        Multi-Spline Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const ContrastSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "spline"
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
                        Contrast Spline Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperContrastSpline}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const ZonedSplineChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "spline"
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
                        Spline Zone Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}

const RangeSplineChart = () => {
      HighchartsMore(Highcharts.Highcharts);
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "spline"
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
                        Spline Range Chart
                  </Typography>
                  <Paper elevation={0} className={styl.paperSimpleLine}>
                        <Highcharts config={chartConfig}></Highcharts>
                  </Paper>
            </div>
      )
}