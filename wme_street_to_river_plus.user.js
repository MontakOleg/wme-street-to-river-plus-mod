// ==UserScript==
// @name            WME Street to River PLUS (mod)
// @description     This script create a new river landmark in waze map editor (WME). It transforms the the geometry of a new unsaved street to a polygon.
// @namespace       waze-ua
// @grant           none
// @version         2022.11.22.001
// @include         https://*waze.com/*editor*
// @exclude         https://*waze.com/*user/editor*
// @updateURL       https://github.com/waze-ua/wme-street-to-river-plus-mod/raw/master/wme_street_to_river_plus.user.js
// @downloadURL     https://github.com/waze-ua/wme-street-to-river-plus-mod/raw/master/wme_street_to_river_plus.user.js
// @icon data:image/png;base64,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
// @require         https://greasyfork.org/scripts/450160-wme-bootstrap/code/WME-Bootstrap.js
// ==/UserScript==

// Based on WME Street to river

// Mini howto:
// 1) install this script as greasemonkey script or chrome extension
// 2) draw a new street but do not save the street
// 3) add and apply a street name to define the rivers name and the the width of the river
//    Example: "20m Spree" creates a 20 meters width river named "Spree"
// 4) Select the helper street
// 5) Click the "Street to river" button
// 4) Delete the helper street
// 5) Edit the new landmark as you like
//
// Updated by: Eduardo Carvajal

/* global W */
/* global OpenLayers */
/* global $ */
/* global require */

var version = GM_info.script.version;

var idMeters = 0;
var idWidth = 1;
var idTitle = 2;
var idStreetToRiver = 3;
var idUnlimitedSize = 4;
var idNoUsavedStreet = 5;
var idAllSegmentsInside = 6;
var idMultipleSegmentsInside = 7;
var idStreetToOther = 8;
var idStreetToForest = 9;
var idDeleteSegment = 10;

function streetToRiver_bootstrap() {
  $(document)
    .on('bootstrap.wme', function () {
      streetToRiver_init()
    })
}

// 2014-01-09: Add new controls to Waze Editors.
function streetToRiver_init() {

  var defaultWidth = 15;
  var scriptLanguage = "us";
  var langText;
  {
    var Config = [{
        handler: 'WME-Street-to-River_other',
        title: "Other",
        func: function (ev) {
          doPOI(ev, "OTHER");
        },
        key: -1,
        arg: {
          type: "OTHER"
        }
      },
    ];

    for (var i = 0; i < Config.length; ++i) {
      WMEKSRegisterKeyboardShortcut('WME-Street-to-River', 'WME-Street-to-River', Config[i].handler, Config[i].title, Config[i].func, Config[i].key, Config[i].arg);
    }

    WMEKSLoadKeyboardShortcuts('WME-Street-to-River');

    window.addEventListener("beforeunload", function () {
      WMEKSSaveKeyboardShortcuts('WME-Street-to-River');
    }, false);

  }

  /*
  I18n.translations.en.keyboard_shortcuts.groups['default'].members.WME_SreetToRiver_doPOI = "Create a POI from the street (StreetToRiver)";
  Waze.accelerators.addAction("WME_SreetToRiver_doPOI", {group: 'default'});
  Waze.accelerators.events.register("WME_SreetToRiver_doPOI", null, hotKey);
  Waze.accelerators._registerShortcuts({ 'u' : "WME_SreetToRiver_doPOI"});

  function hotKey(ev) {
  doPOI(ev,"OTHER")
  }
   */
  function insertButtons() {

    if (W.selectionManager.getSelectedFeatures().length === 0)
      return;

    // 2013-04-19: Catch exception
    try {
      if (document.getElementById('streetToRiver') !== null)
        return;
    } catch (e) {}

    // 2014-01-09: Add Create River and Create Railway buttons
    var btn0 = $('<button class="btn btn-primary" title="' + getString(idTitle) + '">' + getString(idStreetToOther) + '</button>');
    btn0.click(doOther);

    var btn1 = $('<button class="btn btn-primary" title="' + getString(idTitle) + '">' + getString(idStreetToRiver) + '</button>');
    btn1.click(doRiver);

    var btn2 = $('<button class="btn btn-primary" title="' + getString(idTitle) + '">' + getString(idStreetToForest) + '</button>');
    btn2.click(doForest);

    var strMeters = getString(idMeters);

    // 2014-01-09: Add River Width Combobox
    var selRiverWidth = $('<select id="riverWidth" data-type="numeric" class="form-control" />');
    selRiverWidth.append($('<option value="5"> 5 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="8"> 8 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="10">10 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="11">11 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="12">12 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="13">13 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="15">15 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="17">17 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="20">20 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="25">25 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="30">30 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="40">40 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="50">50 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="80">80 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="100">100 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="120">120 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="150">150 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="180">180 ' + strMeters + '</option>'));
    selRiverWidth.append($('<option value="200">200 ' + strMeters + '</option>'));

    // 2014-01-09: Add Unlimited size river with checkbox
    var chk = $('<input title="Неограниченная длина (небезопасно)" type="checkbox" id="_isUnlimitedSize"/><label for="_isUnlimitedSize">' + getString(idUnlimitedSize) + '</label>');
    var chkDel = $('<input type="checkbox" id="_isDeleteSegment"/><label for="_isDeleteSegment">' + getString(idDeleteSegment) + '</label>');

    // 2014-01-09: Add streetToRiver section with new HTML controls
    var cnt = $('<section id="streetToRiver" />');

    // 2014-01-09: Add River width to section
    var divGroup1 = $('<div class="form-group" />');
    divGroup1.append($('<label class="control-label">' + getString(idWidth) + ':</label>'));
    divGroup1.append(selRiverWidth);
    var divControls1 = $('<div class="controls-container" />');
    divControls1.append(chk);
    divControls1.append(chkDel);
    divGroup1.append(divControls1);
    cnt.append(divGroup1);

    // 2014-01-09: Add river buttons to section
    var divGroup2 = $('<div class="form-group"/>');
    var divControls2 = $('<div class="btn-toolbar" />');
    divControls2.append(btn0);
    divControls2.append(btn1);
    divControls2.append(btn2);
    divGroup2.append(divControls2);
    cnt.append(divGroup2);

    // 2014-01-09: Add Script version to section.
    var divGroup3 = $('<label><a href="https://github.com/waze-ua/wme-street-to-river-plus-mod" target="_blank">Street to River+ (Mod) v' + version + '</a></label>');
    cnt.append(divGroup3);

    $("#segment-edit-general").append(cnt);

    // 2013-06-09: Select last river width
    var lastRiverWidth = getLastRiverWidth(15);
    console_log("Last river width: " + lastRiverWidth);
    selRiverWidth = document.getElementById('riverWidth');
    if (selRiverWidth !== null) {
      for (var i = 0; i < selRiverWidth.options.length; i++) {
        if (selRiverWidth.options[i].value == lastRiverWidth) {
          selRiverWidth.selectedIndex = i;
          break;
        }
      }
    }

    // 2013-10-20: Last time user select unlimited size?
    var isUnlimitedSize = document.getElementById('_isUnlimitedSize');
    if (isUnlimitedSize !== null) {
      isUnlimitedSize.checked = getLastIsUnlimitedSize(false);
    }

    var isDeleteSegment = document.getElementById('_isDeleteSegment');
    if (isDeleteSegment !== null) {
      isDeleteSegment.checked = getLastIsDeleteSegment(true);
    }

    console_log("Street to River Language: " + scriptLanguage);
    console_log("Street to river PLUS initialized");
  }

  // 2014-01-09: Process River Button
  function doPOI(ev, typ) {
    var convertOK;
    var foundSelectedSegment = false;

    // 2013-10-20: Get river's width
    var selRiverWidth = document.getElementById('riverWidth');
    defaultWidth = parseInt(selRiverWidth.options[selRiverWidth.selectedIndex].value);

    setLastRiverWidth(defaultWidth);
    console_log("River width: " + defaultWidth);

    // 2013-10-20: Is limited or unlimited?
    var isUnlimitedSize = document.getElementById('_isUnlimitedSize');
    setLastIsUnlimitedSize(isUnlimitedSize.checked);

    var isDeleteSegment = document.getElementById('_isDeleteSegment');
    setLastIsDeleteSegment(isDeleteSegment.checked);

    // 2014-01-09: Search for helper street. If found create or expand a river
    for (var s = W.selectionManager.getSelectedFeatures().length - 1; s >= 0; s--) {
      var sel = W.selectionManager.getSelectedFeatures()[s].model;
      if (sel.type == "segment") {
        // found segment
        foundSelectedSegment = true;
        convertOK = convertToLandmark(sel, typ, isUnlimitedSize.checked);
        if (isDeleteSegment.checked) {
          var wazeActionDeleteSegment = require("Waze/Action/DeleteSegment");
          W.model.actionManager.add(new wazeActionDeleteSegment(sel));
        }
      }
    }
    if (!foundSelectedSegment) {
      alert(getString(idNoUsavedStreet));
    }

  }

  function doRiver(ev) {
    doPOI(ev, "RIVER_STREAM");
  }

  function doForest(ev) {
    doPOI(ev, "FOREST_GROVE");
  }
  function doOther(ev) {
    doPOI(ev, "OTHER");
  }

  // 2014-01-09: Base on selected helper street creates or expand an existing river/railway
  function convertToLandmark(sel, lmtype, isUnlimitedSize) {
    var i;
    var leftPa,
    rightPa,
    leftPb,
    rightPb;
    var prevLeftEq,
    prevRightEq;
    var street = getStreet(sel);

    var displacement = getDisplacement(street);

    // create place with a minimum area 100m2
    // for simple segments only (A-B)
    if (sel.geometry.components.length === 2) {
      var segLength = 0;
      var minArea = 100;
      var pt = [];
      pt[0] = sel.geometry.components[0];
      pt[1] = sel.geometry.components[1];

      var seg = new OpenLayers.Geometry.LineString(pt);
      segLength = seg.getGeodesicLength(W.map.getProjectionObject());

      // if small area is expected
      if (minArea / displacement > segLength) {
        if (segLength <= Math.sqrt(minArea)) {
          // create a minimum square
          var line = Math.sqrt(minArea);
          var segScale = line / segLength;
          displacement = line / 1.18;
          pt[1].resize(segScale, pt[0], 1);
        } else {
          // adjust displacement (width)
          displacement = minArea / segLength;
        }
      }
    }

    var streetVertices = sel.geometry.getVertices();
    var polyPoints = null;
    var firstPolyPoint = null;
    var secondPolyPoint = null;

    var wazeActionUpdateFeatureGeometry = require("Waze/Action/UpdateFeatureGeometry");
    var wazefeatureVectorLandmark = require("Waze/Feature/Vector/Landmark");
    var wazeActionAddLandmark = require("Waze/Action/AddLandmark");
    var wazeActionDeleteObject = require("Waze/Action/DeleteObject");
    var wazeActionUpdateFeatureAddress = require("Waze/Action/UpdateFeatureAddress");

    //streetVertices = sel.attributes.geometry.getVertices();

    console_log("Street vertices: " + streetVertices.length);

    // 2013-10-13: Is new street inside an existing river?
    var bAddNew = !0;
    var riverLandmark = null;
    var repo = W.model.venues;

    var rrr,
    donorLandmark = null;
    for (var t in repo.objects) {
      riverLandmark = repo.objects[t];
      if (riverLandmark.attributes.categories[0] === lmtype) {
        console.log("riverLandmark.attributes.id=" + riverLandmark.attributes.id);
        console.log("streetVertices.length=" + streetVertices.length);
        console.log("streetVertices[0]=" + streetVertices[0]);
        console.log("streetVertices[1]=" + streetVertices[streetVertices.length - 1]);

        // 2014-06-27: Verify if the landmark object has containsPoint function
        if ("function" === typeof riverLandmark.geometry.containsPoint) {
          if (riverLandmark.geometry.containsPoint(streetVertices[0])) {
            bAddNew = false; // Street is inside an existing river
            console.log("rrr=" + riverLandmark.attributes.id);
            rrr = riverLandmark;
            //             break;
          }
          if (riverLandmark.geometry.containsPoint(streetVertices[streetVertices.length - 1])) {
            //                        bAddNew = false;    // Street is inside an existing river
            console.log("donorLandmark=" + riverLandmark.attributes.id);
            donorLandmark = riverLandmark;
            //             break;
          }

        }
      }
    }
    riverLandmark = rrr;

    // 2013-10-13: Ignore vertices inside river
    var bIsOneVerticeStreet = false;
    var firstStreetVerticeOutside = 0;
    if (!bAddNew) {
      console_log("Expanding an existing river");
      while (firstStreetVerticeOutside < streetVertices.length) {
        if (!riverLandmark.geometry.containsPoint(streetVertices[firstStreetVerticeOutside]))
          break;
        firstStreetVerticeOutside += 1;
      }
      if (firstStreetVerticeOutside === streetVertices.length) {
        alert(getString(idAllSegmentsInside));
        return false;
      }
      bIsOneVerticeStreet = firstStreetVerticeOutside === (streetVertices.length - 1);
      if (bIsOneVerticeStreet) {
        console_log("It's one vertice street");
      }
      if (firstStreetVerticeOutside > 1) {
        alert(getString(idMultipleSegmentsInside));
        return false;
      }
      console_log("First street vertice outside river:" + firstStreetVerticeOutside);
    }

    // 2013-10-13: Add to polyPoints river polygon
    console_log("River polygon: Create");
    var first;
    if (bAddNew)
      first = 0;
    else
      first = firstStreetVerticeOutside - 1;

    for (i = first; i < streetVertices.length - 1; i++) {
      var pa = streetVertices[i];
      var pb = streetVertices[i + 1];

      // fix for incorrect scale calculation, as distanceTo() returns units, but displacement is in meters
      // old:
      //var scale = (pa.distanceTo(pb) + displacement) / pa.distanceTo(pb);
      // new:
      //TODO optimize this, convert displacement into map units for easier scale calculation
      var points = [pa, pb];
      var ls = new OpenLayers.Geometry.LineString(points);
      var len = ls.getGeodesicLength(W.map.getProjectionObject());
      var scale = (len + displacement / 2) / len;

      leftPa = pa.clone();
      leftPa.resize(scale, pb, 1);
      rightPa = leftPa.clone();
      leftPa.rotate(90, pa);
      rightPa.rotate(-90, pa);

      leftPb = pb.clone();
      leftPb.resize(scale, pa, 1);
      rightPb = leftPb.clone();
      leftPb.rotate(-90, pb);
      rightPb.rotate(90, pb);

      var leftEq = getEquation({
          'x1': leftPa.x,
          'y1': leftPa.y,
          'x2': leftPb.x,
          'y2': leftPb.y
        });
      var rightEq = getEquation({
          'x1': rightPa.x,
          'y1': rightPa.y,
          'x2': rightPb.x,
          'y2': rightPb.y
        });
      if (polyPoints === null) {
        polyPoints = [leftPa, rightPa];
      } else {
        var li = intersectX(leftEq, prevLeftEq);
        var ri = intersectX(rightEq, prevRightEq);
        if (li && ri) {
          // 2013-10-17: Is point outside river?
          if (i >= firstStreetVerticeOutside) {
            polyPoints.unshift(li);
            polyPoints.push(ri);

            // 2013-10-17: Is first point outside river? -> Save it for later use
            if (i == firstStreetVerticeOutside) {
              firstPolyPoint = li.clone();
              secondPolyPoint = ri.clone();
              polyPoints = [li, ri];
            }
          }
        } else {
          // 2013-10-17: Is point outside river?
          if (i >= firstStreetVerticeOutside) {
            polyPoints.unshift(leftPb.clone());
            polyPoints.push(rightPb.clone());

            // 2013-10-17: Is first point outside river? -> Save it for later use
            if (i == firstStreetVerticeOutside) {
              firstPolyPoint = leftPb.clone();
              secondPolyPoint = rightPb.clone();
              polyPoints = [leftPb, rightPb];
            }
          }
        }
      }

      prevLeftEq = leftEq;
      prevRightEq = rightEq;

      // 2013-06-03: Is Waze limit reached?
      if ((polyPoints.length > 50) && !isUnlimitedSize) {
        break;
      }
    }

    if (bIsOneVerticeStreet) {
      firstPolyPoint = leftPb.clone();
      secondPolyPoint = rightPb.clone();
      polyPoints = [leftPb, rightPb];
      console_log("One vertice river:" + polyPoints.length);
    } else {
      polyPoints.push(rightPb);
      polyPoints.push(leftPb);
    }
    console_log("River polygon: done");

    // 2014-01-09: Create or expand an existing river?
    if (bAddNew) {
      // 2014-01-09: Add new river
      // 2014-01-09: Create new river's Polygon
      var polygon = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(polyPoints));

      // 2014-10-08: Creates river's Landmark
      riverLandmark = new wazefeatureVectorLandmark();
      riverLandmark.geometry = polygon;
      riverLandmark.attributes.categories.push(lmtype);

      // 2014-01-09: Add river's name base on Street Name
      if (street && street.name) {
        riverLandmark.attributes.name = street.name.replace(/^\d+(m|ft)\s*/, '');
      }

      // 2014-10-08: Add new Landmark to Waze Editor
      var riverLandmark_o = new wazeActionAddLandmark(riverLandmark);
      W.model.actionManager.add(riverLandmark_o);
      try {
        W.selectionManager.setSelectedModels([riverLandmark]);
      } catch (err) {
        // Ignore error:
        // Uncaught TypeError: Cannot read properties of undefined (reading 'children')
        // at Object.WMETB_FPnewSelectionAvailable (FancyPermalink.min.js:216:184)
        // at v (third_party-45fe9aba9d649e1fe91a.js.gz:2:1169484)
        console_log(err)
      }

      if (lmtype !== "OTHER") {
        console.log("bAddNew");
        var address = riverLandmark.getAddress().attributes;
        console.log(address);
        var newAddressAtts = {
          streetName: null,
          emptyStreet: true,
          cityName: null,
          emptyCity: true,
          stateID: address.state.id,
          countryID: address.country.id
        };
        W.model.actionManager.add(new wazeActionUpdateFeatureAddress(riverLandmark, newAddressAtts, {
            streetIDField: 'streetID'
          }));
      }

    } else {
      function CalcRL(components) {
        var count = components.length;
        var j = count - 1;
        var area = 0;

        for (var i = 0; i < count; ++i) {
          area += (components[i].y * components[j].x) - (components[i].x * components[j].y);
          j = i;
        }
        return area < 0 ? 1 : -1; // 1 - по часовой, -1 - против часовой
      }

      // 2014-01-09: Expand an existing river
      var originalGeometry = riverLandmark.geometry.clone();

      if (donorLandmark) // если есть донор
      {
        var undoGeometry = riverLandmark.geometry.clone();
        var undoGeometryDonor = donorLandmark.geometry.clone();
        var components = riverLandmark.geometry.components[0].components;
        var componentsDonor = donorLandmark.geometry.components[0].components;

        //window.donorLandmark=donorLandmark;
        //window.riverLandmark=riverLandmark;

        // куда закручен массив?
        var componentsRL = CalcRL(components);
        var componentsDonorRL = CalcRL(componentsDonor);
        console.log("src=" + componentsRL + ", donor=" + componentsDonorRL);
        // найти индекс ближайшей точки к началу сегмента
        var dist = 1000000000;
        var p1 = [0, 0],
        p2 = [0, 0]; // индексы ближайших точек
        for (var i1 = 0; i1 < components.length; i1++) {
          var d1 = Math.sqrt(Math.pow(Math.abs(components[i1].x - streetVertices[0].x), 2) + Math.pow(Math.abs(components[i1].y - streetVertices[0].y), 2));
          if (d1 < dist) {
            dist = d1;
            p1[0] = i1;
            if (componentsRL > 0)
              p1[1] = i1 === 0 ? components.length - 1 : i1 - 1;
            else
              p1[1] = i1 == components.length - 1 ? 0 : i1 + 1;
          }
        }

        console.log("p1=" + p1 + ", dist=" + dist);
        // ищем индекс во втором ПОИ, откуда начинать вставку.
        dist = 1000000000;
        for (var i1 = 0; i1 < componentsDonor.length; i1++) {
          var d1 = Math.sqrt(Math.pow(Math.abs(componentsDonor[i1].x - streetVertices[streetVertices.length - 1].x), 2) + Math.pow(Math.abs(componentsDonor[i1].y - streetVertices[streetVertices.length - 1].y), 2));
          if (d1 < dist) {
            dist = d1;
            p2[0] = i1;
            if (componentsDonorRL > 0)
              p2[1] = i1 === 0 ? componentsDonor.length - 1 : i1 - 1;
            else
              p2[1] = i1 == componentsDonor.length - 1 ? 0 : i1 + 1;
          }
        }
        console.log("p2=" + p2 + ", dist=" + dist);

        var componentsNew = components.slice();
        componentsNew.length = 0;

        // добавляем источник
        for (var i1 = 0; i1 <= p1[0]; ++i1)
          componentsNew.push(components[i1]);

        // добавляем донора
        if (componentsRL < 0) {
          if (componentsDonorRL < 0) {
            // добавляем донора по кругу
            for (var i1 = p2[0]; i1 < componentsDonor.length; ++i1)
              componentsNew.push(componentsDonor[i1]);

            // ...остаток донора
            for (var i1 = 0; i1 < p2[0]; ++i1)
              componentsNew.push(componentsDonor[i1]);
          } else {
            // добавляем донора по кругу
            for (var i1 = p2[0]; i1 >= 0; --i1)
              componentsNew.push(componentsDonor[i1]);

            // ...остаток донора
            for (var i1 = componentsDonor.length - 1; i1 > p2[0]; --i1)
              componentsNew.push(componentsDonor[i1]);
          }
        } else {
          if (componentsDonorRL < 0) {
            // добавляем донора по кругу
            for (var i1 = p2[0]; i1 >= 0; --i1)
              componentsNew.push(componentsDonor[i1]);

            // ...остаток донора
            for (var i1 = componentsDonor.length - 1; i1 > p2[0]; --i1)
              componentsNew.push(componentsDonor[i1]);
          } else {
            // добавляем донора по кругу
            for (var i1 = p2[0]; i1 < componentsDonor.length; ++i1)
              componentsNew.push(componentsDonor[i1]);

            // ...остаток донора
            for (var i1 = 0; i1 < p2[0]; ++i1)
              componentsNew.push(componentsDonor[i1]);
          }
        }

        // добавляем источник
        for (var i1 = p1[0] + 1; i1 < components.length; ++i1)
          componentsNew.push(components[i1]);

        //window.componentsNew=componentsNew
        // обновляемся
        function uniq(a) {
          var seen = {};
          return a.filter(function (item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
          });
        }
        riverLandmark.geometry.components[0].components = uniq(componentsNew);

        W.model.actionManager.add(new wazeActionUpdateFeatureGeometry(riverLandmark, W.model.venues, undoGeometry, riverLandmark.geometry));
        W.model.actionManager.add(new wazeActionDeleteObject(donorLandmark, W.model.venues, undoGeometryDonor, donorLandmark.geometry));

        return true;
      }
      var riverVertices = riverLandmark.geometry.getVertices();
      console_log("Total river vertices:" + riverVertices.length);

      // 2013-06-01: Adjust first street vertice in case of a 2 vertice river
      if (firstStreetVerticeOutside === 0)
        firstStreetVerticeOutside = 1;

      // 2013-06-01: Find on selected river, the nearest point from the beginning of road

      var distance = 0;
      var minDistance = 100000;
      var indexNearestPolyPoint = 0;
      for (i = 0; i < polyPoints.length; i++) {
        distance = polyPoints[i].distanceTo(streetVertices[firstStreetVerticeOutside]);
        if (distance < minDistance) {
          minDistance = distance;
          indexNearestPolyPoint = i;
        }
      }
      console_log("polyPoints.length: " + polyPoints.length);
      console_log("indexNearestPolyPoint: " + indexNearestPolyPoint);

      var indexNearestRiverVertice = 0;
      var nextIndex;
      minDistance = 100000;
      for (i = 0; i < riverVertices.length; i++) {
        nextIndex = getNextIndex(i, riverVertices.length, +1);
        if (isIntersectingLines(riverVertices[i], riverVertices[nextIndex], streetVertices[0], streetVertices[1])) {
          distance = polyPoints[indexNearestPolyPoint].distanceTo(riverVertices[i]);
          if (distance < minDistance) {
            minDistance = distance;
            indexNearestRiverVertice = i;
          }
        }
      }
      console_log("indexNearestRiverVertice: " + indexNearestRiverVertice);
      var nextRiverVertice = getNextIndex(indexNearestRiverVertice, riverVertices.length, 1);

      // 2013-06-01: Is river's Polygon clockwise or counter-clockwise?


      console_log("indexNearestRiverVertice: " + indexNearestRiverVertice);
      console_log("nextRiverVertice: " + nextRiverVertice);

      console_log("firstPolyPoint:" + firstPolyPoint);
      console_log("secondPolyPoint:" + secondPolyPoint);

      var inc = 1;
      var incIndex = 0;
      if (isIntersectingLines(riverVertices[indexNearestRiverVertice], firstPolyPoint, riverVertices[nextRiverVertice], secondPolyPoint)) {
        //inc = -1;
        console_log("Lines intersect: clockwise polygon");
        inc = +1;
        incIndex = 1;
      } else {
        inc = +1;
        console_log("Lines doesn't intersect: counter-clockwise polygon");
      }

      // 2013-06-03: Update river's polygon (add new vertices)
      var indexLastPolyPoint = getNextIndex(index, polyPoints.length, -inc);
      var indexNextVertice = 1;
      var index = polyPoints.length / 2 - 1;

      if (bIsOneVerticeStreet)
        index += 1;

      for (i = 0; i < polyPoints.length; i++) {
        if (!originalGeometry.containsPoint(polyPoints[index])) {

          // 2014-01-09: Save's old Landmark
          var undoGeometry = riverLandmark.geometry.clone();

          // 2014-01-09: Add a new point to existing river landmark
          riverLandmark.geometry.components[0].addComponent(polyPoints[index], indexNearestRiverVertice + indexNextVertice);

          // 2014-01-09: Update river landmark on Waze editor
          // 2014-09-30: Gets UptdateFeatureGeometry
          W.model.actionManager.add(new wazeActionUpdateFeatureGeometry(riverLandmark, W.model.venues, undoGeometry, riverLandmark.geometry));
          //delete undoGeometry;

          console_log("Added: " + index);
          indexNextVertice += incIndex;
        }
        index = getNextIndex(index, polyPoints.length, inc);
      }

      // 2013-06-03: Notify Waze that current river's geometry change.
      //Waze.model.actionManager.add(new Waze.Action.UpdateFeatureGeometry(riverLandmark,Waze.model.landmarks,originalGeometry,riverLandmark.geometry));
      //delete originalGeometry;

      if (lmtype !== "OTHER") {
        console.log("!bAddNew");
        var address = riverLandmark.getAddress().attributes;
        console.log(address);
        var newAddressAtts = {
          streetName: null,
          emptyStreet: true,
          cityName: null,
          emptyCity: true,
          stateID: address.state.id,
          countryID: address.country.id
        };
        W.model.actionManager.add(new wazeActionUpdateFeatureAddress(riverLandmark, newAddressAtts, {
            streetIDField: 'streetID'
          }));
      }

    }
    return true;
  }

  // 2013-06-02: Returns TRUE if line1 intersects lines2
  function isIntersectingLines(pointLine1From, pointLine1To, pointLine2From, pointLine2To) {
    var segment1;
    var segment2;

    // 2013-06-02: OpenLayers.Geometry.segmentsIntersect requires that start and end are ordered so that x1 < x2.
    if (pointLine1From.x <= pointLine1To.x)
      segment1 = {
        'x1': pointLine1From.x,
        'y1': pointLine1From.y,
        'x2': pointLine1To.x,
        'y2': pointLine1To.y
      };
    else
      segment1 = {
        'x1': pointLine1To.x,
        'y1': pointLine1To.y,
        'x2': pointLine1From.x,
        'y2': pointLine1From.y
      };

    if (pointLine2From.x <= pointLine2To.x)
      segment2 = {
        'x1': pointLine2From.x,
        'y1': pointLine2From.y,
        'x2': pointLine2To.x,
        'y2': pointLine2To.y
      };
    else
      segment2 = {
        'x1': pointLine2To.x,
        'y1': pointLine2To.y,
        'x2': pointLine2From.x,
        'y2': pointLine2From.y
      };

    return OpenLayers.Geometry.segmentsIntersect(segment1, segment2, !1);
  }

  // 2013-06-02: Returns TRUE if polygon's direction is clockwise. FALSE -> counter-clockwise
  // Based on: http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-points-are-in-clockwise-order
  /*
  function isClockwise(vertices,index,count){
  var total=0;
  var nextIndex;

  if(count > vertices.length)
  count = vertices.length;


  for(var i=0; i < vertices.length-1; i++){
  nextIndex = getNextIndex(index,vertices.length,+1);
  total += (vertices[nextIndex].x-vertices[index].x) * (vertices[nextIndex].y+vertices[index].y);
  index = nextIndex;
  }
  return total>=0;
  }
   */

  // 2013-06-01: Increment/decrement index by 1
  function getNextIndex(index, length, inc) {
    var next = index + inc;
    if (next == length)
      next = 0;
    if (next < 0)
      next = length - 1;
    return next;
  }

  function getEquation(segment) {
    if (segment.x2 == segment.x1)
      return {
        'x': segment.x1
      };

    var slope = (segment.y2 - segment.y1) / (segment.x2 - segment.x1);
    var offset = segment.y1 - (slope * segment.x1);
    return {
      'slope': slope,
      'offset': offset
    };
  }

  //
  // line A: y = ax + b
  // line B: y = cx + b
  //
  // x = (d - b) / (a - c)
  function intersectX(eqa, eqb, defaultPoint) {
    if ("number" == typeof eqa.slope && "number" == typeof eqb.slope) {
      if (eqa.slope == eqb.slope)
        return null;

      var ix = (eqb.offset - eqa.offset) / (eqa.slope - eqb.slope);
      var iy = eqa.slope * ix + eqa.offset;
      return new OpenLayers.Geometry.Point(ix, iy);
    } else if ("number" == typeof eqa.x) {
      return new OpenLayers.Geometry.Point(eqa.x, eqb.slope * eqa.x + eqb.offset);
    } else if ("number" == typeof eqb.y) {
      return new OpenLayers.Geometry.Point(eqb.x, eqa.slope * eqb.x + eqa.offset);
    }
    return null;
  }

  function getStreet(segment) {
    if (!segment.attributes.primaryStreetID)
      return null;
    var street = segment.model.streets.getObjectById(segment.attributes.primaryStreetID);
    return street;
  }

  function getDisplacement(street) {
    if (!street)
      return defaultWidth;
    if (!street.name)
      return defaultWidth;
    if (street.name.match(/^(\d+)m\b/))
      return parseInt(RegExp.$1);
    if (street.name.match(/^(\d+)ft\b/))
      return parseInt(RegExp.$1) * 0.3048;
    return defaultWidth;
  }

  // 2013-06-09: Save current river Width
  function setLastRiverWidth(riverWidth) {
    if (typeof(Storage) !== "undefined") {
      // 2013-06-09: Yes! localStorage and sessionStorage support!
      sessionStorage.riverWidth = Number(riverWidth);
    } else {
      // Sorry! No web storage support..
      console_log("No web storage support");
    }
  }

  // 2013-06-09: Returns last saved river width
  function getLastRiverWidth(defaultRiverWidth) {
    if (typeof(Storage) !== "undefined") {
      // 2013-06-09: Yes! localStorage and sessionStorage support!
      if (sessionStorage.riverWidth)
        return Number(sessionStorage.riverWidth);
      else
        return Number(defaultRiverWidth); // Default river width
    } else {
      // Sorry! No web storage support..
      return Number(defaultRiverWidth); // Default river width
    }
  }

  // 2013-10-20: Save current unlimited size preference
  function setLastIsUnlimitedSize(isUnlimitedSize) {
    if (typeof(Storage) !== "undefined") {
      // 2013-06-09: Yes! localStorage and sessionStorage support!
      sessionStorage.isUnlimitedSize = Number(isUnlimitedSize);
    } else {
      // Sorry! No web storage support..
      console_log("No web storage support");
    }
  }

  // 2013-10-20: Returns last saved unlimited size preference
  function getLastIsUnlimitedSize(defaultValue) {
    if (typeof(Storage) !== "undefined") {
      // 2013-10-20: Yes! localStorage and sessionStorage support!
      if (sessionStorage.isUnlimitedSize)
        return Number(sessionStorage.isUnlimitedSize);
      else
        return Number(defaultValue); // Default preference
    } else {
      // Sorry! No web storage support..
      return Number(defaultValue); // Default preference
    }
  }

  // 2013-10-20: Save current unlimited size preference
  function setLastIsDeleteSegment(isDeleteSegment) {
    if (typeof(Storage) !== "undefined") {
      // 2013-06-09: Yes! localStorage and sessionStorage support!
      sessionStorage.isDeleteSegment = Number(isDeleteSegment);
    } else {
      // Sorry! No web storage support..
      console_log("No web storage support");
    }
  }

  // 2013-10-20: Returns last saved unlimited size preference
  function getLastIsDeleteSegment(defaultValue) {
    if (typeof(Storage) !== "undefined") {
      // 2013-10-20: Yes! localStorage and sessionStorage support!
      if (sessionStorage.isDeleteSegment)
        return Number(sessionStorage.isDeleteSegment);
      else
        return Number(defaultValue); // Default preference
    } else {
      // Sorry! No web storage support..
      return Number(defaultValue); // Default preference
    }
  }

  // 2014-06-05: Returns WME interface language
  function getLanguage() {
    var wmeLanguage;
    var urlParts;

    urlParts = location.pathname.split("/");
    wmeLanguage = urlParts[1].toLowerCase();
    if (wmeLanguage === "editor")
      wmeLanguage = "us";

    return wmeLanguage;

  }

  // 2014-06-05: Returns WME interface language
  /*
  function isBetaEditor(){
  var wmeEditor = location.host.toLowerCase();

  return wmeEditor==="editor-beta.waze.com";
  }
   */

  // 2014-06-05: Translate text to different languages
  function intLanguageStrings() {
    switch (getLanguage()) {
    case "es": // 2014-06-05: Spanish
    case "es-419":
      langText = new Array("metros", "Ancho", "Cree una nueva calle, selecciónela y oprima este botón.", "Calle a Río", "Tamaño ilimitado",
          "¡No se encontró una calle sin guardar!", "Todos los segmentos de la calle adentro del río. No se puede continuar.",
          "Múltiples segmentos de la calle dentro del río. No se puede continuar", "Other", "Forest", "Delete segment");
      break;
    case "fr": // 2014-06-05: French
      langText = new Array("mètres", "Largura", "Crie uma nova rua, a selecione e clique neste botão.", "Rue á rivière", "Taille illimitée (dangereux)",
          "Pas de nouvelle rue non enregistré trouvée!", "Tous les segments de la rue dans la rivière. Vous ne pouvez pas continuer.",
          "Plusieurs segments de rues à l'intérieur de la rivière. Vous ne pouvez pas continuer.", "Other", "Forest", "Delete segment");
      break;
    case "ru": // 2014-06-05: Russian
      langText = new Array("метров", "Ширина", "Создайте новую дорогу (не сохраняйте), выберите ее и нажмите эту кнопку.", "Река", "Вся длина",
          "Не выделено ни одной не сохраненной дороги!", "Все сегменты дороги находятся внутри реки. Преобразование невозможно.",
          "Слишком много сегментов дороги находится внутри реки. Преобразование невозможно.", "Контур", "Лес", "Удалить сегмент");
      break;
    case "uk": // 2018-05-03: Ukrainian
      langText = new Array("метрів", "Ширина", "Створіть нову дорогу (не зберігайте і не знімайте виділення) та натисніть цю кнопку.", "Ріка", "Безлімітна довжина (небезпечно)",
          "Не виділено жодної збереженої дороги!", "Усі сегменти дороги знаходяться всередині ріки. Перетворення неможливе.",
          "Занадто багато сегментів дороги знаходяться всередині ріки. Перетворення неможливе.", "Контур", "Ліс", "Видалити сегмент");
      break;
    case "hu": // 2014-07-02: Hungarian
      langText = new Array("méter", "Szélesség", "Hozzon létre egy új utcát, válassza ki, majd kattintson erre a gombra.", "Utcából folyó", "Korlátlan méretű (nem biztonságos)",
          "Nem található nem mentett és kiválasztott új utca!", "Az útszakasz a folyón belül található! Nem lehet folytatni.",
          "Minden útszakasz a folyón belül található! Nem lehet folytatni.", "Other", "Forest", "Delete segment");
      break;
    case "cs": // 2014-07-03: Czech
      langText = new Array("metrů", "Šířka", "Vytvořte osu řeky, vyberte segment a stiskněte toto tlačítko.", "Silnice na řeku", "Neomezená šířka (nebezpečné)",
          "Nebyly vybrány žádné neuložené segmenty!", "Všechny segmenty jsou uvnitř řeky! Nelze pokračovat.",
          "Uvnitř řeky je více segmentů! Nelze pokračovat.", "Other", "Forest", "Delete segment");
      break;
    case "pl": // 2014-11-08: Polish - By Zniwek
      langText = new Array("metrów", "Szerokość", "Stwórz ulicę, wybierz ją i kliknij ten przycisk.", "Ulica w Rzekę", "Nieskończony rozmiar (niebezpieczne)",
          "Nie znaleziono nowej i niezapisanej ulicy!", "Wszystkie segmenty ulicy wewnątrz rzeki. Nie mogę kontynuować.",
          "Wiele segmentów ulicy wewnątrz rzeki. Nie mogę kontynuować.", "Other", "Forest", "Delete segment");
      break;
    case "pt-br": // 2015-04-05: Portuguese - By esmota
      langText = new Array("metros", "Largura", "Criar uma nova rua, selecione e clique neste botão.", "Rua para Rio", "Comprimento ilimitado (instável)",
          "Nenhuma nova rua, sem salvar, selecionada!", "Todos os segmentos de rua estão dentro de um rio. Nada a fazer.",
          "Múltiplos segmentos de rua dentro de um rio. Impossível continuar.", "Other", "Forest", "Delete segment");
      break;
    default: // 2014-06-05: English
      langText = new Array("meters", "Width", "Create a new street, select and click this button.", "River", "Unlimited size (unsafe)",
          "No unsaved and selected new street found!", "All street segments inside river. Cannot continue.",
          "Multiple street segments inside river. Cannot continue.", "Other", "Forest", "Delete segment");
    }
  }

  // 2014-06-05: Returns the translated  string to current language, if the language is not recognized assumes English
  function getString(stringID) {
    return langText[stringID];
  }

  function console_log(msg) {
    //if (console.log)
    // 2013-05-19: Alternate method to validate console object
    if (typeof console != "undefined")
      console.log(msg);
  }

  // 2014-06-05: Get interface language
  scriptLanguage = getLanguage();
  intLanguageStrings();

  $(document)
    .on('segment.wme', (event, element, model) => {
      insertButtons()
    })
}

streetToRiver_bootstrap();

// from: https://greasyfork.org/ru/scripts/16071-wme-keyboard-shortcuts (modify)
/*
when adding shortcuts each shortcut will need a unique name
the command to add links is WMERegisterKeyboardShortcut(ScriptName, ShortcutsHeader, NewShortcut, ShortcutDescription, FunctionToCall, ShortcutKeysObj) {
ScriptName: This is the name of your script used to track all of your shortcuts on load and save.
ScriptName: replace 'WMEAwesome' with your scripts name such as 'SomeOtherScript'
ShortcutsHeader: this is the header that will show up in the keyboard editor
NewShortcut: This is the name of the shortcut and needs to be unique from all of the other shortcuts, from other scripts, and WME
ShortcutDescription: This will show up as the text next to your shortcut
FunctionToCall: this is the name of your function that will be called when the keyboard shortcut is presses
ShortcutKeysObj: the is the object representing the keys watched set this to '-1' to let the users specify their own shortcuts.
ShortcutKeysObj: The alt, shift, and ctrl keys are A=alt, S=shift, C=ctrl. for short cut to use "alt shift ctrl and l" the object would be 'ASC+l'
 */
function WMEKSRegisterKeyboardShortcut(a, b, c, d, e, f, g) {
  try {
    I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].members.length
  } catch (c) {
    W.accelerators.Groups[a] = [],
    W.accelerators.Groups[a].members = [],
    I18n.translations[I18n.locale].keyboard_shortcuts.groups[a] = [],
    I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].description = b,
    I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].members = []
  }
  if (e && "function" == typeof e) {
    I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].members[c] = d,
    W.accelerators.addAction(c, {
      group: a
    });
    var i = "-1",
    j = {};
    j[i] = c,
    W.accelerators._registerShortcuts(j),
    null !== f && (j = {}, j[f] = c, W.accelerators._registerShortcuts(j)),
    W.accelerators.events.register(c, null, function () {
      e(g)
    })
  } else
    alert("The function " + e + " has not been declared")
}
function WMEKSLoadKeyboardShortcuts(a) {
  if (console.log("WMEKSLoadKeyboardShortcuts(" + a + ")"), localStorage[a + "KBS"])
    for (var b = JSON.parse(localStorage[a + "KBS"]), c = 0; c < b.length; c++)
      try {
        W.accelerators._registerShortcuts(b[c])
      } catch (a) {
        console.log(a)
      }
}
function WMEKSSaveKeyboardShortcuts(a) {
  console.log("WMEKSSaveKeyboardShortcuts(" + a + ")");
  var b = [];
  for (var c in W.accelerators.Actions) {
    var d = "";
    if (W.accelerators.Actions[c].group == a) {
      W.accelerators.Actions[c].shortcut ? (W.accelerators.Actions[c].shortcut.altKey === !0 && (d += "A"), W.accelerators.Actions[c].shortcut.shiftKey === !0 && (d += "S"), W.accelerators.Actions[c].shortcut.ctrlKey === !0 && (d += "C"), "" !== d && (d += "+"), W.accelerators.Actions[c].shortcut.keyCode && (d += W.accelerators.Actions[c].shortcut.keyCode)) : d = "-1";
      var e = {};
      e[d] = W.accelerators.Actions[c].id,
      b[b.length] = e
    }
  }
  localStorage[a + "KBS"] = JSON.stringify(b)
}
/* ********************************************************** */
