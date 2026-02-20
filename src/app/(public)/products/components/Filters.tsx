import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

export function DialogDemo({ filters, setFilters }: any) {
  const [localFilters, setLocalFilters] = React.useState(filters);

  const handleSave = () => {
    setFilters(localFilters);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Filters</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Filter Products</DialogTitle>
        </DialogHeader>

        {/* CATEGORY */}
        <div className="space-y-2">
          <label>Category</label>
          <select
            className="w-full border p-2 rounded"
            value={localFilters.category}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                category: e.target.value,
              })
            }
          >
            <option value="">All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Grains">Grains</option>
          </select>
        </div>

        {/* LOCATION */}
        <div className="space-y-2 mt-4">
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter city"
            className="w-full border p-2 rounded"
            value={localFilters.location}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                location: e.target.value,
              })
            }
          />
        </div>

        {/* MAX PRICE */}
        <div className="space-y-2 mt-4">
          <label>Max Price</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={localFilters.maxPrice}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                maxPrice: e.target.value,
              })
            }
          />
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={handleSave}>Apply Filters</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}