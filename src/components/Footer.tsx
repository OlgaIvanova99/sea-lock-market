import { Anchor, Shield, Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-transparent to-ocean-deep/50 overflow-hidden">
      {/* Animated waves background */}
      <div className="absolute bottom-0 left-0 w-full h-24">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,60 C240,100 360,20 600,60 C840,100 960,20 1200,60 L1200,120 L0,120 Z" 
            fill="hsl(var(--wave-blue) / 0.3)" 
            className="wave-animation"
          />
          <path 
            d="M0,80 C240,40 360,120 600,80 C840,40 960,120 1200,80 L1200,120 L0,120 Z" 
            fill="hsl(var(--encrypted-green) / 0.2)" 
            className="wave-animation"
            style={{ animationDelay: "-1s" }}
          />
        </svg>
      </div>

      {/* Sailing ships animation */}
      <div className="absolute bottom-8 w-full pointer-events-none">
        <div className="ship-sailing">
          <div className="flex items-end">
            <Anchor className="w-6 h-6 text-encrypted" />
            <div className="w-8 h-4 bg-gradient-to-r from-encrypted to-premium rounded-t-lg ml-1" />
          </div>
        </div>
        <div className="ship-sailing" style={{ animationDelay: "-10s", animationDuration: "25s" }}>
          <div className="flex items-end">
            <Shield className="w-5 h-5 text-premium" />
            <div className="w-6 h-3 bg-gradient-to-r from-premium to-encrypted rounded-t-lg ml-1" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-encrypted encrypted-pulse" />
              <h3 className="font-bold text-lg">Maritime Insurance</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionary shipping protection with zero-knowledge privacy and automated smart contracts.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-encrypted transition-colors cursor-pointer">Cargo Insurance</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Route Protection</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Risk Assessment</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Claims Processing</li>
            </ul>
          </div>

          {/* Technology */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Technology</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-encrypted transition-colors cursor-pointer">Blockchain Security</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Smart Contracts</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Zero-Knowledge Proofs</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Encrypted Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-encrypted transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">API Access</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Support</li>
              <li className="hover:text-encrypted transition-colors cursor-pointer">Community</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Maritime Insurance. Privacy-first shipping protection.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span className="hover:text-encrypted transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-encrypted transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-encrypted transition-colors cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;