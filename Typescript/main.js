import { series } from './data.js';

var seriesTabla = document.getElementById('series');
var temporadasPromedio = document.getElementById('promedio');
var seriesDetail = document.getElementById('series-detail');

renderSeriesInTable(series);
temporadasPromedio.innerHTML = "Seasons average: " + getTemporadasProm(series);

function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var Element = document.createElement('tr');
        Element.innerHTML = `
            <td>${s.numero}</td>
            <td style="color: #4895D9; cursor: pointer;">${s.nombre}</td>
            <td>${s.canal}</td>
            <td>${s.temporada}</td>
        `;

        Element.addEventListener('click', function () {
            showSeriesDetail(s);
        });

        seriesTabla.appendChild(Element);
    });
}

function showSeriesDetail(serie) {
    seriesDetail.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${serie.imagen}" class="card-img-top" alt="${serie.nombre}">
            <div class="card-body">
                <h5 class="card-title">${serie.nombre}</h5>
                <p class="card-text">${serie.descripcion}</p>
                <a href="${serie.pagina}" class="btn btn-primary" target="_blank">Go to page</a>
            </div>
        </div>
    `;
}

function getTemporadasProm(series) {
    var totalTemporadas = 0;
    var nSeries = series.length;
    series.forEach(function (s) {
        totalTemporadas += s.temporada;
    });
    return (totalTemporadas / nSeries).toFixed(0);
}
