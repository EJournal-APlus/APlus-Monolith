﻿using CRM_SYSTEM.DAL.Models;
using CRM_SYSTEM.DAL.ViewModels;

namespace CRM_SYSTEM.BLL.Interfaces
{
    public interface IUserService
    {
        public Task<List<User>> GetAllUserAsync();
        public Task<User> GetUserByName(string value);
        public Task<User> CreateUser(User user);
        public Task<User> GetUserById(int userId);
        public Task<User> UpdateUserInfoAsymc(UpdateViewModel updateViewModel);
        public Task<User> UpdateUserStatus(int userid);
        public Task<List<User>> GetWaitingUsers();
        public string AuthUser(string token);
        public Task<User> UploadAvatar(AvatarViewModel avatarViewModel);
        public int GetUserCount();
        public Task<User> GetUserInfo(string username);
        public Task<string> GetUserAvatar(string username);
    }
}
