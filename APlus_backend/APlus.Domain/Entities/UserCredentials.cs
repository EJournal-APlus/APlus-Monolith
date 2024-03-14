using System.Text.Json.Serialization;

namespace APlus.Domain.Entities
{
    public class UserCredentials : BaseEntity
    {
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public Guid RoleId { get; set; }
        [JsonIgnore]
        public Role? Role { get; set; }
    }
}
