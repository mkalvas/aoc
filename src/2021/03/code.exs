import Enum

defmodule Day do
  def get_answer([a, b]) do
    String.to_integer(a, 2) * String.to_integer(b, 2)
  end

  def get_bit_freqs(lines, pos) do
    lines
    |> reduce([0, 0], fn cur, [zeros, ones] ->
      if String.at(cur, pos) == "1", do: [zeros, ones + 1], else: [zeros + 1, ones]
    end)
  end

  def filter_ratings(lines, pos, invert) do
    lines
    |> filter(fn rating ->
      [zeros, ones] = get_bit_freqs(lines, pos)
      char = if ones >= zeros, do: "1", else: "0"
      final = if invert, do: if(char == "1", do: "0", else: "1"), else: char
      String.at(rating, pos) == final
    end)
  end

  def find_ratings(input) do
    input
    |> with_index()
    |> reduce([input, input], fn {_, pos}, [oxy, co2] ->
      new_oxy = if length(oxy) == 1, do: oxy, else: filter_ratings(oxy, pos, false)
      new_co2 = if length(co2) == 1, do: co2, else: filter_ratings(co2, pos, true)
      [new_oxy, new_co2]
    end)
  end

  def part_one(input) do
    input
    |> at(0)
    |> String.graphemes()
    |> with_index()
    |> reduce(["", ""], fn {_, i}, [g, e] ->
      [zeros, ones] = get_bit_freqs(input, i)
      [gb, eb] = if ones > zeros, do: ["1", "0"], else: ["0", "1"]
      [g <> gb, e <> eb]
    end)
    |> get_answer()
  end

  def part_two(input) do
    find_ratings(input)
    |> map(fn l -> at(l, 0) end)
    |> get_answer()
  end

  def solve() do
    input =
      Path.join(Path.dirname(__ENV__.file), "input.txt")
      |> File.read!()
      |> String.split("\n", trim: true)

    [part_one(input), part_two(input)]
  end
end

IO.puts(Day.solve() |> join("\n"))
