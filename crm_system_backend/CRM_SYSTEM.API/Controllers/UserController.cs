using CRM_SYSTEM.BLL.Interfaces;
using CRM_SYSTEM.DAL.Data;
using CRM_SYSTEM.DAL.Helpers;
using CRM_SYSTEM.DAL.Models;
using CRM_SYSTEM.DAL.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace CRM_SYSTEM.API.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ValidateHelper _validate;
        public UserController(IUserService userService, ValidateHelper validate)
        {
            _userService = userService;
            _validate = validate;
        }

        [HttpGet("value")]
        public async Task<IActionResult> GetByName(string value) =>
            Ok(await _userService.GetUserByName(value));

        [Route("/getall")]
        [HttpGet]
        public async Task<IActionResult> GetAll() =>
            Ok(await _userService.GetAllUserAsync());

        [Route("/getcount")]
        [HttpGet]
        public ActionResult GetCount() =>
            Ok(_userService.GetUserCount());

        [Route("/register")]
        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            await _userService.CreateUser(user);
            return Ok("Регистрация прошла успешно");
        }

        [HttpPost]
        [Route("/login")]
        public async Task<IActionResult> UserLogin([FromBody] LoginViewModel model)
        {
            var user = await _validate.ValidateUser(model.Email, model.Password);
            if (user == null) throw new ArgumentException("Error");
            else
            {
                var token = JwtData.GenerateToken(model.Email);
                return Ok(new { token });
            }
        }

        [HttpGet]
        [Route("/authuser")]
        public IActionResult Auth(string token) =>
            Ok(_userService.AuthUser(token));

        [HttpGet]
        [Route("/getavatar")]
        public IActionResult GetImage(string email)
        {
            var imagePath = $@"D:\crm_system\crm_system_backend\CRM_SYSTEM.DAL\Images\UserAvatar\{email}.jpg";
            var imageBytes = System.IO.File.ReadAllBytes(imagePath);
            return File(imageBytes, "image/jpeg");
        }
    }
}
