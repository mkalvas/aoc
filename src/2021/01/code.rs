use aoc::nums;

fn inc(rs: Vec<i32>, x: usize) -> i32 {
    rs.iter()
        .zip(rs.iter().skip(x))
        .map(|(a, b)| if a < b { 1 } else { 0 })
        .sum()
}

pub fn solution_1(input: &[String]) -> String {
    inc(nums(input), 1).to_string()
}

pub fn solution_2(input: &[String]) -> String {
    inc(nums(input), 3).to_string()
}

#[cfg(test)]
mod tests {
    fn get_input() -> Vec<String> {
        aoc::iv!["199", "200", "208", "210", "200", "207", "240", "269", "260", "263"]
    }

    #[test]
    fn puzzle_1() {
        assert_eq!(super::solution_1(&get_input()), "7");
    }

    #[test]
    fn puzzle_2() {
        assert_eq!(super::solution_2(&get_input()), "5");
    }
}
