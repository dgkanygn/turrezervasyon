import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dummyTours } from '../../../tours/Tours/data/dummyTours';

export const useVendorDetail = () => {
    const { id } = useParams();
    const [vendor, setVendor] = useState(null);
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVendorData = async () => {
            setLoading(true);
            try {
                // Simulating network request delay
                await new Promise(resolve => setTimeout(resolve, 800));

                const mockVendor = {
                    id: id || "1",
                    name: "Kapadokya VIP Turizm",
                    email: "iletisim@kapadokyatur.com",
                    phone: "+90 555 123 4567",
                    address: "Göreme, Nevşehir",
                    rating: 4.8,
                    reviewCount: 156,
                    joinDate: "Ocak 2024",
                    description: "Kapadokya'nın eşsiz güzelliklerini yılların verdiği tecrübe ile sizlere sunuyoruz. Bölgenin en güvenilir turizm acentelerinden biri olarak, sıcak hava balonu, VIP transfer ve bölgesel turlarımızla %100 misafir memnuniyeti odaklı çalışıyoruz.",
                    logo: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=200&auto=format&fit=crop",
                    coverImage: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1200&auto=format&fit=crop",
                };

                // Taking some dummy tours as vendor's tours
                const vendorTours = dummyTours.slice(0, 4);

                setVendor(mockVendor);
                setTours(vendorTours);
            } catch (error) {
                console.error("Vendor details fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVendorData();
    }, [id]);

    return { vendor, tours, loading };
};
