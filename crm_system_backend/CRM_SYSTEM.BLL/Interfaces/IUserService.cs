using CRM_SYSTEM.DAL.Models;
using CRM_SYSTEM.DAL.ViewModels;

namespace CRM_SYSTEM.BLL.Interfaces
{
    public interface IUserService
    {
        public Task<List<User>> GetAllUserAsync();
        public Task<User> GetUserByName(string value);
        public Task<User> CreateUser(User user);
        public string AuthUser(string token);
        public Task<User> UploadAvatar(AvatarViewModel avatarViewModel);
        public int GetUserCount();
        public Task<User> GetUserInfo(string username);
        public Task<string> GetUserAvatar(string username);
    }
}
