"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ShoppingBag, User, Heart, CreditCard, Lock, Check, ArrowLeft } from "lucide-react"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 89,
    image: "/elegant-white-shirt-on-model.png",
    size: "M",
    color: "White",
    quantity: 2,
  },
  {
    id: 2,
    name: "Tailored Blazer",
    price: 199,
    image: "/sophisticated-blazer-fashion-photography.png",
    size: "L",
    color: "Navy",
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [isGuest, setIsGuest] = useState(true)
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [orderComplete, setOrderComplete] = useState(false)

  const [shippingForm, setShippingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = shippingMethod === "express" ? 15 : shippingMethod === "overnight" ? 25 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shippingCost + tax

  const handleSubmitOrder = () => {
    setOrderComplete(true)
  }

  if (orderComplete) {
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
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-primary mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. Your order #12345 has been confirmed and will be shipped soon.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="/products">Continue Shopping</a>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

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

            <div className="flex items-center space-x-4">
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
          <a href="/cart" className="hover:text-accent">
            Cart
          </a>
          <span>/</span>
          <span className="text-foreground">Checkout</span>
        </nav>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? "text-accent" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= 1 ? "border-accent bg-accent text-accent-foreground" : "border-muted-foreground"
                }`}
              >
                1
              </div>
              <span className="ml-2 hidden sm:block">Shipping</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className={`flex items-center ${step >= 2 ? "text-accent" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= 2 ? "border-accent bg-accent text-accent-foreground" : "border-muted-foreground"
                }`}
              >
                2
              </div>
              <span className="ml-2 hidden sm:block">Payment</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className={`flex items-center ${step >= 3 ? "text-accent" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= 3 ? "border-accent bg-accent text-accent-foreground" : "border-muted-foreground"
                }`}
              >
                3
              </div>
              <span className="ml-2 hidden sm:block">Review</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <>
                {/* Account Options */}
                <Card className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">Account</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="guest"
                        checked={isGuest}
                        onCheckedChange={(checked) => setIsGuest(checked as boolean)}
                      />
                      <Label htmlFor="guest">Continue as guest</Label>
                    </div>
                    {!isGuest && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          placeholder="Email address"
                          className="px-3 py-2 border border-border rounded-lg bg-background"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="px-3 py-2 border border-border rounded-lg bg-background"
                        />
                      </div>
                    )}
                  </div>
                </Card>

                {/* Shipping Information */}
                <Card className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">Shipping Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      value={shippingForm.firstName}
                      onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={shippingForm.lastName}
                      onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={shippingForm.email}
                      onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background sm:col-span-2"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background sm:col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background sm:col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      value={shippingForm.apartment}
                      onChange={(e) => setShippingForm({ ...shippingForm, apartment: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background sm:col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={shippingForm.city}
                      onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={shippingForm.state}
                      onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background"
                    />
                    <input
                      type="text"
                      placeholder="ZIP code"
                      value={shippingForm.zipCode}
                      onChange={(e) => setShippingForm({ ...shippingForm, zipCode: e.target.value })}
                      className="px-3 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                </Card>

                {/* Shipping Method */}
                <Card className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">Shipping Method</h2>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Standard Shipping</div>
                            <div className="text-sm text-muted-foreground">5-7 business days</div>
                          </div>
                          <div className="font-medium">Free</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Express Shipping</div>
                            <div className="text-sm text-muted-foreground">2-3 business days</div>
                          </div>
                          <div className="font-medium">$15.00</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <RadioGroupItem value="overnight" id="overnight" />
                      <Label htmlFor="overnight" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Overnight Shipping</div>
                            <div className="text-sm text-muted-foreground">Next business day</div>
                          </div>
                          <div className="font-medium">$25.00</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href="/cart">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Cart
                    </a>
                  </Button>
                  <Button onClick={() => setStep(2)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Continue to Payment
                  </Button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Payment Method */}
                <Card className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">Payment Method</h2>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center cursor-pointer">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit Card
                      </Label>
                    </div>
                  </RadioGroup>
                </Card>

                {/* Payment Details */}
                <Card className="p-6">
                  <h3 className="font-medium text-primary mb-4">Card Information</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card number"
                      value={paymentForm.cardNumber}
                      onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={paymentForm.expiryDate}
                        onChange={(e) => setPaymentForm({ ...paymentForm, expiryDate: e.target.value })}
                        className="px-3 py-2 border border-border rounded-lg bg-background"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={paymentForm.cvv}
                        onChange={(e) => setPaymentForm({ ...paymentForm, cvv: e.target.value })}
                        className="px-3 py-2 border border-border rounded-lg bg-background"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on card"
                      value={paymentForm.nameOnCard}
                      onChange={(e) => setPaymentForm({ ...paymentForm, nameOnCard: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                </Card>

                {/* Billing Address */}
                <Card className="p-6">
                  <h3 className="font-medium text-primary mb-4">Billing Address</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="sameAsShipping"
                      checked={sameAsShipping}
                      onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                    />
                    <Label htmlFor="sameAsShipping">Same as shipping address</Label>
                  </div>
                  {!sameAsShipping && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Address"
                        className="px-3 py-2 border border-border rounded-lg bg-background sm:col-span-2"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        className="px-3 py-2 border border-border rounded-lg bg-background"
                      />
                      <input
                        type="text"
                        placeholder="ZIP code"
                        className="px-3 py-2 border border-border rounded-lg bg-background"
                      />
                    </div>
                  )}
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Shipping
                  </Button>
                  <Button onClick={() => setStep(3)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Review Order
                  </Button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                {/* Order Review */}
                <Card className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">Review Your Order</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Shipping Address</h3>
                      <p className="text-sm text-muted-foreground">
                        {shippingForm.firstName} {shippingForm.lastName}
                        <br />
                        {shippingForm.address}
                        <br />
                        {shippingForm.city}, {shippingForm.state} {shippingForm.zipCode}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Shipping Method</h3>
                      <p className="text-sm text-muted-foreground">
                        {shippingMethod === "standard" && "Standard Shipping (5-7 business days)"}
                        {shippingMethod === "express" && "Express Shipping (2-3 business days)"}
                        {shippingMethod === "overnight" && "Overnight Shipping (Next business day)"}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <p className="text-sm text-muted-foreground">
                        Credit Card ending in {paymentForm.cardNumber.slice(-4)}
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Payment
                  </Button>
                  <Button onClick={handleSubmitOrder} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Lock className="h-4 w-4 mr-2" />
                    Place Order
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-serif font-bold text-primary mb-4">Order Summary</h2>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {item.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        Size: {item.size} • Color: {item.color}
                      </p>
                      <p className="text-sm font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span>Secure Checkout</span>
              </div>
              <p>Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
