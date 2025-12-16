import { config, fields, collection } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
    storage: isProd
        ? {
            kind: 'github',
            repo: {
                owner: 'iSparshP',
                name: 'philosophy-blog-cms',
            },
        }
        : {
            kind: 'local',
        },
    collections: {
        blog: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                excerpt: fields.text({ label: 'Excerpt', multiline: true }),
                author: fields.text({ label: 'Author' }),
                publishDate: fields.date({ label: 'Publish Date' }),
                image: fields.text({ label: 'Image URL', description: 'Enter a full URL (e.g., Unsplash)' }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    { label: 'Tags', itemLabel: props => props.value }
                ),
                content: fields.mdx({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'src/assets/images/posts',
                            publicPath: '/images/posts',
                        }
                    }
                }),
            },
        }),
    },
});
