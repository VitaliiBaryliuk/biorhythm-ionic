import { calculateBiorhythms } from './calculations';

it('calculates the biorhythm', () => {
    const { physical } = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(physical).toBeCloseTo(0.5196)
}); 

it('calculates the biorhythm', () => {
    const { emotional } = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(emotional).toBeCloseTo(-0.9010)
}); 

it('calculates the biorhythm', () => {
    const { intelectual } = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(intelectual).toBeCloseTo(0.8146)
}); 