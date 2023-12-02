import { faBook, faBookAtlas, faBookmark, faBraille, faContactBook, faDashboard, faListCheck, faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
    {
        title: "Dashboard",
        href: "addashboard",
        icon: faDashboard,
    },
    {
        title: "Manage Users",
        href: "musers",
        icon: faUsers,
    },
    {
        title: "Manage Books",
        href: "mbooks",
        icon: faBook,
    },
    // {
    //     title: "Manage Services",
    //     href: "mservices",
    //     icon: faBraille,
    // },
    // {
    //     title: "Manage Stafs",
    //     href: "mstafs",
    //     icon: faBookAtlas,
    // },
    {
        title: "Manage Orders",
        href: "morders",
        icon: faListCheck,
    },
    {
        title: "Manage Contacts",
        href: "mcontacts",
        icon: faContactBook,
    },
];
