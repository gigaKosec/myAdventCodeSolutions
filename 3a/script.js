// Za dostop do navodil za 2. del lahko vpišeš rezultat za prvi del = 164
// rezultat 2. dela je pa = 5007658656

//mock input list (iz primera na e-strani)
/* inputList = [
"..##.......",
"#...#...#..",
".#....#..#.",
"..#.#...#.#"
] */


inputList = [
"....##..#........##...#.#..#.##",
".#.#..#....##....#...#..##.....",
"##.#..##..#...#..........##.#..",
".#.##.####..#......###.........",
"#.#.#...........#.....#...#....",
"#.......#....#.#.##..###..##..#",
".#...#...##....#.........#.....",
"..........##.#.#.....#....#.#..",
".......##..##...#.#.#...#......",
".#.#.#...#...##...#.##.##..#...",
"........##.#.#.###.........##..",
"#.#..#.#.#.....#...#...#......#",
".#.#.#...##......#...#.........",
".#..##.##.#...#...##....#.#....",
".##...#..#..#......##.###....##",
".....#...#.###.....#.#.........",
"#.##..#....#.#.#.#.............",
"........#...#......#...#..#....",
"##..##...##.##...#...#.###...##",
"#.#....##.#...###......#..#.#..",
"..#.....#.##......#..........#.",
"#.......#..#......#.....#....#.",
".....###...........#....#.##...",
"#.#........##.......#.#...#.##.",
".#.#.#........#........#.#.....",
"#..#..##.....#.###..#.#.#.##..#",
"..#.#...#..##.#.#.#.......###..",
"........#........#..#..#...#...",
"##............#...#..##.##...#.",
"#....#.#.....##...#............",
"............#...#..#.#.#....#..",
"#.#.#...##.##.#....#....#......",
"................###.....#.....#",
"##.#####.#..#...###..#...###...",
"...#.....#...#.#....#...#..#...",
".......#....##.##.#.##.........",
"..#..#..##.....#...#.#.....#...",
"...#...#.#.##.#..###.......#...",
"...#...........#.#####..##..#..",
"#.#...#........####..#......#.#",
"#..#.##...........#.#......#.##",
"#.#..#....##..#..##.#..........",
".....#..#.....#........##..#...",
"...###.......#.##.......#......",
"...##..#..#...#....#.###...#...",
"....####....#........#.##.#.#.#",
"#....#.....#.###.##...##..##.##",
".##.#...#.##.#......#..##.#....",
"...#.............#.............",
"..##..##.#.....#........##....#",
"#.....#....#.......####...#..#.",
"..#...#..#...#...##.#....##....",
".#...##....#....#..#....#......",
"##..#.#...##......#..#.......##",
"..#...#.##..#.....#.#...#..#.#.",
"#..##....#..........#..........",
".#........#..#......#......#.#.",
"...##.#.........#.#....#.#...#.",
"#.....#.#..#...#...#..#...#...#",
"#.........#.#.........##.......",
".#.......#......#.........###..",
".#..#..##...........#.....#..#.",
".#....................#.....#..",
".##.....#....#....#.###.....#..",
"...##.#.....#.#....#.........#.",
".........##.....#.....#.##..#..",
"......#......#.#..#..###...#..#",
"..##...#.#..#...#.#....#.......",
"..#..##.###.#..#..#..#......#..",
".....##...##.........#...##...#",
"###.#..##....##...##.#..###....",
"#...#.#..##......##...#.#..#...",
"..........#....###....#........",
"#.#.#.#.#.....#..##.##.....#...",
".##.....#...#.....#......#.....",
".#..........#.#.............#..",
".#..##..#.#..##...#....#.##...#",
"..#.#..........#...#..........#",
".#.......#.......#...#..#.....#",
"##.#...##...#......#.#..#......",
"#####..#....#..#...#...#.#.....",
"....#.......#.#..#.............",
"#..#..#.#.####...#....#....##..",
"#..#.##.#......#...#......#....",
"#...##.##...#....#..........##.",
"..#..#.......##.#....#...#.#...",
".....#.##..............##.....#",
"..##.##...##.....#.........#.#.",
".#....##...##...##..#....##..#.",
".#...#....#..#......#.#........",
"#....#.#.#..............#....##",
"..##..#..#....#####.#....#.#.##",
"#....#...#.##..#.##.........###",
"#..#..#....#...............#.#.",
"#....##...##........##.##.#.##.",
"......#......##....##.....#.###",
"#...##..#..#.....#.#........##.",
"..#.#.##...#...#....#..###...#.",
"#..##..#.###..##.#.#....#......",
"..###..#.##........###.....#...",
"#.............#.............#..",
".#.##....#..##.#...#....#.#####",
"###.....###.#......##..#..##...",
".#.#......##.#....#....#.#..#..",
"###..#..#....#......###.##.....",
"......#.......#......#..##..##.",
"..#..#...#..#....#.##....#.#..#",
".......##..#........#.#.##.....",
".#...#..#........#..#.#..#..#.#",
".#..#.##.......#......#...#.#..",
".##..##......##.#...#......####",
".....#....#......#.....#......#",
"..........#.#.#...##.#..#.#....",
"...#.......##......#..#.#.##...",
".###..#.#.#....................",
"##...#...#.##............#.....",
"....#....#.##...#..#.#...##....",
"..#.#....#.###...#...#.#.####.#",
"..#..#.#...#.#......##.........",
"#..#..####.##.#.#..###....#...#",
"....#..........#.##.#..#.#.#.#.",
"#.#.##.........#.....##...#..##",
"#......#...#.##.#......#..#.#..",
"#...#........#..#..#...##...#..",
".....#.####..##..#.#.##..#...#.",
"#..#........#........#...#....#",
"...........#..#.....#.#.#.#....",
"....#......#....#...#....##....",
".#.#..#...#.#....#..#.#....##.#",
"....#...#...#.##..#...#..##...#",
"#######...............##.....##",
".#.#..............#....#..#.###",
"#......#.#......###....###.....",
"##..#...#.##..##..##.#....#....",
"#....##..#..#...#.#.#...#......",
"..........#..#.##..##.##.#..##.",
"....#.#.#.....##........#..#...",
"..###...#.....##.##.....##..##.",
"....#.#..#.#.......#.......#...",
"..##.#..#.....##...###...#...#.",
"..#.........#...##...#...#..#..",
"..#..#..#..#..##.#...##..#.#...",
"...##..#..##..#..####...#.....#",
"............#............###...",
".#.#.###.#.....#.#.#..#.###..#.",
"...#.........#.....####........",
"....##.#..##.#.............#...",
"....#.##.....#..#.....#......##",
"..........#.............#...##.",
"#..#.....#.......##..###.......",
"..##.#...........#.......#..#..",
"...#...#.#.##.###....#.#..#....",
"...#..........##..#..#..#...###",
".........#.....#..##.....#..#..",
"#........#...#...#..#.#....##..",
".#.#.....####..#.##.#..........",
"###.......##..#.##...#.....#...",
"..###.##.#..#..#..#.....##...#.",
".........#.....##.#..#..##.....",
"#..#..##...###..............#..",
"#....#.#....#..#.....#..####...",
"####..#.....##...#..#.#.#.#...#",
"...#....#.....#.##.#.#.#....##.",
"..........#...#.....###....#.##",
"#....#.#.#....#..#..#.....#....",
".....#.#...#......#....#......#",
".####....##...#...#......##..#.",
".#...#..#....#..#..............",
"##.#...##...#.##..#......#.....",
"..####.##..#....#.#......#.#.##",
"........#.....##...#.#..##....#",
"....#.#.#.#.###...#.#...##...##",
"#.....#...####.#....#.#........",
"..#.....#...##.........###.....",
"....#....#....#..#......#####.#",
"###.....#..#.#.#......#.##.#...",
"....#.##......#..#.#...........",
".#....#....#.#..#.......#...##.",
"...................#.#.#..#....",
"##...#.....#........#....#...#.",
"........##......#...##.#..#.#.#",
"#.#..###...#....#.#...#.......#",
"#..........##......#..#..#.....",
".............#...##.#...#......",
"#..#....##..#.........#..#.###.",
".....#..........#....##.#...##.",
"###....................#.#.##..",
"#........##...##......#....###.",
"#....#.............#....#...#..",
"##.......##.#.......#....#..#..",
"##...#............#..#.#....##.",
"..#.#..#...#####..........#....",
"..#.........##.....#.#...####..",
"....#..............#...........",
"..#...#.#.#..#.......##.#.#.#..",
"....#.##.....##..#.....#..####.",
"#...#...#...#.......#.........#",
"......#..#.####...###.#.#.....#",
".......#..#..#.....#.#..##.#..#",
".#......##..#............#.....",
".#........#.#....#....#........",
".....#.#..#.##.#..##....#..#...",
"#.#...........#....##.....#....",
"..#..#..##.###..##..#..###.#.##",
"##.#..#...##.#.........#...#.#.",
"......#..#..##...#....#...#.##.",
"#.##.......................#...",
".......#..#..#.##..##......#...",
"..#.#...#.....#..###....#...#..",
"##..#.....#..#..#.##.....#...##",
"#...##...###...#.#..###....#...",
"...#.#.#..####.....#...##....#.",
".#.#..##.....#..#.....##..##..#",
"#...#..........#.##.#.#........",
"..##....#.##....#..##......#...",
"....#..........###.....####..##",
"...........###....##.#.#.#.#...",
"...#......................####.",
"#.#.#...#.#.#.#.#......#.....##",
"..###...#.####...#..##..#....#.",
"....#....#.......#...#.........",
".#.###.............##..#...#...",
"....#.#....##...#.....#.##.....",
"#.......##.....#.#.....#....##.",
"....##.....###..#.#..#....#...#",
"......#..##...#......#.....#.##",
".#.....#.##.###....#.....#..###",
"...#..#.###.#....#..#..#...##.#",
"...##..#...#..#.#.#..#...#.....",
"##.####...##..#.#.#....#.......",
"..##..#.#.......##.#......##.#.",
"....##....#....#..#....#..##.#.",
"..##..........##....#...#.#..#.",
"#.#...#.#.###.#.#..##.#...#....",
".....#..#.............#...#...#",
"....#.#..#...##...#....#.##....",
"#..#...#.###.....#...#.....#.#.",
"#####....#....#....#.......#.##",
"#...##....##.#.#...#.....##.#..",
"#.......#...#..#..#...#....#...",
"....#......#.#..........#....##",
"#.###...#.#..##..#.##........#.",
"#..#.....##.......#..#..#.#....",
"...#...#.##...#....#.#.#.#...#.",
"...##..#.#....#......###......#",
"#.#....#...#..#..#....#........",
"..#..#.#...##..........#.###...",
"#..........#...#..#....#....###",
"..#..#.#....#..............#...",
"...#........#...#.#....###.#..#",
"....#.#.#................#..#.#",
"..#........##.#....#.#..#......",
"...##..#..#.......#..#......#.#",
"..#..#....#.........#....#.##..",
"#.....#....###.#..#..#...#...#.",
"..#..##.###.#..##....#.###.....",
"...#...####..#........###.#....",
".........#.#...#..#..#.#.......",
".##.........##.#..............#",
"..#.#.#.....###........#.#.#..#",
"....##..#....#....#.#..#.......",
"#.#.....#...#........##........",
".##.#.#..#..#.#.#.........#....",
"#.....#..#.##...#...#..........",
"##..#....#....##.#..#.........#",
"................#.##.#......#.#",
"..#..#.#........##...###..#...#",
"##........#.......#...##.##..#.",
"##....#.....#..##....#.......#.",
"#.#....#.#........#..#.........",
"......##......#...#.....#.##...",
"###....#..........##.#.#......#",
"......#...###.........###..#...",
".####....#...##..#.#.....#...#.",
".##...#...###....#...#.#..###..",
"#..#......##...#.###..###...#..",
"#....#.#.#..#....##...#.##..#..",
"..#.....#...#..........#.##.###",
"#.....#....###.......##..##.#..",
"#..##...#..#....#.###......#...",
"#..#........##..#.....#.#.#....",
"#.##.#.#..#....#.#.............",
".#...............#....##.......",
".#.##......##........#...#..#.#",
".#...#....#....#...#..#...##...",
".....#..###...##........#.#....",
"...#.......#....##..#..#....#..",
"...###....#........#..#.###.#..",
"......##..##..............###.#",
".......#.####..##....#.#....#..",
"#...#......#...#..#.....##....#",
".#..#..###....#..##.##.#.......",
"#......##......#..##....#..##..",
".....#..#.#......##.##..##.....",
"...#..#.......#......#.........",
"....#..####......#..#....#...#.",
"..#.#..#...#....#....#.......#.",
"####..#........#.###...##.#.#.#",
".......##........#.#.#...##....",
"...#.........#..#.#..##....#...",
".....#..#...#.#....#...#.#.##.#",
"#..##.....#.....##.......#...#.",
".......##.#.#.....#....#......#",
"...#...#.##...#......#....#....",
"..#..#.#...#..#.....#...###.#..",
".........#...#..#.......##.....",
"..##...................#..#.###",
".##.##..#.#...#.#....#.....##..",
"#.#...##...#...#...##..#......#",
"....#..#...#.....##.#.....#..##",
"##.#..........###..#...#..#....",
"...##....#.##....#......#......",
".....#.........#....#.#.......#",
".......#............#.#.....#..",
"..#..#...#..#####..#....##.....",
"...##......##...#.#........##..",
".....#..###...##.#.#.##.#...#..",
"..#.#.#..##..#.##...##.#.#.....",
"......##...#..##......#.#......",
"......................#........",
"#...#..#....#..#.#.##.#.....#.#",
".#......#.#....#.#.#..#....#...",
".#..#.#.#..#....#.............."
]

var index = 0   // to je mesto v vrstici 
var treeCounter = 0

for (let line of inputList.slice(1,)) { // slice(1,) je zato, da preskoči prvo vrstico, ker se tam ne dotakne drevesa
    index = (index + 3) % line.length   // zanima nas ostanek, ker se vrstice vedno začenjajo znova 
    if (line[index]=="#") {
        treeCounter += 1
    }
}
console.log("Število dreves, ki jih srečamo = ", treeCounter)