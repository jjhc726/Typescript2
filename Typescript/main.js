import {data} from './data.js';
 var seriesTabla = document.getElementById('series');
 var temporadasPromedio =  document.getElementById('promedio');
 renderSeriesInTable(data);


 temporadasPromedio.innerHTML = "Promedio temporada es: ".concat(getTemporadasProm(data));

function renderSeriesInTable(series){
    series.forEach(function (s){
        var Element = document.createElement("tr");
        Element.innerHTML = "<td>".concat(s.id, "</td>\n <td style=\"color: #4895D9;\" >").concat(s.nombre, "</td>\n <td>").concat(s.canal, "</td>\n <td>").concat(s.temporada, "</td>");
        seriesTabla.appendChild(Element);
    });
    
}

function mostrarPromedioTemporadas(series) {
    var promedio = getTemporadasProm(series);
    var Element = document.createElement("tr");
    Element.innerHTML = "<td colspan='3'>Promedio de temporadas: </td><td>".concat(promedio, "</td>");
    seriesTabla.appendChild(Element);
}

function getTemporadasProm(series) {
    var totalTemporadas =0;
    var nSeries =0;
    series.forEach(function (s){
       totalTemporadas += s.temporada;
       nSeries+=1; 
    })
    return totalTemporadas/nSeries;
}

