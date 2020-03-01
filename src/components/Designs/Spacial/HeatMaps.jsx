import React, { Fragment } from 'react';
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsTreeMap from 'highcharts/modules/treemap';
import HighchartBoost from 'highcharts/modules/boost';
import HighchartHeatMaps from 'highcharts/modules/heatmap';
import HighchartTileMaps from 'highcharts/modules/tilemap';
import { Styles } from '../../../styles/Designs/Lines';

HighchartBoost(Highcharts);
HighchartHeatMaps(Highcharts);
HighchartTileMaps(Highcharts);
HighchartsTreeMap(Highcharts);

export const HeatMaps = () => (
      <Fragment>
            <MonochromaticHeatMap />
            <SimpleHeatMap />
            <MonochromaticTreeMap />
            <DualTreeMap />
            <GroupedTreeMap />
            <SimpleTileMap />
      </Fragment>
)


const SimpleHeatMap = () => {
      const styl = Styles();
      const theme = useTheme();
      const getPointCategoryName = (point, dimension) => {
            var series = point.series,
                  isY = dimension === 'y',
                  axis = series[isY ? 'yAxis' : 'xAxis'];
            return axis.categories[point[isY ? 'y' : 'x']];
      }
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  marginTop: 40,
                  height: "480px",
                  type: 'heatmap',
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                  title: null,
                  reversed: true
            },
            colorAxis: {
                  min: 0,
                  minColor: "#FE9677",
                  maxColor: theme.chartConfig.colors[0],
                  marker: {
                        animation: 200,
                        width: theme.isMobile ? 3 : 7,
                        color: theme.text["00"]
                  }
            },
            plotOptions: {
                  series: {
                        dataLabels: {
                              enabled: true,
                              color: '#000000',
                              style: {
                                    textOutline: false
                              }
                        }
                  }
            },
            tooltip: {
                  formatter: function () {
                        return '<span><b>' + getPointCategoryName(this.point, 'x') + '-' + getPointCategoryName(this.point, 'y') + '</b></span>: <b>' + this.point.value + '</b><br/>';
                  }
            },
            legend: {
                  ...theme.chartConfig.legend,
                  verticalAlign: 'bottom',
                  symbolWidth: theme.isMobile ? 300 : 990
            },
            series: [
                  {
                        name: "Turnover",
                        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
                        marker: {
                              enabled: false
                        },
                        dataLabels: {
                              enabled: true,
                              color: theme.text["00"]
                        }
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Dual Heat Map
                        </Typography>
                  <Paper elevation={0} className={styl.paperSimpleHeat}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MonochromaticHeatMap = () => {
      const styl = Styles();
      const theme = useTheme();
      const getPointCategoryName = (point, dimension) => {
            var series = point.series,
                  isY = dimension === 'y',
                  axis = series[isY ? 'yAxis' : 'xAxis'];
            return axis.categories[point[isY ? 'y' : 'x']];
      }
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  marginTop: 40,
                  height: "480px",
                  type: 'heatmap',
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                  ...theme.chartConfig.xAxis,
                  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                  title: null,
                  reversed: true
            },
            colorAxis: {
                  min: 0,
                  minColor: theme.background["00"],
                  maxColor: theme.chartConfig.colors[0],
                  marker: {
                        animation: 200,
                        width: 7,
                        color: theme.text["00"]
                  }
            },
            tooltip: {
                  formatter: function () {
                        return '<span><b>' + getPointCategoryName(this.point, 'x') + '-' + getPointCategoryName(this.point, 'y') + '</b></span>: <b>' + this.point.value + '</b><br/>';
                  }
            },
            legend: {
                  ...theme.chartConfig.legend,
                  verticalAlign: 'bottom',
                  symbolWidth: theme.isMobile ? 300 : 990
            },
            plotOptions: {
                  series: {
                        dataLabels: {
                              enabled: true,
                              color: '#000000',
                              style: {
                                    textOutline: false
                              }
                        }
                  }
            },
            series: [
                  {
                        name: "Turnover",
                        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
                        marker: {
                              enabled: false
                        },
                        dataLabels: {
                              enabled: true,
                              color: theme.text["00"]
                        }
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Monochromatic Heat Map
                        </Typography>
                  <Paper elevation={0} className={styl.paperSimpleHeat}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SimpleTileMap = () => {
      const styl = Styles();
      const theme = useTheme();
      const getPointCategoryName = (point, dimension) => {
            var series = point.series,
                  isY = dimension === 'y',
                  axis = series[isY ? 'yAxis' : 'xAxis'];
            return axis.categories[point[isY ? 'y' : 'x']];
      }
      const chartConfig = {
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'tilemap',
                  inverted: true,
                  height: theme.isMobile ? "75%" : '70%'
            },
            credits: {
                  enabled: false
            },
            title: {
                  text: ""
            },
            xAxis: {
                  visible: false
            },
            yAxis: {
                  visible: false
            },
            colorAxis: {
                  dataClasses: [{
                        from: 0,
                        to: 1000000,
                        color: '#F9EDB3',
                        name: '< 1M'
                  }, {
                        from: 1000000,
                        to: 5000000,
                        color: '#FFC428',
                        name: '1M - 5M'
                  }, {
                        from: 5000000,
                        to: 20000000,
                        color: '#FF7987',
                        name: '5M - 20M'
                  }, {
                        from: 20000000,
                        color: '#FF2371',
                        name: '> 20M'
                  }]
            },
            plotOptions: {
                  series: {
                        dataLabels: {
                              enabled: true,
                              format: '{point.hc-a2}',
                              color: '#000000',
                              style: {
                                    textOutline: false
                              }
                        }
                  }
            },
            tooltip: {
                  headerFormat: '',
                  formatter: function () {
                        return '<span><b>' + getPointCategoryName(this.point, 'x') + '-' + getPointCategoryName(this.point, 'y') + '</b></span>: <b>' + this.point.value + '</b><br/>';
                  }
            },
            series: [{
                  name: '',
                  data: [{
                        'hc-a2': 'AL',
                        name: 'Alabama',
                        region: 'South',
                        x: 6,
                        y: 7,
                        value: 4849377
                  }, {
                        'hc-a2': 'AK',
                        name: 'Alaska',
                        region: 'West',
                        x: 0,
                        y: 0,
                        value: 737732
                  }, {
                        'hc-a2': 'AZ',
                        name: 'Arizona',
                        region: 'West',
                        x: 5,
                        y: 3,
                        value: 6745408
                  }, {
                        'hc-a2': 'AR',
                        name: 'Arkansas',
                        region: 'South',
                        x: 5,
                        y: 6,
                        value: 2994079
                  }, {
                        'hc-a2': 'CA',
                        name: 'California',
                        region: 'West',
                        x: 5,
                        y: 2,
                        value: 39250017
                  }, {
                        'hc-a2': 'CO',
                        name: 'Colorado',
                        region: 'West',
                        x: 4,
                        y: 3,
                        value: 5540545
                  }, {
                        'hc-a2': 'CT',
                        name: 'Connecticut',
                        region: 'Northeast',
                        x: 3,
                        y: 11,
                        value: 3596677
                  }, {
                        'hc-a2': 'DE',
                        name: 'Delaware',
                        region: 'South',
                        x: 4,
                        y: 9,
                        value: 935614
                  }, {
                        'hc-a2': 'DC',
                        name: 'District of Columbia',
                        region: 'South',
                        x: 4,
                        y: 10,
                        value: 7288000
                  }, {
                        'hc-a2': 'FL',
                        name: 'Florida',
                        region: 'South',
                        x: 8,
                        y: 8,
                        value: 20612439
                  }, {
                        'hc-a2': 'GA',
                        name: 'Georgia',
                        region: 'South',
                        x: 7,
                        y: 8,
                        value: 10310371
                  }, {
                        'hc-a2': 'HI',
                        name: 'Hawaii',
                        region: 'West',
                        x: 8,
                        y: 0,
                        value: 1419561
                  }, {
                        'hc-a2': 'ID',
                        name: 'Idaho',
                        region: 'West',
                        x: 3,
                        y: 2,
                        value: 1634464
                  }, {
                        'hc-a2': 'IL',
                        name: 'Illinois',
                        region: 'Midwest',
                        x: 3,
                        y: 6,
                        value: 12801539
                  }, {
                        'hc-a2': 'IN',
                        name: 'Indiana',
                        region: 'Midwest',
                        x: 3,
                        y: 7,
                        value: 6596855
                  }, {
                        'hc-a2': 'IA',
                        name: 'Iowa',
                        region: 'Midwest',
                        x: 3,
                        y: 5,
                        value: 3107126
                  }, {
                        'hc-a2': 'KS',
                        name: 'Kansas',
                        region: 'Midwest',
                        x: 5,
                        y: 5,
                        value: 2904021
                  }, {
                        'hc-a2': 'KY',
                        name: 'Kentucky',
                        region: 'South',
                        x: 4,
                        y: 6,
                        value: 4413457
                  }, {
                        'hc-a2': 'LA',
                        name: 'Louisiana',
                        region: 'South',
                        x: 6,
                        y: 5,
                        value: 4649676
                  }, {
                        'hc-a2': 'ME',
                        name: 'Maine',
                        region: 'Northeast',
                        x: 0,
                        y: 11,
                        value: 1330089
                  }, {
                        'hc-a2': 'MD',
                        name: 'Maryland',
                        region: 'South',
                        x: 4,
                        y: 8,
                        value: 6016447
                  }, {
                        'hc-a2': 'MA',
                        name: 'Massachusetts',
                        region: 'Northeast',
                        x: 2,
                        y: 10,
                        value: 6811779
                  }, {
                        'hc-a2': 'MI',
                        name: 'Michigan',
                        region: 'Midwest',
                        x: 2,
                        y: 7,
                        value: 9928301
                  }, {
                        'hc-a2': 'MN',
                        name: 'Minnesota',
                        region: 'Midwest',
                        x: 2,
                        y: 4,
                        value: 5519952
                  }, {
                        'hc-a2': 'MS',
                        name: 'Mississippi',
                        region: 'South',
                        x: 6,
                        y: 6,
                        value: 2984926
                  }, {
                        'hc-a2': 'MO',
                        name: 'Missouri',
                        region: 'Midwest',
                        x: 4,
                        y: 5,
                        value: 6093000
                  }, {
                        'hc-a2': 'MT',
                        name: 'Montana',
                        region: 'West',
                        x: 2,
                        y: 2,
                        value: 1023579
                  }, {
                        'hc-a2': 'NE',
                        name: 'Nebraska',
                        region: 'Midwest',
                        x: 4,
                        y: 4,
                        value: 1881503
                  }, {
                        'hc-a2': 'NV',
                        name: 'Nevada',
                        region: 'West',
                        x: 4,
                        y: 2,
                        value: 2839099
                  }, {
                        'hc-a2': 'NH',
                        name: 'New Hampshire',
                        region: 'Northeast',
                        x: 1,
                        y: 11,
                        value: 1326813
                  }, {
                        'hc-a2': 'NJ',
                        name: 'New Jersey',
                        region: 'Northeast',
                        x: 3,
                        y: 10,
                        value: 8944469
                  }, {
                        'hc-a2': 'NM',
                        name: 'New Mexico',
                        region: 'West',
                        x: 6,
                        y: 3,
                        value: 2085572
                  }, {
                        'hc-a2': 'NY',
                        name: 'New York',
                        region: 'Northeast',
                        x: 2,
                        y: 9,
                        value: 19745289
                  }, {
                        'hc-a2': 'NC',
                        name: 'North Carolina',
                        region: 'South',
                        x: 5,
                        y: 9,
                        value: 10146788
                  }, {
                        'hc-a2': 'ND',
                        name: 'North Dakota',
                        region: 'Midwest',
                        x: 2,
                        y: 3,
                        value: 739482
                  }, {
                        'hc-a2': 'OH',
                        name: 'Ohio',
                        region: 'Midwest',
                        x: 3,
                        y: 8,
                        value: 11614373
                  }, {
                        'hc-a2': 'OK',
                        name: 'Oklahoma',
                        region: 'South',
                        x: 6,
                        y: 4,
                        value: 3878051
                  }, {
                        'hc-a2': 'OR',
                        name: 'Oregon',
                        region: 'West',
                        x: 4,
                        y: 1,
                        value: 3970239
                  }, {
                        'hc-a2': 'PA',
                        name: 'Pennsylvania',
                        region: 'Northeast',
                        x: 3,
                        y: 9,
                        value: 12784227
                  }, {
                        'hc-a2': 'RI',
                        name: 'Rhode Island',
                        region: 'Northeast',
                        x: 2,
                        y: 11,
                        value: 1055173
                  }, {
                        'hc-a2': 'SC',
                        name: 'South Carolina',
                        region: 'South',
                        x: 6,
                        y: 8,
                        value: 4832482
                  }, {
                        'hc-a2': 'SD',
                        name: 'South Dakota',
                        region: 'Midwest',
                        x: 3,
                        y: 4,
                        value: 853175
                  }, {
                        'hc-a2': 'TN',
                        name: 'Tennessee',
                        region: 'South',
                        x: 5,
                        y: 7,
                        value: 6651194
                  }, {
                        'hc-a2': 'TX',
                        name: 'Texas',
                        region: 'South',
                        x: 7,
                        y: 4,
                        value: 27862596
                  }, {
                        'hc-a2': 'UT',
                        name: 'Utah',
                        region: 'West',
                        x: 5,
                        y: 4,
                        value: 2942902
                  }, {
                        'hc-a2': 'VT',
                        name: 'Vermont',
                        region: 'Northeast',
                        x: 1,
                        y: 10,
                        value: 626011
                  }, {
                        'hc-a2': 'VA',
                        name: 'Virginia',
                        region: 'South',
                        x: 5,
                        y: 8,
                        value: 8411808
                  }, {
                        'hc-a2': 'WA',
                        name: 'Washington',
                        region: 'West',
                        x: 2,
                        y: 1,
                        value: 7288000
                  }, {
                        'hc-a2': 'WV',
                        name: 'West Virginia',
                        region: 'South',
                        x: 4,
                        y: 7,
                        value: 1850326
                  }, {
                        'hc-a2': 'WI',
                        name: 'Wisconsin',
                        region: 'Midwest',
                        x: 2,
                        y: 5,
                        value: 5778708
                  }, {
                        'hc-a2': 'WY',
                        name: 'Wyoming',
                        region: 'West',
                        x: 3,
                        y: 3,
                        value: 584153
                  }]
            }]
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Honeycomb Tile Chart
                        </Typography>
                  <Paper elevation={0} className={styl.paperSimpleTile}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MonochromaticTreeMap = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'treemap',
                  marginTop: 40,
                  layoutAlgorithm: 'squarified',
                  height: theme.isMobile ? "100%" : "45%"
            },
            legend: {
                  ...theme.chartConfig.legend,
                  verticalAlign: 'bottom',
                  symbolWidth: theme.isMobile ? 325 : 1025
            },
            colorAxis: {
                  minColor: theme.background["00"],
                  maxColor: theme.chartConfig.colors[4],
                  marker: {
                        animation: 200,
                        width: 7,
                        color: theme.text["00"]
                  }
            },
            plotOptions: {
                  series: {
                        dataLabels: {
                              enabled: true,
                              color: theme.text["00"],
                              style: {
                                    textOutline: false
                              }
                        }
                  }
            },
            series: [
                  {
                        data: [{
                              name: 'Analytixa',
                              value: 15,
                              colorValue: 1
                        }, {
                              name: 'Google',
                              value: 12,
                              colorValue: 2
                        }, {
                              name: 'Apple',
                              value: 11,
                              colorValue: 3
                        }, {
                              name: 'Amazon',
                              value: 9,
                              colorValue: 4
                        }, {
                              name: 'Adobe',
                              value: 9,
                              colorValue: 5
                        }, {
                              name: 'Facebook',
                              value: 7,
                              colorValue: 6
                        }, {
                              name: 'Microsoft',
                              value: 5,
                              colorValue: 7
                        }, {
                              name: 'Disney',
                              value: 4,
                              colorValue: 4
                        }, {
                              name: 'Pixar',
                              value: 3,
                              colorValue: 5
                        }, {
                              name: 'Goldman Sachs',
                              value: 2,
                              colorValue: 6
                        }, {
                              name: 'JP Morgan',
                              value: 1,
                              colorValue: 7
                        }]
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Monochromatic Heat Tree Plot
                        </Typography>
                  <Paper elevation={0} className={styl.paperSimpleTree}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const DualTreeMap = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'treemap',
                  marginTop: 40,
                  layoutAlgorithm: 'squarified',
                  height: theme.isMobile ? "100%" : "45%"
            },
            legend: {
                  ...theme.chartConfig.legend,
                  verticalAlign: 'bottom',
                  symbolWidth: theme.isMobile ? 325 : 1025
            },
            colorAxis: {
                  minColor: "#FE9677",
                  maxColor: theme.chartConfig.colors[1],
                  marker: {
                        animation: 200,
                        width: 7,
                        color: theme.text["00"]
                  }
            },
            plotOptions: {
                  series: {
                        dataLabels: {
                              enabled: true,
                              color: theme.text["00"],
                              style: {
                                    textOutline: false
                              }
                        }
                  }
            },
            series: [
                  {
                        data: [{
                              name: 'Analytixa',
                              value: 15,
                              colorValue: 1
                        }, {
                              name: 'Google',
                              value: 12,
                              colorValue: 2
                        }, {
                              name: 'Apple',
                              value: 11,
                              colorValue: 3
                        }, {
                              name: 'Amazon',
                              value: 9,
                              colorValue: 4
                        }, {
                              name: 'Adobe',
                              value: 9,
                              colorValue: 5
                        }, {
                              name: 'Facebook',
                              value: 7,
                              colorValue: 6
                        }, {
                              name: 'Microsoft',
                              value: 5,
                              colorValue: 7
                        }, {
                              name: 'Disney',
                              value: 4,
                              colorValue: 4
                        }, {
                              name: 'Pixar',
                              value: 3,
                              colorValue: 5
                        }, {
                              name: 'Goldman Sachs',
                              value: 2,
                              colorValue: 6
                        }, {
                              name: 'JP Morgan',
                              value: 1,
                              colorValue: 7
                        }]
                  }
            ],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Dual Heat Tree Plot
                        </Typography>
                  <Paper elevation={0} className={styl.paperSimpleTree}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const GroupedTreeMap = () => {
      const styl = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: 'treemap',
                  marginTop: 40,
                  type: "treemap",
                  layoutAlgorithm: 'stripes',
                  alternateStartingDirection: true,
                  height: theme.isMobile ? "100%" : "45%"
            },
            plotOptions: {
                  series: {
                        dataLabels: {
                              enabled: true,
                              color: theme.text["00"],
                              style: {
                                    textOutline: false
                              }
                        }
                  }
            },
            legend: {
                  ...theme.chartConfig.legend,
                  verticalAlign: 'bottom',
                  symbolWidth: theme.isMobile ? 325 : 1025
            },
            series: [{
                  levels: [{
                        level: 1,
                        layoutAlgorithm: 'sliceAndDice',
                        dataLabels: {
                              enabled: true,
                              align: 'left',
                              verticalAlign: 'top',
                              style: {
                                    fontSize: '15px',
                                    fontWeight: 'bold'
                              }
                        }
                  }],
                  data: [{
                        id: 'A',
                        name: 'Apples',
                        color: theme.chartConfig.colors[0]
                  }, {
                        id: 'B',
                        name: 'Bananas',
                        color: theme.chartConfig.colors[1]
                  }, {
                        id: 'O',
                        name: 'Oranges',
                        color: theme.chartConfig.colors[2]
                  }, {
                        name: 'Anne',
                        parent: 'A',
                        value: 5
                  }, {
                        name: 'Rick',
                        parent: 'A',
                        value: 3
                  }, {
                        name: 'Peter',
                        parent: 'A',
                        value: 4
                  }, {
                        name: 'Anne',
                        parent: 'B',
                        value: 4
                  }, {
                        name: 'Rick',
                        parent: 'B',
                        value: 10
                  }, {
                        name: 'Peter',
                        parent: 'B',
                        value: 1
                  }, {
                        name: 'Anne',
                        parent: 'O',
                        value: 1
                  }, {
                        name: 'Rick',
                        parent: 'O',
                        value: 3
                  }, {
                        name: 'Peter',
                        parent: 'O',
                        value: 3
                  }, {
                        name: 'Susanne',
                        parent: 'Kiwi',
                        value: 2,
                        color: theme.chartConfig.colors[3]
                  }]
            }],
      }
      return (
            <div className={styl.root}>
                  <Typography className={styl.title} variant="h6" color="inherit">
                        Dual Heat Tree Plot
                        </Typography>
                  <Paper elevation={0} className={styl.paperSimpleTree}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}