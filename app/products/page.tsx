"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star, ShoppingBag, Search, User, Heart, Grid3X3, List, Filter, Eye } from "lucide-react"

// Mock product data
const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 89,
    originalPrice: 120,
    image: "/elegant-white-shirt-on-model.png",
    rating: 4.8,
    reviews: 124,
    category: "shirts",
    color: "white",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
  },
  {
    id: 2,
    name: "Tailored Blazer",
    price: 199,
    originalPrice: null,
    image: "/sophisticated-blazer-fashion-photography.png",
    rating: 4.9,
    reviews: 89,
    category: "blazers",
    color: "navy",
    sizes: ["S", "M", "L", "XL"],
    gender: "women",
  },
  {
    id: 3,
    name: "Designer Jeans",
    price: 129,
    originalPrice: 160,
    image: "/premium-denim-jeans-styled.png",
    rating: 4.7,
    reviews: 203,
    category: "jeans",
    color: "blue",
    sizes: ["28", "30", "32", "34", "36"],
    gender: "unisex",
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: 45,
    originalPrice: null,
    image: "/luxury-silk-scarf-accessory.png",
    rating: 4.6,
    reviews: 67,
    category: "accessories",
    color: "multicolor",
    sizes: ["One Size"],
    gender: "unisex",
  },
  {
    id: 5,
    name: "Cashmere Sweater",
    price: 159,
    originalPrice: 200,
    image: "/cozy-cashmere-sweater-fashion.png",
    rating: 4.8,
    reviews: 156,
    category: "sweaters",
    color: "beige",
    sizes: ["XS", "S", "M", "L"],
    gender: "women",
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: 299,
    originalPrice: null,
    image: "/stylish-leather-jacket-model.png",
    rating: 4.9,
    reviews: 98,
    category: "jackets",
    color: "black",
    sizes: ["S", "M", "L", "XL"],
    gender: "unisex",
  },
  {
    id: 7,
    name: "Summer Dress",
    price: 79,
    originalPrice: 95,
    image: "/elegant-summer-dress-fashion.png",
    rating: 4.5,
    reviews: 187,
    category: "dresses",
    color: "floral",
    sizes: ["XS", "S", "M", "L", "XL"],
    gender: "women",
  },
  {
    id: 8,
    name: "Oxford Shoes",
    price: 189,
    originalPrice: null,
    image: "/classic-oxford-shoes-leather.png",
    rating: 4.7,
    reviews: 143,
    category: "shoes",
    color: "brown",
    sizes: ["7", "8", "9", "10", "11", "12"],
    gender: "men",
  },
]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedGender, setSelectedGender] = useState<string[]>([])

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
    const matchesSize = selectedSizes.length === 0 || product.sizes.some((size) => selectedSizes.includes(size))
    const matchesGender = selectedGender.length === 0 || selectedGender.includes(product.gender)

    return matchesPrice && matchesCategory && matchesColor && matchesSize && matchesGender
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const toggleFilter = (filterArray: string[], setFilter: (arr: string[]) => void, value: string) => {
    if (filterArray.includes(value)) {
      setFilter(filterArray.filter((item) => item !== value))
    } else {
      setFilter([...filterArray, value])
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
    setSelectedGender([])
    setPriceRange([0, 500])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header - Same as homepage */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-serif font-black text-primary">
                LUXE
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                Women
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                Men
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                Accessories
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                Sale
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">All Products</h1>
          <p className="text-muted-foreground">Discover our complete collection of modern fashion</p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-64 space-y-6`}>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-primary">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <h4 className="font-medium text-primary">Price Range</h4>
                <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Categories</h4>
                {["shirts", "blazers", "jeans", "accessories", "sweaters", "jackets", "dresses", "shoes"].map(
                  (category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                      />
                      <label htmlFor={category} className="text-sm capitalize cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ),
                )}
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Colors</h4>
                {["white", "navy", "blue", "black", "beige", "brown", "floral", "multicolor"].map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={color}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={() => toggleFilter(selectedColors, setSelectedColors, color)}
                    />
                    <label htmlFor={color} className="text-sm capitalize cursor-pointer">
                      {color}
                    </label>
                  </div>
                ))}
              </div>

              {/* Gender */}
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Gender</h4>
                {["women", "men", "unisex"].map((gender) => (
                  <div key={gender} className="flex items-center space-x-2">
                    <Checkbox
                      id={gender}
                      checked={selectedGender.includes(gender)}
                      onCheckedChange={() => toggleFilter(selectedGender, setSelectedGender, gender)}
                    />
                    <label htmlFor={gender} className="text-sm capitalize cursor-pointer">
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-card p-4 rounded-lg border border-border">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-muted-foreground">{sortedProducts.length} products found</span>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group cursor-pointer border-0 shadow-md hover:shadow-lg transition-all duration-300 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 h-48" : "w-full h-64"}`}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Sale</Badge>
                      )}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                      <div>
                        <h4 className="font-medium text-primary mb-2">{product.name}</h4>
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
                        {viewMode === "list" && (
                          <div className="text-sm text-muted-foreground mb-3">
                            Available sizes: {product.sizes.join(", ")}
                          </div>
                        )}
                      </div>

                      {viewMode === "list" && (
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Add to Cart</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
