using CRM_SYSTEM.BLL.Interfaces;
using CRM_SYSTEM.DAL.Interfaces;
using CRM_SYSTEM.DAL.ViewModels;

namespace CRM_SYSTEM.BLL.Services
{
    public class RatingService : IRatingService
    {
        private readonly IRatingRepostitory _ratingRepository;
        public RatingService(IRatingRepostitory ratingRepostitory)
        {
            _ratingRepository = ratingRepostitory;
        }
        public RatingViewModel GetUserRatingAsync(int userId)
        {
            return _ratingRepository.GetUserRatingAsync(userId);
        }
    }
}
