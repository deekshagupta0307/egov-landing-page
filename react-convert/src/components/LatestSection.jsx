import React, { useState, useEffect } from 'react';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Health Management System',
    category: 'Public Health',
    price: '$5,000',
    img: '/public/img3.jpg'
  },
  {
    id: 2,
    name: 'Digital Transformation Toolkit',
    category: 'Local Governance',
    price: '$2,500',
    img: '/public/img4.jpg'
  },
  {
    id: 3,
    name: 'Finance Analytics Dashboard',
    category: 'Public Finance',
    price: '$4,200',
    img: '/public/img5.jpg'
  },
  {
    id: 4,
    name: 'Water Level Monitoring Sensor',
    category: 'Water & Supply',
    price: '$800',
    img: '/img3.jpg'
  },
  {
    id: 5,
    name: 'Citizen Feedback App License',
    category: 'Local Governance',
    price: '$1,200',
    img: '/img4.jpg'
  },
  {
    id: 6,
    name: 'Hospital Bed Tracking Module',
    category: 'Public Health',
    price: '$3,400',
    img: '/img5.jpg'
  }
];

const CATEGORIES = ['All', 'Public Health', 'Public Finance', 'Local Governance', 'Water & Supply'];

const LatestSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-[70px] bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">

        <h3 className="text-2xl md:text-3xl mb-6 text-left">
          <span className="font-light text-[#1F2A5A] mr-2">Latest at</span>
          <span className="font-bold text-[#1F2A5A]">eGov Products</span>
        </h3>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full py-2 px-5 border font-medium cursor-pointer transition-colors duration-300 text-sm ${
                  selectedCategory === cat 
                    ? 'bg-[#4FB6B8] text-white border-[#4FB6B8]' 
                    : 'bg-transparent text-[#1F2A5A] border-[#1F2A5A] hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search products by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-2 px-4 outline-none focus:border-[#4FB6B8] focus:ring-1 focus:ring-[#4FB6B8] transition-all"
            />
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64 flex-col">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4FB6B8] mb-4"></div>
            <p className="text-[#1F2A5A] font-medium text-lg animate-pulse">Fetching latest products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-64 flex-col bg-white rounded-[15px] shadow-sm border border-gray-100">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="text-xl font-bold text-[#1F2A5A] mb-2">No results found</h4>
            <p className="text-gray-500">Try adjusting your search query or category filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-6 text-[#4FB6B8] hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="rounded-[15px] overflow-hidden cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <img src={product.img} alt={product.name} className="w-full h-[200px] block object-cover bg-gray-100" />
                <div className="p-5 flex flex-col flex-grow text-left justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#e6f4ff] text-[#1F2A5A] text-xs font-semibold rounded-full mb-3">
                      {product.category}
                    </span>
                    <h5 className="font-bold text-lg text-[#1F2A5A] mb-2 leading-tight">
                      {product.name}
                    </h5>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <p className="font-bold text-xl text-[#4FB6B8]">
                      {product.price}
                    </p>
                    <button className="bg-[#1F2A5A] text-white text-sm py-1.5 px-4 rounded-full font-medium hover:bg-[#2b3a7a] transition-colors hover:cursor-pointer">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default LatestSection;
