using Backend_SneakerShop.Data;
using Microsoft.AspNetCore.Mvc;
using SneakerStoreApi.Models;
using System.Collections.Generic;
using Backend_SneakerShop.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend_SneakerShop.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SneakersController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Sneaker>> GetSneakers()
        {
            var DbContext_sneaker = new AppDbContext();
            var Sneakers = from sneaker in DbContext_sneaker.Sneakers select sneaker;
            return Ok(Sneakers);
        }
    }
}