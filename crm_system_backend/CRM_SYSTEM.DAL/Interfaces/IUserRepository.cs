using CRM_SYSTEM.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRM_SYSTEM.DAL.Interfaces
{
    public interface IUserRepository
    {
        public Task<List<User>> GetAllUserAsync();
        public Task<User> GetUserByName(string value);
    }
}
