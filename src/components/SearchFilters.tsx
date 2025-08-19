import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface SearchFiltersProps {
  filters: {
    priceRange: string;
    location: string;
    type: string;
  };
  setFilters: (filters: any) => void;
}

export const SearchFilters = ({ filters, setFilters }: SearchFiltersProps) => {
  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background rounded-2xl p-6 shadow-medium mb-12 border"
    >
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-lg font-semibold text-foreground">Filter Properties</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Location</label>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="berlin">Berlin</SelectItem>
              <SelectItem value="munich">Munich</SelectItem>
              <SelectItem value="hamburg">Hamburg</SelectItem>
              <SelectItem value="frankfurt">Frankfurt</SelectItem>
              <SelectItem value="cologne">Cologne</SelectItem>
              <SelectItem value="stuttgart">Stuttgart</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Price Range</label>
          <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange('priceRange', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-500000">€0 - €500,000</SelectItem>
              <SelectItem value="500000-1000000">€500,000 - €1,000,000</SelectItem>
              <SelectItem value="1000000-2000000">€1,000,000 - €2,000,000</SelectItem>
              <SelectItem value="2000000+">€2,000,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Input */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search properties..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
          <Search className="mr-2 h-4 w-4" />
          Search Properties
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setFilters({ priceRange: '', location: '', type: '' })}
        >
          Clear Filters
        </Button>
      </div>
    </motion.div>
  );
};