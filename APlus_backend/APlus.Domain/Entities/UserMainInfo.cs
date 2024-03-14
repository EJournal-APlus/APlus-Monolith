using System.Text.Json.Serialization;

namespace APlus.Domain.Entities
{
    public class UserMainInfo : BaseEntity
    {
        public string Name { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public long PhoneNumber { get; set; }
        public Guid UserCredentialsId { get; set; }
        [JsonIgnore]
        public UserCredentials? UserCredentials { get; set; }
    }
}
