using KenticoCloud.Delivery;

namespace MDM.Configurations
{
    public class ProjectOptions
    {
        public DeliveryOptions DeliveryOptions { get; set; }
        public int CacheTimeoutSeconds { get; set; }
    }
}
