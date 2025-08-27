"use client"

import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Heart } from "lucide-react"

const tshirts = [
  {
    id: 1,
    name: "قميص أبيض كلاسيكي | Classic White T-Shirt",
    price: 45,
    originalPrice: 60,
    image: "/mens-dress-shirt.png",
    rating: 4.8,
    reviews: 124,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "تيشيرت أزرق أنيق | Elegant Blue T-Shirt",
    price: 39,
    originalPrice: null,
    image: "/formal-blue-shirt.png",
    rating: 4.7,
    reviews: 89,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "قميص رمادي عصري | Modern Gray T-Shirt",
    price: 42,
    originalPrice: 55,
    image: "/tommy-style-polo-shirt.png",
    rating: 4.9,
    reviews: 203,
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "تيشيرت أسود أنيق | Elegant Black T-Shirt",
    price: 38,
    originalPrice: null,
    image: "/graphic-tee-youth.png",
    rating: 4.6,
    reviews: 156,
    sizes: ["S", "M", "L", "XL"],
  },
]

export default function TShirtsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">تيشيرتات رجالية | Men's T-Shirts</h1>
          <p className="text-muted-foreground text-lg">مجموعة أنيقة من التيشيرتات الرجالية عالية الجودة</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tshirts.map((product) => (
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
