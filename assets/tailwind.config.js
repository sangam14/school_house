const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        '../lib/school_house_web/**/*.ex',
        '../lib/school_house_web/**/*.heex',
        './js/**/*.js',
    ],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Outfit', 'system-ui', 'sans-serif'],
                body: ['DM Sans', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
            },
            colors: {
                // New design system colors (CSS custom properties)
                surface: 'var(--bg-primary)',
                'surface-secondary': 'var(--bg-secondary)',
                'surface-card': 'var(--bg-card)',
                'surface-code': 'var(--bg-code)',
                'surface-nav': 'var(--bg-nav)',
                'on-surface': 'var(--text-primary)',
                'on-surface-secondary': 'var(--text-secondary)',
                'on-surface-muted': 'var(--text-muted)',
                'on-surface-inverse': 'var(--text-inverse)',
                'border-subtle': 'var(--border-light)',
                'border-default': 'var(--border-medium)',
                brand: {
                    50: 'var(--purple-50)',
                    100: 'var(--purple-100)',
                    200: 'var(--purple-200)',
                    300: 'var(--purple-300)',
                    400: 'var(--purple-400)',
                    500: 'var(--purple-500)',
                    600: 'var(--purple-600)',
                    700: 'var(--purple-700)',
                    800: 'var(--purple-800)',
                    900: 'var(--purple-900)',
                },
                accent: {
                    green: 'var(--accent-green)',
                    amber: 'var(--accent-amber)',
                    rose: 'var(--accent-rose)',
                },

                // Legacy colors (backward compat - removed in Phase 7)
                'brand-purple-100': '#caa2f5',
                'brand-purple-200': '#cfbae6',
                'brand-purple-300': '#967ab4',
                'brand-purple-800': '#7c6f89',
                'brand-gray-100': '#f9fafb',
                'brand-gray-200': '#f5f6f7',
                'brand-gray-300': '#f4f6f7',
                'brand-gray-400': '#A1A1AA',
                'brand-gray-500': '#9fa3a6',
                'brand-gray-550': '#717171',
                'brand-gray-600': '#666666',
                'brand-gray-650': '#4a4a4a',
                'brand-gray-700': '#3d4449',
                'brand-gray-750': '#3c4349',
                'brand-gray-800': '#31373b',
                'brand-gray-900': '#22272e',
                'brand-red-300': '#f56a6a',
                'brand-red-500': '#c0394d',
            },
            backgroundColor: (theme) => ({
                ...theme('colors'),
                // Legacy semantic bg colors (backward compat)
                nav: {
                    DEFAULT: theme('colors.brand-gray-300'),
                    dark: theme('colors.brand-gray-800'),
                },
                body: {
                    DEFAULT: colors.white,
                    dark: theme('colors.brand-gray-700'),
                },
                purple: {
                    DEFAULT: theme('colors.brand-purple-800'),
                    dark: theme('colors.brand-purple-100'),
                },
                footer: {
                    DEFAULT: theme('colors.brand-gray-200'),
                    dark: theme('colors.brand-gray-800'),
                },
            }),
            textColor: (theme) => ({
                // Legacy semantic text colors (backward compat)
                primary: {
                    DEFAULT: theme('colors.brand-gray-750'),
                    dark: theme('colors.brand-gray-200'),
                },
                heavy: {
                    DEFAULT: theme('colors.brand-gray-800'),
                    dark: colors.white,
                },
                light: {
                    DEFAULT: theme('colors.brand-gray-650'),
                    dark: theme('colors.brand-gray-300'),
                },
                lighter: {
                    DEFAULT: theme('colors.brand-gray-550'),
                    dark: theme('colors.brand-gray-500'),
                },
                purple: {
                    DEFAULT: theme('colors.brand-purple-800'),
                    dark: theme('colors.brand-purple-100'),
                },
            }),
            boxShadow: {
                'design-sm': 'var(--shadow-sm)',
                'design-md': 'var(--shadow-md)',
                'design-lg': 'var(--shadow-lg)',
                'design-xl': 'var(--shadow-xl)',
            },
            borderRadius: {
                'design-sm': 'var(--radius-sm)',
                'design-md': 'var(--radius-md)',
                'design-lg': 'var(--radius-lg)',
                'design-xl': 'var(--radius-xl)',
            },
            container: {
                center: true,
            },
            margin: {
                'half-screen': '-50vw',
            },
            transitionProperty: {
                margin: 'margin',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        fontFamily: 'DM Sans, system-ui, sans-serif',
                        color: 'var(--text-primary)',
                        fontSize: '1.08rem',
                        maxWidth: 'inherit',
                        pre: {
                            'background-color': 'var(--bg-code)',
                            color: '#F0ECF6',
                            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                        },
                        h1: {
                            fontFamily: 'Outfit, system-ui, sans-serif',
                            color: 'var(--text-primary)',
                            fontSize: '3.5rem',
                            marginTop: '0',
                            marginBottom: '0',
                            fontWeight: 800,
                            lineHeight: 1,
                        },
                        h2: {
                            fontFamily: 'Outfit, system-ui, sans-serif',
                            color: 'var(--text-primary)',
                            fontWeight: 700,
                        },
                        h3: {
                            fontFamily: 'Outfit, system-ui, sans-serif',
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                        },
                        h4: {
                            fontFamily: 'Outfit, system-ui, sans-serif',
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                        },
                        a: {
                            color: 'var(--purple-500)',
                            '&:hover': {
                                color: 'var(--purple-600)',
                            },
                            textUnderlinePosition: 'under',
                            textUnderlineOffset: '2px',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                        code: {
                            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                            color: 'var(--text-primary)',
                            'background-color': 'var(--bg-secondary)',
                            'border-radius': '6px',
                            display: 'inline-block',
                            padding: '2px 4px',
                            fontSize: '0.875em',
                        },
                        'code.makeup': {
                            'background-color': 'transparent',
                            padding: 0,
                        },
                        'ul li': {
                            marginTop: '0px',
                            marginBottom: '0px',
                        },
                        'ul ul': {
                            marginTop: '0px',
                            marginBottom: '0px',
                        },
                        strong: {
                            color: 'var(--text-primary)',
                        },
                        blockquote: {
                            color: 'var(--text-secondary)',
                        },
                        thead: {
                            color: 'var(--text-primary)',
                        },
                        'pre code': {
                            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                        },
                    },
                },
                // dark variant kept for backward compat with existing dark:prose-dark classes
                dark: {
                    css: {
                        color: 'var(--text-primary)',
                        pre: {
                            'background-color': 'var(--bg-code)',
                        },
                        h1: {
                            color: 'var(--text-primary)',
                        },
                        h2: {
                            color: 'var(--text-primary)',
                        },
                        h3: {
                            color: 'var(--text-primary)',
                        },
                        h4: {
                            color: 'var(--text-primary)',
                        },
                        a: {
                            color: 'var(--purple-300)',
                            '&:hover': {
                                color: 'var(--purple-200)',
                            },
                        },
                        'a code': {
                            color: 'var(--text-primary)',
                        },
                        'code.makeup': {
                            'background-color': 'transparent',
                        },
                        strong: {
                            color: 'var(--text-primary)',
                        },
                        'ul li': {
                            marginTop: '0px',
                            marginBottom: '0px',
                        },
                        'ul ul': {
                            marginTop: '0px',
                            marginBottom: '0px',
                        },
                        blockquote: {
                            color: 'var(--text-secondary)',
                        },
                        thead: {
                            color: 'var(--text-primary)',
                        },
                        code: {
                            color: 'var(--text-primary)',
                            'background-color': 'var(--bg-secondary)',
                        },
                        'pre code': {
                            color: '#F0ECF6',
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: { typography: ['dark'] },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
