﻿using AuthorizationService.Data;
using AuthorizationService.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace AuthorizationService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDto userDto)
        {
            if (userDto.Password.Length < 6 || !userDto.Password.Any(char.IsDigit) || !userDto.Password.Any(char.IsLetter))
            {
                return BadRequest("Password must be at least 6 characters long and contain both letters and numbers.");
            }

            var user = new User
            {
                Login = userDto.Login,
                Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password)
            };

            var DbContext_user = new AuthDbContext();
            DbContext_user.Users.Add(user);
            DbContext_user.SaveChanges();
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserDto userDto)
        {
            try
            {
                var DbContext_user = new AuthDbContext();
                var user = (from u in DbContext_user.Users
                            where u.Login == userDto.Login
                            select u).FirstOrDefault();
                if (user == null || !BCrypt.Net.BCrypt.Verify(userDto.Password, user.Password))
                {
                    return Unauthorized();
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
