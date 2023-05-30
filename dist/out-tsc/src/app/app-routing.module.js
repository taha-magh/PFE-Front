import * as tslib_1 from "tslib";
// Angular
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
var routes = [
    {
        path: "auth",
        loadChildren: function () {
            return import("./views/pages/auth/auth.module").then(function (m) { return m.AuthModule; });
        },
    },
    {
        path: "pages",
        component: BaseComponent,
        children: [
            {
                path: "evenement",
                loadChildren: function () {
                    return import("./views/pages/evenement/evenement.module").then(function (m) { return m.EvenementModule; });
                },
            },
            {
                path: "delegataire",
                loadChildren: function () {
                    return import('./views/pages/delegataire/delegataire.Module').then(function (m) { return m.DelegatairesModule; });
                },
            },
            {
                path: "parametrage",
                loadChildren: function () {
                    return import("./views/pages/parametrages-sdl-delegataire/parametrages-sdl-delegataire.Module").then(function (m) { return m.ParametragesSdlDelegataireModule; });
                },
            },
            {
                path: "contrats",
                loadChildren: function () {
                    return import("./views/pages/contrats/contrats.module").then(function (m) { return m.ContratsModule; });
                },
            },
            {
                path: "juridique",
                loadChildren: function () {
                    return import("./views/pages/juridique/juridique.Module").then(function (m) { return m.JuridiqueModule; });
                },
            },
            {
                path: "demande",
                loadChildren: function () {
                    return import("./views/pages/demande/demande.module").then(function (m) { return m.DemandeModule; });
                },
            },
            {
                path: "affaire-judiciaire",
                loadChildren: function () {
                    return import("./views/pages/affaire-judiciaire/affaire-judiciaire.module").then(function (m) { return m.AffaireJudiciaireModule; });
                },
            },
            {
                path: "statistiques",
                loadChildren: function () {
                    return import("./views/pages/statistiques/statistiques.module").then(function (m) { return m.StatistiquesModule; });
                },
            },
            {
                path: "Marchee",
                loadChildren: function () {
                    return import("./views/pages/Marchee/marchee.module").then(function (m) { return m.MarcheeModule; });
                },
            },
            {
                path: "Convention",
                loadChildren: function () {
                    return import("./views/pages/Convention/convention.module").then(function (m) { return m.ConventionModule; });
                },
            },
            {
                path: "Projet",
                loadChildren: function () {
                    return import("./views/pages/Projet/Projet.module").then(function (m) { return m.ProjetModule; });
                },
            },
            {
                path: "Programme",
                loadChildren: function () {
                    return import("./views/pages/programme/programme.module").then(function (m) { return m.ProgrammeModule; });
                },
            },
            // Abbatoire
            {
                path: "affaires",
                loadChildren: function () {
                    return import("./views/pages/affaires/affaires.module").then(function (m) { return m.AffaireModule; });
                },
            },
            {
                path: "audiences",
                loadChildren: function () {
                    return import("./views/pages/audiences/audiences.module").then(function (m) { return m.AudiencesModule; });
                },
            },
            {
                path: "statistics",
                loadChildren: function () {
                    return import("./views/pages/statistics/statistics.module").then(function (m) { return m.StatisticsModule; });
                },
            },
            // // Propreté
            // {
            // 	path: "proprete-personnel",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-personnel/proprete-personnel.module"
            // 		).then((m) => m.PropretePersonnelModule),
            // },
            // {
            // 	path: "proprete-flotte",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-flotte/proprete-flotte.module"
            // 		).then((m) => m.PropreteFlotteModule),
            // },
            // {
            // 	path: "proprete-circuit",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-circuit/proprete-circuit.module"
            // 		).then((m) => m.PropreteCircuitModule),
            // },
            // {
            // 	path: "proprete-maintenance",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-maintenance/proprete-maintenance.module"
            // 		).then((m) => m.PropreteMaintenanceModule),
            // },
            // {
            // 	path: "proprete-regroupement",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-regroupement/proprete-regroupement.module"
            // 		).then((m) => m.PropreteRegroupementModule),
            // },
            // {
            // 	path: "proprete-transfert",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-transfert/proprete-transfert.module"
            // 		).then((m) => m.PropreteTransfertModule),
            // },
            // {
            // 	path: "proprete-decharge",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-decharge/proprete-decharge.module"
            // 		).then((m) => m.PropreteDechargeModule),
            // },
            // {
            // 	path: "proprete-reclamations-penalites",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-reclamations-penalites/proprete-reclamations-penalites.module"
            // 		).then((m) => m.PropreteReclamationsPenalitesModule),
            // },
            // {
            // 	path: "proprete-contrats",
            // 	loadChildren: () =>
            // 		import(
            // 			"./views/pages/proprete-contrats/proprete-contrats.module"
            // 		).then((m) => m.PropreteContratsModule),
            // },
            {
                path: "",
                redirectTo: "proprete-personnel/list-personnel",
                pathMatch: "full",
            },
            {
                path: "**",
                redirectTo: "proprete-personnel/list-personnel",
                pathMatch: "full",
            },
        ],
    },
    { path: "", redirectTo: "auth", pathMatch: "full" },
    { path: "**", redirectTo: "auth", pathMatch: "full" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map