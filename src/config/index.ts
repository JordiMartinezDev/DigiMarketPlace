export const PRODUCT_CATEGORIES = [
    {
      label: 'UI Kits',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=ui_kits`,
          imageSrc: '/ui-kits/mixed.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/ui-kits/blue.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=ui_kits',
          imageSrc: '/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Icons',
      value: 'icons' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/icons/picks.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/icons/new.jpg',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/icons/bestsellers.jpg',
        },
      ],
    },
  ]