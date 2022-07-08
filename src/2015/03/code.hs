import qualified Data.Set as Set

every :: Integral a1 => a1 -> [a2] -> [a2]
every n xs = [x | (i, x) <- zip [0 ..] xs, i `mod` n == 0]

type Coord = (Int, Int)

add :: Coord -> Coord -> Coord
(x1, y1) `add` (x2, y2) = (x1 + x2, y1 + y2)

vectorize :: String -> [Coord]
vectorize [] = []
vectorize (x : xs)
  | x == '^' = (0, 1) : vectorize xs
  | x == '>' = (1, 0) : vectorize xs
  | x == 'v' = (0, -1) : vectorize xs
  | x == '<' = (-1, 0) : vectorize xs
  | otherwise = vectorize xs

walk :: (Coord, Set.Set Coord) -> Coord -> (Coord, Set.Set Coord)
walk (pos, visited) dir =
  let newPos = pos `add` dir
   in (newPos, Set.insert newPos visited)

initSet :: ((Int, Int), Set.Set (Int, Int))
initSet = ((0, 0), Set.singleton (0, 0))

solveOne :: String -> [Coord] -> Int
solveOne input vectors = Set.size . snd $ foldl walk initSet vectors

solveTwo :: String -> [Coord] -> Int
solveTwo input vectors = Set.size $ Set.union (snd santa) (snd robot)
  where
    santa = foldl walk initSet $ every 2 vectors
    robot = foldl walk initSet $ every 2 (drop 1 vectors)

main :: IO ()
main = do
  input <- (!! 0) . lines <$> readFile "input.txt"
  let vectors = vectorize input
  print (solveOne input vectors, solveTwo input vectors)
