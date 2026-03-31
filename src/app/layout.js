import {Mona_Sans} from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./vendor.css";
import "./globals.scss";
import Script from "next/script";


const bodyFont = Mona_Sans({
    variable: "--tj-ff-body",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    display: "swap",
});
const headingFont = Mona_Sans({
    variable: "--tj-ff-heading",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata = {
    title: "Computyne -Global outsourcing & Data Services Company",
    description: "Computyne -Global outsourcing & Data Services Company",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}) {
    return (
        <html lang="en" data-scroll-behavior="smooth" dir="ltr">

        <head>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://scripts.clarity.ms" />
            <link rel="preconnect" href="https://z.clarity.ms" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://s01.live2support.com" crossOrigin="anonymous" />
            {/* Google Tag Manager */}
            <Script id="gtm-script" strategy="afterInteractive">
                {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[]; 
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFWT3PN');
          `}
            </Script>
        </head>

        <body className={`${bodyFont.variable} ${headingFont.variable}`}>

            {/* Google Tag Manager (noscript) */}
               <noscript>
                 <iframe
                   src="https://www.googletagmanager.com/ns.html?id=GTM-KFWT3PN"
                   height="0"
                   width="0"
                   style={{ display: "none", visibility: "hidden" }}
                 />
               </noscript>
               {/* End Google Tag Manager (noscript) */}

        {children}

        <Script
            id="live2support-chat"
            strategy="lazyOnload"
        >
            {`
          (function(){
            var pp = document.createElement('script'),
                ppr = document.getElementsByTagName('script')[0];
            stid = 'VHJVakJQZmZscmQ4VWlxL1ZlSmFyQT09';
            pp.type = 'text/javascript';
            pp.async = true;
            pp.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') +
                     's01.live2support.com/dashboardv2/chatwindow/';
            ppr.parentNode.insertBefore(pp, ppr);
          })();
        `}
        </Script>
        </body>
        </html>
    );
}
