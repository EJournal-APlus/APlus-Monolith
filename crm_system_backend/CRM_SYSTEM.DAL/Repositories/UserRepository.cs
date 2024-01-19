using CRM_SYSTEM.DAL.Data;
using CRM_SYSTEM.DAL.Helpers;
using CRM_SYSTEM.DAL.Interfaces;
using CRM_SYSTEM.DAL.Models;
using CRM_SYSTEM.DAL.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;

namespace CRM_SYSTEM.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationContext _context;
        public UserRepository(ApplicationContext context)
        {
            _context = context;
        }

        public string AuthUser(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jsonToken = handler.ReadToken(token) as JwtSecurityToken;
            if (jsonToken != null)
            {
                foreach (var claim in jsonToken.Claims)
                {
                    return claim.Value;
                }
            }
            return "Не авторизован";
        }

        public async Task<User> CreateUser(User user)
        {
            var hasUser = await _context.Users.FirstOrDefaultAsync(u => u.Id == user.Id);
            if (hasUser == null)
            {
                var userModel = new User()
                {
                    Name = user.Name,
                    Lastname = user.Lastname,
                    Surname = user.Surname,
                    Email = user.Email,
                    MobilePhone = user.MobilePhone,
                    Password = HashPasswordHelper.HashPassword(user.Password),
                    RoleId = 2,
                    StatusId = 1,
                };
                _context.Users.Add(userModel);
                await _context.SaveChangesAsync();
                return userModel;
            }
            else
            {
                throw new ArgumentException("Пользователь существует");
            }
        }

        public async Task<List<User>> GetAllUserAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<string> GetUserAvatar(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == username);
            if (user != null) return $"{user.Avatar64}";
            else throw new ArgumentException("Пользователь не найден"); 
        }

        public async Task<User> GetUserById(int userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (user != null) return user;
            else throw new ArgumentException("Пользователь не найден");
        }

        public async Task<User> GetUserByName(string value)
        {
            var hasUser = await _context.Users.FirstOrDefaultAsync(u => u.Name == value ||
                u.Lastname == value || u.Surname == value ||
                Convert.ToString(u.Id) == value);
            if (hasUser != null) return hasUser;
            else throw new ArgumentException("Пользователь не найден");
        }

        public int GetUserCount()
        {
            int count = 0;
            foreach (var item in _context.Users)
            {
                count++;
            }
            return count;
        }

        public async Task<User> GetUserInfo(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == username);
            if (user != null) return user;
            else throw new ArgumentException("Пользователь не найден");
        }

        public async Task<List<User>> GetWaitingUsers()
        {
            var users = await _context.Users.Where(u => u.StatusId == 1).ToListAsync();
            return users;
        }

        public async Task<User> UpdateUserInfoAsymc(UpdateViewModel updateViewModel)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == updateViewModel.UserId);
            if (user != null)
            {
                user.Name = updateViewModel.Name;
                user.Lastname = updateViewModel.Lastname;
                user.Surname = updateViewModel.Surname;
                if(updateViewModel.Email != null) user.Email = updateViewModel.Email;
                await _context.SaveChangesAsync();
                return user;
            }
            else throw new ArgumentException("Error");
        }

        public async Task<User> UpdateUserStatus(int userid)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == userid);
            user!.StatusId = 2;
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> UploadAvatar(AvatarViewModel avatarViewModel)
        {
            var userAvatar = await _context.Users.FirstOrDefaultAsync(u => u.Email == avatarViewModel.Email);
            if(userAvatar != null)
            {
                userAvatar.Avatar64 = avatarViewModel.Avatar64;
                await _context.SaveChangesAsync();
                return userAvatar;
            }
            else { throw new ArgumentException("Пользователь не найден"); }
        }
    }
}
