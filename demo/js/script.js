	var map = L.map('map').setView([30,-99], 4);

//Create a tile layer (basemap) object with a street map
 var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var hightemp = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
      layers: '1',
      format: 'image/png',
      transparent: true,
      attribution: "NOAA",
			opacity:0.25
  }).addTo(map);

  var precipitation = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer/WMSServer", {
      layers: '1',
      format: 'image/png',
      transparent: true,
      attribution: "NOAA",
			opacity:0.5
  }).addTo(map);

	var lighting = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
			layers: '1',
			format: 'image/png',
			transparent: true,
			attribution: "NOAA"
	}).addTo(map);

//create an object with layers for each basemap
	var baseLayers = {
	    "Streets": streets
	};

	var overlays = {
	    "High Temp": hightemp,
	    "Precipitation": precipitation,
			"Lighting": lighting
	};

	L.control.layers(baseLayers, overlays).addTo(map);
