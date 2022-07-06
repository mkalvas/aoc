use std::fs::File;
use std::io::{BufRead, BufReader};

#[macro_export]
macro_rules! iv {
    ($($x:expr),*) => (vec![$($x.to_string()),*]);
}

pub fn nums(strings: &[String]) -> Vec<i32> {
    strings.iter().map(|s| s.parse::<i32>().unwrap()).collect()
}

pub fn get_input(path: &str) -> Vec<String> {
    let file = File::open(path).unwrap();
    let reader = BufReader::new(file);
    reader.lines().map(|l| l.unwrap()).collect()
}
