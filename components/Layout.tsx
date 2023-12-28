import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
const Layout = ({
  noPaddingTop,
  children,
}: {
  noPaddingTop?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Nav />
      {noPaddingTop ? (
        <>{children}</>
      ) : (
        <div className="lg:px-[10vw] pt-[40vh] md:px-12 px-6 min-h-[100vh]">{children}</div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
