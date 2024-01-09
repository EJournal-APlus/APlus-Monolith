using CRM_SYSTEM.DAL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRM_SYSTEM.DAL.Interfaces
{
    public interface IRatingRepostitory
    {
        public RatingViewModel GetUserRatingAsync(int  userId);
    }
}
