import * as tslib_1 from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Material
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// Translate
import { TranslateModule } from '@ngx-translate/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// CRUD
import { InterceptService } from '../../core/_base/crud/';
// Module components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
// Auth
import { AuthEffects, authReducer, } from '../../core/auth';
import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
var routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent,
                data: { returnUrl: window.location.pathname }
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            }
        ]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
            //AuthService,
            //AuthGuard
            ]
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                MatButtonModule,
                RouterModule.forChild(routes),
                MatInputModule,
                MatFormFieldModule,
                MatCheckboxModule,
                TranslateModule.forChild(),
                StoreModule.forFeature('auth', authReducer),
                EffectsModule.forFeature([AuthEffects]),
                NgbModule,
            ],
            providers: [
                InterceptService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: InterceptService,
                    multi: true
                },
                NgbAlertConfig,
            ],
            exports: [AuthComponent],
            declarations: [
                AuthComponent,
                LoginComponent,
                RegisterComponent,
                ForgotPasswordComponent,
                AuthNoticeComponent
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=auth.module.js.map