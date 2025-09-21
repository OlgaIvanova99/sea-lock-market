import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Ship, Clock, Globe, Anchor } from "lucide-react";

const Routes = () => {
  const popularRoutes = [
    {
      id: "POP001",
      name: "Asia-Europe Express",
      origin: "Shanghai",
      destination: "Hamburg",
      duration: "28 days",
      distance: "11,200 nm",
      traffic: "High",
      riskLevel: "Medium",
      avgPremium: "2.1 ETH",
      vessels: 156
    },
    {
      id: "POP002",
      name: "Trans-Pacific Main",
      origin: "Long Beach",
      destination: "Yokohama",
      duration: "14 days",
      distance: "5,500 nm",
      traffic: "Very High",
      riskLevel: "Low",
      avgPremium: "1.4 ETH",
      vessels: 234
    },
    {
      id: "POP003",
      name: "Atlantic Bridge",
      origin: "New York",
      destination: "Southampton",
      duration: "8 days",
      distance: "3,100 nm",
      traffic: "High",
      riskLevel: "Medium",
      avgPremium: "1.7 ETH",
      vessels: 89
    },
    {
      id: "POP004",
      name: "Mediterranean Circuit",
      origin: "Barcelona",
      destination: "Piraeus",
      duration: "4 days",
      distance: "850 nm",
      traffic: "Medium",
      riskLevel: "Low",
      avgPremium: "0.8 ETH",
      vessels: 67
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-encrypted bg-clip-text text-transparent">
          Global Shipping Routes
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Explore encrypted maritime corridors with real-time risk assessment and premium calculations
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search ports or routes..."
            className="pl-10 maritime-card"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="maritime-card">
          <CardContent className="p-6 text-center">
            <Globe className="w-8 h-8 text-encrypted mx-auto mb-2" />
            <p className="text-2xl font-bold text-encrypted">1,247</p>
            <p className="text-sm text-muted-foreground">Active Routes</p>
          </CardContent>
        </Card>
        
        <Card className="maritime-card">
          <CardContent className="p-6 text-center">
            <Ship className="w-8 h-8 text-premium mx-auto mb-2" />
            <p className="text-2xl font-bold text-premium">15,432</p>
            <p className="text-sm text-muted-foreground">Vessels Tracked</p>
          </CardContent>
        </Card>
        
        <Card className="maritime-card">
          <CardContent className="p-6 text-center">
            <Anchor className="w-8 h-8 text-encrypted mx-auto mb-2" />
            <p className="text-2xl font-bold text-encrypted">2,847</p>
            <p className="text-sm text-muted-foreground">Ports Covered</p>
          </CardContent>
        </Card>
        
        <Card className="maritime-card">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-premium mx-auto mb-2" />
            <p className="text-2xl font-bold text-premium">24/7</p>
            <p className="text-sm text-muted-foreground">Monitoring</p>
          </CardContent>
        </Card>
      </div>

      {/* Popular Routes */}
      <Card className="maritime-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-encrypted" />
            Popular Maritime Routes
          </CardTitle>
          <CardDescription>
            High-traffic shipping corridors with encrypted risk profiles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {popularRoutes.map((route) => (
              <div key={route.id} className="p-6 rounded-lg border border-border/50 hover:border-encrypted/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{route.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{route.id}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge 
                      variant={route.riskLevel === 'High' ? 'destructive' : route.riskLevel === 'Medium' ? 'default' : 'secondary'}
                    >
                      {route.riskLevel} Risk
                    </Badge>
                    <Badge variant="outline" className="border-encrypted text-encrypted">
                      {route.traffic} Traffic
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Origin</p>
                    <p className="font-medium">{route.origin}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Destination</p>
                    <p className="font-medium">{route.destination}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Duration</p>
                    <p className="font-medium">{route.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Distance</p>
                    <p className="font-medium">{route.distance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Avg Premium</p>
                    <p className="font-medium text-premium">{route.avgPremium}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Active Vessels</p>
                    <p className="font-medium">{route.vessels}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Real-time encrypted monitoring • Smart contract protection
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="maritime-card border-encrypted hover:bg-encrypted/10 hover:border-encrypted group-hover:scale-105 transition-all"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Routes;