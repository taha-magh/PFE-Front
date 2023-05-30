import * as tslib_1 from "tslib";
// Angular
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
// Translate
import { TranslateService } from '@ngx-translate/core';
// Auth
import { AuthNoticeService, AuthService } from '../../../core/auth';
var ForgotPasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authService
     * @param authNoticeService
     * @param translate
     * @param router
     * @param fb
     * @param cdr
     */
    function ForgotPasswordComponent(authService, authNoticeService, translate, router, fb, cdr) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.router = router;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new Subject();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.initRegistrationForm();
    };
    /**
     * On destroy
     */
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    ForgotPasswordComponent.prototype.initRegistrationForm = function () {
        this.forgotPasswordForm = this.fb.group({
            email: ['', Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.minLength(3),
                    Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ])
            ]
        });
    };
    /**
     * Form Submit
     */
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    ForgotPasswordComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.forgotPasswordForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) &&
            (control.dirty || control.touched);
        return result;
    };
    ForgotPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-forgot-password',
            templateUrl: './forgot-password.component.html',
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            AuthNoticeService,
            TranslateService,
            Router,
            FormBuilder,
            ChangeDetectorRef])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map