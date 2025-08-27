"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Search, User, Heart, Menu, X } from "lucide-react"

interface HeaderProps {
  showSearch?: boolean
  className?: string
}

export function Header({ showSearch = true, className = "" }: HeaderProps) {
  const [user, setUser] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Mock cart item count - in real app this would come from cart context
    setCartItemCount(2)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-black text-primary hover:text-accent transition-colors">
              أناقة الرجال
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/tshirts" className="text-foreground hover:text-accent transition-colors">
              تيشيرتات | T-Shirts
            </a>
            <a href="/shoes" className="text-foreground hover:text-accent transition-colors">
              أحذية | Shoes
            </a>
            <a href="/sale" className="text-foreground hover:text-accent transition-colors">
              تخفيضات | Sale
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {showSearch && (
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="البحث عن المنتجات..."
                  className="bg-transparent border-none outline-none flex-1 text-sm"
                />
              </div>
            )}

            {user ? (
              <Button variant="ghost" size="icon" asChild>
                <a href="/account" title="My Account">
                  <User className="h-5 w-5" />
                </a>
              </Button>
            ) : (
              <Button variant="ghost" size="icon" asChild>
                <a href="/login" title="Sign In">
                  <User className="h-5 w-5" />
                </a>
              </Button>
            )}

            <Button variant="ghost" size="icon" asChild>
              <a href="/wishlist" title="Wishlist">
                <Heart className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" className="relative" asChild>
              <a href="/cart" title="Shopping Cart">
                <ShoppingBag className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-4 py-4 space-y-4">
              <a href="/tshirts" className="block text-foreground hover:text-accent transition-colors">
                تيشيرتات | T-Shirts
              </a>
              <a href="/shoes" className="block text-foreground hover:text-accent transition-colors">
                أحذية | Shoes
              </a>
              <a href="/sale" className="block text-foreground hover:text-accent transition-colors">
                تخفيضات | Sale
              </a>
              {showSearch && (
                <div className="flex items-center bg-muted rounded-lg px-3 py-2 mt-4">
                  <Search className="h-4 w-4 text-muted-foreground mr-2" />
                  <input
                    type="text"
                    placeholder="البحث عن المنتجات..."
                    className="bg-transparent border-none outline-none flex-1 text-sm"
                  />
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
