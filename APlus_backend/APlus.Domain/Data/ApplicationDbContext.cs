using APlus.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace APlus.Domain.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<UserCredentials> UserCredentials => Set<UserCredentials>();
        public DbSet<UserMainInfo> UserMainInfos => Set<UserMainInfo>();
        public DbSet<Role> Roles => Set<Role>();
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) =>
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
