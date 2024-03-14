using System.ComponentModel.DataAnnotations;

namespace APlus.Domain.Models.Sign
{
    public class SignInModel
    {
        [Required(ErrorMessage = "Нужно ввести имя пользователя")]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Нужно ввести пароль!")]
        public string? Password { get; set; }
    }
}
