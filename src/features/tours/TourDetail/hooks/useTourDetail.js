import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toursData from '@/data/tours.json';

export const useTourDetail = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTour = async () => {
            setLoading(true);
            try {
                // Mock delay
                await new Promise((resolve) => setTimeout(resolve, 800));

                const foundTour = toursData.find(t => t.id.toString() === id?.toString());
                
                if (foundTour) {
                    // Normalize the data format to match what the UI expects, if necessary.
                    // For example, generating `time` and `date` from `startDate`
                    let date = '';
                    let time = '';
                    if (foundTour.startDate) {
                        const dateObj = new Date(foundTour.startDate.replace(' ', 'T'));
                        date = dateObj.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
                        time = dateObj.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
                    }
                    
                    setTour({
                        ...foundTour,
                        date,
                        time
                    });
                } else {
                    setTour(null);
                }
            } catch (error) {
                console.error("Tur detayları getirilirken hata oluştu!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [id]);

    return { tour, loading };
};
