import clinkerImage from "@/assets/clinker-image.jpeg";

const ManufacturingSection = () => {
  return (
    <section className="py-12 md:py-20 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-primary text-lg font-medium mb-4 uppercase tracking-wide">
              MANUFACTURING
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              CLINKER MANUFACTURING
              <br />
              PLANT
            </h2>
            <div className="w-24 h-1 bg-primary mb-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              National Cement Company Limited boasts a state of the art Clinker Manufacturing unit 
              which produces high quality clinker. We ensure that whilst we are producing, we also 
              conserve our community and environment at large hence all technologies adapted in 
              the manufacturing of clinker are eco-friendly, by implementing the best technology we 
              also strive to pass on the benefits to Kenyans at large where the cost of a cement bag is 
              affordable for the daily consumer. Moreover, we take pride in ourselves that we are 
              achieving the government objective of the big 4 agenda and play an active part in 
              building the nation.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={clinkerImage} 
              alt="Clinker Manufacturing Plant" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;