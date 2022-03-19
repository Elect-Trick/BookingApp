using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingApp.models
{
    public class RegisterModel
    {
        public string UserName { get; set; }
        
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string EMail { get; set; }
    }
}