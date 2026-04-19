import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  cmsCallback: (cms) => {
    // Inject RTL styles for Hebrew content editing
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        textarea, input[type="text"], input[type="url"] {
          direction: rtl !important;
          text-align: right !important;
        }
        /* Keep URL/slug fields LTR */
        input[name*="slug"], input[name*="link"], input[name*="lat"], input[name*="long"] {
          direction: ltr !important;
          text-align: left !important;
        }
      `;
      document.head.appendChild(style);
    }
    return cms;
  },

  schema: {
    collections: [
      {
        name: 'homepage',
        label: 'דף הבית',
        path: 'content/homepage',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            name: 'sections',
            label: 'תכנים',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || 'קטע ללא כותרת',
              }),
            },
            fields: [
              { name: 'title', label: 'כותרת', type: 'string' },
              {
                name: 'content',
                label: 'תוכן',
                type: 'string',
                ui: { component: 'textarea' },
              },
            ],
          },
        ],
      },
      {
        name: 'location',
        label: 'נקודות',
        path: 'content/locations',
        format: 'json',
        ui: {
          filename: {
            slugify: (values) => values?.slug || '',
          },
        },
        fields: [
          { name: 'title', label: 'כותרת מלאה (בעמוד)', type: 'string', required: true },
          { name: 'shortTitle', label: 'שם קצר (ברשימת הנקודות)', type: 'string' },
          { name: 'slug', label: 'Slug (לכתובת URL)', type: 'string', required: true },
          { name: 'subtitle', label: 'תת כותרת', type: 'string' },
          { name: 'lat', label: 'קו רוחב (Latitude)', type: 'string', required: true },
          { name: 'long', label: 'קו אורך (Longitude)', type: 'string', required: true },
          { name: 'disabled', label: 'מושבת (בקרוב)', type: 'boolean' },
          {
            name: 'contentBlocks',
            label: 'תוכן ראשי (טקסט ותמונות)',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => ({
                label:
                  item?.blockType === 'image'
                    ? '🖼 תמונה'
                    : '📝 טקסט',
              }),
            },
            fields: [
              {
                name: 'blockType',
                label: 'סוג',
                type: 'string',
                options: [
                  { value: 'text', label: 'טקסט' },
                  { value: 'image', label: 'תמונה' },
                ],
                required: true,
              },
              {
                name: 'text',
                label: 'טקסט',
                type: 'string',
                ui: { component: 'textarea' },
              },
              {
                name: 'image',
                label: 'תמונה',
                type: 'image',
              },
            ],
          },
          {
            name: 'accordions',
            label: 'קטעים מתקפלים (אקורדיון)',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.accordionTitle || 'קטע ללא כותרת',
              }),
            },
            fields: [
              {
                name: 'accordionTitle',
                label: 'כותרת הקטע',
                type: 'string',
                required: true,
              },
              {
                name: 'blocks',
                label: 'תוכן (טקסט ותמונות)',
                type: 'object',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label:
                      item?.blockType === 'image'
                        ? '🖼 תמונה'
                        : '📝 טקסט',
                  }),
                },
                fields: [
                  {
                    name: 'blockType',
                    label: 'סוג',
                    type: 'string',
                    options: [
                      { value: 'text', label: 'טקסט' },
                      { value: 'image', label: 'תמונה' },
                    ],
                    required: true,
                  },
                  {
                    name: 'text',
                    label: 'טקסט',
                    type: 'string',
                    ui: { component: 'textarea' },
                  },
                  {
                    name: 'image',
                    label: 'תמונה',
                    type: 'image',
                  },
                ],
              },
            ],
          },
          {
            name: 'afterAccordionBlocks',
            label: 'תוכן אחרי האקורדיון (טקסט ותמונות)',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => ({
                label:
                  item?.blockType === 'image'
                    ? '🖼 תמונה'
                    : '📝 טקסט',
              }),
            },
            fields: [
              {
                name: 'blockType',
                label: 'סוג',
                type: 'string',
                options: [
                  { value: 'text', label: 'טקסט' },
                  { value: 'image', label: 'תמונה' },
                ],
                required: true,
              },
              {
                name: 'text',
                label: 'טקסט',
                type: 'string',
                ui: { component: 'textarea' },
              },
              {
                name: 'image',
                label: 'תמונה',
                type: 'image',
              },
            ],
          },
        ],
      },
      {
        name: 'externalLinks',
        label: 'קישורים חיצוניים',
        path: 'content/links',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            name: 'links',
            label: 'קישורים',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || 'קישור ללא כותרת',
              }),
            },
            fields: [
              { name: 'title', label: 'כותרת', type: 'string', required: true },
              { name: 'description', label: 'תיאור', type: 'string' },
              { name: 'link', label: 'כתובת URL', type: 'string', required: true },
            ],
          },
        ],
      },
    ],
  },
});
