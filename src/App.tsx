import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ColorProvider } from "./contexts/ColorContext";
import { LoadingProvider, useLoading } from "./contexts/LoadingContext";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import About from "./components/About";

const AppContent = () => {
  const { isLoading, setIsLoading } = useLoading();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Technologies />
          <FAQ />
          <Contact />
          <Footer />
        </motion.main>
      </AnimatePresence>
      <ThemeToggle />
    </div>
  );
};

function App() {
  return (
    <LoadingProvider>
      <ColorProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </ColorProvider>
    </LoadingProvider>
  );
}

export default App;
