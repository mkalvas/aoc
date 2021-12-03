parseDir :: String -> (String, Int)
parseDir line = do
  let (cmd, valStr) = break (== ' ') line
  (cmd, read valStr :: Int)

move :: (Int, Int, Int) -> (String, Int) -> (Int, Int, Int)
move (h, d, a) ("up", val) = (h, d, a - val)
move (h, d, a) ("down", val) = (h, d, a + val)
move (h, d, a) ("forward", val) = (h + val, d + val * a, a)
move (h, d, a) _ = (h, d, a)

solve :: [(String, Int)] -> (Int, Int)
solve dirs = do
  let (horiz, depth, aim) = foldl move (0, 0, 0) dirs
  (horiz * aim, horiz * depth)

main :: IO ()
main = do
  input <- lines <$> readFile "input.txt"
  print $ solve $ map parseDir input
