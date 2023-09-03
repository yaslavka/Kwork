import r from './constants/routes.constants'
import HomePublic from "./pages/PublicPages/HomePublic";
import CategoryPublic from "./pages/PublicPages/CategoryPublic";
import SubCategoryPublic from "./pages/PublicPages/SubCategoryPublic";

export const publicRouteConfig = [
    {
        id: '0',
        path: r.root,
        component: HomePublic,
        exact: true,
    },
    {
        id: '2',
        path: r.categoriesDesign,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '3',
        path: r.categoriesProgramming,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '4',
        path: r.categoriesWritingTranslations,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '5',
        path: r.categoriesSeo,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '6',
        path: r.categoriesPromotion,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '7',
        path: r.categoriesAudio,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '8',
        path: r.categoriesBusiness,
        component: CategoryPublic,
        exact: true,
    },
    {
        id: '9',
        path: r.categoriesLogotip,
        component: CategoryPublic,
        exact: true,
    },
];
export const privateRouteConfig = [
    {
        id: '10',
        path: r.buyer,
        component: HomePublic,
        exact: true,
    },
];
