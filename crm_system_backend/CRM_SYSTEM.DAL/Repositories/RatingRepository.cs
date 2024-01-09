using CRM_SYSTEM.DAL.Data;
using CRM_SYSTEM.DAL.Interfaces;
using CRM_SYSTEM.DAL.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace CRM_SYSTEM.DAL.Repositories
{
    public class RatingRepository : IRatingRepostitory
    {
        private readonly ApplicationContext _context;
        public RatingRepository(ApplicationContext context)
        {
            _context = context;
        }
        public RatingViewModel GetUserRatingAsync(int userId)
        {
            var TotalTwosMath = _context.Ratings
                .Where(r => r.UserId == userId && r.Grade == 2)
                .Count();
            var totalThreesMath = _context.Ratings
                .Where(r => r.UserId == userId && r.Grade == 3)
                .Count();
            var totalFoursMath = _context.Ratings
                .Where(r => r.UserId == userId && r.Grade == 4)
                .Count();
            var totalFivesMath = _context.Ratings
                .Where(r => r.UserId == userId && r.Grade == 5)
                .Count();

            var ratingModel = new RatingViewModel()
            {
                NumberOfTwos = TotalTwosMath,
                NumberOfTriplets = totalThreesMath,
                NumberOfFours = totalFoursMath,
                NumberOfFives = totalFivesMath
            };
            return ratingModel;
        }
    }
}
