fn solution(input: &[String]) -> (String, String) {
    let mut horiz = 0;
    let mut depth = 0;
    let mut aim = 0;

    let mut instructions = Vec::new();
    for line in input {
        let mut parts = line.split(' ');
        instructions.push((parts.next().unwrap(), parts.next().unwrap()));
    }

    for (dir, s) in instructions {
        let val = s.parse::<i32>().unwrap();
        match dir {
            "up" => aim -= val,
            "down" => aim += val,
            "forward" => {
                horiz += val;
                depth += val * aim;
            }
            _ => panic!("Unknown direction: {}", dir),
        }
    }

    ((horiz * aim).to_string(), (horiz * depth).to_string())
}

pub fn solution_1(input: &[String]) -> String {
    solution(input).0
}

pub fn solution_2(input: &[String]) -> String {
    solution(input).1
}

#[cfg(test)]
mod tests {
    fn get_input() -> Vec<String> {
        aoc::iv![
            "forward 5",
            "down 5",
            "forward 8",
            "up 3",
            "down 8",
            "forward 2"
        ]
    }

    #[test]
    fn puzzle_1() {
        assert_eq!(super::solution_1(&get_input()), "150");
    }

    #[test]
    fn puzzle_2() {
        assert_eq!(super::solution_2(&get_input()), "900");
    }
}
