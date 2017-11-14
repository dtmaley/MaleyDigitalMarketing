using KenticoCloud.Delivery;
using Microsoft.AspNetCore.Mvc;

namespace KenticoCloudBase.Controllers
{
    public class BaseController : Controller
    {
        public BaseController(IDeliveryClient deliveryClient)
        {
            DeliveryClient = deliveryClient;
        }

        protected IDeliveryClient DeliveryClient { get; }
    }
}
