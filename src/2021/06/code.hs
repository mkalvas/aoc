arrayUpdate :: Int -> Int -> [Int] -> [Int]
arrayUpdate i val list =
  let (head, _ : tail) = splitAt i list
   in head ++ (val : tail)

splitInts :: (Char -> Bool) -> String -> [Int]
splitInts delim str = case dropWhile delim str of
  "" -> []
  string -> read first : splitInts delim tail
    where
      (first, tail) = break delim string

evolve :: [Int] -> [Int]
evolve [zeros, b, c, d, e, f, g, sixes, i] = [b, c, d, e, f, g, sixes + zeros, i, zeros]
evolve _ = error "Invalid input"

run :: Int -> [Int] -> Int
run days = sum . (!! days) . iterate evolve

initCounter :: [Int] -> [Int]
initCounter =
  foldl (\acc x -> arrayUpdate x ((acc !! x) + 1) acc) (replicate 9 0)

main :: IO ()
main = do
  input <- splitInts (== ',') . (!! 0) . lines <$> readFile "input.txt"
  let counter = initCounter input
  print (run 80 counter, run 256 counter)
