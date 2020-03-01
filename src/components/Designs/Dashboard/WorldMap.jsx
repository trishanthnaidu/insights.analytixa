import React, { useEffect, useState, Fragment } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";
import worldMapJSON from "../../../assets/CSV/worldMap.json";
import {
      ComposableMap,
      Geographies,
      Geography,
      Sphere,
      Graticule
} from "react-simple-maps";
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import { createStore, StoreManager } from "@rootzjs/store";
import { Styles } from '../../../styles/Designs/WorldMap';


const geoUrl =
      "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const filterMapping = {
      "Population": "POP_EST",
      "GDP": "GDP_MD_EST",
      "GDP per Capita": "GDP_MD_EST"
}

const domianMapping = {
      "Population": [0, 200000000],
      "GDP": [1000, 4000000],
      "GDP per Capita": [0, 0.07],
}

const domianMappingBi = {
      "Population": [1000, 100000000, 1500000000],
      "GDP": [10000, 1000000, 30000000],
      "GDP per Capita": [0, 0.07],
}

const domianMappingHeat = {
      "Population": [10000, 500000, 7000000, 4000000, 7000000, 10000000, 30000000, 50000000, 100000000, 500000000],
      "GDP": [50, 30000, 70000, 100000, 200000, 300000, 1000000, 3000000, 10000000, 15000000],
      "GDP per Capita": [0, 0.07]
}

export const Maps = ({
      type,
      filterBy,
      content,
      topSelection
}) => {
      const styl = Styles();
      const theme = useTheme();
      const colorScaleGray = scaleLinear()
            .domain(domianMappingBi[filterBy])
            .range(["#EEE", "#AAA", "#666"]);
      const colorScaleMono = scaleLinear()
            .domain(domianMapping[filterBy])
            .range(["#ffe8e5", theme.palette.primary.main]);
      const colorScaleBi = scaleLinear()
            .domain(domianMappingBi[filterBy])
            .range(["#ffe392", "#0f9318", "#003500"]);
      const colorScaleHeat = scaleLinear()
            .domain(domianMappingHeat[filterBy])
            .range(["#eaef1f", "#f6bd26", "#f59a39", "#e57251", "#d0526b", "#bc397e", "#93249c", "#7020a4", "#4a1b9d", "#171789"]);
      const getFillData = (geo, d) => {
            let fill;
            switch (type) {
                  case "SIMPLE": {
                        fill = theme.background[20];
                        break;
                  }
                  case "MONO_CHOROPLETH": {
                        const data = filterBy === "GDP per Capita" ? (geo.properties[filterMapping["GDP"]] / geo.properties[filterMapping["Population"]]) : geo.properties[filterMapping[filterBy]]
                        fill = (d ? colorScaleMono(data) : fade(theme.text[30], 0.1));
                        break;
                  }
                  case "BI_CHOROPLETH": {
                        const data = filterBy === "GDP per Capita" ? (geo.properties[filterMapping["GDP"]] / geo.properties[filterMapping["Population"]]) : geo.properties[filterMapping[filterBy]]
                        fill = (d ? colorScaleBi(data) : fade(theme.text[30], 0.1));
                        break;
                  }
                  case "HEAT_CHOROPLETH": {
                        const data = filterBy === "GDP per Capita" ? (geo.properties[filterMapping["GDP"]] / geo.properties[filterMapping["Population"]]) : geo.properties[filterMapping[filterBy]]
                        fill = (d ? colorScaleHeat(data) : fade(theme.text[30], 0.1));
                        break;
                  }
                  default: {
                        const data = filterBy === "GDP per Capita" ? (geo.properties[filterMapping["GDP"]] / geo.properties[filterMapping["Population"]]) : geo.properties[filterMapping[filterBy]]
                        fill = (d ? colorScaleGray(data) : fade(theme.text[30], 0.1))
                  }
            }
            return fill;
      }
      
      return (
            <div className={styl.root}>
                  <Paper elevation={0} className={styl.paperWorldMap}>
                        <ComposableMap
                              data-tip=""
                              projection="geoMercator"
                              projectionConfig={{
                                    rotate: [-10, 0, 0],
                                    scale: 80
                              }}
                        >
                              {worldMapJSON.length > 0 && (
                                    <Geographies geography={geoUrl}>
                                          {({ geographies }) => {
                                                const appProfile = StoreManager.getProfile();
                                                if (!appProfile.hasOwnProperty("geoData")) {
                                                      StoreManager.setProfile({ geoData: geographies.map(x => x.properties) });
                                                      StoreManager.requestUpdate("#TopBottomFilter");
                                                }
                                                return (
                                                      geographies.map(geo => {
                                                            const d = worldMapJSON.find(s => s.ISO3 === geo.properties.ISO_A3);
                                                            let stylClass = styl.states;
                                                            if (geo.properties.ISO_A3 === "ATA" || geo.properties.ISO_A3 === "GRL") return [];
                                                            return (
                                                                  <Geography
                                                                        id={geo.properties.ISO_A3}
                                                                        key={geo.rsmKey}
                                                                        geography={geo}
                                                                        className={stylClass}
                                                                        onMouseEnter={() => {
                                                                              let contentText = "";
                                                                              const { NAME, POP_EST, GDP_MD_EST } = geo.properties;
                                                                              if (filterBy === "Population") {
                                                                                    contentText = `${NAME} - ${rounded(POP_EST)}`
                                                                              } else if (filterBy === "GDP") {
                                                                                    contentText = `${NAME} - ${rounded(GDP_MD_EST)}`
                                                                              } else if (filterBy === "GDP per Capita") {
                                                                                    contentText = `${NAME} - ${rounded(GDP_MD_EST / POP_EST)}`
                                                                              }
                                                                              StoreManager.update("#MapInsights", {
                                                                                    content: contentText
                                                                              })
                                                                        }}
                                                                        onMouseLeave={() => {
                                                                              StoreManager.update("#MapInsights", {
                                                                                    content: ""
                                                                              })
                                                                        }}
                                                                        style={{
                                                                              default: type === "SIMPLE"
                                                                                    ?
                                                                                    {
                                                                                          stroke: theme.text[60],
                                                                                    } : {
                                                                                          stroke: ""
                                                                                    },
                                                                              hover: type === "SIMPLE"
                                                                                    ?
                                                                                    {
                                                                                          fill: fade(theme.palette.primary.main, 0.8),
                                                                                          stroke: theme.text[60],
                                                                                    } : {
                                                                                          fill: ""
                                                                                    }
                                                                        }}
                                                                        fill={getFillData(geo, d)}
                                                                  />
                                                            );
                                                      })
                                                )
                                          }
                                          }
                                    </Geographies>
                              )}
                        </ComposableMap>
                        <ReactTooltip>{content}</ReactTooltip>
                  </Paper>
            </div>
      )
}

const rounded = num => {
      if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
      } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
      } else {
            return Math.round(num / 100) / 10 + "K";
      }
};


