defmodule Day do
  def input do
    "input.txt"
    |> File.read!()
    |> String.split("\n", trim: true)
    |> Enum.map(fn line ->
      [cmd, arg] = String.split(line)
      {cmd, String.to_integer(arg)}
    end)
  end

  def solve() do
    {horiz, depth, aim} =
      input()
      |> Enum.reduce({0, 0, 0}, fn
        {"up", n}, {horiz, depth, aim} -> {horiz, depth, aim - n}
        {"down", n}, {horiz, depth, aim} -> {horiz, depth, aim + n}
        {"forward", n}, {horiz, depth, aim} -> {horiz + n, depth + n * aim, aim}
      end)

    {horiz * aim, horiz * depth}
  end
end

IO.puts(Day.solve() |> Tuple.to_list() |> Enum.join("\n"))
