using Microsoft.EntityFrameworkCore;
using ProductManagementService.Models;

namespace ProductManagementService.Data
{
    public class ProductDbContext : DbContext
    {
        public DbSet<Sneaker> Sneakers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sneaker>()
                .HasKey(h => new { h.Id });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=web_project_users;Username=postgres;Password=1234");
        }
    }
}
