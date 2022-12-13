# Explanation of part 2 solution

I looked up the LCM answer, but here's why it works. If we need to test something each round using modulus (our divisor) we have something like this

```txt
modulus = 2
operation = old + 1

round 1 = 1
  1 % 2 = 1
  1 + 1 = 2

round 2 = 2
  2 % 2 = 0
  1 + 2 = 3
```

You can see that the number will grow without bound, but the modulus will stay bounded, so if we want to keep our worry numbers in check **without losing information so that we can perform our bounds check**, then we can just keep the remainder modulo the divisor instead of the actual number. The above becomes:

```txt
round 1 = 1
  1 % 2 = 1
  (1 + 1) % 2 = 0

round 2 = 0
  0 % 2 = 0
  (0 + 1) % 2 = 1
```

For this simple example, you can see it just keeps flipping and repeating, but for something a little different, you can see that we're keeping the relevant information around because addition and multiplication (the only two operations in the input) are [congruent](https://en.wikipedia.org/wiki/Congruence_relation).

Moreover, if we have multiple divisors (for all monkeys as a set), then we need to use the least common multiple of all the divisors to ensure that no information is lost even when passing the item to a different monkey. (We could also use the product of all the divisors which is obviously a common multiple, but that might be large, even though in this puzzle it's not too large).

Another option would be for us to store the "worry value" as an array of numbers _per monkey_ in order to keep track of its relation to that monkey's modulus. This is probably a bit more tedious code-wise.
