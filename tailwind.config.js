/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        extend: {
            colors: {
                primary: {
                    200: "#fff8d9",
                    400: "#ffe054",
                    600: "#ffd82b",
                    800: "#ffd30d",
                },
            },
            backgroundImage: {
                radialPrimary:
                    "radial-gradient(circle at center,#8b640210 0,#3030306a 80%)",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
