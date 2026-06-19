import React from 'react';

import calculateTotalDays from '@/helpers/calculateTotalDays';

const TourTable = ({ tours, onEdit, onDelete }) => {

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Tur Bilgisi</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Konum</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Fiyat</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Doluluk</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Toplam Süre</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {tours.map((tour) => (
                            <tr key={tour.id} className="hover:bg-slate-50/50 group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="font-bold text-slate-800 line-clamp-1">{tour.title}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <p className="font-medium text-slate-600">{tour.location}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-black text-blue-600">
                                    {tour.price.toLocaleString('tr-TR')} ₺
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${(tour.occupied / tour.capacity) > 0.8 ? 'bg-orange-500' : 'bg-blue-500'
                                                    }`}
                                                style={{ width: `${(tour.occupied / tour.capacity) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">{tour.occupied}/{tour.capacity}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-medium text-slate-600">
                                        {calculateTotalDays(tour.startDate, tour.endDate)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => window.open(`/tours/${tour.id}`, '_blank')}
                                            className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white cursor-pointer"
                                            title="Görüntüle"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => onEdit(tour)}
                                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                                            title="Düzenle"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => onDelete(tour.id)}
                                            className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer"
                                            title="Sil"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourTable;
