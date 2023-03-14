#[path = "./01/code.rs"]
pub mod day_01;

#[path = "./02/code.rs"]
pub mod day_02;

#[path = "./03/code.rs"]
pub mod day_03;

#[path = "./04/code.rs"]
pub mod day_04;

pub fn run_year() {
    println!("Running year 2015...");

    let mut input = aoc::get_input("src/2015/01/input.txt");
    println!("  01.1: {}", day_01::solution_1(&input));
    println!("  01.2: {}", day_01::solution_2(&input));

    input = aoc::get_input("src/2015/02/input.txt");
    println!("  02.1: {}", day_02::solution_1(&input));
    println!("  02.2: {}", day_02::solution_2(&input));

    input = aoc::get_input("src/2015/03/input.txt");
    println!("  03.1: {}", day_03::solution_1(&input));
    println!("  03.2: {}", day_03::solution_2(&input));

    input = aoc::get_input("src/2015/04/input.txt");
    println!("  04.1: {}", day_04::solution_1(&input));
    println!("  04.2: {}", day_04::solution_2(&input));
}
