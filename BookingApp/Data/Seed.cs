using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        // Replace the DataContext with the UserManager since we've added Identity
        public static async Task SeedUsers(UserManager<ApplicationUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;


            var userData = await System.IO.File.ReadAllTextAsync("./Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<ApplicationUser>>(userData);
            var roles = new List<AppRole>{

                new AppRole{Name="Member",Id=1},
                new AppRole{Name="Admin",Id=2},
                new AppRole{Name="Moderator",Id=3},
            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }

            foreach (var user in users)
            {
                // using var hmac = new HMACSHA512();
                user.UserName = user.UserName.ToLower();
                // user.PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes("Catlove"));
                // user.PasswordSalt = hmac.Key;

                // Creates user
                await userManager.CreateAsync(user, "Catlove");
                await userManager.AddToRoleAsync(user, "Member");



            }
            var admin = new ApplicationUser
            {
                UserName = "admin"
            };
            await userManager.CreateAsync(admin, "Catlove");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" });




        }
    }
}