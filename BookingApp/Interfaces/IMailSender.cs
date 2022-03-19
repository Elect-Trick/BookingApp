
using System;
using System.Threading.Tasks;
using API.Entities;
using BookingApp.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace BookingApp.Interfaces
{
    public interface IMailSender
    {
        public Task SendEmailAsync(string recepient, string subject, string content);
    }
    public class SendGridService : IMailSender
    {
        private readonly IConfiguration _configuration;
        public SendGridService(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        public async Task SendEmailAsync(string recepient, string subject, string content)
        {
             var apiKey = _configuration["SendGrid_Key"];
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("admin@royalteas.co.za", "Admin");
            var to = new EmailAddress(recepient, "Example User");
            var msg = MailHelper.CreateSingleEmail(from, to, subject, content,content);
            var response = await client.SendEmailAsync(msg);
        }

  
    }
}