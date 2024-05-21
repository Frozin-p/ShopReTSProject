using Microsoft.AspNetCore.Mvc;
using SneakerStoreApi.Models;
using System.Collections.Generic;

namespace SneakerStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SneakersController : ControllerBase
    {
        private static readonly List<Sneaker> Sneakers = new List<Sneaker>
        {
            new Sneaker { Id = 1, Name = "Air Jordan 1 High OG «University Blue»",
                Description = "Кроссовки оформлены в белый White, синий University Blue и черный Black цвета. Эти высокие Air Jordan 1 будут иметь верх из белой кожи с небесно-голубыми вставками в сочетании с черной отделкой, шнурками, брендингом и “свушем”. Белая межподошва на яркой синей резиновой подошве будет завершать дизайн.", 
                Price = 170, 
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/1203221935/Air-Jordan-1-High-University-Blue-3-2-1000x1000.jpg" },
            new Sneaker { Id = 2, Name = "Nike SB x Air Jordan 4 «Black Cat»", 
                Description = "Nike SB x Air Jordan 4 «Black Cat» будут практически полностью оформлены в черный цвет и сделаны из замши. Эта пара Jordan 4 будет отличаться от ретро-версии специальной переработанной системой амортизации, подходящей для скейтбординга. Также мы увидим комбинированный брендинг и специальную упаковку.", 
                Price = 250, 
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/NIke%20Jordan%204/0704221637/nike-air-Jordan-4-retro-black-cat-2020-CU1110_010-scaled-1000x1000.jpg" },
            new Sneaker { Id = 3, Name = "Nike Air Jordan 1 High Bordeaux", 
                Description = "Кроссовки оформлены в довольно приятную цветовую схему, которая точно должна получить свою популярность. Эти Jordan 1 High оформлены в оттенках Bordeaux, White и Metallic Silver. Белый кожаный верх сочетается с бордовыми панелями из такой же гладкой кожи, а также серебристым “свушем” сбоку.", 
                Price = 210, 
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/2602232130/5-1000x1000.jpg" },
            new Sneaker { Id = 4, Name = "Nike Air Jordan 5 Retro Off-White Black",
                Description = "Верх выполнен из текстильной сетки с полупрозрачными вставками с сеткой. Верджил даже добавил круглые окна по бокам каждой обуви. У этих незаметных кроссовок есть атмосфера OG, как только вы их видите.",
                Price = 250,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/2307221130/CT8480-001-PHCFH001-2000-1000x1000.jpeg" },
            new Sneaker { Id = 5, Name = "Nike Air Jordan 3 Retro Black Cement",
                Description = "Эта модель стала значительным улучшением по сравнению с предыдущими версиями благодаря использованию передовых технологий и дизайна. Верхняя часть Air Jordan 3 изготовлена из кожи, текстиля или синтетических материалов, которые обеспечивают комфорт и долговечность.",
                Price = 220,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Nike%20Air%20Jordan%203/2010232049/3-1000x1000.jpg" },
            new Sneaker { Id = 6, Name = "Nike Air Jordan 3 Retro SP J Balvin",
                Description = "Уникальная особенность этой модели - видимая воздушная подушка (Air Max) в области пятки, которая обеспечивает превосходную амортизацию и комфорт при ходьбе. Подошва кроссовок изготовлена из резины и имеет зигзагообразный рисунок, который улучшает сцепление с поверхностью и устойчивость.",
                Price = 240,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Nike%20Air%20Jordan%203/2010232033/2-1000x1000.jpg" },
            new Sneaker { Id = 1, Name = "Nike Air Jordan 6 X Travis Scott Cactus Jack",
                Description = "Travis Scott x Air Jordan 6 - это третий результат сотрудничества знаменитого рэпера с брендом Jordan. Трэвис вновь отдаёт предпочтение \"землистой\" цветовой гамме для Air Jordan 6, как и для двух предыдущих моделей.",
                Price = 280,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/2807221808/2-1000x1000.jpg" },
            new Sneaker { Id = 7, Name = "Nike Air Jordan 1 High OG WMNS Tie-Dye",
                Description = "Этот колорвей оформлен в белом, черном, зеленом и синем оттенках в трендовом переливающимся тай-дай исполнении. Эти женские Air Jordan 1 имеют белую кожу по бокам, черную кожу на воротнике, носке и логотипе Swoosh.",
                Price = 220,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/1203221952/CD0461-100_2-1000x1000.jpg"},
            new Sneaker { Id = 7, Name = "Nike Air Jordan 1 Low Fragment x Travis Scott",
                Description = "Белая кожаная основа будет сочетаться с черными и синими накладками. Знаменитый перевернутый “свуш”, брендинг Cactus Jack, смайлик и лого Fragment в виде молнии дополнят этот дизайн.",
                Price = 1180,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/1203221922/air-jordan-1-low-_travis-scott-x-fragment_-_-дата-релиза__1_-1000x1000-1000x1000.jpg"},
            new Sneaker { Id = 7, Name = "Nike Air Jordan 1 Retro High Off-White",
                Description = "Верх выполнен из натуральной кожи. Этот материал эластичен прост в использовании и уходе. Система шнуровки лаконично вписывается в образ модели. Внутри модели установлены мягкие вставки для дополнительного комфорта во время ходьбы.",
                Price = 260,
                ImageUrl = "https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/2307221118/aq0818_148_2-1000x1000.jpg"}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Sneaker>> GetSneakers()
        {
            return Ok(Sneakers);
        }
    }
}