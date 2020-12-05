import day01 from './day-01';
import day02 from './day-02';
import day03 from './day-03';
import day04 from './day-04';
import day05 from './day-05';

const DAYS = [day01, day02, day03, day04, day05];

DAYS.map((dayFn, i) => {
  console.log(`Day ${i + 1}`);
  dayFn();
});
