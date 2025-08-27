"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/shared/header"
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const latestDesigns = [
    {
      nameAr: "قميص قطني أبيض",
      nameEn: "Cotton White T-Shirt",
      image: "/classic-white-dress-shirt.png",
      price: "45$",
    },
    {
      nameAr: "قميص أزرق كاجوال",
      nameEn: "Blue Casual T-Shirt",
      image: "/formal-blue-shirt.png",
      price: "50$",
    },
    {
      nameAr: "قميص أسود رياضي",
      nameEn: "Black Sport T-Shirt",
      image: "/mens-dress-shirt.png",
      price: "40$",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % latestDesigns.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + latestDesigns.length) % latestDesigns.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[80vh] bg-card flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <div className="flex items-center justify-end mb-6">
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight arabic">متجر البلايز</h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6 english">T-Shirts Store</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed arabic">
                أفضل البلايز الرجالية عالية الجودة
              </p>
              <p className="text-lg text-muted-foreground mb-8 english">Premium quality men's t-shirts</p>
              <div className="flex justify-end">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-8 py-4"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" />
                  <span className="arabic font-bold">تسوق الآن</span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-man-in-shirt.png"
                alt="Model wearing t-shirt"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4 arabic">أحدث التصاميم</h3>
            <h4 className="text-2xl font-semibold text-secondary english">Latest Designs</h4>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {latestDesigns.map((design, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 shadow-lg">
                      <CardContent className="p-0">
                        <img
                          src={design.image || "/placeholder.svg"}
                          alt={design.nameEn}
                          className="w-full h-80 object-cover"
                        />
                        <div className="p-6 text-center">
                          <h4 className="text-xl font-bold text-primary mb-2 arabic">{design.nameAr}</h4>
                          <p className="text-lg text-muted-foreground mb-3 english">{design.nameEn}</p>
                          <p className="text-2xl font-bold text-secondary">{design.price}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {latestDesigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4 arabic">تسوق البلايز</h3>
            <h4 className="text-2xl font-semibold text-secondary mb-6 english">Shop T-Shirts</h4>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto arabic">
              اختر من مجموعتنا المتميزة من البلايز الرجالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                titleAr: "بلايز كاجوال",
                titleEn: "Casual T-Shirts",
                descAr: "بلايز مريحة للاستخدام اليومي",
                descEn: "Comfortable t-shirts for daily wear",
                image: "/mens-dress-shirt.png",
                itemsAr: "50+ تصميم",
                itemsEn: "50+ Designs",
                href: "/tshirts",
              },
              {
                titleAr: "بلايز رسمية",
                titleEn: "Formal T-Shirts",
                descAr: "بلايز أنيقة للمناسبات الخاصة",
                descEn: "Elegant t-shirts for special occasions",
                image: "/classic-white-dress-shirt.png",
                itemsAr: "30+ موديل",
                itemsEn: "30+ Styles",
                href: "/tshirts",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-2 border-border hover:border-secondary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={category.href}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 text-white text-right">
                      <h4 className="text-2xl font-bold mb-2 arabic">{category.titleAr}</h4>
                      <p className="text-lg english opacity-90 mb-1">{category.titleEn}</p>
                      <p className="text-sm arabic opacity-80 mb-2">{category.descAr}</p>
                      <Badge className="bg-secondary text-secondary-foreground arabic">{category.itemsAr}</Badge>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4 arabic">تسوق حسب الفئة</h3>
            <h4 className="text-2xl font-semibold text-secondary mb-6 english">Shop by Category</h4>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto arabic">
              اختر من مجموعتنا المتميزة من القمصان الرجالية والأحذية الأنيقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                titleAr: "قمصان رجالية",
                titleEn: "Men's Shirts",
                descAr: "قمصان عالية الجودة للعمل والمناسبات",
                descEn: "Premium shirts for work and occasions",
                image: "/mens-dress-shirt.png",
                itemsAr: "60+ تصميم",
                itemsEn: "60+ Designs",
                href: "/products?category=shirts",
              },
              {
                titleAr: "أحذية رجالية",
                titleEn: "Men's Boots",
                descAr: "أحذية أنيقة ومريحة للرجل العصري",
                descEn: "Elegant and comfortable boots for modern men",
                image: "/mens-leather-boots.png",
                itemsAr: "40+ موديل",
                itemsEn: "40+ Styles",
                href: "/products?category=boots",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-2 border-border hover:border-secondary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={category.href}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg?height=400&width=500&query=mens clothing"}
                      alt={category.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 text-white text-right">
                      <h4 className="text-2xl font-bold mb-2 arabic">{category.titleAr}</h4>
                      <p className="text-lg english opacity-90 mb-1">{category.titleEn}</p>
                      <p className="text-sm arabic opacity-80 mb-2">{category.descAr}</p>
                      <Badge className="bg-secondary text-secondary-foreground arabic">{category.itemsAr}</Badge>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4 arabic">المنتجات المميزة</h3>
            <h4 className="text-2xl font-semibold text-secondary mb-6 english">Featured Products</h4>
            <p className="text-lg text-muted-foreground arabic">أفضل المنتجات الرجالية المختارة بعناية</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                nameAr: "قميص أبيض كلاسيكي",
                nameEn: "Classic White Shirt",
                price: "85$",
                originalPrice: "120$",
                image: "/classic-white-dress-shirt.png",
                rating: 4.9,
                reviews: 156,
                href: "/products/1",
              },
              {
                nameAr: "قميص أزرق رسمي",
                nameEn: "Formal Blue Shirt",
                price: "95$",
                originalPrice: null,
                image: "/formal-blue-shirt.png",
                rating: 4.8,
                reviews: 203,
                href: "/products/2",
              },
              {
                nameAr: "حذاء جلد بني",
                nameEn: "Brown Leather Boots",
                price: "180$",
                originalPrice: "220$",
                image: "/brown-leather-boots.png",
                rating: 4.7,
                reviews: 89,
                href: "/products/3",
              },
              {
                nameAr: "حذاء أسود أنيق",
                nameEn: "Elegant Black Boots",
                price: "200$",
                originalPrice: null,
                image: "/elegant-black-boots.png",
                rating: 4.9,
                reviews: 134,
                href: "/products/4",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-2 border-border hover:border-secondary shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
              >
                <CardContent className="p-0">
                  <a href={product.href}>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg?height=300&width=250&query=mens shirt"}
                        alt={product.nameEn}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground arabic">
                          خصم
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 text-right">
                      <h4 className="text-lg font-bold text-primary mb-2 arabic">{product.nameAr}</h4>
                      <p className="text-sm text-muted-foreground mb-3 english">{product.nameEn}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center ltr">
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                          <span className="text-sm font-medium text-primary ml-1">{product.rating}</span>
                          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="ltr">
                          <span className="text-xl font-bold text-primary">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through mr-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                          <span className="arabic text-sm">أضف للسلة</span>
                        </Button>
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-right">
              <h4 className="text-2xl font-bold mb-4 arabic">أناقة الرجال</h4>
              <p className="text-primary-foreground/80 mb-4 arabic leading-relaxed">
                متجر متخصص في الملابس الرجالية عالية الجودة، نقدم أفضل القمصان والأحذية للرجل العصري المحترف
              </p>
              <p className="text-sm text-primary-foreground/70 english">
                Premium men's clothing store - Quality shirts and boots
              </p>
            </div>
            <div className="text-right">
              <h5 className="text-lg font-semibold mb-4 arabic">المنتجات</h5>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="/products?category=shirts" className="hover:text-secondary transition-colors arabic">
                    قمصان رسمية
                  </a>
                </li>
                <li>
                  <a href="/products?category=boots" className="hover:text-secondary transition-colors arabic">
                    أحذية جلدية
                  </a>
                </li>
                <li>
                  <a href="/products?sale=true" className="hover:text-secondary transition-colors arabic">
                    عروض خاصة
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <h5 className="text-lg font-semibold mb-4 arabic">خدمة العملاء</h5>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="/contact" className="hover:text-secondary transition-colors arabic">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="/size-guide" className="hover:text-secondary transition-colors arabic">
                    دليل المقاسات
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-secondary transition-colors arabic">
                    أسئلة شائعة
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <h5 className="text-lg font-semibold mb-4 arabic">تواصل معنا</h5>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="https://wa.me/1234567890" className="hover:text-secondary transition-colors arabic">
                    واتساب: 123-456-7890
                  </a>
                </li>
                <li>
                  <a href="mailto:info@menselegance.com" className="hover:text-secondary transition-colors english">
                    info@menselegance.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-secondary transition-colors arabic">
                    هاتف: 123-456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70">
            <p className="arabic mb-2">© 2024 أناقة الرجال. جميع الحقوق محفوظة</p>
            <p className="english text-sm">Men's Elegance Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
