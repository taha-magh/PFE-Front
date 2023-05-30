import * as tslib_1 from "tslib";
// Angular
import { Component, Input } from '@angular/core';
// NGRX
import { select, Store } from '@ngrx/store';
import { currentUser, Logout } from '../../../../../core/auth';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
var UserProfileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserProfileComponent(store, translate, router) {
        var _this = this;
        this.store = store;
        this.translate = translate;
        this.router = router;
        this.dropDir = 'bottom-left';
        this.avatar = true;
        this.greeting = true;
        this.libelle = "N/a";
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                _this.dropDir = 'bottom-left';
            }
            else {
                _this.dropDir = 'bottom-right';
            }
        });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user$ = this.store.pipe(select(currentUser));
        /*
        this.user$ = this.store.pipe(select(currentUser));
        this.user$.subscribe(user =>{
            this.idPersonnel = user.idPersonnel;
            console.log('idPersonnel: '+ this.idPersonnel);
            //this.fullName = user.fullname;
            console.log('Current user : '+ JSON.stringify(this.fullName,null,2));
        })
        */
    };
    /*
    getDivisionById(idDiv) {
        const _this = this;
        this.service1.findEntityById(idDiv, '/divisions/find/')
            .subscribe(d => {
                _this.divisionLibelle = d.libelleFR;
            }, error => { console.log(error) })
        return _this.divisionLibelle;
    }
    */
    UserProfileComponent.prototype.personnelShow = function (id) {
        console.log(id);
        this.router.navigate(['/user/user-profile'], { queryParams: { id: id } });
    };
    UserProfileComponent.prototype.personnelPjShow = function (id) {
        console.log(id);
        this.router.navigate(['/user/mes-documents'], { queryParams: { id: id } });
    };
    /**
     * Mes courriers
     */
    UserProfileComponent.prototype.courrierShow = function (idPers, idDiv) {
        console.log('Id personnel: ' + idPers + " et id division: " + idDiv);
        this.router.navigate(["personnel-courriers/show-courriers"], { queryParams: { id: idPers, div: idDiv } });
    };
    /**
     * Comunication
     */
    UserProfileComponent.prototype.communication = function () {
        window.open('http://marrakech.jamaati.hvc.ma:3000/home', '_blank');
    };
    /**
     * Log out
     */
    UserProfileComponent.prototype.logout = function () {
        this.store.dispatch(new Logout());
    };
    UserProfileComponent.prototype.changePwd = function () {
        var idUser = window.localStorage.getItem("idUser");
        console.log("user id! " + idUser);
        this.router.navigate(['/user/user-edit-pwd'], { queryParams: { id: idUser } });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UserProfileComponent.prototype, "avatar", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UserProfileComponent.prototype, "greeting", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserProfileComponent.prototype, "badge", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserProfileComponent.prototype, "icon", void 0);
    UserProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-user-profile',
            templateUrl: './user-profile.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [Store,
            TranslateService,
            Router])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map