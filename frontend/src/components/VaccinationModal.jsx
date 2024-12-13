import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Calendar } from "./ui/calender";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Syringe } from 'lucide-react';

export function VaccinationModal({ productName }) {
  const [date, setDate] = useState(null);
  const [petName, setPetName] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the vaccination appointment data to your backend
    console.log('Vaccination appointment scheduled', { productName, petName, date });
    setOpen(false);
    alert('Vaccination appointment scheduled successfully!');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline" className="bg-green-500 hover:bg-green-600 text-white flex items-center">
          <Syringe className="w-5 h-5 mr-2" />
          Schedule Vaccination
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-600">Schedule Vaccination</DialogTitle>
          <DialogDescription className="text-gray-600">
            Schedule a vaccination appointment for your pet along with your {productName} purchase.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="petName" className="text-sm font-medium text-gray-700">
                Pet Name
              </Label>
              <Input
                id="petName"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
              Schedule Appointment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

