import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-[#FCFBF8]">
      <Container size="narrow" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDFBFD] border border-[#D5F6F9]">
          <span className="mono-tag">ERROR 404 // NOT FOUND</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#202722]">
          Page Not Located
        </h1>

        <p className="text-base sm:text-lg text-[#687069] max-w-md mx-auto leading-relaxed">
          The requested system node or route does not exist. It may have been
          re-indexed or migrated to a different capability path.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/services" variant="outline" size="md">
            Explore Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
