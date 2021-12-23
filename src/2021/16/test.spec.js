import { solutionOne, solutionTwo } from './code';

const INPUT = [];

describe('puzzle one', () => {
  it('Sums the version numbers of the packets', () => {
    // value 2021, version 6, typeId 4
    expect(solutionOne(['D2FE28'])).toEqual(6);
    // op-length only
    expect(solutionOne(['38006F45291200'])).toEqual(9);
    // op-subpackets only
    expect(solutionOne(['EE00D40C823060'])).toEqual(14);
    // sum versions
    expect(solutionOne(['8A004A801A8002F478'])).toEqual(16);
    expect(solutionOne(['620080001611562C8802118E34'])).toEqual(12);
    expect(solutionOne(['C0015000016115A2E0802F182340'])).toEqual(23);
    expect(solutionOne(['A0016C880162017C3686B18A3D4780'])).toEqual(31);
  });
});

describe('puzzle two', () => {
  it('Evaluates the bit stream expression', () => {
    expect(solutionTwo(['C200B40A82'])).toEqual(3);
    expect(solutionTwo(['04005AC33890'])).toEqual(54);
    expect(solutionTwo(['880086C3E88112'])).toEqual(7);
    expect(solutionTwo(['CE00C43D881120'])).toEqual(9);
    expect(solutionTwo(['D8005AC2A8F0'])).toEqual(1);
    expect(solutionTwo(['F600BC2D8F'])).toEqual(0);
    expect(solutionTwo(['9C005AC2F8F0'])).toEqual(0);
    expect(solutionTwo(['9C0141080250320F1802104A08'])).toEqual(1);
  });
});
