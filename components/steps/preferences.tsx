"use client";

import { useFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Preferences() {
  const { formData, setFormData } = useFormStore();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Preferences</h2>
        <p className="text-sm text-muted-foreground">
          Choose your communication preferences
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications" className="flex flex-col gap-1">
            <span>Push Notifications</span>
            <span className="font-normal text-sm text-muted-foreground">
              Receive notifications about updates
            </span>
          </Label>
          <Switch
            id="notifications"
            checked={formData.notifications}
            onCheckedChange={(checked) =>
              setFormData({ notifications: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="newsletter" className="flex flex-col gap-1">
            <span>Newsletter</span>
            <span className="font-normal text-sm text-muted-foreground">
              Subscribe to our monthly newsletter
            </span>
          </Label>
          <Switch
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) =>
              setFormData({ newsletter: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="updates" className="flex flex-col gap-1">
            <span>Product Updates</span>
            <span className="font-normal text-sm text-muted-foreground">
              Get notified about new features
            </span>
          </Label>
          <Switch
            id="updates"
            checked={formData.updates}
            onCheckedChange={(checked) => setFormData({ updates: checked })}
          />
        </div>
      </div>
    </div>
  );
}