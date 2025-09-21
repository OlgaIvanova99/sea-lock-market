import Header from "@/components/Header";
import Coverage from "@/components/Coverage";
import Footer from "@/components/Footer";

const CoveragePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Coverage />
      </main>
      <Footer />
    </div>
  );
};

export default CoveragePage;