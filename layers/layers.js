var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DrugAddictsPeninsularMalaysiain2021_1 = new ol.format.GeoJSON();
var features_DrugAddictsPeninsularMalaysiain2021_1 = format_DrugAddictsPeninsularMalaysiain2021_1.readFeatures(json_DrugAddictsPeninsularMalaysiain2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrugAddictsPeninsularMalaysiain2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrugAddictsPeninsularMalaysiain2021_1.addFeatures(features_DrugAddictsPeninsularMalaysiain2021_1);
var lyr_DrugAddictsPeninsularMalaysiain2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrugAddictsPeninsularMalaysiain2021_1, 
                style: style_DrugAddictsPeninsularMalaysiain2021_1,
                interactive: true,
    title: 'Drug Addicts Peninsular Malaysia in 2021 <br />\
    <img src="styles/legend/DrugAddictsPeninsularMalaysiain2021_1_0.png" /> 0 - 500<br />\
    <img src="styles/legend/DrugAddictsPeninsularMalaysiain2021_1_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/DrugAddictsPeninsularMalaysiain2021_1_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/DrugAddictsPeninsularMalaysiain2021_1_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/DrugAddictsPeninsularMalaysiain2021_1_4.png" /> 2000 - 2500<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_DrugAddictsPeninsularMalaysiain2021_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DrugAddictsPeninsularMalaysiain2021_1];
lyr_DrugAddictsPeninsularMalaysiain2021_1.set('fieldAliases', {'Negeri': 'State', 'Total_of_D': 'Total of Drug Addicts', 'Age_15_to_': 'Age 15 to 24', 'Age_25_to_': 'Age 25 to 34', 'Age_35_and': 'Age 35 and above', 'Male': 'Male', 'Female': 'Female', 'Rehabiliti': 'Rehabilitation Center', 'Address': 'Address', 'District': 'District', 'Phone': 'Phone', 'Email': 'Email', });
lyr_DrugAddictsPeninsularMalaysiain2021_1.set('fieldImages', {'Negeri': 'TextEdit', 'Total_of_D': 'Range', 'Age_15_to_': 'Range', 'Age_25_to_': 'Range', 'Age_35_and': 'Range', 'Male': 'Range', 'Female': 'Range', 'Rehabiliti': 'TextEdit', 'Address': 'TextEdit', 'District': 'TextEdit', 'Phone': 'TextEdit', 'Email': 'TextEdit', });
lyr_DrugAddictsPeninsularMalaysiain2021_1.set('fieldLabels', {'Negeri': 'inline label', 'Total_of_D': 'inline label', 'Age_15_to_': 'inline label', 'Age_25_to_': 'inline label', 'Age_35_and': 'inline label', 'Male': 'inline label', 'Female': 'inline label', 'Rehabiliti': 'inline label', 'Address': 'inline label', 'District': 'inline label', 'Phone': 'inline label', 'Email': 'inline label', });
lyr_DrugAddictsPeninsularMalaysiain2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});