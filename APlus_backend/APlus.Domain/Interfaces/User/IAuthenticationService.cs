using APlus.Domain.Models.Sign;
using APlus.Domain.Models.User;

namespace APlus.Domain.Interfaces.User
{
    public interface IAuthenticationService
    {
        public Task<bool> SignUpAsync(SignUpModel signUp);
        public Task<string> SignInAsync(SignInModel signIn);
        public Task<UserModel> AuthenticateAsync(SignInModel signInModel);
        public string GenerateToken(UserModel user);
        public string HashPassword(string password);
    }
}
