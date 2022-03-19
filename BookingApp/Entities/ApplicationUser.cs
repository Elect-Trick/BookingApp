using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace API.Entities
{
    [Table("Users")]

    public class ApplicationUser : IdentityUser<int>
    {
        public ApplicationUser()
        {
        }

        // IdentityUser already implements the ID,username and Password hash 
        // public int Id { get; set; }
        //     // Keep it simple, ID will be used for auto incrementation and Primary Key in our DB
        //     public string UserName { get; set; }
        //     public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTimeOffset ProfileRegistered { get; set; } = DateTimeOffset.UtcNow;
        public DateTimeOffset LastActive { get; set; }
        public string Gender { get; set; }
        public string Country { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }







    }
}


