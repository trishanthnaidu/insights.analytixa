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
import MapData from '../../../assets/CSV/worldMap.json';
import { createStore, StoreManager } from '@rootzjs/store';

import { Styles } from '../../../styles/Designs/Dashboard';

HighchartsMore(Highcharts);
HighchartsPatternFill(Highcharts);
HighchatrsSteamGraph(Highcharts)

const categories = ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];

const Population = ({
      state
}) => {
      const styl = Styles();
      const theme = useTheme();
      debugger;
      const filteredMapData = MapData.find(x => x.Name === state.country);
      const data = categories.map(x => filteredMapData[x]);
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
                  categories
            },
            yAxis: {
                  visible: false,
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
                        name: state.country,
                        data,
                        marker: {
                              enabled: false
                        },
                  },
            ],
            tooltip: {
                  ...theme.chartConfig.tooltip,
                  backgroundColor: theme.palette.secondary.main,
                  pointFormat: '<span style="color: #FFFFFFE0>{series.name}</span>: <b>{point.y}</b>{point.change}<br/>',
                  style: {
                        color: "#FFFFFF",
                        fontSize: "12px",
                        fontWeight: "normal",
                        textOutline: "none",
                  },
            }
      }
      return (
            <div className={styl.root}>
                  <Paper elevation={0} className={styl.paperContrastAreaSpline}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

export const PopulationByCountry = createStore({
      storeID: "#Population",
      Component: Population,
      state: {
            country: "World"
      },
})