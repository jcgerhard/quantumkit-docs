import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Quantumkit',
    description: 'VS Code extension for Hybrid Software engineers',
    srcDir: 'src',
    outDir: 'dist',
    cacheDir: 'cache',
    themeConfig: {
        search: {
            provider: 'local',
        },
        nav: [
            {
                text: 'Hybrid',
                items: [
                    { text: 'Hybrid Software', link: 'https://hybridsoftware.com' },
                    { text: 'Packz', link: 'https://hybridsoftware.com' },
                    { text: 'PackzView', link: 'https://hybridsoftware.com' },
                    { text: 'Cloudflow', link: 'https://hybridsoftware.com' },
                ],
            },
            {
                text: 'Tools',
                items: [{ text: 'RegEx101', link: 'https://regex101.com' }],
            },
        ],
        sidebar: [
            {
                text: 'Introduction',
                collapsed: true,
                items: [
                    { text: 'What is Quantumkit?', link: '/introduction/what-is-quantumkit' },
                    { text: 'Installation', link: '/introduction/installation' },
                    { text: 'Update', link: '/introduction/update' },
                ],
            },
            {
                text: 'Documentation',
                collapsed: true,
                items: [
                    { text: 'Overview', link: '/documentation/overview' },
                    { text: 'Settings', link: '/documentation/settings' },
                    { text: 'Command', link: '/documentation/commands' },
                    { text: 'Snippets', link: '/documentation/snippets' },
                ],
            },
            {
                text: 'Development',
                collapsed: true,
                items: [
                    { text: 'Changelog', link: '/development/changelog' },
                    { text: 'FAQs', link: '/development/faq' },
                    { text: 'Recommendations', link: '/development/recommendations' },
                ],
            },
        ],
        footer: {
            message: 'Made with ❤️ by Jan Gerhard',
            copyright: `Copyright © 2024 HYBRID Software GmbH`,
        },
    },
});
