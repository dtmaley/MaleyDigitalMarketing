using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;

namespace KenticoCloudBase
{
    public class IpRestrictionMiddleware
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(typeof(IpRestrictionMiddleware));

        public readonly RequestDelegate Next;
        public readonly IpSecuritySettings IpSecuritySettings;

        public IpRestrictionMiddleware(RequestDelegate next, IOptions<IpSecuritySettings> ipSecuritySettings)
        {
            Next = next;
            IpSecuritySettings = ipSecuritySettings.Value;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Path.Value.Contains("/api/"))
            {
                var ipAddress = (string)context.Connection.RemoteIpAddress?.ToString();
                if (!IpSecuritySettings.AllowedIPsList.Contains(ipAddress))
                {
                    log.Error($"Request from Invalid IP Address: { ipAddress }");
                    context.Response.StatusCode = 403;
                    return;
                }
            }

            await Next(context);
        }
    }
}
