import * as tslib_1 from "tslib";
// Angular
import { Component, HostBinding, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// RxJS
import { filter } from 'rxjs/operators';
// Translate
import { TranslationService } from '../../../../../core/_base/layout';
import { TranslateService } from '@ngx-translate/core';
var LanguageSelectorComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     */
    function LanguageSelectorComponent(translationService, translate, router) {
        var _this = this;
        this.translationService = translationService;
        this.translate = translate;
        this.router = router;
        // Public properties
        this.classes = '';
        this.dropDir = 'bottom-left';
        this.languages = [
            {
                lang: 'fr',
                name: this.translate.instant("TRANSLATOR.FR"),
                flag: './assets/media/flags/195-france.svg'
            },
            {
                lang: 'ar',
                name: this.translate.instant("TRANSLATOR.AR"),
                flag: './assets/media/flags/166-morocco.svg'
            },
        ];
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
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setSelectedLanguage();
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function (event) {
            _this.setSelectedLanguage();
        });
    };
    /**
     * Set language
     *
     * @param lang: any
     */
    LanguageSelectorComponent.prototype.setLanguage = function (lang) {
        var _this = this;
        this.languages.forEach(function (language) {
            if (language.lang === lang) {
                language.active = true;
                _this.language = language;
            }
            else {
                language.active = false;
            }
        });
        this.translationService.setLanguage(lang);
    };
    /**
     * Set selected language
     */
    LanguageSelectorComponent.prototype.setSelectedLanguage = function () {
        this.setLanguage(this.translationService.getSelectedLanguage());
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], LanguageSelectorComponent.prototype, "classes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LanguageSelectorComponent.prototype, "iconType", void 0);
    LanguageSelectorComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-language-selector',
            templateUrl: './language-selector.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [TranslationService,
            TranslateService,
            Router])
    ], LanguageSelectorComponent);
    return LanguageSelectorComponent;
}());
export { LanguageSelectorComponent };
//# sourceMappingURL=language-selector.component.js.map