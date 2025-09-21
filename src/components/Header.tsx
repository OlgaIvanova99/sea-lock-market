import { Button } from "@/components/ui/button";
import { Shield, Wallet } from "lucide-react";
import LogoSvg from "@/components/LogoSvg";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Header = () => {
  const { address, isConnected } = useAccount();

  return (
    <header className="relative w-full border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <LogoSvg className="w-12 h-12 text-encrypted encrypted-glow" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Maritime Insurance, Privately.
              </h1>
              <p className="text-sm text-muted-foreground">
                Encrypted shipping risk protection
              </p>
            </div>
          </div>

          {/* Navigation and Wallet */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
              <a href="/routes" className="text-muted-foreground hover:text-foreground transition-colors">
                Routes
              </a>
              <a href="/coverage" className="text-muted-foreground hover:text-foreground transition-colors">
                Coverage
              </a>
            </nav>
            
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button 
                            onClick={openConnectModal}
                            variant="outline"
                            className="maritime-card border-encrypted hover:bg-encrypted/10 hover:border-encrypted"
                          >
                            <Wallet className="w-4 h-4 mr-2" />
                            Connect Wallet
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button 
                            onClick={openChainModal}
                            variant="outline"
                            className="maritime-card border-encrypted hover:bg-encrypted/10 hover:border-encrypted"
                          >
                            Wrong network
                          </Button>
                        );
                      }

                      return (
                        <div className="flex items-center space-x-2">
                          <Button
                            onClick={openChainModal}
                            variant="outline"
                            className="maritime-card border-encrypted hover:bg-encrypted/10 hover:border-encrypted"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </Button>

                          <Button
                            onClick={openAccountModal}
                            variant="outline"
                            className="maritime-card border-encrypted hover:bg-encrypted/10 hover:border-encrypted"
                          >
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                          </Button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </div>
      
      {/* Encrypted overlay effect */}
      <div className="absolute inset-0 encrypted-overlay pointer-events-none" />
    </header>
  );
};

export default Header;