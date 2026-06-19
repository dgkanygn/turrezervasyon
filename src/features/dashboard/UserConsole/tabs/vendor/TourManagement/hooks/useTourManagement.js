import { useState, useEffect } from 'react';
import toursData from '@/data/tours.json';

export const useTourManagement = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchVendorTours = async () => {
            setLoading(true);
            try {
                // Mock delay
                await new Promise((resolve) => setTimeout(resolve, 800));

                setTours(toursData);
            } catch (error) {
                console.error("Vendor turları getirilirken hata oluştu!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVendorTours();
    }, []);

    const openModal = (tour = null) => {
        setSelectedTour(tour);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedTour(null);
        setIsModalOpen(false);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bu turu silmek istediğinizden emin misiniz?")) {
            setTours(prev => prev.filter(t => t.id !== id));
        }
    };

    const handleSave = async (formData) => {
        setIsSaving(true);
        // Mock delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        if (selectedTour) {
            // Update
            setTours(prev => prev.map(t => t.id === selectedTour.id ? { ...t, ...formData } : t));
        } else {
            // Create
            const newTour = {
                id: Math.random().toString(36).substr(2, 9),
                ...formData,
                occupied: 0,
                images: formData.images || ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop"]
            };
            setTours(prev => [newTour, ...prev]);
        }
        
        setIsSaving(false);
        closeModal();
    };

    return { 
        tours, 
        loading, 
        isModalOpen, 
        selectedTour, 
        isSaving,
        openModal, 
        closeModal, 
        handleDelete, 
        handleSave 
    };
};
