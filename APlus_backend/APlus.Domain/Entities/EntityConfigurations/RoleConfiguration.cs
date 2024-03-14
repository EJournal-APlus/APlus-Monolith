using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace APlus.Domain.Entities.EntityConfigurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasData(new Role { Id = new Guid("114620ca-3e4c-483d-b190-694b57e43537"), Name = "Admin" });
            builder.HasData(new Role { Id = new Guid("9490c348-8b19-491b-9ab2-f69fb4c6d83f"), Name = "Director" });
            builder.HasData(new Role { Id = new Guid("53894c57-9d86-41bd-874f-64b6988bc1a9"), Name = "Teacher" });
            builder.HasData(new Role { Id = new Guid("8a8bf8ee-09ce-411b-87db-db16ea11a53b"), Name = "User" });

            builder.HasIndex(c => c.Id).IsUnique(false);
        }
    }
}
