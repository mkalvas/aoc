mod lib;

#[path = "./2021/mod.rs"]
mod year_2021;

#[path = "./2015/mod.rs"]
mod year_2015;

fn main() {
    println!("Rust AOC");
    year_2021::run_year();
    year_2015::run_year();
}
