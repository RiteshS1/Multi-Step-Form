"use client";

import { useFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddressDetails() {
  const { formData, setFormData } = useFormStore();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Address Details</h2>
        <p className="text-sm text-muted-foreground">
          Please provide your address information
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="street">Street Address</Label>
          <Input
            id="street"
            value={formData.street}
            onChange={(e) => setFormData({ street: e.target.value })}
            placeholder="123 Main St"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ city: e.target.value })}
            placeholder="New York"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            value={formData.state}
            onChange={(e) => setFormData({ state: e.target.value })}
            placeholder="NY"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => setFormData({ zipCode: e.target.value })}
            placeholder="10001"
          />
        </div>
      </div>
    </div>
  );
}