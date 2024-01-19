
using System.Text.Json.Serialization;

namespace CRM_SYSTEM.DAL.Models
{
    public class Lessons
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public Rating Rating { get; set; }
    }
}
