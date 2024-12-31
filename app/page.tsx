"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useFormStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PersonalInfo from "@/components/steps/personal-info";
import AddressDetails from "@/components/steps/address-details";
import Preferences from "@/components/steps/preferences";
import Review from "@/components/steps/review";

export default function Home() {
  const { formData, setFormData, resetForm } = useFormStore();
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const steps = [
    { id: 1, component: PersonalInfo },
    { id: 2, component: AddressDetails },
    { id: 3, component: Preferences },
    { id: 4, component: Review },
  ];

  const currentStep = steps.find((step) => step.id === formData.currentStep);
  const CurrentStepComponent = currentStep?.component || PersonalInfo;

  const progress = ((formData.currentStep - 1) / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (formData.currentStep < steps.length) {
      setFormData({ currentStep: formData.currentStep + 1 });
    }
  };

  const handlePrevious = () => {
    if (formData.currentStep > 1) {
      setFormData({ currentStep: formData.currentStep - 1 });
    }
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required personal information.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.street || !formData.city || !formData.state || !formData.zipCode) {
      toast({
        title: "Missing Address",
        description: "Please complete your address details.",
        variant: "destructive",
      });
      return;
    }

    // Show loading toast
    toast({
      title: "Submitting...",
      description: "Please wait while we process your information.",
    });

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!✅",
        description: "Your form has been submitted successfully.",
        variant: "default",
      });
      
      // Reset form after successful submission
      resetForm();
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-center">Multi-Step Form</h1>
          <p className="text-muted-foreground text-center">
            Please fill out all the required information
          </p>
        </div>

        <Progress value={progress} className="w-full" />

        <div className="flex justify-center gap-4 mb-8">
          {steps.map((step) => (
            <Button
              key={step.id}
              variant={step.id === formData.currentStep ? "default" : "outline"}
              className="w-8 h-8 rounded-full p-0"
              onClick={() => setFormData({ currentStep: step.id })}
            >
              {step.id}
            </Button>
          ))}
        </div>

        <motion.div
          key={formData.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <CurrentStepComponent />
          </Card>
        </motion.div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={formData.currentStep === 1}
          >
            Previous
          </Button>
          <Button
            onClick={formData.currentStep === steps.length ? handleSubmit : handleNext}
          >
            {formData.currentStep === steps.length ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}