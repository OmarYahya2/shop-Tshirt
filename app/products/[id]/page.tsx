"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  ShoppingBag,
  Search,
  User,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Truck,
  RotateCcw,
  Shield,
  ChevronDown,
} from "lucide-react"

const productData = {
  id: 1,
  name: "قميص أبيض كلاسيكي | Classic White Shirt",
  nameAr: "قميص أبيض كلاسيكي",
  nameEn: "Classic White Shirt",
  price: 89,
  originalPrice: 120,
  images: ["/classic-white-dress-shirt.png", "/mens-dress-shirt.png", "/professional-man-in-shirt.png"],
  rating: 4.8,
  reviews: 87,
  category: "shirts",
  color: "white",
  colors: [
    { name: "أبيض | White", nameAr: "أبيض", nameEn: "White", value: "white", image: "/classic-white-dress-shirt.png" },
    {
      name: "أزرق فاتح | Light Blue",
      nameAr: "أزرق فاتح",
      nameEn: "Light Blue",
      value: "lightblue",
      image: "/formal-blue-shirt.png",
    },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  sizeGuide: {
    S: { chest: "36-38", waist: "30-32" },
    M: { chest: "38-40", waist: "32-34" },
    L: { chest: "40-42", waist: "34-36" },
    XL: { chest: "42-44", waist: "36-38" },
    XXL: { chest: "44-46", waist: "38-40" },
  },
  description: "قميص رجالي أنيق مصنوع من القطن الفاخر بقصة عصرية. مثالي للعمل والمناسبات الرسمية.",
  descriptionEn:
    "Elegant men's shirt crafted from premium cotton with a modern fit. Perfect for work and formal occasions.",
  details: {
    material: "100% قطن فاخر | 100% Premium Cotton",
    fit: "قصة عصرية | Modern Fit",
    care: "غسيل بارد | Cold Wash",
    origin: "صنع في تركيا | Made in Turkey",
    features: [
      "أزرار عالية الجودة | Premium Buttons",
      "مقاوم للتجاعيد | Wrinkle Resistant",
      "قماش قابل للتنفس | Breathable Fabric",
    ],
  },
  inStock: true,
  stockCount: 15,
  gender: "men", // Changed from women to men
}

const reviews = [
  {
    id: 1,
    name: "أحمد محمد | Ahmed M.",
    rating: 5,
    date: "2024-01-15",
    title: "جودة ممتازة | Excellent Quality",
    comment: "قميص رائع وجودة عالية. القماش ممتاز والقصة مناسبة جداً. أنصح به بشدة.",
    commentEn: "Excellent shirt with high quality. The fabric is premium and the fit is perfect. Highly recommend.",
    verified: true,
    size: "L",
  },
  {
    id: 2,
    name: "محمد علي | Mohammed A.",
    rating: 4,
    date: "2024-01-10",
    title: "مريح وأنيق | Comfortable & Elegant",
    comment: "قميص مريح جداً ومناسب للعمل. الجودة جيدة والسعر معقول.",
    commentEn: "Very comfortable shirt, perfect for work. Good quality and reasonable price.",
    verified: true,
    size: "M",
  },
]

const relatedProducts = [
  {
    id: 2,
    name: "حذاء جلدي | Leather Boots",
    price: 199,
    image: "/mens-leather-boots.png",
    rating: 4.9,
  },
  {
    id: 3,
    name: "قميص أزرق | Blue Shirt",
    price: 95,
    image: "/formal-blue-shirt.png",
    rating: 4.7,
  },
  {
    id: 4,
    name: "حذاء بني | Brown Boots",
    price: 179,
    image: "/brown-leather-boots.png",
    rating: 4.8,
  },
  {
    id: 5,
    name: "حذاء أسود | Black Boots",
    price: 189,
    image: "/elegant-black-boots.png",
    rating: 4.6,
  },
]

export default function ProductDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(productData.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [showSizeGuide, setShowSizeGuide] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-primary">
                أناقة الرجال | Men's Elegance
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                القمصان | Shirts
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                الأحذية | Boots
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                التخفيضات | Sale
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="البحث... | Search..."
                  className="bg-transparent border-none outline-none flex-1 text-sm"
                />
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-accent">
            الرئيسية | Home
          </a>
          <span>/</span>
          <a href="/products" className="hover:text-accent">
            المنتجات | Products
          </a>
          <span>/</span>
          <span className="text-foreground">{productData.nameAr}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images - Simplified */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <img
                src={productData.images[currentImageIndex] || "/placeholder.svg"}
                alt={productData.nameEn}
                className="w-full h-full object-cover"
              />
              {productData.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">تخفيض | Sale</Badge>
              )}
              {productData.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {productData.images.length > 1 && (
              <div className="flex space-x-3 justify-center">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? "border-accent scale-105" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${productData.nameEn} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-3 leading-tight">{productData.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(productData.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {productData.rating} ({productData.reviews} تقييم | reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${productData.price}</span>
                {productData.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">${productData.originalPrice}</span>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      وفر | Save ${productData.originalPrice - productData.price}
                    </Badge>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground leading-relaxed text-right">{productData.description}</p>
              <p className="text-muted-foreground leading-relaxed">{productData.descriptionEn}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-primary">اللون | Color: {selectedColor.nameAr}</h3>
              <div className="flex space-x-3">
                {productData.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={`w-14 h-14 rounded-xl border-2 overflow-hidden transition-all ${
                      selectedColor.value === color.value
                        ? "border-accent scale-105 shadow-lg"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={color.image || "/placeholder.svg"}
                      alt={color.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-primary">المقاس | Size</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowSizeGuide(!showSizeGuide)}>
                  دليل المقاسات | Size Guide
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showSizeGuide ? "rotate-180" : ""}`} />
                </Button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {productData.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="h-12 font-semibold"
                  >
                    {size}
                  </Button>
                ))}
              </div>
              {showSizeGuide && (
                <Card className="p-4 bg-muted/30">
                  <h4 className="font-semibold mb-3">دليل المقاسات | Size Guide (inches)</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(productData.sizeGuide).map(([size, measurements]) => (
                      <div key={size} className="flex justify-between">
                        <span className="font-medium">{size}:</span>
                        <span>
                          صدر | Chest {measurements.chest}, خصر | Waist {measurements.waist}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-primary">الكمية | Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(productData.stockCount, quantity + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">{productData.stockCount} متوفر | in stock</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                disabled={!selectedSize}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                أضف للسلة | Add to Cart
              </Button>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                  المفضلة | Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Share2 className="h-5 w-5 mr-2" />
                  مشاركة | Share
                </Button>
              </div>
              {!selectedSize && (
                <p className="text-sm text-muted-foreground text-center">يرجى اختيار المقاس | Please select a size</p>
              )}
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-sm">شحن مجاني للطلبات فوق $100 | Free shipping over $100</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-accent" />
                <span className="text-sm">إرجاع خلال 30 يوم | 30-day returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">ضمان سنتين | 2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">التفاصيل | Details</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات | Reviews ({productData.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-primary mb-4">تفاصيل المنتج | Product Details</h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">الخامة | Material:</dt>
                        <dd className="font-medium">{productData.details.material}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">القصة | Fit:</dt>
                        <dd className="font-medium">{productData.details.fit}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">العناية | Care:</dt>
                        <dd className="font-medium">{productData.details.care}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">المنشأ | Origin:</dt>
                        <dd className="font-medium">{productData.details.origin}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-4">المميزات | Features</h3>
                    <ul className="space-y-2">
                      {productData.details.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-primary">تقييمات العملاء | Customer Reviews</h3>
                  <Button variant="outline">اكتب تقييم | Write Review</Button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{review.name}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                مشتري موثق | Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">مقاس | Size: {review.size}</span>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{review.title}</h4>
                      <p className="text-muted-foreground mb-2 text-right">{review.comment}</p>
                      <p className="text-muted-foreground text-sm">{review.commentEn}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">قد يعجبك أيضاً | You Might Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary mb-2 text-sm">{product.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
