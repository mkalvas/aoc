import { sum, copy, union, intersect, difference } from '../../lib';

const parseFood = (food) => {
  const [ingredients, listed] = food.split(' (contains ');
  const allergens = new Set(listed.replace(')', '').split(', '));
  const foods = new Set(ingredients.split(' '));
  return { foods, allergens };
};

const updateCounter = (counter, foods) => {
  if (foods.size === 0) return counter;
  for (const food of foods) {
    counter.has(food)
      ? counter.set(food, counter.get(food) + 1)
      : counter.set(food, 1);
  }
};

const findBadFoods = (input) => {
  let allFoods = new Set();
  const counter = new Map();
  const fwa = {}; // object to store allergens (key) with list of foods (value)

  for (const food of input) {
    const { foods, allergens } = parseFood(food);
    allFoods = union(allFoods, foods);
    updateCounter(counter, foods);

    for (const alg of allergens) {
      if (!fwa[alg]) {
        fwa[alg] = copy(foods);
      } else {
        fwa[alg] = intersect(fwa[alg], foods);
      }
    }
  }

  const bad = Object.values(fwa).reduce((bad, f) => union(bad, f), new Set());
  const good = difference(allFoods, bad);
  return { fwa, good, counter };
};

const deduceIngredients = (fwa) => {
  const [alg, ingredient] = Object.entries(fwa).find(([k, v]) => v.size === 1);
  const ing = Array.from(ingredient)[0];
  delete fwa[alg];

  if (Object.keys(fwa).length === 0) return { [alg]: ing };
  return {
    [alg]: ing,
    ...deduceIngredients(
      Object.entries(fwa).reduce((acc, [k, v]) => {
        acc[k] = difference(v, ingredient);
        return acc;
      }, {})
    ),
  };
};

export const solutionOne = (input) => {
  const { good, counter } = findBadFoods(input);
  return sum([...good].map((f) => counter.get(f)));
};

export const solutionTwo = (input) => {
  const { fwa } = findBadFoods(input);
  const ingredients = deduceIngredients(fwa);
  return Object.keys(ingredients)
    .sort()
    .map((k) => ingredients[k])
    .join(',');
};
