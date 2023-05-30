import * as tslib_1 from "tslib";
// Angular
import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Partials
import { PartialsModule } from "../partials/partials.module";
// Pages
import { CoreModule } from "../../core/core.module";
import { SubheaderSearchComponent } from "../partials/layout/subheader/subheader-search/subheader-search.component";
import { MycurrencyPipe } from "./custom.currencypipe";
import { DirhamsCurrencyPipe } from "./dirhamsCurrency.pipe";
import { CustomPaginationComponent } from "./utils/pagination/components/custom-pagination/custom-pagination.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "./utils/materials/materials.module";
import { NgSelectModule } from "@ng-select/ng-select";
// pdf viewer
import { PdfViewerModule } from "ng2-pdf-viewer";
import { SpinnerViewComponent } from "./utils/spinner/spinner-view/spinner-view.component";
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib_1.__decorate([
        NgModule({
            //declarations: [	MyPageComponent],
            exports: [
                MycurrencyPipe,
                DirhamsCurrencyPipe,
                CustomPaginationComponent,
                TranslateModule,
                MaterialsModule,
                PdfViewerModule,
            ],
            imports: [
                PdfViewerModule,
                CommonModule,
                HttpClientModule,
                FormsModule,
                NgSelectModule,
                CoreModule,
                PartialsModule,
                MaterialsModule,
                TranslateModule.forChild(),
                RouterModule.forChild([
                    {
                        path: "",
                        component: CustomPaginationComponent,
                    },
                ]),
            ],
            entryComponents: [SpinnerViewComponent],
            providers: [
                {
                    provide: LOCALE_ID,
                    useValue: "fr",
                },
            ],
            declarations: [
                SubheaderSearchComponent,
                MycurrencyPipe,
                DirhamsCurrencyPipe,
                CustomPaginationComponent,
                SpinnerViewComponent,
            ],
        })
    ], PagesModule);
    return PagesModule;
}());
export { PagesModule };
//# sourceMappingURL=pages.module.js.map