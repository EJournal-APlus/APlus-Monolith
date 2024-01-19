
using System.Text.Json.Serialization;

namespace CRM_SYSTEM.DAL.Models
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        [JsonIgnore] 
        public User User { get; set; }
    }
}
