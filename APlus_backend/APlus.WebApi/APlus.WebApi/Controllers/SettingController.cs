using APlus.Domain.Interfaces.User;
using APlus.Domain.Models.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using APlus.Domain.Constants;

namespace APlus.WebApi.Controllers
{
    [ApiController]
    [Route("/api/settings/")]
    public class SettingController(ISettingService settingService) : ControllerBase
    {
        private readonly ISettingService _settingService = settingService;

        [HttpGet("public")]
        public IActionResult Test() =>
            Ok(_settingService.TestMethod());

        [HttpGet("admin")]
        [Authorize(Roles = AccessRoles.Admin)]
        public IActionResult Admins()
        {
            var currentUser = GetCurrentUser();

            return Ok($"Hi, you {currentUser.Username}, Role: {currentUser.Role}");
        }

        [HttpGet]
        public UserModel GetCurrentUser()
        {
            ClaimsIdentity? identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;

                return new UserModel()
                {
                    Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
                    Role = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value
                };
            }
            return null;
        }
    }
}
