
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppRole: IdentityRole<int>
    {
        public AppRole()
        {
        }

        // We need to get a list of roles the user is in, many to many.
        // Each user can have multiple roles 
        public ICollection<UserRole> UserRoles { get; set; }
    }
}