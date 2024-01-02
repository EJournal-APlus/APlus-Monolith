﻿using CRM_SYSTEM.BLL.Interfaces;
using CRM_SYSTEM.DAL.Interfaces;
using CRM_SYSTEM.DAL.Models;

namespace CRM_SYSTEM.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<List<User>> GetAllUserAsync()
        {
            return _userRepository.GetAllUserAsync();
        }

        public Task<User> GetUserByName(string value)
        {
            return _userRepository.GetUserByName(value);
        }
    }
}