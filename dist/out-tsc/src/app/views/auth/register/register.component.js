import * as tslib_1 from "tslib";
// Angular
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
// RxJS
import { finalize, takeUntil, tap } from 'rxjs/operators';
// Translate
import { TranslateService } from '@ngx-translate/core';
// NGRX
import { Store } from '@ngrx/store';
// Auth
import { AuthNoticeService, AuthService, Register, User } from '../../../core/auth/';
import { Subject } from 'rxjs';
import { ConfirmPasswordValidator } from './confirm-password.validator';
var RegisterComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param router: Router
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     */
    function RegisterComponent(authNoticeService, translate, router, auth, store, fb, cdr) {
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new Subject();
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    RegisterComponent.prototype.ngOnInit = function () {
        this.initRegisterForm();
    };
    /*
    * On destroy
    */
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    RegisterComponent.prototype.initRegisterForm = function () {
        this.registerForm = this.fb.group({
            fullname: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            email: ['', Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.minLength(3),
                    // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                    Validators.maxLength(320)
                ]),
            ],
            username: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ]),
            ],
            password: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            confirmPassword: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                ])
            ],
            agree: [false, Validators.compose([Validators.required])]
        }, {
            validator: ConfirmPasswordValidator.MatchPassword
        });
    };
    /**
     * Form Submit
     */
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var controls = this.registerForm.controls;
        // check form
        if (this.registerForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        this.loading = true;
        if (!controls.agree.value) {
            // you must agree the terms and condition
            // checkbox cannot work inside mat-form-field https://github.com/angular/material2/issues/7891
            this.authNoticeService.setNotice('You must agree the terms and condition', 'danger');
            return;
        }
        var _user = new User();
        _user.clear();
        _user.email = controls.email.value;
        _user.username = controls.username.value;
        _user.fullname = controls.fullname.value;
        _user.password = controls.password.value;
        _user.roles = [];
        this.auth.register(_user).pipe(tap(function (user) {
            if (user) {
                _this.store.dispatch(new Register({ authToken: user.accessToken }));
                // pass notice message to the login page
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.REGISTER.SUCCESS'), 'success');
                _this.router.navigateByUrl('/auth/login');
            }
            else {
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
            }
        }), takeUntil(this.unsubscribe), finalize(function () {
            _this.loading = false;
            _this.cdr.markForCheck();
        })).subscribe();
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    RegisterComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.registerForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-register',
            templateUrl: './register.component.html',
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [AuthNoticeService,
            TranslateService,
            Router,
            AuthService,
            Store,
            FormBuilder,
            ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map