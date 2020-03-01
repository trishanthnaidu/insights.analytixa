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


const MapComponent = ({
      props,
      state
}) => {
      const styl = Styles();
      const theme = useTheme();
      const colorScaleMono = scaleLinear()
            .domain([0.29, 0.68])
            .range(["#ffe8e5", theme.palette.primary.main]);
      const colorScaleBi = scaleLinear()
            .domain([0.29, 0.68])
            .range(["#ffe392", "#0f9318"]);
      const colorScaleHeat = scaleLinear()
            .domain([0.29, 0.33, 0.376, 0.419, 0.462, 0.505, 0.548, 0.591, 0.634, 0.68])
            .range([
                  "#171789",
                  "#4a1b9d",
                  "#7020a4",
                  "#93249c",
                  "#bc397e",
                  "#d0526b",
                  "#e57251",
                  "#f59a39",
                  "#f6bd26",
                  "#eaef1f"
            ]);

      return (
            <div className={styl.root}>
                  {
                        props.title !== "" &&
                        <Typography className={styl.title} variant="h6" color="inherit">
                              {props.title}
                        </Typography>
                  }
                  <Paper elevation={0} className={styl.paperWorldMap}>
                        <ComposableMap
                              data-tip=""
                              projection="geoMercator"
                              projectionConfig={{
                                    rotate: [-10, 0, 0],
                                    scale: 170
                              }}
                        >
                              {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                   <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
                              {state.data.length > 0 && (
                                    <Geographies geography={geoUrl}>
                                          {({ geographies }) =>
                                                geographies.map(geo => {
                                                      const d = state.data.find(s => s.ISO3 === geo.properties.ISO_A3);
                                                      if (geo.properties.ISO_A3 === "ATA" || geo.properties.ISO_A3 === "GRL") return [];
                                                      return (
                                                            <Geography
                                                                  id={geo.properties.ISO_A3}
                                                                  key={geo.rsmKey}
                                                                  geography={geo}
                                                                  className={styl.states}
                                                                  onMouseEnter={() => {
                                                                        const { NAME, POP_EST } = geo.properties;
                                                                        StoreManager.update("#MapComponent", {
                                                                              content: `${NAME}`
                                                                        })
                                                                  }}
                                                                  onMouseLeave={() => {
                                                                        StoreManager.update("#MapComponent", {
                                                                              content: ""
                                                                        })
                                                                  }}
                                                                  style={{
                                                                        default: props.type === "SIMPLE"
                                                                              ?
                                                                              {
                                                                                    stroke: theme.text[60],
                                                                              } : {
                                                                                    stroke: ""
                                                                              },
                                                                        hover: props.type === "SIMPLE"
                                                                              ?
                                                                              {
                                                                                    fill: fade(theme.palette.primary.main, 0.8),
                                                                                    stroke: theme.text[60],
                                                                              } : {
                                                                                    fill: ""
                                                                              }
                                                                  }}
                                                                  fill={
                                                                        props.type === "SIMPLE" ? theme.background[20]
                                                                              :
                                                                              props.type === "MONO_CHOROPLETH" ? (d ? colorScaleMono(d["2017"]) : fade(theme.text[30], 0.1))
                                                                                    :
                                                                                    props.type === "BI_CHOROPLETH" ? (d ? colorScaleBi(d["2017"]) : fade(theme.text[30], 0.1))
                                                                                          :
                                                                                          props.type === "HEAT_CHOROPLETH" ? (d ? colorScaleHeat(d["2017"]) : fade(theme.text[30], 0.1))
                                                                                                :
                                                                                                (d ? colorScaleMono(d["2017"]) : fade(theme.text[30], 0.1))
                                                                  }
                                                            />
                                                      );
                                                })
                                          }
                                    </Geographies>
                              )}
                        </ComposableMap>
                        <ReactTooltip>{state.content}</ReactTooltip>
                  </Paper>
            </div>
      )
}

export const Maps = createStore({
      storeID: "#MapComponent",
      Component: MapComponent,
      state: {
            content: "",
            data: worldMapJSON,
      }
});

export const WorldMap = () => (
      <Fragment>
            <Maps type="SIMPLE" title="Simple World Map" />
            <Maps type="MONO_CHOROPLETH" title="World Monochromatic Choropleth Map" />
            <Maps type="BI_CHOROPLETH" title="World Bichromatic Choropleth Map" />
            <Maps type="HEAT_CHOROPLETH" title="World Heat Choropleth Map" />
      </Fragment>
)
// export const WorldMap = () => (
//       <Fragment>
//             <MapComponent props={{ type= "MONO_CHOROPLETH", title: "Simple World Map" }} state={{ content: "", data: worldMapJSON }} />
//             <MapComponent props={{ type= "BI_CHOROPLETH", title: "World Choropleth Map" }} state={{ content: "", data: worldMapJSON }} />
//             <MapComponent props={{ type= "HEAT_CHOROPLETH", title: "Simple World Map2" }} state={{ content: "", data: worldMapJSON }} />
//       </Fragment>
// )


