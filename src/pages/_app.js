import '@/styles/globals.css'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
          scroll-behavior: smooth;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
