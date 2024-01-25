
// productos en stock
const DATA_MOCK = 
[
    { 
        id: 1,
        name: "Qidi 2x2",
        price: 3000,
        img: "./productos/qiyi-qidi2x2.png",
        brand: "Qiyi" 
    },
    {
        id: 2,
        name: "Warrior 3x3",
        price: 9000,
        img: "./productos/qiyi-warrior3x3.png",
        brand: "Qiyi",
        description: "Esta versión mejorada del clásico QiYi Warrior se destaca por su excelente corte de esquinas, estabilidad superior y un giro suave que satisface tanto a principiantes como a entusiastas avanzados del cubo 3x3."
    },
    { 
        id: 3,
        name: "Megaminx",
        price: 10000,
        img: "./productos/qiyi-megaminx.png",
        brand: "Qiyi"
    },
    { 
        id: 4,
        name: "Piraminx",
        price: 5000,
        img: "./productos/qiyi-pyraminx.png",
        brand: "Qiyi"
    },
    { 
        id: 5,
        name: "Time Machine",
        price: 8000,
        img: "./productos/time-2x2.png",
        brand: "ASDASD" },
    { 
        id: 6,
        name: "Ghost",
        price: 12000,
        img: "./productos/mefferts-ghost.png",
        brand: "Mefferts Puzzle" },
    { 
        id: 7,
        name: "Time Machine",
        price: 8000,
        img: "./productos/time-2x2.png",
        brand: "ASDASD" },
    {
        id: 8,
        name: "Sidgman 2x4x6 Fisher Brick Wall",
        price: 8000,
        img: "./productos/sidgman-fisher-brick-wall.png",
        brand: "Calvins Puzzle",
        description: 'Es un 2x4x6 fisher pero en su estado resuelto las piezas de las capas centrales están desfasadas, debido a esto hay que realizar unos giros previos para desbloquear todos los giros'
    },
    { 
        id: 9,
        name: "Gear Cube",
        price: 8000,
        img: "./productos/qiyi-gear-cube.png",
        brand: "Qiyi" 
    },
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DATA_MOCK);
        }, 200)
    })
}