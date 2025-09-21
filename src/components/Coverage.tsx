import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, XCircle, Zap, Lock, Globe, Ship, AlertTriangle } from "lucide-react";

const Coverage = () => {
  const coverageTypes = [
    {
      id: "basic",
      name: "Basic Protection",
      description: "Essential coverage for standard maritime risks",
      premium: "1.2-2.8 ETH",
      maxCoverage: "$50M",
      features: [
        "Vessel total loss",
        "Cargo damage",
        "General average",
        "24/7 encrypted monitoring"
      ],
      excluded: [
        "War risks",
        "Nuclear incidents",
        "Delay coverage"
      ],
      popular: false
    },
    {
      id: "comprehensive",
      name: "Comprehensive Shield",
      description: "Full spectrum protection with enhanced risk coverage",
      premium: "2.1-4.5 ETH",
      maxCoverage: "$200M",
      features: [
        "All Basic Protection features",
        "War and strike risks",
        "Delay in start-up",
        "Environmental liability",
        "Cyber security incidents",
        "Advanced route optimization"
      ],
      excluded: [
        "Nuclear incidents",
        "Intentional acts"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Premium Fortress",
      description: "Ultimate protection for high-value specialized cargo",
      premium: "3.8-7.2 ETH",
      maxCoverage: "$1B",
      features: [
        "All Comprehensive features",
        "Nuclear incident coverage",
        "Kidnap and ransom",
        "Political risk insurance",
        "Custom route encryption",
        "Dedicated claims specialist",
        "AI-powered risk prediction"
      ],
      excluded: [
        "Intentional criminal acts"
      ],
      popular: false
    }
  ];

  const riskFactors = [
    {
      factor: "Weather Conditions",
      impact: "High",
      description: "Storms, hurricanes, and extreme weather events"
    },
    {
      factor: "Piracy Zones",
      impact: "Medium",
      description: "High-risk maritime areas with security threats"
    },
    {
      factor: "Port Congestion",
      impact: "Low",
      description: "Delays due to port traffic and infrastructure"
    },
    {
      factor: "Geopolitical Events",
      impact: "High",
      description: "Political instability and trade route disruptions"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-encrypted bg-clip-text text-transparent">
          Maritime Coverage Plans
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Comprehensive protection for your maritime assets with encrypted smart contract automation and real-time risk assessment
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-encrypted" />
            <span>End-to-end encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-premium" />
            <span>Instant claim processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-encrypted" />
            <span>Global coverage</span>
          </div>
        </div>
      </div>

      {/* Coverage Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {coverageTypes.map((plan) => (
          <Card key={plan.id} className={`maritime-card relative ${plan.popular ? 'ring-2 ring-encrypted encrypted-glow' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-encrypted text-ocean-deep">
                Most Popular
              </Badge>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-encrypted" />
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <div className="text-3xl font-bold text-premium">{plan.premium}</div>
                <div className="text-sm text-muted-foreground">per voyage</div>
                <div className="text-sm text-encrypted font-medium">Max: {plan.maxCoverage}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Included Features */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Included Coverage
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded Features */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Exclusions
                </h4>
                <ul className="space-y-2">
                  {plan.excluded.map((exclusion, index) => (
                    <li key={index} className="text-sm flex items-start gap-2 text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full ${plan.popular ? 'premium-glow bg-premium text-ocean-deep hover:bg-premium/90' : ''}`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Quote
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Assessment */}
      <Card className="maritime-card mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-premium" />
            Risk Assessment Factors
          </CardTitle>
          <CardDescription>
            Our AI-powered system evaluates multiple risk factors to calculate precise premiums
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskFactors.map((risk, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{risk.factor}</h4>
                  <Badge 
                    variant={risk.impact === 'High' ? 'destructive' : risk.impact === 'Medium' ? 'default' : 'secondary'}
                  >
                    {risk.impact} Impact
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{risk.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Claims Process */}
      <Card className="maritime-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ship className="w-5 h-5 text-encrypted" />
            Encrypted Claims Process
          </CardTitle>
          <CardDescription>
            Streamlined claims handling with blockchain verification and privacy protection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-encrypted/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-encrypted font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Submit Claim</h4>
              <p className="text-sm text-muted-foreground">Encrypted submission with automatic verification</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-encrypted/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-encrypted font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">AI Assessment</h4>
              <p className="text-sm text-muted-foreground">Smart contract evaluates claim validity</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-encrypted/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-encrypted font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Expert Review</h4>
              <p className="text-sm text-muted-foreground">Maritime specialists validate complex cases</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-premium/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-premium font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Instant Payout</h4>
              <p className="text-sm text-muted-foreground">Automatic settlement to your wallet</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Coverage;