import { Product } from '../types';

export const products: Product[] = [
  // Wheat&Rice
  {
    id: 1,
    name: 'Gold wheat',
    price: 45,
    originalPrice: 55,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium quality wheat flour for all your baking needs',
    inStock: true,
    featured: true,
    onSale: true,
    variants: [
      { id: '1-1kg', weight: '1 kg', price: 45, originalPrice: 55, discount: 18 },
      { id: '1-5kg', weight: '5 kg', price: 210, originalPrice: 250, discount: 16 },
      { id: '1-10kg', weight: '10 kg', price: 400, originalPrice: 480, discount: 17 }
    ]
  },
  {
    id: 2,
    name: 'Rajwadi wheat',
    price: 52,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Nutritious whole wheat flour rich in fiber',
    inStock: true,
    featured: true,
    variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  {
    id: 3,
    name: 'Organic Wheat Flour',
    price: 68,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Certified organic wheat flour - 1kg',
    inStock: true,
    variants: [
      { id: '3-500g', weight: '500 g', price: 38 },
      { id: '3-1kg', weight: '1 kg', price: 68 },
      { id: '3-2kg', weight: '2 kg', price: 130 }
    ]
  },
  {
    id: 4,
    name: 'Multi-Grain Flour',
    price: 75,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Healthy multi-grain flour blend',
    inStock: true,
    onSale: true,
    variants: [
      { id: '4-1kg', weight: '1 kg', price: 75, originalPrice: 85, discount: 12 },
      { id: '4-5kg', weight: '5 kg', price: 360, originalPrice: 400, discount: 10 }
    ]
  },
  
  {
    id: 5,
    name: 'Basmati Rice Premium',
    price: 180,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium quality Basmati rice - 1kg',
    inStock: true,
    featured: true,
    variants: [
      { id: '5-1kg', weight: '1 kg', price: 180 },
      { id: '5-5kg', weight: '5 kg', price: 850 },
      { id: '5-10kg', weight: '10 kg', price: 1650 },
      { id: '5-25kg', weight: '25 kg', price: 4000 }
    ]
  },
  {
    id: 6,
    name: 'Jasmine Rice',
    price: 160,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Fragrant Jasmine rice - 1kg',
    inStock: true,
    variants: [
      { id: '6-1kg', weight: '1 kg', price: 160 },
      { id: '6-5kg', weight: '5 kg', price: 750 },
      { id: '6-10kg', weight: '10 kg', price: 1450 }
    ]
  },
  {
    id: 7,
    name: 'Brown Rice',
    price: 120,
    originalPrice: 140,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Healthy brown rice rich in nutrients - 1kg',
    inStock: true,
    onSale: true,
    variants: [
      { id: '7-1kg', weight: '1 kg', price: 120, originalPrice: 140, discount: 14 },
      { id: '7-5kg', weight: '5 kg', price: 580, originalPrice: 650, discount: 11 }
    ]
  },
  {
    id: 8,
    name: 'Sona Masoori Rice',
    price: 95,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium Sona Masoori rice - 1kg',
    inStock: true,
    featured: true,
    variants: [
      { id: '8-1kg', weight: '1 kg', price: 95 },
      { id: '8-5kg', weight: '5 kg', price: 450 },
      { id: '8-10kg', weight: '10 kg', price: 880 },
      { id: '8-25kg', weight: '25 kg', price: 2100 }
    ]
  },
  
  // Detergent
  {
    id: 9,
    name: 'Surf Excel Detergent',
    price: 155,
    image: 'https://m.media-amazon.com/images/I/619HRPW3elL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Surf Excel washing powder - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Ariel Liquid Detergent',
    price: 280,
    image: 'https://m.media-amazon.com/images/I/617iMYaN89L.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cleaning',
    description: 'Ariel liquid detergent - 1 liter',
    inStock: true
  },
  {
    id: 11,
    name: 'Tide Detergent Powder',
    price: 185,
    originalPrice: 205,
    image: 'https://kitchenclubindia.com/cdn/shop/files/tide_lemon_cef4368d-61d6-494b-9c16-39712b447f5a.jpg?v=1711096937?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Tide washing powder - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 12,
    name: 'Rin Detergent Bar',
    price: 45,
    image: 'https://m.media-amazon.com/images/I/71izyScfEiL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Rin detergent bar - 250g',
    inStock: true
  },
  
  // Pulses
  {
    id: 13,
    name: 'Toor Dal (Arhar)',
    price: 120,
    image: 'https://organofarmstore.co.in/wp-content/uploads/2023/09/toor-dal.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Premium quality Toor Dal - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Moong Dal',
    price: 135,
    image: 'https://zamaorganics.com/cdn/shop/files/WebsiteProductPhoto-SetMargins-2024-02-07T133451.393.png?v=1753422791?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Fresh Moong Dal - 1kg',
    inStock: true
  },
  {
    id: 15,
    name: 'Chana Dal',
    price: 95,
    originalPrice: 110,
    image: 'https://organofarmstore.co.in/wp-content/uploads/2023/09/rai-chana-daal.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Quality Chana Dal - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 16,
    name: 'Masoor Dal',
    price: 85,
    image: 'https://rexzeeimpex.com/wp-content/uploads/2024/02/masoor-dal-red-lentils.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Red lentils (Masoor Dal) - 1kg',
    inStock: true
  },
  {
    id: 17,
    name: 'Urad Dal',
    price: 145,
    image: 'https://zamaorganics.com/cdn/shop/files/WebsiteProductPhoto-SetMargins-2024-02-07T155151.458.png?v=1753180709?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Black gram (Urad Dal) - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 18,
    name: 'Rajma (Kidney Beans)',
    price: 165,
    originalPrice: 185,
    image: 'https://healthydig.in/wp-content/uploads/2020/10/Rajma-1.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Premium Rajma (Kidney Beans) - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 19,
    name: 'Kabuli Chana',
    price: 125,
    image: 'https://thechakkico.com/cdn/shop/files/IMG_3874.jpg?v=1740166220?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'White chickpeas (Kabuli Chana) - 1kg',
    inStock: true
  },
  {
    id: 20,
    name: 'Black Chana',
    price: 95,
    image: 'https://5.imimg.com/data5/JD/BR/PT/SELLER-10619163/black-chana-dal-1000x1000.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Black chickpeas (Kala Chana) - 1kg',
    inStock: true
  },
  
  // Dairy (keeping existing)
  {
    id: 21,
    name: 'Gokul Milk',
    price: 29,
    image: 'https://www.google.com/imgres?q=gokul%20milk%20images&imgurl=https%3A%2F%2Fwww.bbassets.com%2Fmedia%2Fuploads%2Fp%2Fl%2F40141618_2-gokul-buffalo-milk.jpg&imgrefurl=https%3A%2F%2Fwww.bigbasket.com%2Fpd%2F40141618%2Fgokul-buffalo-milk-500-ml-pouch%2F&docid=SPQKPHL3KJAZrM&tbnid=UAFdd01D3_CexM&vet=12ahUKEwiboazj2p2PAxVuxTgGHYUOMZEQM3oECBgQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiboazj2p2PAxVuxTgGHYUOMZEQM3oECBgQAA',
    category: 'Dairy',
    description: 'Pure fresh milk - 500ml',
    inStock: true,
    featured: true
  },
  {
    id: 22,
    name: 'Gokul milk',
    price: 37,
    image: 'https://www.bbassets.com/media/uploads/p/l/40141618_2-gokul-buffalo-milk.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh MIlk- 500ml',
    inStock: true
  },
  {
    id: 23,
    name: 'Paneer',
    price: 280,
    image: 'https://etedge-insights.com/wp-content/uploads/2025/04/Paneer.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cottage cheese - 250g',
    inStock: true
  },
  {
    id: 24,
    name: 'Butter',
    price: 85,
    originalPrice: 95,
    image: 'https://images.pexels.com/photos/5946088/pexels-photo-5946088.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Premium quality butter - 100g',
    inStock: true,
    onSale: true
  },
  {
    id: 25,
    name: 'Cheese cubes',
    price: 15,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cheese- 30g',
    inStock: true
  },
  
  // Snanks (keeping existing)
  {
    id: 26,
    name: 'Mixed Nuts',
    price: 320,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Premium mixed nuts - 250g',
    inStock: true,
    featured: true
  },
  {
    id: 27,
    name: 'Potato Chips',
    price: 25,
    image: 'https://images.pexels.com/photos/4274468/pexels-photo-4274468.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Crispy potato chips',
    inStock: true
  },
  {
    id: 28,
    name: 'Parle Marie',
    price: 35,
    originalPrice: 45,
    image:'https://ik.imagekit.io/wlfr/wellness/images/products/340609-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Delicious cream biscuits',
    inStock: true,
    onSale: true
  },
  
  // Tea&Coffee (keeping existing)
  {
    id: 29,
    name: 'Red Label',
    price: 125,
    image: 'https://www.news-medical.net/image-handler/picture/2021/9/shutterstock_251566309.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Premium green tea - 100g',
    inStock: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  {
    id: 30,
    name: 'Society',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  {
    id: 31,
    name: 'Lipton Green Tea',
    price: 75,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Fresh orange juice - 500ml',
    inStock: true,
    onSale: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  
  // Household (keeping existing)
  {
    id: 32,
    name: 'Cooking Oil',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Household',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },

  // Biscuits (keeping existing)
  {
    id: 33,
    name: 'Parle Marie',
    price: 145,
    originalPrice: 165,
    image: 'https://ik.imagekit.io/wlfr/wellness/images/products/340609-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 34,
    name: 'Parle G',
    price: 145,
    originalPrice: 165,
    image: 'https://www.chai-masala.co.uk/wp-content/uploads/2021/12/paele-G-a-768x512.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Best biscuits - 100g',
    inStock: true,
    onSale: true
  },   
  {
    id: 35,
    name: 'Good day',
    price: 145,
    originalPrice: 165,
    image: 'https://gpsretail.in/wp-content/uploads/2024/11/61kBRuYl3vL._AC_UF10001000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 36,
    name: 'Britannia Nutri Choice',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/71+kVe5LuiL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 37,
    name: 'Oreo chocolate',
    price: 145,
    originalPrice: 165,
    image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/5/21/d7b08554-0580-42c1-a1d4-5bf90f84fd95_10595_1.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 38,
    name: 'Oreo cream',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/41XPnuR-uJL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 39,
    name: 'Bourbon',
    price: 145,
    originalPrice: 165,
    image: 'https://trustfamilyneeds.com/public/uploads/all/ABni7hDvtrnJkf22abcVPor2eJS7WrRvwn59PvBM.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 40,
    name: 'Hide&Seek',
    price: 145,
    originalPrice: 165,
    image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/2/7/1063ebd7-d5ab-4254-9436-79c9a555f4d1_20691_1.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 41,
    name: 'Parle 50-50',
    price: 145,
    originalPrice: 165,
    image: 'https://cdn.shopaccino.com/edible-smart/products/britannia-50-50-sweet-amp-salty-biscuits-376979_l.jpg?v=589?param=1?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 42,
    name: 'Parle krackjack',
    price: 145,
    originalPrice: 165,
    image: 'https://gandhifood.com/cdn/shop/products/b5c22e_d82b2e9ee29640cf8985291058123b19_mv2_500x.jpg?v=1609651979?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 43,
    name: 'Parle Monaco',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/71Nh8WJmWNL._SL1500_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
   {
    id: 44,
    name: 'Parle 20-20',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
   {
    id: 45,
    name: 'Dark Fantasy',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/81lRRRqzykL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 46,
    name: 'nice Time',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/61R96f7MhlL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },  

   // Masala (keeping existing)  
   
   {
    id: 47,
    name: 'Kanda Lasun Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },    
  
  {
    id: 48,
    name: 'Mirchi Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },    
  {
    id: 49,
    name: 'Halad Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
   {
    id: 50,
    name: 'Badgi Mirchi Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
  {
    id: 51,
    name: 'Dhana Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 52,
    name: 'Pav bhaji Masala Everest',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/9dc984fe-d387-4daa-b569-f5f20de34a8e.__CR0,0,300,300_PT0_SX300_V1___.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
  {
    id: 53,
    name: 'Shahi Paneer Masala Everest',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 54,
    name: 'Chole Masala Everest',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 55,
    name: 'Misal Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 56,
    name: 'Sambhar Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 57,
    name: 'Sabji Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 58,
    name: 'Chicken Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 59,
    name: 'Chicken Masala Suhana   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 60,
    name: 'Chicken Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 61,
    name: 'Mutton Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 62,
    name: 'Mutton Masala Suhana   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 63,
    name: 'Mutton Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 64,
    name: 'Chicken Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 65,
    name: 'Pani puri Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 66,
    name: 'Kasturi Mathi',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 67,
    name: 'Biryani Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 68,
    name: 'Biryani Masala Suhana  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 69,
    name: 'Biryani Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 70,
    name: 'Kashmiri lal Masala   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 71,
    name: 'Garam Masala Everest  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 72,
    name: 'Kitchen King Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 73,
    name: 'Chaat Masala  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 74,
    name: 'Egg Curry Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 75,
    name: 'Paneer Butter Masala  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 76,
    name: 'Paneer Tikka Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 77,
    name: 'Mutter Paneer Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 78,
    name: ' Soda ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 79,
    name: 'Baking Soda ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, {
    id: 80,
    name: 'Mutter Paneer Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 81,
    name: 'Magic Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 82,
    name: 'peri peri Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },

  // Cleaning 
   {
    id: 83,
    name: 'Vim Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 84,
    name: 'Sargam Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 85,
    name: 'Xpert Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 86,
    name: 'Exo Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 87,
    name: 'Patanjali Super Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 88,
    name: 'Vim Liquid',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 89,
    name: 'Tide Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 90,
    name: 'Vanish',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 91,
    name: 'Surf Excel Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 92,
    name: 'Vim Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 93,
    name: 'Surf Excel',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 94,
    name: 'Wheel Powder',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 95,
    name: 'Nirma Powder',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 96,
    name: 'Ghadi Detergent',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 97,
    name: 'Rin Detergent',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 98,
    name: 'Santoor',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 99,
    name: 'Moti Sandal',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 100,
    name: 'Life Boy',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 101,
    name: 'Dove',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 102,
    name: 'Medimix',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 103,
    name: 'Lux Pink',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 104,
    name: 'Lux Blue',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 105,
    name: 'Lux White',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 106,
    name: 'Cinthol',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 107,
    name: 'Hamam',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 108,
    name: 'Lyril',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 109,
    name: 'Rexona',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 110,
    name: 'Colgate Toothpaste',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 111,
    name: 'Colgate Maxfresh Red',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 112,
    name: 'Colgate Maxfresh Blue',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 113,
    name: 'Colgate Herbal',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 114,
    name: 'Closeup',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 115,
    name: 'Dabur Meswak',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 116,
    name: 'Pepsodent',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 117,
    name: 'Patanjali Dant kanti',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 118,
    name: 'Sensodyne',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 119,
    name: 'Dabar Red,Babool',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 120,
    name: 'Colgate Maxfresh',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
 {
    id: 121,
    name: 'Colgate Toothbrush',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 122,
    name: 'OralB Toothbrush',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 111,
    name: 'Colgate Maxfresh',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export const categories = [
  'All',
  'Wheat&Rice',
  'Dals',
  'Kitchen',
  'Masala',
  'Tea&Coffee',
  'Biscuits',
  'Dry Fruits',
  'Cleaning',
  'Snacks',
  'Dairy',
  'Ganpati Specials'
];

// Ganpati Special Products
export const ganpatiProducts: Product[] = [
  {
    id: 200,
    name: 'Modak Pith (Rice Flour)',
    price: 85,
    originalPrice: 95,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Premium quality rice flour perfect for making traditional modaks',
    inStock: true,
    featured: true,
    onSale: true,
    variants: [
      { id: '200-500g', weight: '500g', price: 85, originalPrice: 95, discount: 11 },
      { id: '200-1kg', weight: '1kg', price: 160, originalPrice: 180, discount: 11 }
    ]
  },
  {
    id: 201,
    name: 'Premium Agarbatti (Incense Sticks)',
    price: 120,
    image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Fragrant incense sticks for divine prayers and meditation',
    inStock: true,
    featured: true,
    variants: [
      { id: '201-100sticks', weight: '100 sticks', price: 120 },
      { id: '201-200sticks', weight: '200 sticks', price: 220 }
    ]
  },
  {
    id: 202,
    name: 'Pure Kapur (Camphor)',
    price: 45,
    image: 'https://images.pexels.com/photos/8978831/pexels-photo-8978831.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Pure camphor tablets for aarti and prayers',
    inStock: true,
    featured: true,
    variants: [
      { id: '202-50g', weight: '50g', price: 45 },
      { id: '202-100g', weight: '100g', price: 85 }
    ]
  },
  {
    id: 203,
    name: 'Brass Pooja Thali Set',
    price: 450,
    originalPrice: 550,
    image: 'https://images.pexels.com/photos/8978831/pexels-photo-8978831.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Beautiful brass thali set for Ganpati pooja rituals',
    inStock: true,
    featured: true,
    onSale: true
  },
  {
    id: 204,
    name: 'Clay Diyas (Oil Lamps)',
    price: 80,
    image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Traditional handmade clay diyas for festive lighting',
    inStock: true,
    featured: true,
    variants: [
      { id: '204-12pcs', weight: '12 pieces', price: 80 },
      { id: '204-24pcs', weight: '24 pieces', price: 150 }
    ]
  },
  {
    id: 205,
    name: 'Coconut (Fresh)',
    price: 35,
    image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Fresh coconuts for pooja offerings',
    inStock: true,
    featured: true
  },
  {
    id: 206,
    name: 'Jaggery (Gud)',
    price: 65,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Pure jaggery for making modak and other sweets',
    inStock: true,
    featured: true,
    variants: [
      { id: '206-500g', weight: '500g', price: 65 },
      { id: '206-1kg', weight: '1kg', price: 120 }
    ]
  },
  {
    id: 207,
    name: 'Marigold Flowers (Fresh)',
    price: 25,
    image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Ganpati Specials',
    description: 'Fresh marigold flowers for decoration and offerings',
    inStock: true,
    featured: true
  }
];

// Add Ganpati products to main products array
export const allProducts = [...products, ...ganpatiProducts];