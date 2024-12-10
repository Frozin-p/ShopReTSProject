using System.ComponentModel.DataAnnotations;

namespace AuthorizationService.Models
{
    public class UserDto
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}