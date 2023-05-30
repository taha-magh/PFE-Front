import * as tslib_1 from "tslib";
// Angular
import { ChangeDetectorRef, Component, ViewEncapsulation, } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
// RxJS
import { Subject } from "rxjs";
// Translate
import { TranslateService } from "@ngx-translate/core";
// Store
import { Store } from "@ngrx/store";
// Auth
import { AuthNoticeService } from "../../../../core/auth";
/**
 * ! Just example => Should be removed in development
 */
var DEMO_PARAMS = {
    USERNAME: "",
    PASSWORD: "",
};
var LoginComponent = /** @class */ (function () {
    // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    /**
     * Component constructor
     *
     * @param router: Router
     * @param auth: AuthService
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     * @param route
     */
    function LoginComponent(router, 
    //private auth: AuthService,
    authNoticeService, translate, store, fb, cdr, route) {
        this.router = router;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.store = store;
        this.fb = fb;
        this.cdr = cdr;
        this.route = route;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new Subject();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initLoginForm();
        document.getElementById("noAccess").style.display = "none";
        // redirect back to the returnUrl before login
        this.route.queryParams.subscribe(function (params) {
            _this.returnUrl = params.returnUrl || "/";
        });
    };
    /**
     * On destroy
     */
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authNoticeService.setNotice(null);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    LoginComponent.prototype.initLoginForm = function () {
        // demo message to show
        if (!this.authNoticeService.onNoticeChanged$.getValue()) {
            var initialNotice = "\u0625\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062D\u0633\u0627\u0628\n\t\t\t<strong>" + DEMO_PARAMS.USERNAME + "</strong> \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\n\t\t\t<strong>" + DEMO_PARAMS.PASSWORD + "</strong> \u0644\u0648\u0644\u0648\u062C \u0627\u0644\u0645\u0646\u0635\u0629.";
            this.authNoticeService.setNotice(initialNotice, "info");
        }
        this.loginForm = this.fb.group({
            username: ["",
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(320),
                ]),
            ],
            password: ["",
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100),
                ]),
            ],
        });
    };
    /*async getPersonnel(iduser) {
        await this.auth.getUserById(iduser).then((data) => {
            //console.log('PERS :: '+ data.fullname);
            window.localStorage.removeItem("fullnameUser");
            window.localStorage.setItem("fullnameUser",data.fullname);
            //window.localStorage.setItem("language",'fr');
        });
    }*/
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    LoginComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) &&
            (control.dirty || control.touched);
        return result;
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: "kt-login",
            templateUrl: "./login.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthNoticeService,
            TranslateService,
            Store,
            FormBuilder,
            ChangeDetectorRef,
            ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map