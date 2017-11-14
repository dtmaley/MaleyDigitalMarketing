using System.Collections.Generic;
using System.Linq;

namespace KenticoCloudBase
{
    public class IpSecuritySettings
    {
        public string AllowedIPs { get; set; }
        public List<string> AllowedIPsList
        {
            get { return !string.IsNullOrEmpty(AllowedIPs) ? AllowedIPs.Split(',').ToList() : new List<string>(); }
        }
    }
}
