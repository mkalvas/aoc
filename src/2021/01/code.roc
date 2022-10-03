app "roctoberfest"
  packages { pf: "../../../bin/roc/examples/interactive/cli-platform/main.roc" }
  imports [
    pf.File,
    pf.Path,
    pf.Program,
    pf.Stdout,
    pf.Task,
  ]
  provides [main] to pf

main = Program.quick solve

read = \path -> path
  |> Path.fromStr
  |> File.readUtf8

solve =
  data <- Task.await (read "src/2021/01/input.txt")
  when (dataToNums data) is
    Err InvalidNumStr -> Stdout.line "Invalid input"
    Ok nums -> 
      one = zip nums (List.drop nums 1) |> filter |> List.len |> Num.toStr
      two = zip nums (List.drop nums 3) |> filter |> List.len |> Num.toStr
      Stdout.line "Solution 1: \(one)\nSolution 2: \(two)"

dataToNums = \data ->
  Str.split data "\n"
  |> List.dropLast # final newline
  |> List.mapTry Str.toI32

zip = \a, b -> List.map2 a b (\fst, snd -> { fst, snd })

filter = \list -> List.keepIf list (\pair -> pair.fst < pair.snd)
