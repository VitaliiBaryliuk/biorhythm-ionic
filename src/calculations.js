import dayjs from 'dayjs';

function calculateBiorhythm(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate).startOf('day');
    const TargetDay = dayjs(targetDate).startOf('day');
    const diff = TargetDay.diff(birthDay, 'days');

    return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBiorhythms(birthDate, targetDate) {
    return {
        date: targetDate,
        physical: calculateBiorhythm(birthDate, targetDate, 23),
        emotional: calculateBiorhythm(birthDate, targetDate, 28),
        intelectual: calculateBiorhythm(birthDate, targetDate, 33)
    }
}

export function calculateBiorhythmSeries(birthDate, targetDate, size) {
    const series = [] ;
    const startDay = dayjs(targetDate).startOf('day');

    for (let i = 0; i < size; i++) {
        const targetDay = startDay.add(i, 'days').toISOString();
        series.push(calculateBiorhythms(birthDate, targetDay));
    }

    return series;
}