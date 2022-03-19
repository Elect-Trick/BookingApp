using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using BookingApp.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookingApp.Services
{
    public class UrlFormatter : IUrlFormatter
    {
        public  ActionResult<string> ConvertTextUrlToLink(string url)
        {
            string regex = @"((www\.|(http|https|ftp|news|file)+\:\/\/)[_.a-z0-9-]+\.
   [a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])";

            Regex r =  new Regex(regex, RegexOptions.IgnoreCase);
            return r.Replace(url, "a href=\"$1\" title=\"Click here to open in a new window or tab\" target =\"_blank\">$1</a>").Replace("href=\"www", "href=\"http://www");
        }
    }
}