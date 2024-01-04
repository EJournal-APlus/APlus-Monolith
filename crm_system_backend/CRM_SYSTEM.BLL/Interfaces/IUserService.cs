﻿using CRM_SYSTEM.DAL.Models;

namespace CRM_SYSTEM.BLL.Interfaces
{
    public interface IUserService
    {
        public Task<List<User>> GetAllUserAsync();
        public Task<User> GetUserByName(string value);
        public Task<User> CreateUser(User user);
        public string AuthUser(string token);
        public int GetUserCount();
    }
}
