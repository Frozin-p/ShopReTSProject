using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.Data;
using OrderService.Models;
using System;

namespace OrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderDbContext _context;

        public OrderController(OrderDbContext context)
        {
            _context = context;
        }

        [HttpGet("get/{userId}")]
        public IActionResult GetOrders(int userId)
        {
            var orders = _context.Orders.Where(o => o.UserId == userId).ToList();
            return Ok(orders);
        }
    }
}