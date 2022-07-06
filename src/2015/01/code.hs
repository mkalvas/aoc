balance :: (Int, Int) -> (Char, Int) -> (Int, Int)
balance (s, i) (c, j)
  | c == ')' = (s - 1, if i == -1 && s < 0 then j else i)
  | otherwise = (s + 1, i)

main :: IO ()
main = do
  input <- (!! 0) . lines <$> readFile "input.txt"
  print $ foldl balance (0, -1) (zip input [0 ..])
