"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  Heart, 
  User,
  ChevronDown
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3); // This would come from context in full app
  const [wishlistCount] = useState(5);

  const navigation = [
    {
      name: "Plus Size",
      href: "/shop?category=plus-size",
      submenu: [
        { name: "Dresses", href: "/shop?category=plus-size&subcategory=dresses" },
        { name: "Tops", href: "/shop?category=plus-size&subcategory=tops" },
        { name: "Bottoms", href: "/shop?category=plus-size&subcategory=bottoms" },
        { name: "Outerwear", href: "/shop?category=plus-size&subcategory=outerwear" }
      ]
    },
    {
      name: "Ethnic Wear",
      href: "/shop?category=ethnic",
      submenu: [
        { name: "Kurtas", href: "/shop?category=ethnic&subcategory=kurtas" },
        { name: "Sarees", href: "/shop?category=ethnic&subcategory=sarees" },
        { name: "Lehengas", href: "/shop?category=ethnic&subcategory=lehengas" },
        { name: "Accessories", href: "/shop?category=ethnic&subcategory=accessories" }
      ]
    },
    {
      name: "Minimalist",
      href: "/shop?category=minimalist",
      submenu: [
        { name: "Basics", href: "/shop?category=minimalist&subcategory=basics" },
        { name: "Shirts", href: "/shop?category=minimalist&subcategory=shirts" },
        { name: "Dresses", href: "/shop?category=minimalist&subcategory=dresses" },
        { name: "Pants", href: "/shop?category=minimalist&subcategory=pants" }
      ]
    },
    {
      name: "Blog",
      href: "/blog"
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient font-serif">
              Boutique Fashion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-sky-600 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <Link href="/" className="text-2xl font-bold text-gradient font-serif">
                    Boutique Fashion
                  </Link>
                  
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="space-y-2">
                        <Link
                          href={item.href}
                          className="block text-lg font-medium text-gray-900 hover:text-sky-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block text-sm text-gray-600 hover:text-sky-600"
                                onClick={() => setIsOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                  
                  <div className="pt-6 border-t">
                    <div className="flex flex-col space-y-3">
                      <Link href="/cart" onClick={() => setIsOpen(false)}>
                        <Button className="w-full justify-start" variant="ghost">
                          <ShoppingBag className="w-5 h-5 mr-2" />
                          Cart ({cartCount})
                        </Button>
                      </Link>
                      <Link href="/wishlist" onClick={() => setIsOpen(false)}>
                        <Button className="w-full justify-start" variant="ghost">
                          <Heart className="w-5 h-5 mr-2" />
                          Wishlist ({wishlistCount})
                        </Button>
                      </Link>
                      <Link href="/account" onClick={() => setIsOpen(false)}>
                        <Button className="w-full justify-start" variant="ghost">
                          <User className="w-5 h-5 mr-2" />
                          My Account
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}