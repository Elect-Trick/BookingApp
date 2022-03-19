

using System.Threading.Tasks;

namespace BookingApp.Interfaces
{
    public interface MailSender
    {
        public Task SendEmailAsync(string recipient, string subject, string content);
    }
}