// server side script fetching remote data and preparing report data source
const axios = require('axios');

function getLocationCount(idLine, busstops) {
    let count = 0;
    for (let i = 0; i < busstops.length; i++) {
        if (busstops[i].idLine === idLine) {
            count++;
        }
    }
    return count;
}

// call remote http rest api
function fetchReport() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/api/line').then(lines =>{
            resolve(lines.data)
        })
    })
}

function fetchBusStops() {
        return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/api/bus_stop/1').then(busstops =>{
            resolve(busstops.data)
        })
    })
}


// add jsreport hook which modifies the report input data
async function beforeRender(req, res) {
    req.data.lines = await fetchReport()
    console.log(req.data.lines)
    req.data.busstops= await fetchBusStops()
    console.log(req.data.busstops)

 const uniqueIdLines = [...new Set(req.data.busstops.map(item => item.idLine))];
    req.data.busstops.forEach(busstop => {
        busstop.locationCount = getLocationCount(busstop.idLine, req.data.busstops);
    });

    // Calcular el total de ubicaciones para todas las paradas de autobús
    req.data.totalLocations = req.data.busstops.length;
}

