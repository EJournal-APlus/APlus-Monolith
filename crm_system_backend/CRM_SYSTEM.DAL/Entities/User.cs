
using System.Text.Json.Serialization;

namespace CRM_SYSTEM.DAL.Models
{
    public class User
    {
        public int Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;
        [JsonPropertyName("lastname")]
        public string Lastname { get; set; } = null!;
        [JsonPropertyName("surname")]
        public string Surname { get; set; } = null!;
        [JsonPropertyName("email")]
        public string Email { get; set; } = null!;
        [JsonPropertyName("password")]
        public string Password { get; set; } = null!;
        [JsonPropertyName("phone")]
        public string MobilePhone { get; set; } = null!;
        public int RoleId { get; set; }
        public int StatusId { get; set; }
        public string? Avatar64 { get; set; }
        [JsonIgnore]
        public Passes Passes { get; set; }
        [JsonIgnore]
        public Role Role { get; set; }
        [JsonIgnore]
        public Status Status { get; set; }
        [JsonIgnore]
        public Debts Debt { get; set; }
        [JsonIgnore]
        public Rating Rating { get; set; }

    }
}
