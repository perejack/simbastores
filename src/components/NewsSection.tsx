import { Button } from "@/components/ui/button";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const NewsSection = () => {
  const newsItems = [
    {
      img: news1,
      alt: "SIMBA CEMENT AEO COMPANY UGANDA",
      title: "SIMBA CEMENT |AEO COMPANY | UGANDA",
    },
    {
      img: news2,
      alt: "Simba Cement Factory in Nakuru County",
      title: "The newly launched Simba Cement Factory in Nakuru County is aligned to the Affordable Housing pillar which is under President Uhuru Kenyatta's Big Four Agenda.",
    },
    {
      img: news3,
      alt: "Simba Cement Foundation",
      title: "Simba Cement Foundation",
    },
  ];

  return (
    <section id="news" className="py-12 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-lg font-medium mb-4 uppercase tracking-wide opacity-90">
            NEWS ROOM
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            News and Events
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="border-2 border-white/30 rounded-lg overflow-hidden hover:border-white/50 transition-colors flex flex-col">
              <div className="aspect-video">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 flex-grow">
                  {item.title}
                </h3>
                <Button variant="blue-outline" className="mt-auto">
                  Read More »
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-white text-primary hover:bg-gray-200 px-8 py-3">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;