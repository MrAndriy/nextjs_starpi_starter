import { Page, Payload } from '@/types'

export const staticHome: Payload<Page[]> = {
  data: [
    {
      id: 5,
      attributes: {
        shortName: 'Home Page',
        createdAt: '2023-03-08T14:13:57.041Z',
        updatedAt: '2023-06-28T16:59:02.067Z',
        publishedAt: '2023-03-08T14:28:43.068Z',
        slug: 'home',
        heading: 'dfsgsg',
        description: 'dfsgsdfg',
        locale: 'en',
        contentSections: [
          {
            id: 4,
            __component: 'sections.hero',
            title: 'Strapi [Starter] with Next JS',
            description: 'This is build with [Strapi] and [Next] JS. A match made in heaven.',
            picture: { data: { id: 54, attributes: { url: '/uploads/undraw_woman_ffrd_b3ac24fb06.svg', alternativeText: null, caption: null, width: 643, height: 700 } } },
            buttons: [
              { id: 8, url: 'https://discord.com/invite/strapi', newTab: true, text: 'Discord', type: 'secondary' },
              { id: 9, url: 'https://strapi.io/events', newTab: true, text: 'Events', type: 'primary' },
            ],
          },
          {
            id: 3,
            __component: 'sections.features',
            heading: 'Features',
            description: 'Welcome to Strapi Starter',
            feature: [
              {
                id: 7,
                title: 'Discover Next.js',
                description: 'The React Framework for Production: Explore the future of web development with Next.js, the cutting-edge React framework.',
                showLink: true,
                newTab: true,
                url: 'https://vercel.com/',
                text: 'Learn more',
                media: { data: null },
              },
              {
                id: 8,
                title: 'Strapi',
                description:
                  'Unleash the power of Strapi, the leading open-source headless CMS that lets you create, manage, and distribute your content across multiple platforms.',
                showLink: true,
                newTab: true,
                url: 'https://strapi.io',
                text: 'Learn more',
                media: { data: null },
              },
              {
                id: 9,
                title: 'Cloud',
                description: 'Simplify your content management experience with Strapi Cloud, the fully-managed hosting solution for your Strapi projects.',
                showLink: true,
                newTab: true,
                url: 'https://strapi.io/cloud',
                text: 'Learn more',
                media: { data: null },
              },
            ],
          },
          {
            id: 3,
            __component: 'sections.pricing',
            title: 'Our Plans',
            plans: [
              { id: 7, name: 'Free', description: 'Features', isRecommended: false, price: 0, pricePeriod: 'Monthly', product_features: { data: [] } },
              { id: 8, name: 'Pro', description: 'Features', isRecommended: true, price: 9.99, pricePeriod: 'monthly', product_features: { data: [] } },
              { id: 9, name: 'Enterprise ', description: 'Features', isRecommended: false, price: 19.99, pricePeriod: 'monthly', product_features: { data: [] } },
            ],
          },
          {
            id: 3,
            __component: 'sections.testimonials-group',
            title: 'Testimonials',
            description: 'Hello',
            testimonials: [
              {
                id: 5,
                text: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                authorName: 'Paul Brats',
                picture: { data: null },
              },
              {
                id: 6,
                text: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                authorName: 'Kit Kat',
                picture: { data: null },
              },
            ],
          },
          {
            id: 3,
            __component: 'sections.lead-form',
            title: 'Join our community.',
            emailPlaceholder: 'Enter your email',
            location: 'main page',
            description: 'Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!',
            submitButton: { id: 3, text: 'Submit', type: 'primary' },
          },
        ],
        seo: { id: 18, metaTitle: 'dfgsdg', metaDescription: 'dsfgsdf', shareImage: { data: null } },
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
}