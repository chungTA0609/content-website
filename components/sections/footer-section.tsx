import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-bold">FinanceInsight</h3>
          <p className="text-sm text-muted-foreground">
            Providing expert financial analysis and investment strategies to help you build wealth and achieve financial
            freedom.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Articles
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Market Analysis
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Premium Reports
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Stocks & ETFs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Cryptocurrency
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Retirement Planning
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Tax Strategies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">contact@financeinsight.com</li>
            <li className="text-muted-foreground">1-800-FINANCE</li>
            <li className="text-muted-foreground">123 Wall Street, New York, NY</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>© 2025 FinanceInsight. All rights reserved.</p>
      </div>
    </footer>
  )
}

