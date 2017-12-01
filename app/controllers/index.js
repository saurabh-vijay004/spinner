
var View = require('android.view.View');
var AdapterView = require('android.widget.AdapterView');
var ArrayAdapter = require('android.widget.ArrayAdapter');
var Spinner = require('android.widget.Spinner');
var OnItemSelectedListner = require('android.widget.AdapterView.OnItemSelectedListener');
var Activity = require('android.app.Activity');
var currentActivity = new Activity(Ti.Android.currentActivity);
var LinearLayout = require('android.widget.LinearLayout');
var LayoutParams = require('android.widget.LinearLayout.LayoutParams');
var Color = require('android.graphics.Color');
var	Gravity = require('android.view.Gravity');
//fetch the  height of the screen
var screenHeight = Ti.Platform.displayCaps.platformHeight;
 
//fetch the  width of the screen
var screenWidth = Ti.Platform.displayCaps.platformWidth;

var staticSpinner = new Spinner(currentActivity);
// Create an ArrayAdapter using the string array and a default spinner
var items = ["Chai Latte", "Green Tea", "Black Tea" ];
         var adapter = new ArrayAdapter(currentActivity,
                Ti.Android.R.layout.simple_spinner_item, items);
       
 //layoutParams = new LayoutParams(500, 400);
                //card.setLayoutParams(layoutParams);
        staticSpinner.setAdapter(adapter);
 
        // Apply the adapter to the spinner
        staticSpinner.setAdapter(adapter);
        staticSpinner.setBackgroundColor(Color.parseColor("#000000"));
var linearLayout = new LinearLayout(currentActivity);
var layoutParams = new LayoutParams(screenWidth, screenHeight);
                linearLayout.setLayoutParams(layoutParams);
linearLayout.setBackgroundColor(Color.parseColor("#ff00f0"));

linearLayout.addView(staticSpinner);


$.index.add(linearLayout);
$.index.open();
