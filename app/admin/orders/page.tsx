"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ShoppingBag,
  Search,
  Eye,
  Package,
  Truck,
  CheckCircle,
  Clock,
  BarChart,
  Settings,
  LogOut,
  Bell,
} from "lucide-react"

// Mock orders data
const initialOrders = [
  {
    id: "12345",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    total: 287,
    status: "Processing",
    date: "2024-01-15",
    items: [
      { name: "Classic White Shirt", quantity: 2, price: 89 },
      { name: "Tailored Blazer", quantity: 1, price: 199 },
    ],
    shipping: {
      address: "123 Main St, New York, NY 10001",
      method: "Standard Shipping",
    },
  },
  {
    id: "12344",
    customer: "Mike Chen",
    email: "mike@example.com",
    total: 129,
    status: "Shipped",
    date: "2024-01-15",
    items: [{ name: "Designer Jeans", quantity: 1, price: 129 }],
    shipping: {
      address: "456 Oak Ave, Los Angeles, CA 90210",
      method: "Express Shipping",
    },
  },
  {
    id: "12343",
    customer: "Emma Wilson",
    email: "emma@example.com",
    total: 456,
    status: "Delivered",
    date: "2024-01-14",
    items: [
      { name: "Cashmere Sweater", quantity: 2, price: 159 },
      { name: "Silk Scarf", quantity: 2, price: 45 },
    ],
    shipping: {
      address: "789 Pine St, Chicago, IL 60601",
      method: "Standard Shipping",
    },
  },
  {
    id: "12342",
    customer: "David Brown",
    email: "david@example.com",
    total: 89,
    status: "Processing",
    date: "2024-01-14",
    items: [{ name: "Classic White Shirt", quantity: 1, price: 89 }],
    shipping: {
      address: "321 Elm St, Miami, FL 33101",
      method: "Standard Shipping",
    },
  },
]

export default function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.includes(searchTerm) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Processing
          </Badge>
        )
      case "Shipped":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Truck className="h-3 w-3 mr-1" />
            Shipped
          </Badge>
        )
      case "Delivered":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Delivered
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Processing":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "Shipped":
        return <Truck className="h-4 w-4 text-blue-600" />
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Package className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="bg-background border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/admin" className="text-2xl font-serif font-black text-primary">
                LUXE Admin
              </a>
              <Badge variant="secondary">Orders</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-accent-foreground">A</span>
                </div>
                <span className="text-sm font-medium">Admin User</span>
              </div>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r border-border min-h-screen">
          <nav className="p-6 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/admin">
                <BarChart className="h-4 w-4 mr-3" />
                Dashboard
              </a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/admin/products">
                <Package className="h-4 w-4 mr-3" />
                Products
              </a>
            </Button>
            <Button variant="default" className="w-full justify-start">
              <ShoppingBag className="h-4 w-4 mr-3" />
              Orders
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/admin/customers">
                <Package className="h-4 w-4 mr-3" />
                Customers
              </a>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Order Management</h2>
            <p className="text-muted-foreground">Track and manage customer orders</p>
          </div>

          {/* Order Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold">{orders.length}</p>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Processing</p>
                    <p className="text-2xl font-bold">{orders.filter((o) => o.status === "Processing").length}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Shipped</p>
                    <p className="text-2xl font-bold">{orders.filter((o) => o.status === "Shipped").length}</p>
                  </div>
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Delivered</p>
                    <p className="text-2xl font-bold">{orders.filter((o) => o.status === "Delivered").length}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search orders, customers, or emails..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card>
            <CardHeader>
              <CardTitle>Orders ({filteredOrders.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.customer}</p>
                          <p className="text-sm text-muted-foreground">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="font-medium">${order.total}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => setSelectedOrder(order)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Order Details - #{order.id}</DialogTitle>
                                <DialogDescription>Complete order information and management</DialogDescription>
                              </DialogHeader>
                              {selectedOrder && (
                                <div className="space-y-6">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Customer Information</h4>
                                      <p className="text-sm">{selectedOrder.customer}</p>
                                      <p className="text-sm text-muted-foreground">{selectedOrder.email}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-2">Order Status</h4>
                                      <div className="flex items-center space-x-2">
                                        {getStatusIcon(selectedOrder.status)}
                                        <span>{selectedOrder.status}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-medium mb-2">Shipping Address</h4>
                                    <p className="text-sm">{selectedOrder.shipping.address}</p>
                                    <p className="text-sm text-muted-foreground">{selectedOrder.shipping.method}</p>
                                  </div>

                                  <div>
                                    <h4 className="font-medium mb-2">Order Items</h4>
                                    <div className="space-y-2">
                                      {selectedOrder.items.map((item, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                          <span>
                                            {item.name} × {item.quantity}
                                          </span>
                                          <span>${item.price * item.quantity}</span>
                                        </div>
                                      ))}
                                      <div className="border-t pt-2 flex justify-between font-medium">
                                        <span>Total</span>
                                        <span>${selectedOrder.total}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-medium mb-2">Update Status</h4>
                                    <div className="flex space-x-2">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => updateOrderStatus(selectedOrder.id, "Processing")}
                                      >
                                        Processing
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => updateOrderStatus(selectedOrder.id, "Shipped")}
                                      >
                                        Shipped
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => updateOrderStatus(selectedOrder.id, "Delivered")}
                                      >
                                        Delivered
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Processing">Processing</SelectItem>
                              <SelectItem value="Shipped">Shipped</SelectItem>
                              <SelectItem value="Delivered">Delivered</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
