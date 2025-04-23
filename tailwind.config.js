/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"jakarta-sans": ["var(--jakarta-sans)"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				// primary: {
				// 	DEFAULT: 'hsl(var(--primary))',
				// 	foreground: 'hsl(var(--primary-foreground))',
				primary: {
					DEFAULT: "#7C5CFC",
					dark: {
						600: "#5E43D8",
						700: "#432EB5",
						800: "#2D1D92",
						900: "#1D1178",
					},
					light: {
						100: "#E7DEFE",
						200: "#CEBEFE",
						300: "#B49DFE",
						400: "#9F84FD",
					},
				},
				success: {
					DEFAULT: "#9CD323",
					dark: {
						600: "#7FB519",
						700: "#659711",
						800: "#4C7A0B",
						900: "#3B6506",
					},
					light: {
						100: "#F5FCD2",
						200: "#E8FAA6",
						300: "#D3F178",
						400: "#BCE455",
					},
				},
				error: {
					DEFAULT: "#FF4423",
					dark: {
						600: "#DB2719",
						700: "#B71112",
						800: "#930B16",
						900: "#7A0619",
					},
					light: {
						100: "#FFE7D3",
						200: "#FFC8A6",
						300: "#FFA37A",
						400: "#FF7F59",
					},
				},
				warning: {
					DEFAULT: "#FFC73A",
					dark: {
						600: "#DBA32A",
						700: "#B7821D",
						800: "#936312",
						900: "#7A4D0B",
					},
					light: {
						100: "#FFF8D7",
						200: "#FFEFB0",
						300: "#FFE488",
						400: "#FFD96B",
					},
				},
				information: {
					DEFAULT: "#54A6FF",
					dark: {
						600: "#3D81DB",
						700: "#2A60B7",
						800: "#1A4393",
						900: "#102E7A",
					},
					light: {
						100: "#DCF3FF",
						200: "#BAE5FF",
						300: "#98D3FF",
						400: "#7EC2FF",
					},
				},
				secondary: {
					DEFAULT: "#1A202C",
					dark: {
						600: "#131825",
						700: "#0D121F",
						800: "#080C19",
						900: "#040815",
					},
					light: {
						100: "#E0E9F4",
						200: "#C3D4E9",
						300: "#90A3BF",
						400: "#596780",
					},
				},
				// secondary: {
				// 	DEFAULT: 'hsl(var(--secondary))',
				// 	foreground: 'hsl(var(--secondary-foreground))'
				// },
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

