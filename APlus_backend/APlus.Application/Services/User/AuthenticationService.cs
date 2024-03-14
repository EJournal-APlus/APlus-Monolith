using APlus.Domain.Data;
using APlus.Domain.Entities;
using APlus.Domain.Interfaces.User;
using APlus.Domain.Models.Sign;
using APlus.Domain.Models.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace APlus.Application.Services.User
{
    public class AuthenticationService(ApplicationDbContext context, IConfiguration configuration) : IAuthenticationService
    {
        private readonly ApplicationDbContext _context = context;
        private readonly IConfiguration _configuration = configuration;
        public async Task<UserModel> AuthenticateAsync(SignInModel signInModel)
        {
            var userCredentials = await _context.UserCredentials.FirstOrDefaultAsync(u => u.Username.ToLower() == signInModel.Username.ToLower()
                && u.Password == HashPassword(signInModel.Password));
            if (userCredentials == null) return null;
            var role = await _context.Roles.FirstOrDefaultAsync(r => r.Id == userCredentials.RoleId);
            return new UserModel() { Username = userCredentials.Username, Role = role.Name};
        }

        public string GenerateToken(UserModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
            };

            var token = new JwtSecurityToken(_configuration["JwtSettings:ValidIssuer"],
                _configuration["JwtSettings:ValidAudience"],
                claims,
                expires: DateTime.Now.AddMinutes(10),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            var hash = BitConverter.ToString(hashBytes).Replace("-,", "").ToLower();
            return hash;
        }

        public async Task<string> SignInAsync(SignInModel signIn)
        {
            var user = await AuthenticateAsync(signIn);
            if (user == null) return null;
            var token = GenerateToken(user);
            return token;
        }

        public async Task<bool> SignUpAsync(SignUpModel signUp)
        {
            var hasUser = await _context.UserCredentials.FirstOrDefaultAsync(u => u.Username.ToLower() == signUp.Username.ToLower());
            var role = await _context.Roles.FirstOrDefaultAsync(r => r.Name.ToLower().Equals("User".ToLower()));
            if (hasUser != null) throw new Exception("Пользователь существует");
            var userModel = new UserCredentials()
            {
                Username = signUp.Username,
                Password = HashPassword(signUp.Password),
                Email = signUp.Email,
                RoleId = role.Id
            };
            _context.UserCredentials.Add(userModel);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
