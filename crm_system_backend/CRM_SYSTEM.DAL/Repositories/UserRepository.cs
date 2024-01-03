using CRM_SYSTEM.DAL.Data;
using CRM_SYSTEM.DAL.Helpers;
using CRM_SYSTEM.DAL.Interfaces;
using CRM_SYSTEM.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRM_SYSTEM.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationContext _context;
        public UserRepository(ApplicationContext context)
        {
            _context = context;
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
                    RoleId = 1,
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
    }
}
