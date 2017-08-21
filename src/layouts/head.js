//	Utilities
import { colors } from '../helpers/constants';

// Components
import NextHead from 'next/head';

const Head = ({ data }) => (
    <NextHead>
		<link rel="apple-touch-icon" href="/static/icon/apple-icon.webp" />
		<link rel="icon" href="/static/icon/apple-icon.webp" type="image/webp" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, user-scalable=no"
		/>
		<meta
			name="description"
			content= {data.bio}
		/>

        {/* Social: Facebook / Open Graph */}
        <meta property="og:title" content= {data.alias} />
        <meta property="og:description" content= {data.bio} />
        <meta property="og:image" content="../static/banner/facebook.webp" />
        <meta property="og:url" content= {data.url} />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content= {data.name} />
        <meta property="og:type" content="website" />
        <meta property="article:author" content= {data.alias} />
        <meta property="article:section" content="website" />

        {/* Social: Twitter */}
        <meta name="twitter:title" content= {data.alias} />
        <meta name="twitter:description" content= {data.bio} />
        <meta name="twitter:image:src" content="../static/banner/twitter.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content= {data.name} />
        <meta name="twitter:url" content= {data.url} />
        <meta name="twitter:site" content= {data.url} />
        <meta name="twitter:creator" content= {data.alias} />

        {/* Social: Google+ */}
        <meta itemProp="name" content= {data.name} />
        <meta itemProp="description" content= {data.bio} />
        <meta itemProp="image" content="../static/banner/google-plus.webp" />

        {/* Mobile-specific meta tags: Android */}
        <meta name="theme-color" content= {colors.statusBar} />
        <link rel="manifest" href="../static/manifest.json" />
        <link rel="icon" type="image/webp" sizes="192x192" href="../static/icon/android-icon-192x192.webp" />
        <link rel="icon" type="image/webp" sizes="32x32" href="../static/icon/favicon-32x32.webp" />
        <link rel="icon" type="image/webp" sizes="96x96" href="../static/icon/favicon-96x96.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="../static/icon/favicon-16x16.webp" />

		{/* Mobile-specific meta tags: iOS */}
        <meta name="apple-mobile-web-app-status-bar-style" content= {colors.statusBar} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="57x57" href="../static/icon/apple-icon-57x57.webp" />
        <link rel="apple-touch-icon" sizes="60x60" href="../static/icon/apple-icon-60x60.webp" />
        <link rel="apple-touch-icon" sizes="72x72" href="../static/icon/apple-icon-72x72.webp" />
        <link rel="apple-touch-icon" sizes="76x76" href="../static/icon/apple-icon-76x76.webp" />
        <link rel="apple-touch-icon" sizes="114x114" href="../static/icon/apple-icon-114x114.webp" />
        <link rel="apple-touch-icon" sizes="120x120" href="../static/icon/apple-icon-120x120.webp" />
        <link rel="apple-touch-icon" sizes="144x144" href="../static/icon/apple-icon-144x144.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="../static/icon/apple-icon-152x152.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="../static/icon/apple-icon-180x180.webp" />

        {/* Mobile-specific meta tags: Windows Phone */}
		<meta name="msapplication-TileColor" content= {colors.statusBar} />
        <meta name="msapplication-TileImage" content="../static/icon/ms-icon-144x144.webp" />

    </NextHead>
);

export default Head;
