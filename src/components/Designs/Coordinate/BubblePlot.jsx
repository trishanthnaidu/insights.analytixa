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
import { Styles } from '../../../styles/Designs/Lines';

HighchartBoost(Highcharts);

export const BubblePlot = () => (
      <Fragment>
            <SimpleBubblePlot />
            <ThreeDimensionalBubblePlot />
            <GroupedBubblePlot />
            <GroupedSplitBubblePlot />
      </Fragment>
)

const SimpleBubblePlot = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bubble",
                  zoomType: 'xy'
            },
            yAxis: {
                  ...theme.chartConfig.yAxis,
                  plotLines: [{
                        color: theme.text[30],
                        dashStyle: 'longdashdot',
                        width: 1,
                        value: 50,
                        label: {
                              align: 'right',
                              style: {
                                    fontStyle: 'italic'
                              },
                              text: 'Y-Axis threshold',
                              x: -10
                        },
                        zIndex: 3
                  }],
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
                  plotLines: [{
                        color: theme.text[30],
                        dashStyle: 'longdashdot',
                        width: 1,
                        value: 65,
                        label: {
                              rotation: 0,
                              y: 15,
                              style: {
                                    fontStyle: 'italic'
                              },
                              text: 'X-Axis threshold'
                        },
                        zIndex: 3
                  }],
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [{ "x": 75, "y": 95, "z": 13.8 }, { "x": 46.5, "y": 102.9, "z": 14.7 }, { "x": 70.8, "y": 91.5, "z": 15.8 }, { "x": 82.4, "y": 102.5, "z": 12 }, { "x": 80.3, "y": 76.1, "z": 11.8 }, { "x": 78.4, "y": 60.1, "z": 16.6 }, { "x": 74.2, "y": 88.5, "z": 14.5 }, { "x": 73.5, "y": 43.1, "z": 10 }, { "x": 77, "y": 53.2, "z": 24.7 }, { "x": 59.2, "y": 97.6, "z": 10.4 }, { "x": 48.6, "y": 40, "z": 16 }, { "x": 65.5, "y": 86.4, "z": 35.3 }, { "x": 45.4, "y": 80.8, "z": 28.5 }, { "x": 53.4, "y": 91.8, "z": 15.4 }, { "x": 74, "y": 62.9, "z": 31.3 }],
                        marker: {
                              lineWidth: 1,
                        }
                  },
                  {
                        name: "Google",
                        data: [{ "x": 64, "y": 82.9, "z": 31.3 }, { "x": 63.4, "y": 51.8, "z": 15.4 }, { "x": 65.4, "y": 50.8, "z": 28.5 }, { "x": 65.5, "y": 126.4, "z": 35.3 }, { "x": 68.6, "y": 20, "z": 16 }, { "x": 69.2, "y": 57.6, "z": 10.4 }, { "x": 71, "y": 93.2, "z": 24.7 }, { "x": 73.5, "y": 83.1, "z": 10 }, { "x": 74.2, "y": 68.5, "z": 14.5 }, { "x": 78.4, "y": 70.1, "z": 16.6 }, { "x": 80.3, "y": 86.1, "z": 11.8 }, { "x": 80.4, "y": 102.5, "z": 12 }, { "x": 80.8, "y": 91.5, "z": 15.8 }, { "x": 86.5, "y": 102.9, "z": 14.7 }, { "x": 95, "y": 95, "z": 13.8 }],
                        marker: {
                              lineWidth: 1,
                        }
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Simple Bubble Chart
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
const ThreeDimensionalBubblePlot = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "bubble",
                  zoomType: 'xy'
            },
            yAxis: {
                  ...theme.chartConfig.yAxis,
                  plotLines: [{
                        color: theme.text[30],
                        dashStyle: 'longdashdot',
                        width: 1,
                        value: 50,
                        label: {
                              align: 'right',
                              style: {
                                    fontStyle: 'italic'
                              },
                              text: 'Y-Axis threshold',
                              x: -10
                        },
                        zIndex: 3
                  }],
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
                  plotLines: [{
                        color: theme.text[30],
                        dashStyle: 'longdashdot',
                        width: 1,
                        value: 65,
                        label: {
                              rotation: 0,
                              y: 15,
                              style: {
                                    fontStyle: 'italic'
                              },
                              text: 'X-Axis threshold'
                        },
                        zIndex: 3
                  }],
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [{ "x": 61, "y": 62.9, "z": 31.3 }, { "x": 53.4, "y": 61.8, "z": 15.4 }, { "x": 45.4, "y": 80.8, "z": 28.5 }, { "x": 69.5, "y": 86.4, "z": 35.3 }, { "x": 48.6, "y": 50, "z": 16 }, { "x": 59.2, "y": 97.6, "z": 10.4 }, { "x": 77, "y": 53.2, "z": 24.7 }, { "x": 63.5, "y": 43.1, "z": 10 }, { "x": 74.2, "y": 88.5, "z": 14.5 }, { "x": 88.4, "y": 60.1, "z": 16.6 }, { "x": 80.3, "y": 76.1, "z": 11.8 }, { "x": 82.4, "y": 102.5, "z": 12 }, { "x": 70.8, "y": 91.5, "z": 15.8 }, { "x": 46.5, "y": 102.9, "z": 14.7 }, { "x": 75, "y": 95, "z": 13.8 }],
                        marker: {
                              fillColor: {
                                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                                    stops: [
                                          [0, "#FFFFFFE0"],
                                          [1, fade(theme.chartConfig.colors[0], 0.5)]
                                    ]
                              },
                              lineWidth: 1,
                        }
                  },
                  {
                        name: "Google",
                        data: [{ "x": 54, "y": 82.9, "z": 31.3 }, { "x": 63.4, "y": 61.8, "z": 15.4 }, { "x": 65.4, "y": 30.8, "z": 28.5 }, { "x": 65.5, "y": 126.4, "z": 35.3 }, { "x": 58.6, "y": 20, "z": 16 }, { "x": 79.2, "y": 57.6, "z": 20.4 }, { "x": 71, "y": 53.2, "z": 24.7 }, { "x": 73.5, "y": 83.1, "z": 10 }, { "x": 74.2, "y": 68.5, "z": 14.5 }, { "x": 78.4, "y": 70.1, "z": 16.6 }, { "x": 80.3, "y": 86.1, "z": 11.8 }, { "x": 80.4, "y": 102.5, "z": 12 }, { "x": 80.8, "y": 91.5, "z": 15.8 }, { "x": 86.5, "y": 102.9, "z": 14.7 }, { "x": 95, "y": 95, "z": 13.8 }],
                        marker: {
                              fillColor: {
                                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                                    stops: [
                                          [0, "#FFFFFFE0"],
                                          [1, fade(theme.chartConfig.colors[1], 0.5)]
                                    ]
                              },
                              lineWidth: 1,
                        }
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        3D Bubble Chart
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
const GroupedBubblePlot = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "packedbubble",
                  height: "100%"
            },
            plotOptions: {
                  packedbubble: {
                        minSize: '30%',
                        maxSize: '120%',
                        zoneAxis: "x",
                        zMin: 0,
                        zMax: 1000,
                        layoutAlgorithm: {
                              splitSeries: false,
                              gravitationalConstant: 0.02
                        },
                  },
            },
            tooltip: {
                  backgroundColor: "#FFFFFFE0",
                  borderRadius: 20,
                  shadow: false,
                  useHTML: false,
                  crosshairs: true,
                  shared: true,
                  style: {
                        padding: 0
                  },
                  valueDecimals: 2,
                  pointFormat: '<span style="color:{series.color}">{point.name}</span>: <b>{point.value}</b><br/>'
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [{ "name": "Member0", "value": 579 }, { "name": "Member1", "value": 45 }, { "name": "Member2", "value": 325 }, { "name": "Member3", "value": 277 }, { "name": "Member4", "value": 304 }, { "name": "Member5", "value": 209 }, { "name": "Member6", "value": 355 }, { "name": "Member7", "value": 95 }, { "name": "Member8", "value": 355 }, { "name": "Member9", "value": 566 }, { "name": "Member10", "value": 217 }, { "name": "Member11", "value": 532 }],
                  },
                  {
                        name: "Google",
                        data: [{ "name": "Member0", "value": 29.9 }, { "name": "Member1", "value": 71.5 }, { "name": "Member2", "value": 106.4 }, { "name": "Member3", "value": 129.2 }, { "name": "Member4", "value": 144 }, { "name": "Member5", "value": 176 }, { "name": "Member6", "value": 135.6 }, { "name": "Member7", "value": 148.5 }, { "name": "Member8", "value": 216.4 }, { "name": "Member9", "value": 194.1 }, { "name": "Member10", "value": 295.6 }, { "name": "Member11", "value": 454.4 }],
                  },
                  {
                        name: "Amazon",
                        data: [{ "name": "Member0", "value": 454.4 }, { "name": "Member1", "value": 295.6 }, { "name": "Member2", "value": 194.1 }, { "name": "Member3", "value": 216.4 }, { "name": "Member4", "value": 148.5 }, { "name": "Member5", "value": 135.6 }, { "name": "Member6", "value": 176 }, { "name": "Member7", "value": 144 }, { "name": "Member8", "value": 129.2 }, { "name": "Member9", "value": 106.4 }, { "name": "Member10", "value": 71.5 }, { "name": "Member11", "value": 29.9 }],
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned} ${styl.verticalAlignedFirst}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Free Float Bubble Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperclusteredBubble}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}
const GroupedSplitBubblePlot = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "packedbubble",
                  height: "100%"
            },
            plotOptions: {
                  packedbubble: {
                        minSize: '10%',
                        maxSize: '100%',
                        zoneAxis: "x",
                        zMin: 0,
                        zMax: 800,
                        layoutAlgorithm: {
                              splitSeries: true,
                              gravitationalConstant: 0.1
                        },
                        dataLabels: {
                              enabled: false,
                        }
                  },
            },
            tooltip: {
                  backgroundColor: "#FFFFFFE0",
                  borderRadius: 20,
                  shadow: false,
                  useHTML: false,
                  crosshairs: true,
                  shared: true,
                  style: {
                        padding: 0
                  },
                  valueDecimals: 2,
                  pointFormat: '<span style="color:{series.color}">{point.name}</span>: <b>{point.value}</b><br/>'
            },
            series: [
                  {
                        name: "Analytixa",
                        data: [{ "name": "Member0", "value": 579 }, { "name": "Member1", "value": 45 }, { "name": "Member2", "value": 325 }, { "name": "Member3", "value": 277 }, { "name": "Member4", "value": 304 }, { "name": "Member5", "value": 209 }, { "name": "Member6", "value": 355 }, { "name": "Member7", "value": 95 }, { "name": "Member8", "value": 355 }, { "name": "Member9", "value": 566 }, { "name": "Member10", "value": 217 }, { "name": "Member11", "value": 532 }],
                  },
                  {
                        name: "Google",
                        data: [{ "name": "Member0", "value": 29.9 }, { "name": "Member1", "value": 71.5 }, { "name": "Member2", "value": 106.4 }, { "name": "Member3", "value": 129.2 }, { "name": "Member4", "value": 144 }, { "name": "Member5", "value": 176 }, { "name": "Member6", "value": 135.6 }, { "name": "Member7", "value": 148.5 }, { "name": "Member8", "value": 216.4 }, { "name": "Member9", "value": 194.1 }, { "name": "Member10", "value": 295.6 }, { "name": "Member11", "value": 454.4 }],
                  },
                  {
                        name: "Amazon",
                        data: [{ "name": "Member0", "value": 454.4 }, { "name": "Member1", "value": 295.6 }, { "name": "Member2", "value": 194.1 }, { "name": "Member3", "value": 216.4 }, { "name": "Member4", "value": 148.5 }, { "name": "Member5", "value": 135.6 }, { "name": "Member6", "value": 176 }, { "name": "Member7", "value": 144 }, { "name": "Member8", "value": 129.2 }, { "name": "Member9", "value": 106.4 }, { "name": "Member10", "value": 71.5 }, { "name": "Member11", "value": 29.9 }],
                  }
            ],
      }
      return (
            <div className={`${styl.root} ${styl.verticalAligned}`}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Clustered Bubble Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperclusteredBubble}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}