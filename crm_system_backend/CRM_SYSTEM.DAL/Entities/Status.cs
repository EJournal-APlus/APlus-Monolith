using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CRM_SYSTEM.DAL.Models
{
    public class Status
    {
        public int Id { get; set; }
        public string StatusName { get; set; } = null!;
        [JsonIgnore]
        public User User { get; set; }
    }
}
