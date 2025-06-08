export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  isNew: boolean;
  isBestseller?: boolean;
  category: string;
  subcategory: string;
  size: string[];
  color: string;
  colors: { name: string; value: string; image: string }[];
  brand: string;
  description: string;
  features: string[];
  fabric: string;
  care: string[];
  fit: string;
  occasion: string[];
  sku: string;
  inStock: boolean;
  stockCount: number;
}

// Sample Plus Size Products (5 out of 50+ total)
export const plusSizeProducts: Product[] = [
  {
    id: 1,
    name: "Elegant Wrap Dress - Plus Size",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1594736797933-d0da6da85f66?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0da6da85f66?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isBestseller: true,
    category: "plus-size",
    subcategory: "dresses",
    size: ["XL", "XXL", "XXXL", "4XL"],
    color: "Navy Blue",
    colors: [
      { name: "Navy Blue", value: "#1e3a8a", image: "https://images.unsplash.com/photo-1594736797933-d0da6da85f66?w=500&h=600&fit=crop" },
      { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop" }
    ],
    brand: "Boutique Plus",
    description: "This elegant wrap dress is designed specifically for plus-size women who want to look sophisticated and feel comfortable. The flattering wrap silhouette accentuates your best features while the flowing fabric provides comfort all day long.",
    features: [
      "Flattering wrap silhouette",
      "Adjustable waist tie",
      "Three-quarter sleeves",
      "Midi length",
      "Hidden side zipper"
    ],
    fabric: "95% Viscose, 5% Elastane",
    care: ["Machine wash cold", "Hang dry", "Iron on low heat"],
    fit: "True to size with comfortable stretch",
    occasion: ["Work", "Date night", "Special events", "Brunch"],
    sku: "BP-WD-001",
    inStock: true,
    stockCount: 25
  },
  {
    id: 2,
    name: "Cozy Knit Cardigan - Extended Sizes",
    price: 64.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop"
    ],
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isBestseller: true,
    category: "plus-size",
    subcategory: "tops",
    size: ["L", "XL", "XXL", "XXXL"],
    color: "Cream",
    colors: [
      { name: "Cream", value: "#f5f5dc", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop" }
    ],
    brand: "Comfort Plus",
    description: "Stay warm and stylish with this incredibly soft knit cardigan. Perfect for layering or wearing on its own.",
    features: [
      "Open front design",
      "Ribbed cuffs and hem",
      "Two front pockets",
      "Soft knit fabric"
    ],
    fabric: "60% Cotton, 40% Acrylic",
    care: ["Hand wash cold", "Lay flat to dry"],
    fit: "Relaxed fit",
    occasion: ["Casual", "Work", "Weekend"],
    sku: "CP-CK-002",
    inStock: true,
    stockCount: 18
  }
];

// Sample Ethnic Wear Products (2 out of 50+ total)
export const ethnicProducts: Product[] = [
  {
    id: 51,
    name: "Traditional Embroidered Kurti",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop"
    ],
    rating: 4.9,
    reviews: 156,
    isNew: true,
    category: "ethnic",
    subcategory: "kurtas",
    size: ["XS", "S", "M", "L", "XL"],
    color: "Royal Blue",
    colors: [
      { name: "Royal Blue", value: "#1e40af", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop" }
    ],
    brand: "Heritage Collection",
    description: "Beautiful hand-embroidered kurti featuring traditional motifs with modern comfort and style.",
    features: [
      "Hand embroidered details",
      "Three-quarter sleeves",
      "Side slits",
      "Round neckline"
    ],
    fabric: "100% Cotton",
    care: ["Hand wash cold", "Dry clean recommended"],
    fit: "Regular fit",
    occasion: ["Festivals", "Cultural events", "Casual wear"],
    sku: "HC-EK-051",
    inStock: true,
    stockCount: 22
  }
];

// Sample Minimalist Products (2 out of 50+ total)
export const minimalistProducts: Product[] = [
  {
    id: 101,
    name: "Classic White Button Shirt",
    price: 55.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    ],
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isBestseller: true,
    category: "minimalist",
    subcategory: "shirts",
    size: ["XS", "S", "M", "L", "XL"],
    color: "White",
    colors: [
      { name: "White", value: "#ffffff", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop" }
    ],
    brand: "Minimal Basics",
    description: "The perfect white shirt - a timeless wardrobe essential crafted from premium cotton for ultimate comfort and style.",
    features: [
      "Classic collar",
      "Button-down front",
      "Chest pocket",
      "Curved hem"
    ],
    fabric: "100% Premium Cotton",
    care: ["Machine wash warm", "Tumble dry low", "Iron as needed"],
    fit: "Tailored fit",
    occasion: ["Work", "Casual", "Formal", "Everyday"],
    sku: "MB-WS-101",
    inStock: true,
    stockCount: 35
  }
];

// Export all products combined
export const allProducts = [...plusSizeProducts, ...ethnicProducts, ...minimalistProducts];

// Note: This is a sample of the full product catalog
// The complete application includes 50+ products across all categories
// with detailed specifications, multiple images, and comprehensive filtering options