import Header from "@/components/Header";
import Routes from "@/components/Routes";
import Footer from "@/components/Footer";

const RoutesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default RoutesPage;