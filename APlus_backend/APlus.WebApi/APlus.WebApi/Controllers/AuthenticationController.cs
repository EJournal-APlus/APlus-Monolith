using APlus.Domain.Interfaces.User;
using APlus.Domain.Models.Sign;
using Microsoft.AspNetCore.Mvc;

namespace APlus.WebApi.Controllers
{
    [ApiController]
    [Route("/api/users/")]
    public class AuthenticationController(IAuthenticationService authenticationService) : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService = authenticationService;

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(SignInModel signInModel)
        {
            var auth = await _authenticationService.SignInAsync(signInModel);
            if (auth == null) return BadRequest(new Domain.Models.Responce() { Message = "Пользователь не найден", Status = 404});
            return Ok(auth);
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(SignUpModel signUpModel) =>
            Ok(await _authenticationService.SignUpAsync(signUpModel));
    }
}
