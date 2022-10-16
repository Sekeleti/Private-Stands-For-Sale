ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:20935").setExtent([377903.428074, 8030953.708689, 390234.812725, 8036672.919846]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PlotData_1 = new ol.format.GeoJSON();
var features_PlotData_1 = format_PlotData_1.readFeatures(json_PlotData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_PlotData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlotData_1.addFeatures(features_PlotData_1);
var lyr_PlotData_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlotData_1, 
                style: style_PlotData_1,
                interactive: true,
                title: '<img src="styles/legend/PlotData_1.png" /> Plot Data'
            });
var format_adjacentstandsshapefile_2 = new ol.format.GeoJSON();
var features_adjacentstandsshapefile_2 = format_adjacentstandsshapefile_2.readFeatures(json_adjacentstandsshapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_adjacentstandsshapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adjacentstandsshapefile_2.addFeatures(features_adjacentstandsshapefile_2);
var lyr_adjacentstandsshapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adjacentstandsshapefile_2, 
                style: style_adjacentstandsshapefile_2,
                interactive: true,
                title: '<img src="styles/legend/adjacentstandsshapefile_2.png" /> adjacent stands shapefile'
            });
var format_STANDSSHAPEFILE_3 = new ol.format.GeoJSON();
var features_STANDSSHAPEFILE_3 = format_STANDSSHAPEFILE_3.readFeatures(json_STANDSSHAPEFILE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_STANDSSHAPEFILE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STANDSSHAPEFILE_3.addFeatures(features_STANDSSHAPEFILE_3);
var lyr_STANDSSHAPEFILE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STANDSSHAPEFILE_3, 
                style: style_STANDSSHAPEFILE_3,
                interactive: true,
                title: '<img src="styles/legend/STANDSSHAPEFILE_3.png" /> STANDS SHAPEFILE'
            });
var format_LusakaRoad_4 = new ol.format.GeoJSON();
var features_LusakaRoad_4 = format_LusakaRoad_4.readFeatures(json_LusakaRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_LusakaRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LusakaRoad_4.addFeatures(features_LusakaRoad_4);
var lyr_LusakaRoad_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LusakaRoad_4, 
                style: style_LusakaRoad_4,
                interactive: true,
                title: '<img src="styles/legend/LusakaRoad_4.png" /> Lusaka Road'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PlotData_1.setVisible(true);lyr_adjacentstandsshapefile_2.setVisible(true);lyr_STANDSSHAPEFILE_3.setVisible(true);lyr_LusakaRoad_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PlotData_1,lyr_adjacentstandsshapefile_2,lyr_STANDSSHAPEFILE_3,lyr_LusakaRoad_4];
lyr_PlotData_1.set('fieldAliases', {'id': 'id', 'Plot No': 'Property Number', 'Price': 'Price', 'Status': 'Status', 'Use Type': 'Use Type', });
lyr_adjacentstandsshapefile_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_STANDSSHAPEFILE_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LusakaRoad_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_PlotData_1.set('fieldImages', {'id': 'TextEdit', 'Plot No': 'TextEdit', 'Price': 'TextEdit', 'Status': 'TextEdit', 'Use Type': 'TextEdit', });
lyr_adjacentstandsshapefile_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_STANDSSHAPEFILE_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_LusakaRoad_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlotData_1.set('fieldLabels', {'id': 'inline label', 'Plot No': 'inline label', 'Price': 'inline label', 'Status': 'inline label', 'Use Type': 'inline label', });
lyr_adjacentstandsshapefile_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_STANDSSHAPEFILE_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_LusakaRoad_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_LusakaRoad_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});