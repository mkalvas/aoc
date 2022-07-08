use std::collections::HashSet;

fn walk(dirs: &String) -> HashSet<(i32, i32)> {
    let mut pos = (0, 0);
    let mut visited = HashSet::<(i32, i32)>::from([(0, 0)]);
    for dir in dirs.chars() {
        match dir {
            '^' => pos.1 += 1,
            '>' => pos.0 += 1,
            'v' => pos.1 -= 1,
            '<' => pos.0 -= 1,
            _ => panic!("Unknown direction: {}", dir),
        }
        visited.insert(pos);
    }
    visited
}

pub fn solution_1(input: &Vec<String>) -> String {
    walk(&input[0]).len().to_string()
}

pub fn solution_2(input: &Vec<String>) -> String {
    let santa = &input[0].chars().step_by(2).collect::<String>();
    let robot = &input[0].chars().skip(1).step_by(2).collect::<String>();
    println!("{}", santa);
    println!("{}", robot);
    walk(santa)
        .union(&walk(robot))
        .collect::<Vec<&(i32, i32)>>()
        .len()
        .to_string()
}

#[cfg(test)]
mod tests {
    #[test]
    fn puzzle_1() {
        assert_eq!(super::solution_1(&aoc::iv![">"]), "2");
        assert_eq!(super::solution_1(&aoc::iv!["^>v<"]), "4");
        assert_eq!(super::solution_1(&aoc::iv!["^v^v^v^v^v"]), "2");
    }

    #[test]
    fn puzzle_2() {
        assert_eq!(super::solution_2(&aoc::iv!["^v"]), "3");
        assert_eq!(super::solution_2(&aoc::iv!["^>v<"]), "3");
        assert_eq!(super::solution_2(&aoc::iv!["^v^v^v^v^v"]), "11");
    }
}
