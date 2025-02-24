const OurVideos = () => {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-red-800 px-6">Latest News</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-96">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="h-96">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                title="Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurVideos;