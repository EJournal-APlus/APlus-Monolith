
namespace CRM_SYSTEM.DAL.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Lastname { get; set; }
        public string? Surname { get; set; }
        public string Email { get; set; } = null!;
        public string? Password { get; set; }
        public string MobilePhone { get; set; }
        public int RoleId { get; set; }
        public int StatusId { get; set; }
        public string? Avatar64 { get; set; }

    }
}
