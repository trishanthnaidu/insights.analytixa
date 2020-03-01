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

export const Radar = () => (
      <Fragment>
            <SimpleRadarChart />
            <MultiRadarChart />
            <SimplePolarChart />
            <MultiPolarChart />
            <RadialBarChart />
      </Fragment>
)

const SimpleRadarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  polar: true,
                  height: "100%"
            },
            xAxis: {
                  tickInterval: 45,
                  min: 0,
                  max: 360,
                  labels: {
                        format: '{value}°'
                  }
            },
            plotOptions: {
                  series: {
                        pointStart: 0,
                        pointInterval: 45
                  },
                  column: {
                        pointPadding: 0,
                        groupPadding: 0
                  }
            },
            yAxis: {
                  min: 0
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
            },
            series: [{
                  name: "Analytixa",
                  data: [8, 7, 6, 5, 4, 3, 2, 1],
                  pointPlacement: 'between'
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Radar Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperRadarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MultiRadarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  polar: true,
                  height: "100%"
            },
            xAxis: {
                  tickInterval: 45,
                  min: 0,
                  max: 360,
                  labels: {
                        format: '{value}°'
                  }
            },
            plotOptions: {
                  series: {
                        pointStart: 0,
                        pointInterval: 45
                  },
                  column: {
                        pointPadding: 0,
                        groupPadding: 0
                  }
            },
            yAxis: {
                  min: 0
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
            },
            series: [{
                  name: "Analytixa",
                  data: [8, 7, 6, 5, 4, 3, 2, 1],
                  pointPlacement: 'between'
            }, {
                  name: "Google",
                  data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                  name: "Amazon",
                  data: [1, 8, 2, 7, 3, 6, 4, 5]
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Multi Radar Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperRadarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimplePolarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  polar: true,
                  height: "100%"
            },
            xAxis: {
                  tickInterval: 45,
                  min: 0,
                  max: 360,
                  labels: {
                        format: '{value}°'
                  }
            },
            plotOptions: {
                  series: {
                        pointStart: 0,
                        pointInterval: 45
                  },
                  column: {
                        pointPadding: 0,
                        groupPadding: 0
                  }
            },
            yAxis: {
                  min: 0
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
            },
            series: [{
                  type: "column",
                  name: "Analytixa",
                  data: [8, 7, 6, 5, 4, 3, 2, 1],
                  pointPlacement: 'between'
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Polar Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperRadarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const RadialBarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  polar: true,
                  type: 'column',
                  inverted: true,
                  height: "100%"
            },
            xAxis: {
                  tickInterval: 1,
                  labels: {
                        align: 'right',
                        useHTML: true,
                        allowOverlap: true,
                        step: 1,
                        y: 4,
                        style: {
                              fontSize: '12px'
                        }
                  },
                  lineWidth: 0,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            plotOptions: {
                  column: {
                        stacking: 'normal',
                        borderWidth: 0,
                        pointPadding: 0,
                        groupPadding: 0.15
                  }
            },
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  outside: true
            },
            yAxis: {
                  lineWidth: 0,
                  tickInterval: 25,
                  reversedStacks: false,
                  endOnTick: true,
                  showLastLabel: true
            },
            pane: {
                  size: '85%',
                  endAngle: 270
            },
            series: [{
                  name: "Analytixa",
                  data: [132, 105, 92, 73, 64, 57, 55, 47, 45, 43],
            }, {
                  name: "Google",
                  data: [125, 110, 86, 64, 81, 46, 46, 38, 44, 63]
            }, {
                  name: "Amazon",
                  data: [111, 90, 60, 62, 87, 55, 52, 35, 41, 61]
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Polar Stack Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperRadarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MultiPolarChart = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  polar: true,
                  height: "100%"
            },
            xAxis: {
                  tickInterval: 45,
                  min: 0,
                  max: 360,
                  labels: {
                        format: '{value}°'
                  }
            },
            plotOptions: {
                  series: {
                        pointStart: 0,
                        pointInterval: 45
                  },
                  column: {
                        pointPadding: 0,
                        groupPadding: 0
                  }
            },
            yAxis: {
                  min: 0
            },
            pane: {
                  startAngle: 0,
                  endAngle: 360,
            },
            series: [{
                  type: "column",
                  name: "Analytixa",
                  data: [8, 7, 6, 5, 4, 3, 2, 1],
                  pointPlacement: 'between'
            }, {
                  type: "column",
                  name: "Google",
                  data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                  type: "column",
                  name: "Amazon",
                  data: [1, 8, 2, 7, 3, 6, 4, 5]
            }],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Multi Polar Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperRadarChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}