app "roctoberfest"
  packages { pf: "../../../bin/roc/examples/interactive/cli-platform/main.roc" }
  imports [ pf.File, pf.Path, pf.Program, pf.Stdout, pf.Task ]
  provides [main] to pf

main = Program.quick solve
read = \path -> path |> Path.fromStr |> File.readUtf8
dataToDirs = \data ->
  Str.split data "\n"
  |> List.dropLast
  |> List.mapTry lineToDir

lineToDir = \line ->
  result =
    parts = Str.split line " "
    cmd <- List.get parts 0 |> Result.try
    val <- List.get parts 1 |> Result.try Str.toI32 |> Result.try
    Ok { cmd, val }
  Result.mapErr result \_ -> InvalidLine line

move = \{ h, d, a }, dir ->
  when dir is
    { cmd: "up", val } -> { h, d, a: a - val }
    { cmd: "down", val } -> { h, d, a: a + val }
    { cmd: "forward", val } -> { h: h + val, d: d + val * a, a }
    _ -> { h, d, a }

solve =
  data <- Task.await (read "src/2021/02/input.txt")
  when (dataToDirs data) is
    Err _ -> Stdout.line "Invalid input"
    Ok dirs ->
      state = List.walk dirs { h: 0, d: 0, a: 0 } move
      one = state.h * state.a |> Num.toStr
      two = state.h * state.d |> Num.toStr
      Stdout.line "Solution 1: \(one)\nSolution 2: \(two)"
