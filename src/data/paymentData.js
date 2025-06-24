export const paymentCartData = [
  { 
    id: 1, 
    name: 'Razer Viper V2 Pro Wireless Gaming Mouse', 
    price: 149.99, 
    quantity: 1, 
    image: 'https://assets2.razerzone.com/images/pnx.assets/6cd3c4575a7c5c3655113f0452311495/razer-viper-v2-pro-black-500x500.png',
    category: 'Gaming Mice'
  },
  { 
    id: 2, 
    name: 'SteelSeries Apex Pro TKL Mechanical Keyboard', 
    price: 189.99, 
    quantity: 1, 
    image: 'https://media.steelseriescdn.com/thumbs/filer_public/a5/d9/a5d93333-1493-4a7c-871d-8b01b637a283/apex_pro_tkl_2023_wireless_pdp_gallery_1.png__1000x1000_q100_crop-scale_optimize_auto-webp.png',
    category: 'Gaming Keyboards'
  },
  { 
    id: 3, 
    name: 'HyperX Cloud Alpha Wireless Gaming Headset', 
    price: 199.99, 
    quantity: 2, 
    image: 'https://row.hyperx.com/cdn/shop/files/hyperx_cloud_alpha_wireless_1_main_900x.jpg?v=1684249007',
    category: 'Gaming Headsets'
  },
  { 
    id: 4, 
    name: 'Corsair MM300 Extended Gaming Mouse Pad', 
    price: 29.99, 
    quantity: 1, 
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_1024,w_1024/products/Gaming-Mousepads/MM300-Extended/Gallery/MM300_Extended_01.webp',
    category: 'Gaming Accessories'
  }
];

export const shippingOptions = [
  { id: 'standard', name: 'Standard Shipping (5-7 days)', price: 0, selected: true },
  { id: 'express', name: 'Express Shipping (2-3 days)', price: 15.99, selected: false },
  { id: 'overnight', name: 'Overnight Shipping (1 day)', price: 29.99, selected: false }
];

export const paymentConfig = {
  taxRate: 0.08, // 8% tax rate
  currency: 'USD',
  promoCode: 'SAVE10',
  promoDiscount: 0.10 // 10% discount
}; 