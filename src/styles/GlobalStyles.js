import { createGlobalStyle } from "styled-components";

const GlobaStyles = createGlobalStyle`
    /* --- VARIABLES --- */
    :root {
        &,
        &.light-mode {
            /* --- COLORS --- */
            /* --color-primary-50: #ffffff;
            --color-primary-100: #dbeafe;
            --color-primary-200: #bfdbfe;
            --color-primary-300: #93c5fd;
            --color-primary-400: #60a5fa;
            --color-primary-500: #3b82f6;
            --color-primary-600: #2563eb;
            --color-primary-700: #1d4ed8;
            --color-primary-800: #1e40af;
            --color-primary-900: #1e3a8a;
            --color-primary-950: #020408; */
            
            --color-primary-50: #eef2ff;
            --color-primary-100: #e0e7ff;
            --color-primary-200: #c7d2fe;
            --color-primary-300: #a5b4fc;
            --color-primary-400: #818cf8;
            --color-primary-500: #6366f1;
            --color-primary-600: #4f46e5;
            --color-primary-700: #4338ca;
            --color-primary-800: #3730a3;
            --color-primary-900: #312e81;
            --color-primary-950: #1e1b4b;

            --color-secondary-50: #fef2f2;
            --color-secondary-100: #fee2e2;
            --color-secondary-200: #fecaca;
            --color-secondary-300: #fca5a5;
            --color-secondary-400: #f87171;
            --color-secondary-500: #ef4444;
            --color-secondary-600: #dc2626;
            --color-secondary-700: #b91c1c;
            --color-secondary-800: #991b1b;
            --color-secondary-900: #7f1d1d;
            --color-secondary-950: #450a0a;
            
            --color-tertiary-50: #fff7ed;
            --color-tertiary-100: #ffedd5;
            --color-tertiary-200: #fed7aa;
            --color-tertiary-300: #fdba74;
            --color-tertiary-400: #fb923c;
            --color-tertiary-500: #f97316;
            --color-tertiary-600: #ea580c;
            --color-tertiary-700: #c2410c;
            --color-tertiary-800: #9a3412;
            --color-tertiary-900: #7c2d12;
            --color-tertiary-950: #431407;

            --color-accent-50: #f0fdf4;
            --color-accent-100: #dcfce7;
            --color-accent-200: #bbf7d0;
            --color-accent-300: #86efac;
            --color-accent-400: #4ade80;
            --color-accent-500: #22c55e;
            --color-accent-600: #16a34a;
            --color-accent-700: #15803d;
            --color-accent-800: #166534;
            --color-accent-900: #14532d;
            --color-accent-950: #052e16;

            --color-grey-50: #ffffff;
            --color-grey-100: #f3f4f6;
            --color-grey-200: #e5e7eb;
            --color-grey-200-light: #e5e7ebaa;
            --color-grey-300: #dee2e6;
            --color-grey-400: #9ca3af;
            --color-grey-500: #6b7280;
            --color-grey-600: #4b5563;
            --color-grey-700: #374151;
            --color-grey-700-light: #37415110;
            --color-grey-800: #1f2937;
            --color-grey-900: #111827;
            --color-grey-950: #030712;
        }

        /*
        &.dark-mode {
            /* --- COLORS --- 
            --color-primary-950: #f4f9ff;
            --color-primary-900: #dbeafe;
            --color-primary-800: #bfdbfe;
            --color-primary-700: #93c5fd;
            --color-primary-600: #60a5fa;
            --color-primary-500: #3b82f6;
            --color-primary-400: #2563eb;
            --color-primary-300: #1d4ed8;
            --color-primary-200: #1e40af;
            --color-primary-100: #1e3a8a;
            --color-primary-50: #020408;

            --color-secondary-950: #fef2f2;
            --color-secondary-900: #fee2e2;
            --color-secondary-800: #fecaca;
            --color-secondary-700: #fca5a5;
            --color-secondary-600: #f87171;
            --color-secondary-500: #ef4444;
            --color-secondary-400: #dc2626;
            --color-secondary-300: #b91c1c;
            --color-secondary-200: #991b1b;
            --color-secondary-100: #7f1d1d;
            --color-secondary-50: #450a0a;

            --color-grey-950: #f9fafb;
            --color-grey-900: #f3f4f6;
            --color-grey-800: #e5e7eb;
            --color-grey-700: #d1d5db;
            --color-grey-600: #9ca3af;
            --color-grey-500: #6b7280;
            --color-grey-400: #4b5563;
            --color-grey-300: #374151;
            --color-grey-200: #1f2937;
            --color-grey-100: #111827;
            --color-grey-50: #030712;
        }
        */

        /* --- TYPOGRAPHY --- */
        --text-1: 1.2rem;
        --text-2: 1.4rem;
        --text-3: 1.6rem;
        --text-4: 2rem;
        --text-5: 2.4rem;
        --text-6: 3rem;
        --text-7: 3.6rem;
        --text-8: 4.8rem;
        --text-9: 6rem;
        --text-10: 6rem;
        --text-11: 7.2rem;
        --text-12: 9.6rem;
        --text-13: 12.8rem;

        --weight-1: 100;
        --weight-2: 300;
        --weight-3: 400;
        --weight-4: 500;
        --weight-5: 600;
        --weight-5: 700;

        /* --- BORDER RADIUS --- */
        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;

        /* --- WHITESPACE --- */
        --space-0: 0.2rem;
        --space-1: 0.8rem;
        --space-2: 1rem;
        --space-3: 1.2rem;
        --space-4: 1.4rem;
        --space-5: 1.6rem;
        --space-6: 2rem;
        --space-7: 2.4rem;
        --space-8: 2.8rem;
        --space-9: 3.2rem;
        --space-10: 3.6rem;
        --space-11: 4rem;
        --space-12: 4.4rem;
        --space-13: 5.6rem;
        --space-14: 6.4rem;
        --space-15: 8rem;
        --space-16: 9.6rem;
        --space-17: 11.2rem;
        --space-18: 12.8rem;
    }

    /* --- GLOBAL RESET --- */
    *::before,
    *::after,
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        color: var(--color-grey-600);
        min-height: 100dvh;
        font-size: var(--text-3);
        font-family: "Poppins", sans-serif;
        font-weight: var(--weight-3);
        line-height: 1;
        background-color: var(--color-grey-100);
    }

    /* --- ELEMENTS RESET --- */
    a {
        text-decoration: none;
        display: inline-block;
    }

    a,
    input,
    button,
    select,
    textarea {
        color: inherit;
        transition: all .2s;
    }

    input,
    button,
    select,
    textarea {
        font: inherit;
    }

    button {
        font-size: inherit;
        font-family: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    input[type='checkbox'] {
        accent-color: var(--color-primary-600);
    }

    button:disabled {
        opacity: 0.9;
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
        outline: 2px solid var(--color-brand-600);
        outline-offset: -1px;
    }

    button:has(svg) {
        line-height: 0;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    img {
        max-width: 100%;
        object-fit: cover;
        object-position: center;
    }

    /* --- UTILIS CLASSES --- */
    .active {
        color: var(--color-grey-50);
        background-color: var(--color-primary-600);
    }

    .side-by-side {
        display: flex;
    }

    .text-small {
        font-size: var(--text-2);
    }

    .text-medium {
        font-size: var(--text-5)
    }

    .text-semibold {
        font-weight: var(--weight-4);
    }

    .text-center {
        text-align: center;
    }

    .text-light {
        color: var(--color-grey-400);
    }

    .text-dark {
        color: var(--color-grey-950);
    }
`;

export default GlobaStyles;
