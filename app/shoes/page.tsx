"use client"

import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Heart } from "lucide-react"

const shoes = [
  {
    id: 1,
    name: "حذاء جلدي بني | Brown Leather Boots",
    price: 120,
    originalPrice: 150,
    image: "/brown-leather-boots.png",
    rating: 4.8,
    reviews: 87,
    sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: 2,
    name: "حذاء أسود أنيق | Elegant Black Boots",
    price: 135,
    originalPrice: null,
    image: "/elegant-black-boots.png",
    rating: 4.9,
    reviews: 156,
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: 3,
    name: "حذاء رياضي عصري | Modern Sneakers",
    price: 89,
    originalPrice: 110,
    image: "/trendy-combat-boots.png",
    rating: 4.7,
    reviews: 203,
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
  },
  {
    id: 4,
    name: "حذاء جلدي كلاسيكي | Classic Leather Shoes",
    price: 145,
    originalPrice: null,
    image: "/mens-leather-boots.png",
    rating: 4.8,
    reviews: 124,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
]

export default function ShoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">أحذية رجالية | Men's Shoes</h1>
          <p className="text-muted-foreground text-lg">مجموعة متميزة من الأحذية الرجالية الأنيقة والعملية</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shoes.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden w-full h-64">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">تخفيض | Sale</Badge>
                  )}
                  <div className="absolute top-3 right-3">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-medium text-primary mb-2 text-sm leading-relaxed">{product.name}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-semibold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">المقاسات المتاحة: {product.sizes.join(", ")}</div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    أضف للسلة | Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
