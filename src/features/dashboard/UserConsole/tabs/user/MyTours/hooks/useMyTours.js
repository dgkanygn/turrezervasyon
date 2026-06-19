import { useState, useEffect } from 'react';

export const useMyTours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyTours = async () => {
            setLoading(true);
            try {
                // Mock delay
                await new Promise((resolve) => setTimeout(resolve, 800));

                const mockData = [
                    {
                        id: "1",
                        title: "Kapadokya Peri Bacaları ve Balon Turu",
                        location: "Nevşehir, Türkiye",
                        price: 2450,
                        date: "15 Kasım 2026",
                        status: "Aktif",
                        image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1200&auto=format&fit=crop"
                    },
                    {
                        id: "2",
                        title: "Efes Antik Kent ve Şirince Köyü Turu",
                        location: "İzmir, Türkiye",
                        price: 1800,
                        date: "20 Aralık 2026",
                        status: "Aktif",
                        image: "https://images.unsplash.com/photo-1599818817417-81768652427a?q=80&w=1200&auto=format&fit=crop"
                    },
                    {
                        id: "3",
                        title: "Sümela Manastırı ve Uzungöl Turu",
                        location: "Trabzon, Türkiye",
                        price: 2100,
                        date: "10 Ekim 2025",
                        status: "Tamamlandı",
                        image: "https://images.unsplash.com/photo-1565355416719-21695f269a88?q=80&w=1200&auto=format&fit=crop"
                    }
                ];

                setTours(mockData);
            } catch (error) {
                console.error("Turlarım getirilirken hata oluştu!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyTours();
    }, []);

    return { tours, loading };
};
