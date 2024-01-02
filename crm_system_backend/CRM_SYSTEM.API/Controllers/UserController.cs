using CRM_SYSTEM.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM_SYSTEM.API.Controllers
{
    [ApiController]
    [Route("api/crm")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("value")]
        public async Task<IActionResult> GetByName(string value) =>
            Ok(await _userService.GetUserByName(value));
        [HttpGet] 
        public async Task<IActionResult> GetAll() => 
            Ok(await _userService.GetAllUserAsync());
    }
}
