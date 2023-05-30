import * as tslib_1 from "tslib";
// Angular
import { Injectable } from "@angular/core";
// RxJS
import { BehaviorSubject } from "rxjs";
// Object path
import * as objectPath from "object-path";
// Services
import { MenuConfigService } from "./menu-config.service";
import { Router } from "@angular/router";
var MenuHorizontalService = /** @class */ (function () {
    /**
     * Service constructor
     *
     * @param menuConfigService: MenuConfigService
     */
    function MenuHorizontalService(menuConfigService, router) {
        this.menuConfigService = menuConfigService;
        this.router = router;
        this.selectedIndex = 0;
        // Public properties
        this.menuList$ = new BehaviorSubject([]);
        this.loadMenu();
    }
    /**
     * Load menu list
     */
    MenuHorizontalService.prototype.loadMenu = function () {
        // get menu list
        this.menu = localStorage.getItem("menu");
        var menuItems = objectPath.get(this.menuConfigService.getMenus(), this.menu ? this.menu : "header_RH.items");
        this.menuList$.next(menuItems);
    };
    MenuHorizontalService.prototype.clickMenu = function (index) {
        this.selectedIndex = index;
        switch (this.selectedIndex) {
            // ------------------- MENU ADIL -------------------
            case 1: {
                this.menu = "header.items";
                localStorage.setItem("menu", "header.items");
                this.loadMenu();
                this.router.navigate(["pages/delegataire/delegataires"]);
                break;
            }
            case 2: {
                this.menu = "header_RH.items";
                localStorage.setItem("menu", "header_RH.items");
                this.loadMenu();
                this.router.navigate(["pages/demande/list-demandes"]);
                break;
            }
            case 3: {
                this.menu = "headerMarche.items";
                localStorage.setItem("menu", "headerMarche.items");
                this.loadMenu();
                this.router.navigate(["pages/pesee/list-pesees"]);
                break;
            }
            case 4: {
                this.menu = "headerA.items";
                localStorage.setItem("menu", "headerA.items");
                this.loadMenu();
                this.router.navigate(["pages/personnel/list-personnel"]);
                break;
            }
            case 5: {
                this.menu = "headerBatoire.items";
                localStorage.setItem("menu", "headerBatoire.items");
                this.loadMenu();
                this.router.navigate(["pages/audiences/list-audiences"]);
                break;
            }
            // ------------------- MENU RACHID -------------------
            case 6: {
                this.menu = "header_immobilisation.items";
                localStorage.setItem("menu", "header_immobilisation.items");
                this.loadMenu();
                this.router.navigate([""]);
                break;
            }
            case 7: {
                this.menu = "header_jsce.items";
                localStorage.setItem("menu", "header_jsce.items");
                this.loadMenu();
                this.router.navigate([""]);
                break;
            }
            case 8: {
                this.menu = "header_travaux_communaux.items";
                localStorage.setItem("menu", "header_travaux_communaux.items");
                this.loadMenu();
                this.router.navigate(["intervention-rapide"]);
                break;
            }
            // ------------------- MENU NAIMA -------------------
            case 9: {
                this.menu = "header_reclamation.items";
                localStorage.setItem("menu", "header_reclamation.items");
                this.loadMenu();
                this.router.navigate(["reclamations"]);
                break;
            }
            case 10: {
                this.menu = "header_autorisation.items";
                localStorage.setItem("menu", "header_autorisation.items");
                this.loadMenu();
                this.router.navigate(["autorisations"]);
                break;
            }
            case 11: {
                this.menu = "header_reservations.items";
                localStorage.setItem("menu", "header_reservations.items");
                this.loadMenu();
                this.router.navigate(["reservations"]);
                break;
            }
            case 12: {
                this.menu = "header_affairesConseil.items";
                localStorage.setItem("menu", "header_affairesConseil.items");
                this.loadMenu();
                this.router.navigate(["affaires-conseil"]);
                break;
            }
            case 13: {
                this.menu = "header_marches.items";
                localStorage.setItem("menu", "header_marches.items");
                this.loadMenu();
                this.router.navigate(["marches"]);
                break;
            }
            // ------------------- MENU USERS -------------------
            case 20: {
                this.menu = "header.items";
                localStorage.setItem("menu", "header.items");
                this.loadMenu();
                this.router.navigate(["user"]);
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    };
    MenuHorizontalService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [MenuConfigService,
            Router])
    ], MenuHorizontalService);
    return MenuHorizontalService;
}());
export { MenuHorizontalService };
//# sourceMappingURL=menu-horizontal.service.js.map