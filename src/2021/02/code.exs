import Enum, only: [map: 2, reduce: 3, join: 2]

defmodule Day do
  def input do
    Path.join(Path.dirname(__ENV__.file), "input.txt")
    |> File.read!()
    |> String.split("\n", trim: true)
    |> map(fn line ->
      [cmd, arg] = String.split(line)
      {cmd, String.to_integer(arg)}
    end)
  end

  def solve() do
    {horiz, depth, aim} =
      input()
      |> reduce({0, 0, 0}, fn
        {"up", n}, {horiz, depth, aim} -> {horiz, depth, aim - n}
        {"down", n}, {horiz, depth, aim} -> {horiz, depth, aim + n}
        {"forward", n}, {horiz, depth, aim} -> {horiz + n, depth + n * aim, aim}
      end)

    {horiz * aim, horiz * depth}
  end
end

IO.puts(Day.solve() |> Tuple.to_list() |> join("\n"))
