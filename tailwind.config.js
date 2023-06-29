/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            typography:{
                DEFAULT: {
                    css: {
                        color: '#d1d5db',
                        h1: { color: '#d1d5db'},
                        h2: { color: '#d1d5db'},
                        h3: { color: '#d1d5db'},
                        h4: { color: '#d1d5db'},
                        h5: { color: '#d1d5db'},
                        h6: { color: '#d1d5db'},
                        a: { color: '#d1d5db'} ,
                        p: { color: '#d1d5db'},
                        blockquote: { color: '#d1d5db'},
                        figure: { color: '#d1d5db'},
                        figcaption: { color: '#d1d5db'},
                        strong: { color: '#d1d5db'},
                        em: { color: '#d1d5db'},
                        ol: { color: '#d1d5db'} ,
                        ul: { color: '#d1d5db'} ,
                        li: { color: '#d1d5db'} ,
                        table: { color: '#d1d5db'} ,
                        theard: { color: '#d1d5db'} ,
                        tr: { color: '#d1d5db'} ,
                        th: { color: '#d1d5db'} ,
                        td: { color: '#d1d5db'} ,
                    }
                },
            },
            colors:{
                'bg': '#2C3333',
                'primary': '#0E8388',
                'secondary': '#2E4F4F',
            },
        },
    },
    plugins: [typography],
}

