export const PRODUCT_CATEGORIES = [{
    label: "UI kits",
    value: "ui_kits" as const,
    featured: [{
                name: "Best sellers",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg",
                },
                {
                    name: "Popular",
                    href: "#",
                    imageSrc: "/nav/ui-kits/blue.jpg",
                },
                {
                    name: "Recently published",
                    href: "#",
                    imageSrc: "/nav/ui-kits/purple.jpg",
                    },
                    
              ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [{
                    name: "Favorite Icon Picks",
                    href: "#",
                    imageSrc: "/nav/icons/picks.jpg",
                    },
                    {
                        name: "Popular",
                        href: "#",
                        imageSrc: "/nav/icons/bestsellers.jpg",
                    },
                    {
                        name: "Recently published",
                        href: "#",
                        imageSrc: "/nav/icons/new.jpg",
                        },
                          
                  ],
        },
]