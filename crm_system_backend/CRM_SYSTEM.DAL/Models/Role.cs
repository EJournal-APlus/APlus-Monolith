﻿
namespace CRM_SYSTEM.DAL.Models
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public List<User> Users { get; set; } = new();
    }
}