"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/shared/header"
import { ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-serif font-black text-muted-foreground/20 mb-4">404</h1>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
              wrong URL.
            </p>
          </div>

          <div className="space-y-4">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="/products">
                <Search className="h-4 w-4 mr-2" />
                Browse Products
              </a>
            </Button>

            <Button variant="ghost" className="w-full" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-medium text-primary mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you think this is an error, please contact our support team.
            </p>
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
