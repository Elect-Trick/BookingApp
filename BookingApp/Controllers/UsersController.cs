using System.Text.RegularExpressions;
using System.Threading.Tasks;
using API.Entities;
using AutoMapper;
using BookingApp.Interfaces;
using BookingApp.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BookingApp.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public SignInManager<ApplicationUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMailSender _mailSender;
        private readonly IMapper _mapper;
        public UsersController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ITokenService tokenService, IMailSender mailSender, IMapper mapper)
        {
            _mapper = mapper;
            _mailSender = mailSender;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpPost("login")]
        public async Task<ActionResult<UserModel>> login([FromBody] LoginModel loginModel)
        {
            loginModel.UserName = loginModel.UserName.ToLower();
            var user = await _userManager.FindByNameAsync(loginModel.UserName);
            if (user == null)
            {
                return BadRequest("User not found");

            }
            var loginResult = await _signInManager.CheckPasswordSignInAsync(user, loginModel.Password, false);
            if (!loginResult.Succeeded)
            {
                return Unauthorized(loginResult);
            }

            return new UserModel
            {
                UserName = loginModel.UserName,
                Gender = user.Gender,
                LastActive = user.LastActive,
                Country = user.Country,
                Token = await _tokenService.CreateToken(user)
            };
        }
        [HttpPost("register")]
        public async Task<ActionResult<RegisterModel>> Register([FromBody] RegisterModel registerModel)
        {
            var user = await _userManager.FindByEmailAsync(registerModel.EMail);
            if (user != null)
            {
                // User exists
                return BadRequest("E-mail Already exists, try resetting your password");
            }
            user = _mapper.Map<ApplicationUser>(registerModel);
            var result = await _userManager.CreateAsync(user, registerModel.Password);
            if (result.Succeeded)
            {
                var _token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                // "Users" is the controller
                var confirmationLink = Url.Action("ValidateEmail", "Users", new { email = registerModel.EMail, token = _token }, Request.Scheme);
                await _mailSender.SendEmailAsync(registerModel.EMail, "E-mail Verification", confirmationLink);
                if (_token == null || confirmationLink == null)
                {
                    return BadRequest("Could not complete the reuquest");
                }
                return new RegisterModel
                {
                    UserName = user.UserName,
                    EMail = user.Email
                };

            }
            return BadRequest("Failed to register, check the supplied information");
        }
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> ValidateEmail([FromQuery] string email, string token)
        {
            if (email == null || token == null)
            {
                return BadRequest("Token or Email is not found");
            }
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return BadRequest("User not found");
            }
            var result = await _userManager.ConfirmEmailAsync(user, token);
            if (result.Succeeded)
            {
                return Ok("Your email has been Verified, You can close this page and login");
            }
            return BadRequest(result.Errors);
        }
        [HttpPost("reset")]
        public async Task<ActionResult> ResetPassword([FromBody] ResetModel resetModel)
        {
            var user = await _userManager.FindByEmailAsync(resetModel.Email);
            if (user == null)
            {
                return BadRequest("User was not found");
            }
            if (resetModel.Password != resetModel.ConfirmPassword)
            {
                return BadRequest("Passwords do not match");
            }
            var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            var confirmationLink = Url.Action("ValidateResetToken", "Users", new { email = user.Email, token = resetToken, newPassword = resetModel.ConfirmPassword }, Request.Scheme);
            await _mailSender.SendEmailAsync(resetModel.Email, "Password Reset", $"Please click on the link below to finalize your password change \n {confirmationLink}");
            return Ok();
        }
        [HttpGet("get-token")]
        [AllowAnonymous]
        public async Task<ActionResult<string>> ValidateResetToken([FromQuery] string email, string token, string newPassword)
        {

            if (email == null || token == null)
            {
                return BadRequest("Email does not exist");
            }
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                await _userManager.ResetPasswordAsync(user, token, newPassword);
                return Ok("Success, Your Password has been changed. Close this page and Log in");
            }
            return BadRequest("Could not reset your password");
        }
    }
}

