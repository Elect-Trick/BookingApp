"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 4729);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 2650);
/* harmony import */ var _services_live_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/live-feed.service */ 5736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);





let Tab2Page = class Tab2Page {
    constructor(liveFeed) {
        this.liveFeed = liveFeed;
        this.sport = {
            id: 0,
            sportName: 'basketball',
            icon: '',
            country: 'argentina',
        };
        this.fixtures = [];
    }
    ngOnInit() {
        this.liveFeed.getFixtures(this.sport).subscribe((response) => {
            this.fixtures.push(response);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_live_feed_service__WEBPACK_IMPORTED_MODULE_2__.LiveFeedService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 2650:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".left:checked ~ .character {\n  transform: rotateY(180deg);\n}\n\n.right:checked ~ .character {\n  transform: rotateY(360deg);\n}\n\n.character {\n  position: absolute;\n  top: 30%;\n  left: 30%;\n  height: 202px;\n  width: 190px;\n  margin: 2em auto;\n  transform: translate(-50%, -50%);\n  background: transparent url('sprite.png') 0 0 no-repeat;\n  animation: animate 1s steps(6) infinite;\n}\n\n.track {\n  position: fixed;\n  top: 42%;\n  height: 50%;\n  z-index: -1;\n  width: 500%;\n  background-repeat: repeat-x;\n  background: url('road.png');\n  animation: road 2s linear infinite;\n}\n\n@keyframes road {\n  100% {\n    background-position: -1128px;\n  }\n  0% {\n    background-position: 0;\n  }\n}\n\n@keyframes animate {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: -1128px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5qYWJ1bG8lMjBNYWplbmplXFxEb2N1bWVudHNcXEdpdEh1YlxcQ29kZVxcRE9UTkVUXFxCb29raW5nQXBwXFxmaXQtZ1xcc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsMEJBQUE7QUNBRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBR0EsdURBQUE7RUFFQSx1Q0FBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUVBLDJCQUFBO0VBQ0Esa0NBQUE7QUNERjs7QURJQTtFQUNDO0lBQUssNEJBQUE7RUNBSjtFREVEO0lBQUcsc0JBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0U7SUFDRSxzQkFBQTtFQ0NGO0VEQ0E7SUFDRSw0QkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxlZnQ6Y2hlY2tlZCB+IC5jaGFyYWN0ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5yaWdodDpjaGVja2VkIH4gLmNoYXJhY3RlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbn1cclxuLmNoYXJhY3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICBoZWlnaHQ6IDIwMnB4O1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBtYXJnaW46MmVtIGF1dG87XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuXHJcblxyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uL2Fzc2V0cy9zcHJpdGUucG5nXCIpIDAgMCBuby1yZXBlYXQgO1xyXG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICBhbmltYXRpb246IGFuaW1hdGUgMXMgc3RlcHMoNikgaW5maW5pdGU7XHJcbn1cclxuLnRyYWNre1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQyJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogNTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3JvYWQucG5nJyk7XHJcbiAgYW5pbWF0aW9uOiByb2FkIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb2FkIHtcclxuIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjogLTExMjhweDt9XHJcblxyXG4gMCV7YmFja2dyb3VuZC1wb3NpdGlvbjogLTA7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMjhweDtcclxuICB9XHJcbn1cclxuIiwiLmxlZnQ6Y2hlY2tlZCB+IC5jaGFyYWN0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLnJpZ2h0OmNoZWNrZWQgfiAuY2hhcmFjdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG59XG5cbi5jaGFyYWN0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiAzMCU7XG4gIGhlaWdodDogMjAycHg7XG4gIHdpZHRoOiAxOTBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uL2Fzc2V0cy9zcHJpdGUucG5nXCIpIDAgMCBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxcyBzdGVwcyg2KSBpbmZpbml0ZTtcbn1cblxuLnRyYWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQyJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogNTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvcm9hZC5wbmdcIik7XG4gIGFuaW1hdGlvbjogcm9hZCAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcm9hZCB7XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTI4cHg7XG4gIH1cbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTI4cHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 4729:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Header</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <div>\r\n    <input class=\"left\" type=\"radio\" name=\"direction\" />\r\n    <input class=\"right\" type=\"radio\" name=\"direction\" />\r\n    <div class=\"character\"></div>\r\n\r\n  </div>\r\n  <div class=\"track\"></div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map