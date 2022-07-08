#[path = "./01/code.rs"]
pub mod day_01;

#[path = "./02/code.rs"]
pub mod day_02;

pub fn run_year() {
    println!("Running year 2021...");

    let mut input = crate::lib::get_input("src/2021/01/input.txt");
    println!("  01.1: {}", day_01::solution_1(&input));
    println!("  01.2: {}", day_01::solution_2(&input));

    input = crate::lib::get_input("src/2021/02/input.txt");
    println!("  02.1: {}", day_02::solution_1(&input));
    println!("  02.2: {}", day_02::solution_2(&input));
}
