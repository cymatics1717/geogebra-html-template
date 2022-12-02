var parameters = {
    "id": "ggbApplet",
    "width": 2190,
    "height": 1004,
    "showMenuBar": true,
    "showAlgebraInput": true,
    "showToolBar": true,
    "customToolBar": "0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp": true,
    "showResetIcon": false,
    "enableLabelDrags": false,
    "enableShiftDragZoom": true,
    "enableRightClick": false,
    "errorDialogsActive": false,
    "useBrowserForJS": false,
    "allowStyleBar": false,
    "preventFocus": false,
    "showZoomButtons": true,
    "capturingThreshold": 3,
    // add code here to run when the applet starts
    "appletOnLoad": function(api) {
        var f = new XMLHttpRequest();
        console.log(window.location.pathname)
        console.log(window.location.origin)
        f.open("GET", "cmd.txt", false);
        f.onreadystatechange = function() {
            if (f.readyState === 4) {
                if (f.status === 200 || f.status == 0) {
                    var res = f.responseText;
                    const lines = res.split(/\r\n|\n/);
                    lines.forEach(function(line) {
                        // console.log(line);
                        api.evalCommand(line);
                    });
                }
            }
        }
        f.send(null);
    },
    "showFullscreenButton": true,
    "scale": 1,
    "disableAutoScale": false,
    "allowUpscale": false,
    "clickToLoad": false,
    "appName": "classic",
    "buttonRounding": 0.7,
    "buttonShadows": false,
    "language": "en",
    // use this instead of ggbBase64 to load a material from geogebra.org
    // "material_id":"RHYH3UQ8",
    // use this instead of ggbBase64 to load a .ggb file
    // "filename":"myfile.ggb",

};
// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, 
//CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = { 'is3D': 0, 'AV': 1, 'SV': 0, 'CV': 0, 'EV2': 0, 'CP': 0, 'PC': 0, 'DA': 0, 'FI': 0, 'macro': 0 };
var applet = new GGBApplet(parameters, '5.0', views);
window.onload = function() { applet.inject('ggbApplet') };