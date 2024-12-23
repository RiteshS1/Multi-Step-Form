"use client";

import { useFormStore } from "@/lib/store";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function Review() {
  const { formData } = useFormStore();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Review Your Information</h2>
        <p className="text-sm text-muted-foreground">
          Please review your information before submitting
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Personal Information</h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">First Name</TableCell>
                <TableCell>{formData.firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Last Name</TableCell>
                <TableCell>{formData.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell>{formData.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Phone</TableCell>
                <TableCell>{formData.phone}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Address</h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Street</TableCell>
                <TableCell>{formData.street}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">City</TableCell>
                <TableCell>{formData.city}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">State</TableCell>
                <TableCell>{formData.state}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ZIP Code</TableCell>
                <TableCell>{formData.zipCode}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Preferences</h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Notifications</TableCell>
                <TableCell>{formData.notifications ? "Yes" : "No"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Newsletter</TableCell>
                <TableCell>{formData.newsletter ? "Yes" : "No"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Updates</TableCell>
                <TableCell>{formData.updates ? "Yes" : "No"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}