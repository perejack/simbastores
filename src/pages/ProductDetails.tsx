import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import "@/components/ui/ModernProductCard.css";

interface Product {
  name: string;
  price: string;
  image: string;
  description?: string;
  deliveryInfo?: string;
}

const ProductDetails = () => {
  const { state } = useLocation() as { state: Product | null };
  const navigate = useNavigate();

  if (!state) {
    // If no product data, redirect back to products page
    navigate("/products", { replace: true });
    return null;
  }

  const { name, price, image, description } = state;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-grow bg-background py-8 md:py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="bg-white border rounded-lg p-4 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="max-h-[300px] md:max-h-[400px] object-contain w-full"
            />
          </div>

          {/* Details */}
          <div className="bg-white border rounded-lg p-6 md:p-8 relative">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{name}</h1>
            <p className="text-primary text-xl md:text-2xl font-semibold mb-6">{price}</p>

            {description && (
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {description}
              </p>
            )}

            <ul className="space-y-3 mb-8">
              {state.deliveryInfo && <li className="info-item in-stock">{state.deliveryInfo}</li>}
              <li className="info-item offer-time">Quality Guaranteed</li>
              <li className="info-item offer-time">Fast Installation</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/254783627395" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Order via WhatsApp
                </Button>
              </a>
              <a href="tel:+254783627395" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  Call to Order
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Tabs section placeholder */}
        <div className="container mx-auto px-6 mt-16">
          <div className="bg-white border rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <p className="leading-relaxed text-muted-foreground">
              Detailed information about {name} will go here. You can expand this
              section with specifications, applications, and customer reviews as
              needed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
