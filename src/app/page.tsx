"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Users, ShoppingBag, Heart } from "lucide-react";
import { plusSizeProducts, ethnicProducts, minimalistProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const featuredProducts = [
  ...plusSizeProducts.slice(0, 2),
  ...ethnicProducts.slice(0, 2),
  ...minimalistProducts.slice(0, 2)
];

const categories = [
  {
    name: "Plus Size Fashion",
    description: "Comfortable & stylish clothing for all sizes",
    image: "https://images.unsplash.com/photo-1594736797933-d0da6da85f66?w=500&h=600&fit=crop",
    href: "/shop?category=plus-size",
    count: plusSizeProducts.length
  },
  {
    name: "Ethnic Wear",
    description: "Traditional styles with modern comfort",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=600&fit=crop",
    href: "/shop?category=ethnic",
    count: ethnicProducts.length
  },
  {
    name: "Minimalist",
    description: "Clean lines & timeless elegance",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
    href: "/shop?category=minimalist",
    count: minimalistProducts.length
  }
];

export default function HomePage() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center luxury-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Boutique Fashion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover beautiful plus-size fashion, ethnic wear, and minimalist styles.
            Empowering women of all sizes with comfort and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              <Link href="/shop" className="flex items-center gap-2">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              View Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From plus-size fashion to ethnic wear and minimalist designs, 
              find your perfect style that celebrates your unique beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="product-card group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={500}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{category.description}</p>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {category.count} items
                      </Badge>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding luxury-gradient">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites from our latest collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="product-card">
                <div className="relative">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-[300px] object-cover"
                    />
                  </Link>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                  
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      New
                    </Badge>
                  )}
                  
                  {product.isBestseller && (
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      Bestseller
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="btn-primary">
              <Link href="/shop" className="flex items-center gap-2">
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusive Sizing</h3>
              <p className="text-gray-600">
                We believe fashion is for everyone. Our extended size range ensures 
                every woman finds her perfect fit.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                Premium fabrics and careful craftsmanship ensure durability 
                and comfort in every piece.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Each piece is designed with care, celebrating the beauty 
                and confidence of every woman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}