using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BookingApp.Interfaces
{
    public interface IUrlFormatter
    {
         ActionResult<string> ConvertTextUrlToLink(string url) ;
       
    }
}