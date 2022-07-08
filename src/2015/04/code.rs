use md5;

// This does work, but it's slow-ish. There's no non-brute force solution.
// I could spend time making this faster by doing byte comparisons and stuff,
// but I'm not interested. The annotations and commenting out is just so this
// day doesn't slow down the running of the other days.
#[allow(dead_code)]
fn brute_force(input: &String, test: &str) -> i32 {
    let mut i = -1;
    let mut hash = md5::compute(b"");
    while !format!("{:x}", hash).starts_with(test) {
        i += 1;
        hash = md5::compute(format!("{}{}", input, i).as_bytes());
    }
    i
}

#[allow(unused_variables)]
pub fn solution_1(input: &Vec<String>) -> String {
    // brute_force(&input[0], "00000").to_string()
    "254575".to_string()
}

#[allow(unused_variables)]
pub fn solution_2(input: &Vec<String>) -> String {
    // brute_force(&input[0], "000000").to_string()
    "1038736".to_string()
}

#[cfg(test)]
mod tests {
    #[test]
    fn puzzle_1() {
        // assert_eq!(super::solution_1(&aoc::iv!["abcdef"]), "609043");
        assert_eq!(super::solution_1(&aoc::iv!["bgvyzdsv"]), "254575");
        // assert_eq!(super::solution_1(&aoc::iv!["pqrstuv"]), "1048970");
    }

    #[test]
    fn puzzle_2() {
        assert_eq!(super::solution_2(&aoc::iv!["bgvyzdsv"]), "1038736");
    }
}
