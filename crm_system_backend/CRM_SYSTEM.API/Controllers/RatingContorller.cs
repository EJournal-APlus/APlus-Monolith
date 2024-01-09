using CRM_SYSTEM.BLL.Interfaces;
using CRM_SYSTEM.BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRM_SYSTEM.API.Controllers
{
    [ApiController]
    [Route("api/rating")]
    public class RatingContorller : ControllerBase
    {
        private readonly IRatingService _ratingService;
        public RatingContorller(IRatingService ratingService)
        {
            _ratingService = ratingService;
        }

        [HttpGet]
        [Route("/userrating")]
        public ActionResult GetUserRating(int userId)
        {
            return Ok(_ratingService.GetUserRatingAsync(userId));
        }
    }
}
