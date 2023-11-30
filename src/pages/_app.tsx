import "@/styles/style.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (window.location.hash) {
            history.replaceState(null, "", " ");
        }
    }, []);

    return <Component {...pageProps} />;
}
