
namespace CRM_SYSTEM.DAL.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string MobilePhone { get; set; }
        public int RoleId { get; set; }
        public Role? Role { get; set; }
        public int StatusId { get; set; }
        public Status? Status { get; set; }

    }
}
