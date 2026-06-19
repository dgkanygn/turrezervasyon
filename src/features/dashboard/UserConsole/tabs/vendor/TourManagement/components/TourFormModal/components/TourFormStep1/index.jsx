import React from 'react';

// local component
import Input from '../../../../../../../components/Input';
import NumberInput from '../../../../../../../components/NumberInput';
import DatePicker from '../../../../../../../components/DatePicker';
import TimePicker from '../../../../../../../components/TimePicker';
import TextArea from '../../../../../../../components/TextArea';

//src
import { TOUR_LIMITS } from '@/constants/tourLimits';

const TourFormStep1 = ({ formData, setFormData }) => {
    return (
        <div className="space-y-4">
            <Input
                label="Tur Başlığı"
                required
                maxLength={TOUR_LIMITS.TITLE_MAX_LENGTH}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Örn: Kapadokya Balon Turu"
            />
            {formData.title.length >= TOUR_LIMITS.TITLE_MAX_LENGTH && (
                <p className="text-xs text-red-500 mt-1">Maksimum karakter sınırına ulaştınız ({TOUR_LIMITS.TITLE_MAX_LENGTH}).</p>
            )}

            <div className="grid grid-cols-2 gap-4">
                <NumberInput
                    label={`Fiyat (₺) (Max: ${TOUR_LIMITS.PRICE_MAX_VALUE})`}
                    required
                    max={TOUR_LIMITS.PRICE_MAX_VALUE}
                    value={formData.price}
                    onChange={(val) => setFormData({ ...formData, price: val })}
                />
                <NumberInput
                    label={`Kapasite (Max: ${TOUR_LIMITS.CAPACITY_MAX_VALUE})`}
                    required
                    max={TOUR_LIMITS.CAPACITY_MAX_VALUE}
                    value={formData.capacity}
                    onChange={(val) => setFormData({ ...formData, capacity: val })}
                />
            </div>

            <Input
                label="Konum"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Örn: Nevşehir, Türkiye"
            />

            <div className="grid grid-cols-2 gap-4">
                <DatePicker
                    label="Tarih"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <TimePicker
                    label="Saat"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
            </div>

            <TextArea
                label="Açıklama"
                required
                maxLength={TOUR_LIMITS.DESCRIPTION_MAX_LENGTH}
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tur detaylarını buraya yazın..."
            />
            {formData.description.length >= TOUR_LIMITS.DESCRIPTION_MAX_LENGTH && (
                <p className="text-xs text-red-500 mt-1">Maksimum karakter sınırına ulaştınız ({TOUR_LIMITS.DESCRIPTION_MAX_LENGTH}).</p>
            )}
        </div>
    );
};

export default TourFormStep1;

