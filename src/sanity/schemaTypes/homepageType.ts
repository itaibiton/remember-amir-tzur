import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    icon: HomeIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Main title displayed on the homepage (״שלא נצא בורים״)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Subtitle displayed below the title (פרויקט הנצחה לזכרו של סרן אמיר צור)',
        }),
        defineField({
            name: 'mainContent',
            title: 'Main Content',
            type: 'blockContent',
            description: 'Rich text content for the homepage',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessibility',
                })
            ]
        }),
        defineField({
            name: 'seo',
            title: 'SEO & Metadata',
            type: 'object',
            fields: [
                defineField({
                    name: 'metaTitle',
                    type: 'string',
                    title: 'Meta Title',
                }),
                defineField({
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Meta Description',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'heroImage',
        },
    },
}) 