using CRM_SYSTEM.DAL.ViewModels;

namespace CRM_SYSTEM.BLL.Interfaces
{
    public interface IRatingService
    {
        public RatingViewModel GetUserRatingAsync(int userId);
    }
}
