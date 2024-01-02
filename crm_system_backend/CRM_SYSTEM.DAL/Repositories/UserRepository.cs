using CRM_SYSTEM.DAL.Data;
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
        public async Task<List<User>> GetAllUserAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUserByName(string value)
        {
            var hasUser = await _context.Users.FirstOrDefaultAsync(u => u.Name == value ||
                u.Lastname == value || u.Surname == value);
            if (hasUser != null) return hasUser;
            else throw new ArgumentException("Пользователь не найден");
        }
    }
}
