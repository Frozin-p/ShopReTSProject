using Microsoft.AspNetCore.Mvc;
using ProductManagementService.Data;
using ProductManagementService.Models;
using System;

namespace ProductManagementService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SneakersController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Sneaker>> GetSneakers()
        {
            var DbContext_sneaker = new ProductDbContext();
            var Sneakers = from sneaker in DbContext_sneaker.Sneakers select sneaker;
            return Ok(Sneakers);
        }
    }
}
