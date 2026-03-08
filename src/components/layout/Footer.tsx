import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 font-display text-xl">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
                <span className="text-primary-foreground font-display font-bold text-lg">V</span>
              </div>
              <span className="font-bold">Velora</span>
            </Link>
            <p className="text-sm opacity-70 max-w-xs">
              Craft ATS-optimized, beautifully designed resumes and cover letters with the power of AI.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Product</h4>
            <ul className="space-y-2.5 text-sm">
              {['Templates', 'Builder', 'AI Tools', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="opacity-70 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {['About', 'Contact', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="opacity-70 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Stay Updated</h4>
            <p className="text-sm opacity-70 mb-3">Get career tips and product updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                placeholder="Your email"
                type="email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40 text-sm"
              />
              <Button size="sm" className="shrink-0">Join</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50">
          <p>© 2026 Velora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
