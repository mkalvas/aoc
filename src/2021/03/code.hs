import Data.Char (digitToInt)

b2i :: String -> Int
b2i = foldl (\acc x -> acc * 2 + digitToInt x) 0

getAnswer :: [String] -> Int
getAnswer = product . map b2i

getBitFreqs :: Int -> [String] -> (Int, Int)
getBitFreqs i =
  foldl
    ( \(zeros, ones) cur ->
        if cur !! i == '1' then (zeros, ones + 1) else (zeros + 1, ones)
    )
    (0, 0)

filterRatings :: [String] -> Int -> Bool -> [String]
filterRatings lines pos invert =
  filter
    ( \rating -> do
        let (zeros, ones) = getBitFreqs pos lines
        let char = if ones >= zeros then '1' else '0'
        let final = if invert then (if char == '1' then '0' else '1') else char
        rating !! pos == final
    )
    lines

findRatings :: [String] -> [[String]]
findRatings input =
  foldl
    ( \[oxy, co2] pos -> do
        let newOxy = if length oxy == 1 then oxy else filterRatings oxy pos False
        let newCo2 = if length co2 == 1 then co2 else filterRatings co2 pos True
        [newOxy, newCo2]
    )
    [input, input]
    [0 .. length (head input) - 1]

solutionOne :: [String] -> Int
solutionOne input =
  getAnswer
    ( foldl
        ( \[g, e] pos -> do
            let (zeros, ones) = getBitFreqs pos input
            let [gb, eb] = if ones >= zeros then ["1", "0"] else ["0", "1"]
            [g ++ gb, e ++ eb]
        )
        ["", ""]
        [0 .. length (head input) - 1]
    )

solutionTwo :: [String] -> Int
solutionTwo =
  getAnswer . map head . findRatings

main :: IO ()
main = do
  input <- lines <$> readFile "input.txt"
  print (solutionOne input, solutionTwo input)
