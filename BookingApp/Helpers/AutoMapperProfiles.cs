using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using AutoMapper;
using BookingApp.models;
using Microsoft.AspNetCore.Identity;

namespace BookingApp.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RegisterModel, ApplicationUser>();
            CreateMap<ApplicationUser, IdentityUser<int>>();

        }
    }
}