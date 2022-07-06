import Data.List (sort)

parse :: String -> [Int]
parse line = case dropWhile (== 'x') line of
  "" -> []
  string -> sort (read first : parse tail)
    where
      (first, tail) = break (== 'x') string

vol :: [Int] -> Int
vol [l, w, h] = l * w * h
vol _ = error "invalid input"

area :: [Int] -> Int
area [l, w, h] = 2 * l * w + 2 * w * h + 2 * h * l
area _ = error "invalid input"

minSideArea :: [Int] -> Int
minSideArea [min, mid, _] = min * mid
minSideArea _ = error "invalid input"

minSidePerimiter :: [Int] -> Int
minSidePerimiter [min, mid, _] = 2 * min + 2 * mid
minSidePerimiter _ = error "invalid input"

paperReq :: [Int] -> Int
paperReq dim = area dim + minSideArea dim

ribbonReq :: [Int] -> Int
ribbonReq dim = vol dim + minSidePerimiter dim

solutionOne :: [String] -> Int
solutionOne input = sum $ map (paperReq . parse) input

solutionTwo :: [String] -> Int
solutionTwo input = sum $ map (ribbonReq . parse) input

main :: IO ()
main = do
  input <- lines <$> readFile "input.txt"
  print (solutionOne input, solutionTwo input)
