import { darkThemeStyles } from './Dark';
import { lightThemeStyles } from './Light';
import { STUDIO_COLOR } from './Master'

const themeCollections = {
      light: lightThemeStyles,
      dark: darkThemeStyles
}

export const chartThemeStyles = selectedTheme => ({
      chartConfig: {
            chart: {
                  type: "line",
                  height: "280px",
                  style: {
                        fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  },
            },
            colors: [STUDIO_COLOR, "#00bcd4", "#ff5722", "#8bc34a", "#2196f3", "#4caf50", "#03a9f4", "#009688", "#00bcd4"],
            title: {
                  text: ""
            },
            xAxis: {
                  gridLineWidth: 0,
                  gridLineColor: themeCollections[selectedTheme].text[70],
                  tickColor: themeCollections[selectedTheme].text[50],
                  labels: {
                        style: {
                              color: themeCollections[selectedTheme].text[50],
                        }
                  },
                  title: {
                        style: {
                              color: themeCollections[selectedTheme].text[30],
                              fontWeight: 'bold',
                              fontSize: '12px',

                        }
                  }
            },
            yAxis: {
                  gridLineColor: themeCollections[selectedTheme].text[70],
                  tickColor: themeCollections[selectedTheme].text[50],
                  labels: {
                        style: {
                              color: themeCollections[selectedTheme].text[50],
                        }
                  },
                  title: {
                        style: {
                              color: themeCollections[selectedTheme].text[30],
                              fontWeight: 'bold',
                              fontSize: '12px',
                        }
                  }
            },
            credits: {
                  enabled: false
            },
            legend: {
                  layout: 'horizontal',
                  align: 'right',
                  verticalAlign: 'top',
                  symbolHeight: 10,
                  symbolWidth: 10,
                  symbolRadius: 12,
                  itemStyle: {
                        fontWeight: 400,
                        color: themeCollections[selectedTheme].text[30],
                  },
                  itemHoverStyle: {
                        color: themeCollections[selectedTheme].text[20],
                  },
            },
            plotOptions: {
                  series: {
                        marker: {
                              symbol: "circle",
                              lineWidth: 3,
                              radius: 5,
                        },
                        animation: {
                              duration: 2000
                        },
                  },
                  line: {
                        lineWidth: 1,
                  },
                  column: {
                        borderColor: "#FFFFFF60"
                  },
                  lollipop: {
                        connectorWidth: 10,
                        marker: {
                              lineColor: "#FFFFFFA0"
                        }
                  },
                  dumbbell: {
                        connectorWidth: 7,
                        marker: {
                              lineColor: "#FFFFFFA0"
                        }
                  },
                  bar: {
                        borderColor: "#FFFFFF60"
                  },
                  scatter: {
                        marker: {
                              symbol: "circle",
                              radius: 5,
                              lineWidth: 0,
                              lineColor: "#FFFFFFA0",
                              states: {
                                    hover: {
                                          enabled: true,
                                          lineColor: themeCollections[selectedTheme].text[20]
                                    }
                              }
                        },
                        states: {
                              hover: {
                                    marker: {
                                          enabled: false
                                    }
                              }
                        },
                        tooltip: {
                              pointFormat: '<span>{series.name}</span>: <b>{point.x}, {point.y}</b>{point.change}<br/>',
                        }
                  },
                  pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                              enabled: false
                        },
                        showInLegend: true,
                        borderColor: "#FFFFFF60"
                  },
                  variablepie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                              enabled: false
                        },
                        showInLegend: true,
                        borderColor: "#FFFFFF60"
                  },
                  solidgauge: {
                        dataLabels: {
                              enabled: false
                        },
                        linecap: 'round',
                        stickyTracking: false,
                        rounded: true
                  }
            },
            tooltip: {
                  backgroundColor: STUDIO_COLOR,
                  borderRadius: 10,
                  shadow: false,
                  useHTML: false,
                  crosshairs: true,
                  shared: true,
                  borderColor: "none",
                  style: {
                        padding: 0,
                        stroke: "none",
                        fontSize: "11px",
                        color: "#FFFFFF"
                  },
                  pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b style="color:{series.color}">{point.y}</b>{point.change}<br/>',
                  valueDecimals: 2,
                  split: true,
                  hideDelay: 1000
            }
      },
});