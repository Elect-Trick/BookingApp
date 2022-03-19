using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using API.Entities;

namespace BookingApp.Data
{
    public class DataContext : IdentityDbContext<ApplicationUser, AppRole, int>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        // public DbSet<ApplicationUser> ApplicationUser { get; set; }

    }

}