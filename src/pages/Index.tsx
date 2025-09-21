import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
