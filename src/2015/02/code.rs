fn parse_line(line: &str) -> Vec<i32> {
    let mut result = line
        .split('x')
        .map(|s| s.parse::<i32>())
        .collect::<Result<Vec<i32>, _>>()
        .unwrap();
    result.sort_unstable();
    result
}

fn vol(l: i32, w: i32, h: i32) -> i32 {
    l * w * h
}

fn area(l: i32, w: i32, h: i32) -> i32 {
    2 * l * w + 2 * w * h + 2 * h * l
}

fn min_side_area(min: i32, mid: i32) -> i32 {
    min * mid
}

fn min_side_perimiter(min: i32, mid: i32) -> i32 {
    2 * min + 2 * mid
}

fn paper_req(dim: Vec<i32>) -> i32 {
    area(dim[0], dim[1], dim[2]) + min_side_area(dim[0], dim[1])
}

fn ribbon_req(dim: Vec<i32>) -> i32 {
    vol(dim[0], dim[1], dim[2]) + min_side_perimiter(dim[0], dim[1])
}

pub fn solution_1(input: &Vec<String>) -> String {
    input
        .iter()
        .map(|l| paper_req(parse_line(l)))
        .sum::<i32>()
        .to_string()
}

pub fn solution_2(input: &Vec<String>) -> String {
    input
        .iter()
        .map(|l| ribbon_req(parse_line(l)))
        .sum::<i32>()
        .to_string()
}
