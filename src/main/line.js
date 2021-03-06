import Carbon from "@cerner/carbon-graphs/dist/js/carbon-graphs.js";
import "@cerner/carbon-graphs/dist/css/carbon-graphs.css";
import "./line.css";

const graphConfiguration = {
    bindTo: "#root",
    axis: {
        x: {
            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
            label: "Datetime",
            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),
            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()
        },
        y: {
            label: "Temperature (degF)",
            lowerLimit: 90,
            upperLimit: 106
        }
    }
};
const dataset = {
    key: "uid_1",
    label: {
        display: "Oral Temperature"
    },
    shape: Carbon.helpers.SHAPES.RHOMBUS,
    color: Carbon.helpers.COLORS.BLUE,
    values: [
        {
            x: new Date(2016, 0, 1, 10, 5).toISOString(),
            y: 96.5
        },
        {
            x: new Date(2016, 0, 1, 12, 15).toISOString(),
            y: 98.7
        },
        {
            x: new Date(2016, 0, 1, 14, 15).toISOString(),
            y: 97.4
        }
    ]
};

const graph = Carbon.api.graph(graphConfiguration);
graph.loadContent(Carbon.api.line(dataset));
