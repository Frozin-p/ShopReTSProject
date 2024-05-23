using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Backend_SneakerShop.Controllers;
using System.ComponentModel.DataAnnotations;
using SneakerStoreApi.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend_SneakerShop.Data
{
    public class AppDbContext : DbContext
    {
        /*public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }*/

        public DbSet<User> Users { get; set; }
        public DbSet<Sneaker> Sneakers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(h => new { h.Id });
            modelBuilder.Entity<Sneaker>()
                .HasKey(h => new { h.Id });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=web_project_users;Username=postgres;Password=1234");
        }
    }
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(128)] public string Login { get; set; }
        [MaxLength(128)] public string Password { get; set; }
    }
}