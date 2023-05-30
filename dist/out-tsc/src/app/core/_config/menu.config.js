var MenuConfig = /** @class */ (function () {
    function MenuConfig() {
        this.defaults = {
            // ******************************************************************
            //  MENU ADIL
            // ******************************************************************
            header: {
                self: {},
                items: [
                    {
                        title: "delegataire",
                        root: true,
                        alignment: "left",
                        toggle: "hover",
                        translate: "Délégataire",
                        //permission: "accessToAssociationModule",
                        submenu: [
                            {
                                title: "Délégitaire",
                                translate: "liste des délégataires",
                                page: "/pages/delegataire/delegataires",
                                icon: "flaticon2-list-3",
                            },
                        ],
                    },
                    {
                        title: "SDL",
                        root: true,
                        alignment: "left",
                        toggle: "hover",
                        translate: "SDL",
                        //permission: "accessToAssociationModule",
                        submenu: [
                            {
                                title: "SDL",
                                translate: "Liste des SDL",
                                page: "/pages/delegataire/sdl",
                                icon: "flaticon2-list-3",
                            },
                        ],
                    },
                    {
                        title: "Paramètrages",
                        root: true,
                        alignment: "left",
                        toggle: "hover",
                        translate: "Paramètrages",
                        submenu: [
                            {
                                title: "Structure délégataire",
                                translate: "Structure délégataire",
                                page: "/pages/parametrage/list-structure-delegataire",
                                icon: "flaticon-edit-1",
                            },
                            {
                                title: "Structure sdl",
                                translate: "Structure sdl",
                                page: "/pages/parametrage/list-structure-sdl",
                                icon: "flaticon-edit-1",
                            },
                            {
                                title: "Type d'indicateur délégataire",
                                translate: "Type d'indicateur délégataire",
                                page: "/pages/parametrage/list-type-indicateur-delegataire",
                                icon: "flaticon-edit-1",
                            },
                            {
                                title: "Type d'indicateur sdl",
                                translate: "Type d'indicateur sdl",
                                page: "/pages/parametrage/list-type-indicateur-sdl",
                                icon: "flaticon-edit-1",
                            },
                        ],
                    },
                ],
            },
            header_RH: {
                self: {},
                items: [
                    {
                        title: "Demande",
                        root: true,
                        alignment: "left",
                        toggle: "hover",
                        translate: "Demande",
                        //permission: "accessToAssociationModule",
                        submenu: [
                            {
                                title: "Liste des demandes",
                                translate: "Liste des demandes",
                                page: "/pages/demande/list-demandes",
                                icon: "flaticon2-list-3",
                            },
                            {
                                title: "Ajouter demande",
                                translate: "Ajouter demande",
                                page: "/pages/demande/add-demande",
                                icon: "flaticon-edit-1",
                            },
                        ],
                    },
                ],
            },
            // headerMarche: {
            // 	self: {},
            // 	items: [
            // 		{
            // 			title: "Gestion de pesée",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Gestion de pesée",
            // 			//permission: "accessToAssociationModule",
            // 			submenu: [
            // 				{
            // 					title: "Liste des pesées",
            // 					translate: "PAGES.PESEE.TITRE_INDEX",
            // 					page: "/pages/pesee/list-pesees",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Ajouter Pesée",
            // 					translate: "PAGES.PESEE.TITRE_NEW",
            // 					page: "/pages/pesee/add-pesee",
            // 					icon: "flaticon-edit-1",
            // 					//permission: "canCreateAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Gestion des réglements",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Gestion des réglements",
            // 			//permission: "accessToAssociationModule",
            // 			submenu: [
            // 				{
            // 					title: "Liste des factures",
            // 					translate: "Liste des factures",
            // 					page: "/pages/reglement/list-factures",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Facture",
            // 					translate: "Facture",
            // 					page: "/pages/reglement/facture",
            // 					icon: "flaticon-edit-1",
            // 					//permission: "canCreateAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Evénement",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Evénement",
            // 			//permission: "accessToAssociationModule",
            // 			submenu: [
            // 				{
            // 					title: "Liste des événements",
            // 					translate: "Liste des événements",
            // 					page: "/pages/evenement/list-evenement",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "canCreateAssociation",
            // 				},
            // 				{
            // 					title: "Ajouter un événement",
            // 					translate: "Ajouter un événement",
            // 					page: "/pages/evenement/add-evenement",
            // 					icon: "flaticon-edit-1",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Gestion du Marché",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Gestion du Marché",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Type de Produit",
            // 					translate: "Type de Produit",
            // 					page: "/pages/Marche/list-type-produit",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Type de Tarifiction",
            // 					translate: "Type de Tarifiction",
            // 					page: "/pages/Marche/list-type-tarifiction",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Type de Hangar",
            // 					translate: "Type de Hangar",
            // 					page: "/pages/Marche/list-type-hangar",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Type d'Emballage",
            // 					translate: "Type d'Emballage",
            // 					page: "/pages/Marche/list-type-embalage",
            // 					icon: "flaticon2-list-3",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Statistiques",
            // 			page: "/pages/statistiques1/dashboard",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Statistiques",
            // 		},
            // 	],
            // },
            // headerA: {
            // 	self: {},
            // 	items: [
            // 		{
            // 			title: "Personnel",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Personnel",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste du personnel saisonnieres",
            // 					translate: "Liste du personnel saisonnieres",
            // 					page: "/pages/personnel/list-personnel",
            // 					icon: "flaticon2-list-3",
            // 				},
            // 				{
            // 					title: "Liste du personnel commune",
            // 					translate: "Liste du personnel commune",
            // 					page: "/pages/personnel/list-personnel-commune",
            // 					icon: "flaticon2-list-3",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Congé",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Congés",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des congé",
            // 					translate: "Liste des congé",
            // 					page: "/pages/conge/list-conge",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Notation",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Notation",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des compagnes",
            // 					translate: "Liste des compagnes",
            // 					page: "/pages/notation/list-notation",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Liste des notes",
            // 					translate: "Liste des notes",
            // 					page: "/pages/notation/list-note",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Noter personnel",
            // 					translate: "Noter personnel",
            // 					page: "/pages/notation/noter-personnel",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Retraite",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Retraite",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des retraites",
            // 					translate: "Liste des retraités",
            // 					page: "/pages/retraite/list-retraite",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Liste des demandes",
            // 					translate: "Liste des demandes de retraite",
            // 					page: "/pages/retraite/list-demandes",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Promotion",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Promotion",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des Promotions",
            // 					translate: "Liste des Promotions",
            // 					page: "/pages/promotion/list-promotion",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Concours",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Concours",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des Concours",
            // 					translate: "Liste des Concours",
            // 					page: "/pages/concours/list-concours",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Bureau d'ordre",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Bureau d'ordre",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des Courriers",
            // 					translate: "Liste des Courriers",
            // 					page: "/pages/bureau-ordre/list-courriers",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Formation continue",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Formation continue",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Liste des Formations",
            // 					translate: "Liste des Formations",
            // 					page: "/pages/formation-continue/liste-formation",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Statistiques",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Statistiques",
            // 			page: "/pages/statistiques2/dashboard",
            // 		},
            // 	],
            // },
            // headerBatoire: {
            // 	self: {},
            // 	items: [
            // 		{
            // 			title: "Journée",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Journée",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Gestion de la Journée",
            // 					translate: "Gestion de la Journée",
            // 					page: "/pages/audiences/list-info",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "régie",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Régie",
            // 			//permission: "",
            // 			submenu: [
            // 				{
            // 					title: "Gestion de Factures",
            // 					translate: "Gestion des Factures",
            // 					page: "/pages/audiences/list-facture",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Cotation",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Cotation",
            // 			submenu: [
            // 				{
            // 					title: "Evaluation de Qualité ",
            // 					translate: "Evaluation de Qualité",
            // 					page: "/pages/audiences/list-cotation",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Paramétrage",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			translate: "Paramétrage",
            // 			//permission: ",
            // 			submenu: [
            // 				{
            // 					title: "Gestion des chevillards",
            // 					translate: "Gestion des chevillards",
            // 					page: "/pages/audiences/list-audiences",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Gestion Des Espéces",
            // 					translate: "Gestion des Espéces",
            // 					page: "/pages/audiences/list-espece",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Gestion Des Sous Espéces",
            // 					translate: "Gestion des Sous Espéces",
            // 					page: "/pages/audiences/list-sous-espece",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 				{
            // 					title: "Gestion Des Tarifs",
            // 					translate: "Gestion des Tarifs",
            // 					page: "/pages/audiences/list-tarifs",
            // 					icon: "flaticon2-list-3",
            // 					//permission: "accessToIndexAssociation",
            // 				},
            // 			],
            // 		},
            // 		{
            // 			title: "Statistiques",
            // 			root: true,
            // 			alignment: "left",
            // 			toggle: "hover",
            // 			page: "/pages/statistics/board",
            // 			translate: "Statistiques",
            // 		},
            // 	],
            // },
            aside: {
                self: {},
                items: [],
            },
        };
    }
    Object.defineProperty(MenuConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return MenuConfig;
}());
export { MenuConfig };
//# sourceMappingURL=menu.config.js.map