// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
// Auth
//import { AuthGuard } from "./core/auth";
import { ErrorPageComponent } from "./views/theme/content/error-page/error-page.component";

const routes: Routes = [
	{
		path: "auth",
		loadChildren: () =>
			import("./views/pages/auth/auth.module").then((m) => m.AuthModule),
	},

	{
		path: "pages",
		component: BaseComponent,
		children: [
			{
				path: "evenement",
				loadChildren: () =>
					import("./views/pages/evenement/evenement.module").then(
						(m) => m.EvenementModule
					),
			},
			{
				path: "delegataire",
				loadChildren: () =>
					import('./views/pages/delegataire/delegataire.Module').then(
						(m) => m.DelegatairesModule
					),
			},
			{
				path: "parametrage",
				loadChildren: () =>
					import(
						"./views/pages/parametrages-sdl-delegataire/parametrages-sdl-delegataire.Module"
					).then((m) => m.ParametragesSdlDelegataireModule),
			},
			{
				path: "contrats",
				loadChildren: () =>
					import("./views/pages/contrats/contrats.module").then(
						(m) => m.ContratsModule
					),
			},
			{
				path: "juridique",
				loadChildren: () =>
					import("./views/pages/juridique/juridique.Module").then(
						(m) => m.JuridiqueModule
					),
			},

			{
				path: "demande",
				loadChildren: () =>
					import("./views/pages/demande/demande.module").then(
						(m) => m.DemandeModule
					),
			},

			{
				path: "affaire-judiciaire",
				loadChildren: () =>
					import(
						"./views/pages/affaire-judiciaire/affaire-judiciaire.module"
					).then((m) => m.AffaireJudiciaireModule),
			},

			{
				path: "statistiques",
				loadChildren: () =>
					import(
						"./views/pages/statistiques/statistiques.module"
					).then((m) => m.StatistiquesModule),
			},
			{
				path: "Marchee",
				loadChildren: () =>
					import("./views/pages/Marchee/marchee.module").then(
						(m) => m.MarcheeModule
					),
			},
			{
				path: "Convention",
				loadChildren: () =>
					import("./views/pages/Convention/convention.module").then(
						(m) => m.ConventionModule
					),
			},
			{
				path: "Projet",
				loadChildren: () =>
					import("./views/pages/Projet/Projet.module").then(
						(m) => m.ProjetModule
					),
			},
			{
				path: "Programme",
				loadChildren: () =>
					import("./views/pages/programme/programme.module").then(
						(m) => m.ProgrammeModule
					),
			},

			// Abbatoire
			{
				path: "affaires",
				loadChildren: () =>
					import("./views/pages/affaires/affaires.module").then(
						(m) => m.AffaireModule
					),
			},
			{
				path: "audiences",
				loadChildren: () =>
					import("./views/pages/audiences/audiences.module").then(
						(m) => m.AudiencesModule
					),
			},

			{
				path: "statistics",
				loadChildren: () =>
					import("./views/pages/statistics/statistics.module").then(
						(m) => m.StatisticsModule
					),
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
@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
