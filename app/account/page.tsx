"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingBag,
  Search,
  User,
  Heart,
  Settings,
  Package,
  MapPin,
  CreditCard,
  LogOut,
  Edit,
  Eye,
} from "lucide-react"

export default function AccountPage() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Redirect to login if not authenticated
      window.location.href = "/login"
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  if (!user) {
    return null // Will redirect to login
  }

  // Mock order data
  const orders = [
    {
      id: "12345",
      date: "2024-01-15",
      status: "Delivered",
      total: 287,
      items: [
        { name: "Classic White Shirt", quantity: 2, price: 89 },
        { name: "Tailored Blazer", quantity: 1, price: 199 },
      ],
    },
    {
      id: "12344",
      date: "2024-01-10",
      status: "Shipped",
      total: 129,
      items: [{ name: "Designer Jeans", quantity: 1, price: 129 }],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
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
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-accent">
            Home
          </a>
          <span>/</span>
          <span className="text-foreground">My Account</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="h-8 w-8 text-accent-foreground" />
                </div>
                <h2 className="font-serif font-bold text-primary">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-3" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-3" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-3" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-3" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-3" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-3" />
                  Settings
                </Button>
                <Separator className="my-4" />
                <Button variant="ghost" className="w-full justify-start text-destructive" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </Button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-serif font-bold text-primary">Profile Information</h3>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">First Name</label>
                      <input
                        type="text"
                        value={user.firstName}
                        readOnly
                        className="w-full px-3 py-2 border border-border rounded-lg bg-muted"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
                      <input
                        type="text"
                        value={user.lastName}
                        readOnly
                        className="w-full px-3 py-2 border border-border rounded-lg bg-muted"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                      <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="w-full px-3 py-2 border border-border rounded-lg bg-muted"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Add phone number"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h4 className="font-medium text-primary mb-4">Account Preferences</h4>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-border mr-3" defaultChecked />
                        <span className="text-sm">Email notifications for orders</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-border mr-3" defaultChecked />
                        <span className="text-sm">Marketing emails and promotions</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-border mr-3" />
                        <span className="text-sm">SMS notifications</span>
                      </label>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary mb-6">Order History</h3>

                  <div className="space-y-4">
                    {orders.map((order) => (
                      <Card key={order.id} className="p-4 border border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-medium text-primary">Order #{order.id}</h4>
                            <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={order.status === "Delivered" ? "default" : "secondary"}
                              className={
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }
                            >
                              {order.status}
                            </Badge>
                            <p className="text-sm font-medium mt-1">${order.total}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>
                                {item.name} × {item.quantity}
                              </span>
                              <span>${item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary mb-6">My Wishlist</h3>
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your wishlist is empty</p>
                    <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                      <a href="/products">Start Shopping</a>
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="addresses" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-serif font-bold text-primary">Saved Addresses</h3>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Add New Address</Button>
                  </div>
                  <div className="text-center py-12">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No saved addresses</p>
                    <p className="text-sm text-muted-foreground mt-2">Add an address to make checkout faster</p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
