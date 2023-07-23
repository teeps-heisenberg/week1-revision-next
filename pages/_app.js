import Navbar from "@/components/Navbar";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='container mx-auto min-h-screen'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
