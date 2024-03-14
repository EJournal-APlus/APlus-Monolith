using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APlus.Domain.Constants
{
    public class AccessRoles
    {
        public const string Admin = "Admin";
        public const string Director = "Director";
        public const string Teacher = "Teacher";
        public const string User = "User";
        public const string Everyone = "Admin, Director, Teacher, User";
        public const string InstitutionStaff = "Director, Teacher";
    }
}
