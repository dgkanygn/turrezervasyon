import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import toursData from '@/data/tours.json';

const ITEMS_PER_PAGE = 10;

export const useTours = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);

    // Derived state from URL search parameters
    const filters = useMemo(() => {
        const locationParam = searchParams.get('location');
        const locations = locationParam ? locationParam.split(',').filter(Boolean) : [];
        const maxPrice = searchParams.get('max_price') || '';
        const duration = searchParams.get('duration') || '';

        return {
            locations,
            maxPrice,
            duration
        };
    }, [searchParams]);

    // Applies the filters passed from the form and updates the URL
    const applyFilters = (newFilters) => {
        const params = new URLSearchParams(searchParams);

        if (newFilters.locations && newFilters.locations.length > 0) {
            params.set('location', newFilters.locations.join(','));
        } else {
            params.delete('location');
        }

        if (newFilters.maxPrice) {
            params.set('max_price', newFilters.maxPrice);
        } else {
            params.delete('max_price');
        }

        if (newFilters.duration) {
            params.set('duration', newFilters.duration);
        } else {
            params.delete('duration');
        }

        setSearchParams(params);
        setCurrentPage(1);
    };

    // Clears all filters and resets page, also updates URL
    const clearFilters = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('location');
        params.delete('max_price');
        params.delete('duration');
        
        setSearchParams(params);
        setCurrentPage(1);
    };

    const filteredTours = useMemo(() => {
        return toursData.filter(tour => {
            // Locations filter (multiple)
            if (filters.locations.length > 0) {
                const tourLoc = tour.location.toLowerCase();
                const matchesAnyLocation = filters.locations.some(loc => tourLoc.includes(loc.toLowerCase()));
                if (!matchesAnyLocation) {
                    return false;
                }
            }

            // Max Price filter
            if (filters.maxPrice && parseInt(tour.price) > parseInt(filters.maxPrice)) {
                return false;
            }

            // Duration filter
            // We need to calculate duration for this tour to compare
            if (filters.duration) {
                let diffDays = 0;
                if (tour.startDate && tour.endDate) {
                    const start = new Date(tour.startDate.replace(' ', 'T'));
                    const end = new Date(tour.endDate.replace(' ', 'T'));
                    const diffTime = Math.abs(end - start);
                    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                }
                if (diffDays !== parseInt(filters.duration)) {
                    return false;
                }
            }

            return true;
        });
    }, [filters]);

    const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);

    const paginatedTours = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredTours.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredTours, currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return {
        tours: paginatedTours,
        filters,
        applyFilters,
        clearFilters,
        currentPage,
        totalPages,
        handlePageChange,
        totalItems: filteredTours.length
    };
};

