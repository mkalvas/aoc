fn balance(input: &Vec<String>) -> (i32, Option<usize>) {
    let mut tracker = (0, None);
    for (i, c) in input[0].chars().enumerate() {
        match c {
            '(' => tracker.0 += 1,
            ')' => {
                tracker.0 -= 1;
                if tracker.1.is_none() && tracker.0 == -1 {
                    tracker.1 = Some(i + 1);
                }
            }
            _ => panic!("Invalid input"),
        };
    }
    tracker
}

pub fn solution_1(input: &Vec<String>) -> String {
    balance(input).0.to_string()
}

pub fn solution_2(input: &Vec<String>) -> String {
    balance(input).1.unwrap().to_string()
}

#[cfg(test)]
mod tests {
    fn get_input() -> Vec<String> {
        aoc::iv!["()())"]
    }

    #[test]
    fn puzzle_1() {
        assert_eq!(super::solution_1(&get_input()), "-1");
    }

    #[test]
    fn puzzle_2() {
        assert_eq!(super::solution_2(&get_input()), "5");
    }
}
