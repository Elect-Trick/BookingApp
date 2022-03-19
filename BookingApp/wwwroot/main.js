(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _tabs_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/auth.guard */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_landing-page_landing-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./landing-page/landing-page.module */ 6781)).then(m => m.LandingPagePageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule),
        canActivate: [_tabs_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login-modal_login-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login-modal/login-page.module */ 4882)).then(m => m.LoginPagePageModule)
    },
    {
        path: 'loading-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/loading-modal/loading-modal/loading-modal.module */ 1030)).then(m => m.LoadingModalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 2009);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/users.service */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);





let AppComponent = class AppComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.setCurrentUser();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _landing_page_landing_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page/landing-page.page */ 7595);
/* harmony import */ var _login_modal_login_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-modal/login-page.page */ 5829);
/* harmony import */ var _custom_inputs_form_input_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-inputs/form-input/form-input/form-input.component */ 5294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/tabs.page */ 7942);
/* harmony import */ var _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3/tab3.page */ 8592);
/* harmony import */ var _modals_loading_modal_loading_modal_loading_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/loading-modal/loading-modal/loading-modal.module */ 1030);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _custom_inputs_form_input_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__.FormInputComponent, _login_modal_login_page_page__WEBPACK_IMPORTED_MODULE_1__.LoginPagePage, _landing_page_landing_page_page__WEBPACK_IMPORTED_MODULE_0__.LandingPagePage, _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_5__.TabsPage, _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_6__.Tab3Page],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _modals_loading_modal_loading_modal_loading_modal_module__WEBPACK_IMPORTED_MODULE_7__.LoadingModalPageModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5294:
/*!*****************************************************************************!*\
  !*** ./src/app/custom-inputs/form-input/form-input/form-input.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputComponent": () => (/* binding */ FormInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _form_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-input.component.html?ngResource */ 1930);
/* harmony import */ var _form_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-input.component.scss?ngResource */ 6230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1777);






let FormInputComponent = class FormInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.type = 'text';
        this.ngControl.valueAccessor = this;
    }
    writeValue(obj) {
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
};
FormInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Self }] }
];
FormInputComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FormInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-form-input',
        template: _form_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormInputComponent);



/***/ }),

/***/ 8003:
/*!***************************************************!*\
  !*** ./src/app/landing-page/PasswordValidator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordValidator": () => (/* binding */ PasswordValidator)
/* harmony export */ });
class PasswordValidator {
}
PasswordValidator.passwordMatchingValidatior = (control) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return (password === null || password === void 0 ? void 0 : password.value) === (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value)
        ? null
        : { notmatched: true };
};


/***/ }),

/***/ 7595:
/*!***************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePage": () => (/* binding */ LandingPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _landing_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.page.html?ngResource */ 8667);
/* harmony import */ var _landing_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page.scss?ngResource */ 222);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/users.service */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _landing_page_PasswordValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landing-page/PasswordValidator */ 8003);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);










let LandingPagePage = class LandingPagePage {
    constructor(router, usersService, toast, alertCtrl, loadingCtrl) {
        this.router = router;
        this.usersService = usersService;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.passwordResetModel = {
            email: '',
            password: '',
            confirmPassword: '',
        };
        this.user = {
            username: '',
            password: '',
        };
        this.userRegister = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
        };
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
    }
    ngOnInit() {
        this.initializeLoginForm();
        this.initializeRegisterForm();
        this.initializeResetForm();
        console.log(this.resetPasswordForm);
    }
    initializeLoginForm() {
        return (this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
            ]),
        }
        // PasswordValidator.passwordMatchingValidatior
        ));
    }
    presentLoadingController(_message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message: _message,
                duration: 3000,
            });
            loader.present();
        });
    }
    presentAlert(_message, _header) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: _message,
                header: _header,
                buttons: ['Ok'],
            });
            alert.present();
        });
    }
    presentToast(_message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const _toast = yield this.toast.create({
                message: _message,
                cssClass: 'toaster',
            });
            _toast.present();
        });
    }
    initializeResetForm() {
        return (this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
            ])
        }, _landing_page_PasswordValidator__WEBPACK_IMPORTED_MODULE_3__.PasswordValidator.passwordMatchingValidatior));
    }
    initializeRegisterForm() {
        return (this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
            ]),
        }, _landing_page_PasswordValidator__WEBPACK_IMPORTED_MODULE_3__.PasswordValidator.passwordMatchingValidatior));
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginForm.valid) {
                alert('Form is not complete');
            }
            else {
                this.user.username = this.loginForm.controls.username.value;
                this.user.password = this.loginForm.controls.password.value;
                yield this.presentLoadingController('Logging you in, hang tight...');
                this.usersService.login(this.user).subscribe((response) => {
                    if (response) {
                        this.loadingCtrl.dismiss();
                        this.loginModal.dismiss();
                        this.router.navigateByUrl('/tabs/tab1');
                    }
                }, (error) => {
                    console.log('Error is', error);
                    switch (error.status) {
                        case 401:
                            this.presentToast('Unauthorized, check login details');
                            break;
                        case 400:
                            this.presentToast('User details not found');
                            break;
                        case 404:
                            this.presentToast('This resource count not found');
                            break;
                        case 500:
                            this.presentToast('Server Error, please contact support');
                            break;
                        default:
                            this.presentToast('Server may be down, contact support');
                            break;
                    }
                    this.loadingCtrl.dismiss();
                }, () => { });
            }
        });
    }
    register() {
        this.userRegister.email = this.registerForm.controls.email.value;
        this.userRegister.username = this.registerForm.controls.username.value;
        this.userRegister.password = this.registerForm.controls.password.value;
        this.userRegister.confirmPassword =
            this.registerForm.controls.confirmPassword.value;
        this.presentLoadingController('Signing you up, hang tight...');
        if (this.registerForm.valid) {
            this.usersService.register(this.userRegister).subscribe((response) => {
                this.presentAlert('Success, please check your e-mails to activate the account before logging in', 'Success');
                this.registerModal.dismiss();
                this.router.navigateByUrl('');
                this.loadingCtrl.dismiss();
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.presentToast('The Form is invalid, please check the login details.');
        }
    }
    closeLoginModal() {
        this.loginModal.dismiss();
        this.loginForm.reset();
    }
    closeRegisterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.registerModal.dismiss();
            this.registerForm.reset();
        });
    }
    resetPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.passwordResetModel.email = this.resetPasswordForm.controls.email.value;
            this.passwordResetModel.password =
                this.resetPasswordForm.controls.password.value;
            this.passwordResetModel.confirmPassword =
                this.resetPasswordForm.controls.confirmPassword.value;
            this.presentLoadingController('Preparing...');
            this.usersService.resetPassword(this.passwordResetModel).subscribe((_response) => {
                this.presentAlert('Your Password request has been submitted, check your e-mails to finalize.', 'Success');
                // this.resetPasswordForm.reset();
                // this.closeResetModal();
            }, (error) => {
                this.presentAlert('Could not process your request, please try again', 'Error');
            }, () => { this.resetPasswordModal.dismiss(); });
        });
    }
    presentResetModal() {
        this.resetPasswordModal.present();
    }
    closeResetModal() {
        this.resetPasswordModal.dismiss();
        this.resetPasswordForm.reset();
    }
};
LandingPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
LandingPagePage.propDecorators = {
    loginModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['loginModal',] }],
    registerModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['registerModal',] }],
    resetPasswordModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['resetPasswordModal',] }]
};
LandingPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-landing-page',
        template: _landing_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_landing_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingPagePage);



/***/ }),

/***/ 5829:
/*!************************************************!*\
  !*** ./src/app/login-modal/login-page.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPagePage": () => (/* binding */ LoginPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _login_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.page.html?ngResource */ 2506);
/* harmony import */ var _login_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.page.scss?ngResource */ 4037);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/users.service */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);








let LoginPagePage = class LoginPagePage {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.user = {
            username: '',
            password: '',
        };
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        return (this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4),
            ]),
        }
        // PasswordValidator.passwordMatchingValidatior
        ));
    }
    onClick() { }
    login() {
        if (!this.form.valid) {
            alert('Form is not complete');
        }
        else {
            console.log('FC', this.form.controls.username.value);
            this.user.username = this.form.controls.username.value;
            this.user.password = this.form.controls.password.value;
            this.usersService.login(this.user).subscribe((response) => {
                this.router.navigateByUrl('tabs');
            }, (error) => {
                alert(`Error: ${error}`);
            });
        }
    }
};
LoginPagePage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginPagePage.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['m',] }]
};
LoginPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login-page',
        template: _login_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPagePage);



/***/ }),

/***/ 8641:
/*!************************************************************************************!*\
  !*** ./src/app/modals/loading-modal/loading-modal/loading-modal-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingModalPageRoutingModule": () => (/* binding */ LoadingModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _loading_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-modal.page */ 746);




const routes = [
    {
        path: '',
        component: _loading_modal_page__WEBPACK_IMPORTED_MODULE_0__.LoadingModalPage
    }
];
let LoadingModalPageRoutingModule = class LoadingModalPageRoutingModule {
};
LoadingModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoadingModalPageRoutingModule);



/***/ }),

/***/ 1030:
/*!****************************************************************************!*\
  !*** ./src/app/modals/loading-modal/loading-modal/loading-modal.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingModalPageModule": () => (/* binding */ LoadingModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _loading_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-modal-routing.module */ 8641);






let LoadingModalPageModule = class LoadingModalPageModule {
};
LoadingModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _loading_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModalPageRoutingModule
        ],
        declarations: []
    })
], LoadingModalPageModule);



/***/ }),

/***/ 746:
/*!**************************************************************************!*\
  !*** ./src/app/modals/loading-modal/loading-modal/loading-modal.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingModalPage": () => (/* binding */ LoadingModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _loading_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-modal.page.html?ngResource */ 9537);
/* harmony import */ var _loading_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-modal.page.scss?ngResource */ 5542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let LoadingModalPage = class LoadingModalPage {
    constructor() { }
    ngOnInit() {
    }
};
LoadingModalPage.ctorParameters = () => [];
LoadingModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loading-modal',
        template: _loading_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loading_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadingModalPage);



/***/ }),

/***/ 4961:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9258);






let UsersService = class UsersService {
    // test$ = this.getResetToken().subscribe();
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(loginData) {
        console.log('Service', loginData);
        return this.http.post(this.baseUrl + '/users/login', loginData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            this.user = response;
            if (this.user) {
                localStorage.setItem('user', JSON.stringify(this.user));
                this.setCurrentUser();
                return this.user;
            }
        }));
    }
    register(registerationData) {
        return this.http.post(this.baseUrl + '/users/register', registerationData);
    }
    setCurrentUser() {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        this.currentUserSource.next(currentUser);
    }
    resetPassword(resetData) {
        return this.http.post(this.baseUrl + '/users/reset', resetData);
    }
    getResetToken() {
        return this.http
            .get(this.baseUrl + '/users/get-token')
            .subscribe((response) => {
            console.log('Was triggered in the FE');
        });
    }
    logout() {
        this.currentUserSource.next(null);
        localStorage.removeItem('user');
        this.user = null;
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], UsersService);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 6000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 297:
/*!************************************!*\
  !*** ./src/app/tabs/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9258);






let AuthGuard = class AuthGuard {
    constructor(userService, alertCtrl, router) {
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.alertCtrl.create({
                message: 'You need to be logged in to access this page... redirecting',
                buttons: [
                    {
                        text: 'Take me Home',
                        role: 'confirm',
                        handler: () => {
                            this.router.navigateByUrl('');
                        },
                    },
                ],
            });
            toast.present();
        });
    }
    canActivate() {
        return this.userService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            if (response) {
                return true;
            }
            this.presentAlert();
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 8260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);



/* eslint-disable no-underscore-dangle */


let TabsPage = class TabsPage {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.tabActive = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: true
        };
    }
    ngOnInit() {
        // this.router.dispose();
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* eslint-disable @typescript-eslint/naming-convention */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://localhost:5001/api',
    liveFeedUrl: 'https://allsportsapi.com/api/',
    liveFeedAPI_Key: '41ac03d65e5ec554db4b2fd729527fce7d8d6b485d3dba52be0fbb5d7eff4124',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6149,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8820,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6230:
/*!******************************************************************************************!*\
  !*** ./src/app/custom-inputs/form-input/form-input/form-input.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-input {\n  margin-top: 20px;\n  border: 2px solid white;\n  background-color: #F2F2F2;\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taW5wdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOamFidWxvJTIwTWFqZW5qZVxcRG9jdW1lbnRzXFxHaXRIdWJcXENvZGVcXERPVE5FVFxcQm9va2luZ0FwcFxcZml0LWdcXHNyY1xcYXBwXFxjdXN0b20taW5wdXRzXFxmb3JtLWlucHV0XFxmb3JtLWlucHV0XFxmb3JtLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoiZm9ybS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcblxyXG59XHJcblxyXG4vLyAuaW52YWxpZC1mZWVkYmFjayB7XHJcbi8vICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbi8vIH1cclxuXHJcbiIsImlvbi1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn0iXX0= */";

/***/ }),

/***/ 222:
/*!****************************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".login-button {\n  margin-top: 15%;\n  margin-bottom: 20px;\n  margin-left: 20%;\n  margin-right: 20%;\n  position: relative;\n}\n\n.register-button {\n  margin-bottom: 40px;\n  margin-left: 20%;\n  margin-right: 20%;\n  position: relative;\n}\n\nion-card {\n  align-self: center;\n  margin-top: 15%;\n  background-color: black;\n  border: 0;\n  box-shadow: inset 0.1px 0.1px 1px 0.1px #f2f2f2;\n}\n\nion-card ion-card-title {\n  text-align: center;\n  color: white;\n  padding-top: 15px;\n}\n\nion-card ion-card-content {\n  position: relative;\n  align-items: center;\n  margin: 10px;\n}\n\nion-card ion-card-content ion-button {\n  margin-top: 20px;\n}\n\nion-img {\n  background-color: #ffffff;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 40px;\n  height: 10%;\n}\n\nion-content {\n  --ion-background-color: hsl(218, 58%, 53%);\n  -webkit-clip-path: polygon(0 23%, 0 9%, 0 0, 85% 0%, 100% 0, 100% 15%, 100% 85%, 89% 93%, 79% 100%, 15% 100%, 0 100%, 0% 85%);\n          clip-path: polygon(0 23%, 0 9%, 0 0, 85% 0%, 100% 0, 100% 15%, 100% 85%, 89% 93%, 79% 100%, 15% 100%, 0 100%, 0% 85%);\n}\n\nion-col {\n  height: 100%;\n  margin-top: 10%;\n  box-shadow: inset 2px 2px 4px 2px #f2f2f2;\n}\n\n.toaster {\n  color: red;\n}\n\n.forgot-password {\n  margin-top: 10px;\n}\n\n.forgot-password ion-label {\n  color: white;\n}\n\nion-input {\n  margin-top: 20px;\n  border: 2px solid white;\n  background-color: #f2f2f2;\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmphYnVsbyUyME1hamVuamVcXERvY3VtZW50c1xcR2l0SHViXFxDb2RlXFxET1RORVRcXEJvb2tpbmdBcHBcXGZpdC1nXFxzcmNcXGFwcFxcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBRUEsK0NBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUU7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURJQTtFQUNFLDBDQUFBO0VBQ0EsNkhBQUE7VUFBQSxxSEFBQTtBQ0RGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBRUEseUNBQUE7QUNiRjs7QURnQkE7RUFDRSxVQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZ0JBQUE7QUNiRjs7QURjRTtFQUNFLFlBQUE7QUNaSjs7QURlQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxpQkFBQTtBQ1pGIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMS4xcHggMC4xcHggMXB4IDAuMXB4ICNmMmYyZjI7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMC4xcHggMC4xcHggMXB4IDAuMXB4ICNmMmYyZjI7XHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGhzbCgyMTgsIDU4JSwgNTMlKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oXHJcbiAgICAwIDIzJSxcclxuICAgIDAgOSUsXHJcbiAgICAwIDAsXHJcbiAgICA4NSUgMCUsXHJcbiAgICAxMDAlIDAsXHJcbiAgICAxMDAlIDE1JSxcclxuICAgIDEwMCUgODUlLFxyXG4gICAgODklIDkzJSxcclxuICAgIDc5JSAxMDAlLFxyXG4gICAgMTUlIDEwMCUsXHJcbiAgICAwIDEwMCUsXHJcbiAgICAwJSA4NSVcclxuICApO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAycHggI2YyZjJmMjtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAycHggI2YyZjJmMjtcclxufVxyXG5cclxuLnRvYXN0ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4iLCIubG9naW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNhcmQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxLjFweCAwLjFweCAxcHggMC4xcHggI2YyZjJmMjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMC4xcHggMC4xcHggMXB4IDAuMXB4ICNmMmYyZjI7XG59XG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1pbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjE4LCA1OCUsIDUzJSk7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDIzJSwgMCA5JSwgMCAwLCA4NSUgMCUsIDEwMCUgMCwgMTAwJSAxNSUsIDEwMCUgODUlLCA4OSUgOTMlLCA3OSUgMTAwJSwgMTUlIDEwMCUsIDAgMTAwJSwgMCUgODUlKTtcbn1cblxuaW9uLWNvbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNHB4IDJweCAjZjJmMmYyO1xuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAycHggI2YyZjJmMjtcbn1cblxuLnRvYXN0ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5mb3Jnb3QtcGFzc3dvcmQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBtZWRpdW07XG59Il19 */";

/***/ }),

/***/ 4037:
/*!*************************************************************!*\
  !*** ./src/app/login-modal/login-page.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-button {\n  position: inherit;\n  margin-top: 20px;\n  margin-right: 43px;\n  margin-left: 43px;\n}\n\nion-content {\n  --ion-background-color: #4174cc;\n  -webkit-clip-path: polygon(0 23%, 0 9%, 0 0, 85% 0%, 100% 0, 100% 15%, 100% 85%, 89% 93%, 79% 100%, 15% 100%, 0 100%, 0% 85%);\n          clip-path: polygon(0 23%, 0 9%, 0 0, 85% 0%, 100% 0, 100% 15%, 100% 85%, 89% 93%, 79% 100%, 15% 100%, 0 100%, 0% 85%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: -1;\n}\n\nion-content ion-card {\n  align-self: center;\n  background-color: #ebe5e5;\n  margin-top: 70%;\n}\n\nion-content ion-card ion-card-title {\n  align-content: center;\n  color: #4174cc;\n}\n\nion-content ion-card ion-card-content {\n  position: relative;\n  align-items: center;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5qYWJ1bG8lMjBNYWplbmplXFxEb2N1bWVudHNcXEdpdEh1YlxcQ29kZVxcRE9UTkVUXFxCb29raW5nQXBwXFxmaXQtZ1xcc3JjXFxhcHBcXGxvZ2luLW1vZGFsXFxsb2dpbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEV0E7RUFDRSwrQkFBQTtFQUNBLDZIQUFBO1VBQUEscUhBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNSSjs7QURTSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1BOOztBRFNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNQTiIsImZpbGUiOiJsb2dpbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBwcmltYXJ5OiAjNDE3NGNjLFxyXG4gIGFjY2VudDogI2ViZTVlNSxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0M3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0M3B4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI3tjb2xvcihwcmltYXJ5KX07XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMjMlLCAwIDklLCAwIDAsIDg1JSAwJSwgMTAwJSAwLCAxMDAlIDE1JSwgMTAwJSA4NSUsIDg5JSA5MyUsIDc5JSAxMDAlLCAxNSUgMTAwJSwgMCAxMDAlLCAwJSA4NSUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICN7Y29sb3IoYWNjZW50KX07XHJcbiAgICBtYXJnaW4tdG9wOiA3MCU7XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICN7Y29sb3IocHJpbWFyeSl9O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNDNweDtcbiAgbWFyZ2luLWxlZnQ6IDQzcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzQxNzRjYztcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMjMlLCAwIDklLCAwIDAsIDg1JSAwJSwgMTAwJSAwLCAxMDAlIDE1JSwgMTAwJSA4NSUsIDg5JSA5MyUsIDc5JSAxMDAlLCAxNSUgMTAwJSwgMCAxMDAlLCAwJSA4NSUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmU1ZTU7XG4gIG1hcmdpbi10b3A6IDcwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzQxNzRjYztcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 5542:
/*!***************************************************************************************!*\
  !*** ./src/app/modals/loading-modal/loading-modal/loading-modal.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLW1vZGFsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6000:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8260:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "card {\n  height: 100%;\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5qYWJ1bG8lMjBNYWplbmplXFxEb2N1bWVudHNcXEdpdEh1YlxcQ29kZVxcRE9UTkVUXFxCb29raW5nQXBwXFxmaXQtZ1xcc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYXJke1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuXHJcbi8vIGlvbi1jb250ZW50e1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet>\r\n  </ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 1930:
/*!******************************************************************************************!*\
  !*** ./src/app/custom-inputs/form-input/form-input/form-input.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n<div class=\"form-group\">\n  <ion-input\n\n    placeholder=\"Confirm Password\"\n    required\n    [class.is-invalid]=\"ngControl.touched && ngControl.invalid\"\n    type=\"{{ type }}\"\n    [formControl]=\"$any(ngControl.control)\"\n    placeholder=\"{{ label }}\">\n  </ion-input>\n\n\n  <div\n    *ngIf=\"ngControl.control?.errors?.['required']\"\n    class=\"text-danger text-center\"\n  >\n    Please enter a {{ label }}\n  </div>\n  <div\n    *ngIf=\"ngControl.control?.errors?.['minlength']\"\n    class=\"text-danger text-center\"\n  >\n    {{ label }} at least\n    {{ngControl.control?.errors?.['minlength']['requiredLength']}} characters\n  </div>\n  <div\n    *ngIf=\"ngControl.control?.errors?.['maxlength']\"\n    class=\"text-danger text-center\"\n  >\n    {{ label }} must be at least most\n    {{ngControl.control?.errors?.['maxlength']['requiredLength']}}\n  </div>\n</div>\n";

/***/ }),

/***/ 8667:
/*!****************************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> -->\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"2\" size=\"8\" size-md=\"4\" offset-md=\"4\">\n        <ion-img [src]=\"'../../assets/logo-red.png'\"></ion-img>\n\n        <ion-button\n          class=\"login-button\"\n          id=\"trigger-button\"\n          expand=\"block\"\n          fill=\"solid\"\n          shape=\"sqaure\"\n        >\n          Login\n        </ion-button>\n        <ion-button\n          class=\"register-button\"\n          id=\"register-button\"\n          expand=\"block\"\n          fill=\"solid\"\n          shape=\"sqaure\"\n        >\n          Register\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-modal #loginModal trigger=\"trigger-button\">\n    <ng-template>\n      <ion-content\n        ><ion-grid>\n          <ion-row>\n            <ion-col offset=\"1.7\" size=\"9\">\n              <ion-img [src]=\"'../../assets/logo-red.png'\"></ion-img>\n\n              <ion-card>\n                <ion-card-content>\n                  <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\n                    <app-form-input\n                      [formControl]=\"$any(loginForm.controls.username)\"\n                      [label]=\"'Username'\"\n                    >\n                    </app-form-input>\n\n                    <app-form-input\n                      [formControl]=\"$any(loginForm.controls.password)\"\n                      [label]=\"'Password'\"\n                      [type]=\"'password'\"\n                    >\n                    </app-form-input>\n\n                    <ion-button\n                      (click)=\"login()\"\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"sqaure\"\n                      [disabled]=\"!loginForm.valid\"\n                    >\n                      Log in\n                    </ion-button>\n                    <ion-button\n                      (click)=\"closeLoginModal()\"\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"sqaure\"\n                    >\n                      Cancel\n                    </ion-button>\n                  </form>\n                  <div class=\"forgot-password\">\n                    <ion-label\n                      (click)=\"presentResetModal()\"\n                      id=\"forgot-password\"\n                      >Forgot password?, click here</ion-label\n                    >\n                  </div>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n  <ion-modal #registerModal trigger=\"register-button\">\n    <ng-template>\n      <ion-content>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col offset=\"1.5\" size=\"9\">\n              <ion-card>\n                <ion-card-content>\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                    <app-form-input\n                      [formControl]=\"$any(registerForm.controls.username)\"\n                      [label]=\"'Username'\"\n                    >\n                    </app-form-input>\n\n                    <app-form-input\n                      [formControl]=\"$any(registerForm.controls.password)\"\n                      [label]=\"'Password'\"\n                      [type]=\"'password'\"\n                    >\n                    </app-form-input>\n                    <app-form-input\n                      [formControl]=\"$any(registerForm.controls.confirmPassword)\"\n                      [label]=\"'ConfirmPassword'\"\n                      [type]=\"'password'\"\n                    >\n                    </app-form-input>\n                    <div\n                      *ngIf=\"registerForm?.getError('notmatched')\"\n                      class=\"text-danger confirm\"\n                    >\n                      Passwords do not match\n                    </div>\n                    <app-form-input\n                      [formControl]=\"$any(registerForm.controls.email)\"\n                      [label]=\"'Email'\"\n                    >\n                    </app-form-input>\n\n                    <ion-button\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"sqaure\"\n                      class=\"login-button\"\n                      type=\"submit\"\n                      [disabled]=\"!registerForm.valid\"\n                    >\n                      Sign Up\n                    </ion-button>\n                    <ion-button\n                      class=\"register-button\"\n                      (click)=\"closeRegisterModal()\"\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"sqaure\"\n                    >\n                      Cancel\n                    </ion-button>\n                  </form>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n  <ion-modal #resetPasswordModal trigger=\"forgot-password \">\n    <ng-template>\n      <ion-content>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col offset=\"1.5\" size=\"9\">\n              <ion-card>\n                <ion-card-title>\n                  <ion-icon\n                    style=\"margin-top: 10%\"\n                    size=\"large\"\n                    name=\"lock-closed-outline\"\n                  ></ion-icon>\n                  Password Reset\n                </ion-card-title>\n                <ion-card-content>\n                  <form\n                    [formGroup]=\"resetPasswordForm\"\n                    (ngSubmit)=\"resetPassword()\"\n                  >\n                    <app-form-input\n                      [formControl]=\"$any(resetPasswordForm.controls.email)\"\n                      [label]=\"'Email'\"\n                    >\n                    </app-form-input>\n\n                    <app-form-input\n                      [formControl]=\"$any(resetPasswordForm.controls.password)\"\n                      [label]=\"'Password'\"\n                      [type]=\"'password'\"\n                    >\n                    </app-form-input>\n                    <app-form-input\n                      [formControl]=\"$any(resetPasswordForm.controls.confirmPassword)\"\n                      [label]=\"'ConfirmPassword'\"\n                      [type]=\"'password'\"\n                    >\n                    </app-form-input>\n\n                    <div\n                      *ngIf=\"resetPasswordForm?.getError('notmatched')\"\n                      class=\"text-danger confirm\"\n                    >\n                      Passwords do not match\n                    </div>\n\n                    <ion-button\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"sqaure\"\n                      class=\"login-button\"\n                      type=\"submit\"\n                      [disabled]=\"!resetPasswordForm.valid || resetPasswordForm.getError('notmatched')\"\n                    >\n                      Reset\n                    </ion-button>\n                    <ion-button\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"sqaure\"\n                      class=\"login-button\"\n                      (click)=\"closeResetModal()\"\n                    >\n                      Cancel\n                    </ion-button>\n                  </form>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ }),

/***/ 2506:
/*!*************************************************************!*\
  !*** ./src/app/login-modal/login-page.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ }),

/***/ 9537:
/*!***************************************************************************************!*\
  !*** ./src/app/modals/loading-modal/loading-modal/loading-modal.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <p>Modal page loads</p>\n</ion-content>\n";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Global Trends</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"router.url ==='/tabs'\">\r\n  <ion-slide>\r\n    <h1>Slide 1 Boop</h1>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h1>Slide 2 Says</h1>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h1>Slide 3 The Cat</h1>\r\n  </ion-slide>\r\n</ion-slides>\r\n\r\n<ion-tabs #tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button  tab=\"tab1\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label class=\"text-center\">Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"barbell-outline\"></ion-icon>\r\n      <ion-label class=\"text-center\">Custom Workouts</ion-label>\r\n\r\n   </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"globe-outline\"></ion-icon>\r\n      <ion-label>Global Trends</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map