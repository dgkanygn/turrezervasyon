const calculateTotalDays = (startDate, endDate) => {
    if (!startDate || !endDate) return '-';
    const start = new Date(startDate.replace(' ', 'T'));
    const end = new Date(endDate.replace(' ', 'T'));
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} Gün`;
};

export default calculateTotalDays;