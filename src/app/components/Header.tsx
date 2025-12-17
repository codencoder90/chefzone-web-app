import { ChefHat, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';

export function Header() {
  const menuItems = [
    { label: 'Register', path: '/register' },
    { label: 'Find a Job', path: '/find-job' },
    { label: 'Hiring?', path: '/hiring' },
    { label: 'Professional Catering', path: '/professional-catering' },
    { label: 'Permanent Jobs', path: '/permanent-jobs' },
    { label: 'Refer a Business', path: '/refer-business' },
    { label: 'Refer a Friend', path: '/refer-friend' }
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="bg-orange-600 p-2 rounded-lg shadow-sm">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Chef Zone</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Log in
            </Link>
            <Link
              to="/hiring"
              className="hidden sm:inline-flex bg-orange-600 text-white px-6 py-2.5 rounded-md hover:bg-orange-700 transition-all shadow-sm font-medium text-sm"
            >
              Hire Staff
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetTitle className="text-left mb-6 flex items-center gap-2">
                  <div className="bg-orange-600 p-1.5 rounded-md">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  Chef Zone
                </SheetTitle>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="px-4 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="h-px bg-border my-2" />
                  <Link
                    to="/login"
                    className="px-4 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/hiring"
                    className="px-4 py-2 text-base font-medium text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                  >
                    Hire Staff
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}