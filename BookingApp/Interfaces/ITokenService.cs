using System.Threading.Tasks;
using API.Entities;

namespace BookingApp.Interfaces
{
    public interface ITokenService
    {
        
                Task<string> CreateToken(ApplicationUser user);

    }
}