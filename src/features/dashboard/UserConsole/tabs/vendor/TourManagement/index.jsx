import React from 'react';
import { useTourManagement } from './hooks/useTourManagement';
import TourTable from './components/TourTable';
import TourFormModal from './components/TourFormModal';
import Button from '../../../components/Button';

const TourManagement = () => {
    const {
        tours,
        loading,
        isModalOpen,
        selectedTour,
        isSaving,
        openModal,
        closeModal,
        handleDelete,
        handleSave
    } = useTourManagement();

    console.log(tours)

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-20 bg-white/50 rounded-3xl border border-slate-100 backdrop-blur-sm">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4 shadow-lg shadow-blue-500/20"></div>
                <p className="text-slate-500 font-medium">Tur yönetimi yükleniyor...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                        Tur Yönetimi
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-lg font-bold">Vendor</span>
                    </h2>
                    <p className="text-slate-500 mt-1">Oluşturduğunuz turları takip edebilir ve yenilerini ekleyebilirsiniz.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="secondary">
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg> */}
                        Rapor Al
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => openModal()}
                    >
                        {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg> */}
                        Yeni Tur Ekle
                    </Button>
                </div>
            </div>

            <TourTable
                tours={tours}
                onEdit={openModal}
                onDelete={handleDelete}
            />

            <TourFormModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
                tour={selectedTour}
                isSaving={isSaving}
            />

            {tours.length === 0 && (
                <div className="p-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
                    <div className="mb-4 inline-flex p-4 bg-slate-50 rounded-full text-slate-300">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Hiç turunuz yok</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mt-2">Henüz bir tur oluşturmadınız. Hemen ilk turunuzu ekleyerek başlayabilirsiniz.</p>
                </div>
            )}
        </div>
    );
};

export default TourManagement;

