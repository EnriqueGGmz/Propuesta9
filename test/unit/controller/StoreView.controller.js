/*global QUnit*/

sap.ui.define([
	"store/controller/StoreView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("StoreView Controller");

	QUnit.test("I should test the StoreView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
