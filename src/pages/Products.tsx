import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import "@/components/ui/ModernProductCard.css";
import simbaCement32R from "@/assets/simba-cement-32-5r.png";
import simbaCement42N from "@/assets/simba-cement-42-5n.png";
import steelD10 from "@/assets/steel-d10.jpg";
import steelD12 from "@/assets/steel-d12.jpg";
import steelD16 from "@/assets/steel-d16.jpg";
import steelD20 from "@/assets/steel-d20.jpg";
import steelD25 from "@/assets/steel-d25.jpg";
import bindingWire from "@/assets/binding-wire.jpg";
import hoopIron from "@/assets/hoop-iron.webp";

const Products = () => {
  const cementProducts = [
    {
      name: "SIMBA CEMENT 32.5R",
      price: "KSH 550",
      image: simbaCement32R,
      description: "Portland Pozzolan Cement 32.5R",
      deliveryInfo: "Free Delivery Countrywide for over 50 bags"
    },
    {
      name: "SIMBA CEMENT 42.5N",
      price: "KSH 680", 
      image: simbaCement42N,
      description: "Portland Cement 42.5N",
      deliveryInfo: "Free Delivery Countrywide for over 50 bags"
    }
  ];

  const steelProducts = [
    { name: "D8", price: "KSH 450", image: steelD10, deliveryInfo: "Free Delivery Countrywide" },
    { name: "D10", price: "KSH 750", image: steelD10, deliveryInfo: "Free Delivery Countrywide" },
    { name: "D12", price: "KSH 1,020", image: steelD12, deliveryInfo: "Free Delivery Countrywide" },
    { name: "D16", price: "KSH 2,250", image: steelD16, deliveryInfo: "Free Delivery Countrywide" },
    { name: "D20", price: "KSH 3,500", image: steelD20, deliveryInfo: "Free Delivery Countrywide" },
    { name: "D25", price: "KSH 5,750", image: steelD25, deliveryInfo: "Free Delivery Countrywide" },
    { name: "Binding wire", price: "KSH 3,000", image: bindingWire, deliveryInfo: "Free Delivery Countrywide" },
    { name: "Hoop Iron", price: "KSH 2,100", image: hoopIron, deliveryInfo: "Free Delivery Countrywide" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
            Our Products
          </h1>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          
          {/* Minimum Purchase Offer */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
            <p className="text-green-800 font-semibold text-center text-base sm:text-lg">
              Minimum purchase offer of 50 bags free delivery countrywide.
            </p>
          </div>

          {/* Cement Products */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              SIMBA CEMENT PRODUCTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {cementProducts.map((product, index) => (
                <div key={index} className="product-card-modern">
                  <div className="offer-badge">13% OFF</div>
                  <div className="wishlist-icon" title="Add to wishlist">
                    <svg width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
                  </div>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <h3 className="product-title">
                    <span>{product.name}</span>
                    <span className="premium-tag">Premium</span>
                  </h3>
                  <p className="product-description">{product.description}</p>
                  <div className="price-section">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">KSH 650</span>
                  </div>
                  <div className="tags-container">
                    <span className="tag">Cement</span>
                    <span className="tag">Construction</span>
                    <span className="tag">High-strength</span>
                  </div>
                  <div className="info-item offer-time">Limited offer ends in 14 days</div>
                  <div className="info-item in-stock">{product.deliveryInfo}</div>
                  <div className="stock-status">
                    <span className="stock-dot"></span> In Stock
                  </div>
                  <div className="buttons-container">
                    <Link to="/product" state={product} className="flex-grow"><button className="btn btn-primary w-full">Buy Now</button></Link>
                    <a href="tel:+254783627395" className="btn btn-secondary">Enquire</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steel Products */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              WE SELL QUALITY STEEL & CEMENT
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {steelProducts.map((product, index) => (
                <div key={index} className="product-card-modern">
                  <div className="offer-badge">12% OFF</div>
                  <div className="wishlist-icon" title="Add to wishlist">
                    <svg width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
                  </div>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <h3 className="product-title">
                    <span>{product.name}</span>
                    <span className="premium-tag">Steel</span>
                  </h3>
                  <p className="product-description">High quality steel for construction and reinforcement.</p>
                  <div className="price-section">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">KSH 950</span>
                  </div>
                  <div className="tags-container">
                    <span className="tag">Steel</span>
                    <span className="tag">Construction</span>
                    <span className="tag">Reinforcement</span>
                  </div>
                  <div className="info-item offer-time">Limited offer ends in 21 days</div>
                  <div className="info-item in-stock">{product.deliveryInfo}</div>
                  <div className="stock-status">
                    <span className="stock-dot"></span> In Stock
                  </div>
                  <div className="buttons-container">
                    <Link to="/product" state={product} className="flex-grow"><button className="btn btn-primary w-full">Buy Now</button></Link>
                    <a href="tel:+254783627395" className="btn btn-secondary">Enquire</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Us for Orders</h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">CALL</p>
                <p className="text-xl">+254783627395</p>
              </div>
              <div>
                <p className="text-lg font-semibold">WhatsApp</p>
                <p className="text-xl">+254783627395</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full max-w-xs mx-auto">
                <a href="tel:+254783627395" className="w-full">
                  <Button 
                    variant="blue-outline" 
                    className="border-white text-white hover:bg-white hover:text-primary w-full"
                  >
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/254783627395" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    variant="blue-outline"
                    className="border-white text-white hover:bg-white hover:text-primary w-full"
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;